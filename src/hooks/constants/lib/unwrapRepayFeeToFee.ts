import { ApiPromise } from '@polkadot/api';
import { Fee } from '../../../generated/graphql';

export const repayFeeDataType = '(u32, u32)';

export const unwrapRepayFeeToFee = (apiInstance: ApiPromise): Fee => {
  const apiRepayFee = apiInstance
    .createType(repayFeeDataType, apiInstance.consts.lbp.repayFee)
    .toHuman() as Array<string>;

  return {
    numerator: apiRepayFee[0],
    denominator: apiRepayFee[1],
  };
};
