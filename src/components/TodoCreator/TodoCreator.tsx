import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, TextField, Stack } from "@shopify/polaris";

import { todoListState } from "atoms";
import { generateId } from "utilities";

const TodoCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: generateId() as string,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Stack>
      <TextField
        label="Add Item"
        value={inputValue}
        onChange={onChange}
        labelHidden
      />
      <Button primary onClick={addItem}>
        Add
      </Button>
    </Stack>
  );
};

export default TodoCreator;
