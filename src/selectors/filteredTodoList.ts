import { selector } from "recoil";

import { todoListState, todoListFilterState, todoListItemWithId } from "atoms";
import * as Types from "types";

const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case Types.TodoListFilter.Completed:
        return list.filter((id) => get(todoListItemWithId(id)).isComplete);
      case Types.TodoListFilter.Incomplete:
        return list.filter((id) => !get(todoListItemWithId(id)).isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoList;
