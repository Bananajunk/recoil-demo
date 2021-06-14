import React, { useCallback, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Card, Layout, Stack } from "@shopify/polaris";

import { dragManagerState } from "atoms";
import { filteredTodoList } from "selectors";
import { TodoItem, TodoCreator, TodoListFilters } from "components";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoList);
  const [dragManager, updateDragManager] = useRecoilState(dragManagerState);

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (dragManager.isDragging) {
        updateDragManager((dragManager) => ({
          ...dragManager,
          cursor: { x: event.pageX, y: event.pageY },
        }));
      }
    },
    [dragManager.isDragging, updateDragManager]
  );

  const toggleDragging = useCallback(() => {
    updateDragManager((dragManager) => ({
      ...dragManager,
      isDragging: !dragManager.isDragging,
    }));
  }, [updateDragManager]);

  useEffect(() => {
    if (dragManager.isDragging) {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", toggleDragging);
    } else {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", toggleDragging);
    }
  }, [dragManager.isDragging, handleDrag, toggleDragging]);

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
        {todoList.map((id) => (
          <TodoItem key={id} id={id} />
        ))}
      </Layout.Section>
    </Layout>
  );
};

export default TodoList;
