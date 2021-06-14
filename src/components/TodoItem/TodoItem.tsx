import React from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "atoms";
import * as Types from "types";
import {
  Button,
  Card,
  Checkbox,
  Icon,
  Stack,
  TextField,
} from "@shopify/polaris";
import { DeleteMajor } from "@shopify/polaris-icons";

interface Props {
  item: Types.TodoItem;
}

const TodoItem = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (value: string) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
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
    <Card sectioned>
      <Stack alignment="center">
        <TextField
          label=""
          labelHidden
          value={item.text}
          onChange={editItemText}
        />
        <Checkbox
          label="Basic checkbox"
          labelHidden
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <Button
          destructive
          icon={DeleteMajor}
          size="slim"
          onClick={deleteItem}
        />
      </Stack>
    </Card>
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
