import React from "react";
import Head from "next/head";

import { Heading, NextImage, NFTItem } from "@/components";
import { useCategories, useNFTItems } from "@/hooks";

export default function Home() {
  const { data, loading } = useNFTItems();
  const { data: categoryData } = useCategories();

  console.log(data?.cardEntities);

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

        <div className="nft-items">
          {!loading &&
            data?.cardEntities.map(item => (
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
    </>
  );
}
