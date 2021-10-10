import React from "react";
import dynamic from "next/dynamic";

import { Button, NextImage } from "@/components";
import { formatNumber } from "@/utils";
import { NFTIcon } from "@/icons";

const Skeleton = dynamic(
  () => import("./Skeleton").then(mod => mod.Skeleton) as any,
  {
    ssr: false,
  }
);

type Props = {
  name: string;
  image: string;
  category: string;
  power: string;
  ethPrice: number;
  usdPrice: number;
};

interface NFTItemType extends React.FC<Props> {
  Skeleton: () => JSX.Element;
}

const NFTItem: NFTItemType = props => {
  return (
    <div className="nft-item">
      <div className="image">
        <NextImage src={props.image} alt="NFT item" layout="fill" />
      </div>

      <div className="wrapper">
        <div className="info">
          <div className="name">{props.name}</div>
          <NFTIcon />
        </div>

        <div className="category-info">
          <div className="category">{`${props.name} Onyx Seeds`}</div>
          <div className="power">{props.power}</div>

          <div className="label">category</div>
          <div className="label power-label">power</div>
        </div>

        <div className="price-info">
          <div className="eth">{`${formatNumber(props.ethPrice)} ETH`}</div>
          <div className="usd">{`${formatNumber(props.usdPrice)} USD`}</div>
        </div>

        <div className="actions">
          <Button
            appearance="primary"
            // Only for testing disabled state of the button
            isDisabled={Math.floor(Math.random() * 5) === 3}
          >
            Buy Now
          </Button>
          <Button appearance="outline">View Info</Button>
        </div>
      </div>
    </div>
  );
};

NFTItem.Skeleton = Skeleton as any;

export default NFTItem;
