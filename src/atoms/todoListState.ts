import { atom } from "recoil";
import * as Types from "types";

const todoListState = atom({
  key: "todoListState", // must be unique across all atoms + selectors
  default: [] as Types.TodoItem[],
});

export default todoListState;
