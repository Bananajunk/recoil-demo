import React from "react";
import { useRecoilState } from "recoil";

import { todoListFilterState } from "atoms";
import * as Types from "types";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as Types.TodoListFilter);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={Types.TodoListFilter.All}>
          {Types.TodoListFilter.All}
        </option>
        <option value={Types.TodoListFilter.Completed}>
          {Types.TodoListFilter.Completed}
        </option>
        <option value={Types.TodoListFilter.Incomplete}>
          {Types.TodoListFilter.Incomplete}
        </option>
      </select>
    </>
  );
};

export default TodoListFilters;
