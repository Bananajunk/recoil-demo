import React from "react";
import { useRecoilValue } from "recoil";

import { filteredTodoList } from "selectors";
import { TodoItem, TodoCreator, TodoListFilters } from "components";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoList);

  return (
    <>
      <TodoCreator />
      <TodoListFilters />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
