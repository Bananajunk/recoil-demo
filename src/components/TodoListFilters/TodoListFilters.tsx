import React from "react";
import { useRecoilState } from "recoil";

import { todoListFilterState } from "atoms";
import * as Types from "types";
import { Select } from "@shopify/polaris";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleSelectChange = (value: string) =>
    setFilter(value as Types.TodoListFilter);

  return (
    <Select
      label="Filter"
      labelInline
      options={[
        { label: Types.TodoListFilter.All, value: Types.TodoListFilter.All },
        {
          label: Types.TodoListFilter.Completed,
          value: Types.TodoListFilter.Completed,
        },
        {
          label: Types.TodoListFilter.Incomplete,
          value: Types.TodoListFilter.Incomplete,
        },
      ]}
      value={filter}
      onChange={handleSelectChange}
    />
  );
};

export default TodoListFilters;
