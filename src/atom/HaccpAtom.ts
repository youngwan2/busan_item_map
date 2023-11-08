import { atom } from "recoil";
import { ItemsType } from "../pages/Haccp/types/Haccp.types";

export const HaccpData = atom<ItemsType[]>({
  key: "HaccpData",
  default: [],
});
