import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { GET_ACTIVE_ACCOUNT } from '../queries/useGetActiveAccountQuery';

export const SET_ACTIVE_ACCOUNT = loader('./../graphql/SetActiveAccount.mutation.graphql');

export interface SetActiveAccountMutationVariables {
    id: string | undefined
}

export const useSetActiveAccountMutation = (variables: SetActiveAccountMutationVariables) => useMutation<void, SetActiveAccountMutationVariables>(
    SET_ACTIVE_ACCOUNT,
    {
        variables,
        refetchQueries: [
            GET_ACTIVE_ACCOUNT
        ]
    }
)