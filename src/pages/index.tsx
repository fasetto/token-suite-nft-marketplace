import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Heading, NextImage, NFTItem, Selectbox } from "@/components";
import { NFTItem as NFTItemType } from "@/graphql/queries";
import { useCategories, useNFTItems } from "@/hooks";

export default function Home() {
  const { data, loading } = useNFTItems();
  const { data: categoryData } = useCategories();

  const [nftItems, dispatchNFTItems] = useState<NFTItemType[]>();
  const [selectedCategory, dispatchSelectedCategory] = useState<string>();

  useEffect(() => {
    let filteredItems = data?.cardEntities.filter(
      x => x.category.name === selectedCategory
    );

    if (!selectedCategory || selectedCategory === "category")
      filteredItems = data?.cardEntities;

    dispatchNFTItems(filteredItems);
  }, [selectedCategory, data?.cardEntities]);

  return (
    <>
      <Head>
        <title>NFT Marketplace &ndash; TokenSuite</title>
      </Head>

      <div className="homepage">
        <div className="homepage__logo">
          <NextImage
            src="/logo.svg"
            layout="fill"
            alt="TokenSuite logo"
            priority
          />
        </div>

        <Heading as="h1" className="homepage__title">
          NFT Marketplace
        </Heading>

        <div className="homepage__wrapper">
          <div className="homepage__filter-dropdown">
            <label>
              <span>Filter by:</span>
              <Selectbox
                items={categoryData?.categoryEntities.map(x => x.name)}
                onChange={e => dispatchSelectedCategory(e.target.value)}
              />
            </label>
          </div>

          <div className="homepage__nft-items">
            {!loading &&
              nftItems?.map(item => (
                <NFTItem
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  category={item.category.name}
                  power={item.weight}
                  ethPrice={0}
                  usdPrice={0}
                />
              ))}

            {loading &&
              Array.from({ length: 9 }).map((_, i) => (
                <NFTItem.Skeleton key={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
