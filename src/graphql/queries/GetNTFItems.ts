import { gql } from "@apollo/client";

export const GET_NTF_ITEMS = gql`
  query GetNTFItems($first: Int, $skip: Int) {
    cardEntities(first: $first, skip: $skip) {
      id
      name
      weight
      category {
        name
      }
    }
  }
`;

export type NTFItem = {
  id: string;
  name: string;
  weigth: string;
  category: {
    name: string;
  };
};

export type NTFItemData = {
  cardEntities: NTFItem[];
};
