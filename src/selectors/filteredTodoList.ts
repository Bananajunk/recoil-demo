import { selector } from "recoil";

import { todoListState, todoListFilterState } from "atoms";
import * as Types from "types";

const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case Types.TodoListFilter.Completed:
        return list.filter((item) => item.isComplete);
      case Types.TodoListFilter.Incomplete:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoList;
