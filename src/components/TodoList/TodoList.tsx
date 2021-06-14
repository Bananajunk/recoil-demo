import React from "react";
import { useRecoilValue } from "recoil";
import { Card, Layout, Stack } from "@shopify/polaris";

import { filteredTodoList } from "selectors";
import { TodoItem, TodoCreator, TodoListFilters } from "components";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoList);

  return (
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <Stack>
            <TodoCreator />
            <TodoListFilters />
          </Stack>
        </Card>
      </Layout.Section>
      <Layout.Section>
        <Stack>
          {todoList.map((id) => (
            <TodoItem key={id} id={id} />
          ))}
        </Stack>
      </Layout.Section>
    </Layout>
  );
};

export default TodoList;
