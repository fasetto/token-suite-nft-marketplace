import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories($first: Int, $skip: Int) {
    categoryEntities {
      id
      name
      weight
    }
  }
`;

export type Category = {
  id: string;
  name: string;
  weight: string;
};

export type CategoryData = {
  categoryEntities: Category[];
};
