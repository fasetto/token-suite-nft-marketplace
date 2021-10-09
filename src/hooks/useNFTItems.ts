import { useQuery } from "@apollo/client";
import { GET_NFT_ITEMS, NFTItemData, QueryVars } from "@/graphql/queries";

export const useNFTItems = (options?: QueryVars) => {
  const { data, loading, error } = useQuery<NFTItemData, QueryVars>(
    GET_NFT_ITEMS,
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
