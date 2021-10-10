import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, CategoryData, QueryVars } from "@/graphql/queries";

export const useCategories = (options?: QueryVars) => {
  const { data, loading, error } = useQuery<CategoryData, QueryVars>(
    GET_CATEGORIES,
    {
      variables: options ?? { first: 20 },
    }
  );

  return {
    data,
    loading,
    error,
  };
};
