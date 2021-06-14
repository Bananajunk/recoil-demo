import React from "react";
import { useRecoilValue } from "recoil";

import { todoListState } from "atoms";
import { TodoItem, TodoCreator } from "components";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
