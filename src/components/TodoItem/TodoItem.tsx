import React from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "atoms";
import * as Types from "types";

interface Props {
  item: Types.TodoItem;
}

const TodoItem = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.currentTarget.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };
  return (
    <>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </>
  );
};

function replaceItemAtIndex(
  arr: Types.TodoItem[],
  index: number,
  newValue: Types.TodoItem
): Types.TodoItem[] {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(
  arr: Types.TodoItem[],
  index: number
): Types.TodoItem[] {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
