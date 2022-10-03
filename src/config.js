import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x2B7810d43ffE6D83422440b63dc2F10e97c51ACA"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/QLsDZ-dmXRBW3xuEkoF0lrsOqZycXvxW",
  },
};