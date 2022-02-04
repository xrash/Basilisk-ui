import { useActiveAccountQueryResolver } from './query/activeAccount';
import { useGetAccountsQueryResolver } from './query/getAccounts';
import { useSetActiveAccountMutationResolver } from './mutation/setActiveAccount';
import { Resolver } from '@apollo/client';
import { useEffect, useRef } from 'react';
import log from 'loglevel';

/**
 * Used to resolve queries for the `Accounts` (or `selectedAccount`) entity.
 */
export const useAccountsResolvers = () => {
  const getAccountsQueryResolver = useGetAccountsQueryResolver();
  const getActiveAccountQueryResolver = useActiveAccountQueryResolver();
  const setActiveAccountMutationResolver =
    useSetActiveAccountMutationResolver();

  return {
    Query: {
      ...getAccountsQueryResolver,
      ...getActiveAccountQueryResolver,
    },
    Mutation: {
      ...setActiveAccountMutationResolver,
    },
  };
};

/**
 * Updates the resolver fn ref each time the given resolver fn changes.
 *
 * This is necessary to reflect changes made to functions within hooks
 * within the Apollo resolvers configuration.
 *
 * TODO//
 */
export const useResolverToRef = (resolver: Resolver, name?: string) => {
  const resolverRef = useRef(resolver);
  // when the resolver changes, update the ref
  useEffect(() => {
    resolverRef.current = resolver;
  }, [resolver]);

  return function resolverFromRef() {
    // TODO is there a better way to debug resolvers? Since the function name
    // is not visible in the apollo error
    log.debug('Running resolver', name);
    // execute the wrapper resolver ref, with the given arguments from Apollo
    return resolverRef.current.apply(undefined, arguments as any);
  };
};
