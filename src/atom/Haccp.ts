import { atom } from "recoil";
import { ItemsType } from "../components/page/HccpSearch";

export const HaccpData = atom<ItemsType[]>({
  key: "HaccpData",
  default: [],
});
