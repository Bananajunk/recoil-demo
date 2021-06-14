import { atom } from "recoil";

const todoListState = atom({
  key: "todoListState", // must be unique across all atoms + selectors
  default: [] as string[],
});

export default todoListState;
