import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, TextField, Stack } from "@shopify/polaris";

import { todoListItemWithId, todoListState } from "atoms";
import { generateId } from "utilities";
import _ from "lodash";

const TodoCreator = () => {
  const id = _.memoize(() => generateId());
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const setTodoItem = useSetRecoilState(todoListItemWithId(id()));

  const addItem = () => {
    setTodoItem((item) => ({ ...item, text: inputValue }));
    setTodoList((oldTodoList) => [...oldTodoList, id()]);
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
