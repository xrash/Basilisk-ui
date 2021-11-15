import { ApolloCache, NormalizedCacheObject } from '@apollo/client';
import { useCallback } from 'react'
import { useResolverToRef } from '../accounts/useAccountsMutationResolvers'
import { GetActiveAccountQueryResponse, GET_ACTIVE_ACCOUNT } from '../accounts/useGetActiveAccountQuery';
import { usePolkadotJsContext } from '../polkadotJs/usePolkadotJs';
import { usePersistentConfig } from './usePersistentConfig';

export const accountCurrencyMapDataType = 'Option<u32>';

export const __typename = 'Config';
export const id = __typename;

export const nativeAssetId = '0';

export const useConfigQueryResolvers = () => {
    const [persistedConfig] = usePersistentConfig();
    const { apiInstance, loading } = usePolkadotJsContext();

    const config = useResolverToRef(
        useCallback(async (
            _obj,
            _variables,
            { cache }: { cache: ApolloCache<NormalizedCacheObject> }
        ) => {
            if (!apiInstance || loading) return;

            // TODO: evict config from the cache after active account changes
            const address = cache.readQuery<GetActiveAccountQueryResponse>({
                query: GET_ACTIVE_ACCOUNT
            })?.account?.id;

            let feePaymentAsset =  address
                ? apiInstance.createType(
                    accountCurrencyMapDataType,
                    await apiInstance.query.multiTransactionPayment.accountCurrencyMap(address)
                )?.toHuman()
                : null

            feePaymentAsset = feePaymentAsset ? feePaymentAsset : nativeAssetId
            
            return {
                __typename,
                id,
                ...persistedConfig,
                feePaymentAsset
            };
        }, [apiInstance, loading])
    );

    return {
        config
    }
}