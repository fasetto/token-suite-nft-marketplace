import { useQuery } from "@apollo/client";
import { GET_NTF_ITEMS, NTFItemData, QueryVars } from "@/graphql/queries";

export const useNTFItems = (options?: QueryVars) => {
  const { data, loading, error } = useQuery<NTFItemData, QueryVars>(
    GET_NTF_ITEMS,
    {
      variables: options ?? { first: 6, skip: 1 },
    }
  );

  return {
    data,
    loading,
    error,
  };
};
