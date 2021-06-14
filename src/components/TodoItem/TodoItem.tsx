import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Button, Card, Checkbox, Stack, TextField } from "@shopify/polaris";
import { DeleteMajor } from "@shopify/polaris-icons";

import { todoListItemWithId, todoListState } from "atoms";
interface Props {
  id: string;
}

const TodoItem = ({ id }: Props) => {
  const [item, setItem] = useRecoilState(todoListItemWithId(id));
  const setTodoList = useSetRecoilState(todoListState);

  const editItemText = (value: string) => {
    setItem((item) => ({ ...item, text: value }));
  };

  const toggleItemCompletion = () => {
    setItem((item) => ({ ...item, isComplete: !item.isComplete }));
  };

  const deleteItem = () => {
    setTodoList((list) => list.filter((listId) => listId !== id));
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

export default TodoItem;
