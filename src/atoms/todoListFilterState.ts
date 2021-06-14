import { atom } from "recoil";
import * as Types from "types";

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: Types.TodoListFilter.All as Types.TodoListFilter,
});

export default todoListFilterState;
