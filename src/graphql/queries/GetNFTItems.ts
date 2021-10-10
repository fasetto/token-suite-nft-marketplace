import { gql } from "@apollo/client";

export const GET_NFT_ITEMS = gql`
  query GetNFTItems($first: Int, $skip: Int) {
    cardEntities(first: $first, skip: $skip) {
      id
      name
      image
      weight
      category {
        name
      }
    }
  }
`;

export type NFTItem = {
  id: string;
  name: string;
  weight: string;
  image: string;
  category: {
    name: string;
  };
};

export type NFTItemData = {
  cardEntities: NFTItem[];
};
