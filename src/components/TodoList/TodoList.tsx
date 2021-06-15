import React, { useCallback } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Card, Layout, Stack } from "@shopify/polaris";

import { dragManagerState } from "atoms";
import { filteredTodoList, itemPosition } from "selectors";
import { TodoItem, TodoCreator, TodoListFilters } from "components";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoList);
  const [dragManager, updateDragManager] = useRecoilState(dragManagerState);
  const updateItemPosition = useSetRecoilState(itemPosition);

  const handleDrag = useCallback(
    (event: React.MouseEvent) => {
      if (dragManager.isDragging) {
        updateItemPosition({ x: event.pageX, y: event.pageY });
      }
      event.stopPropagation();
      event.preventDefault();
    },
    [dragManager.isDragging, updateItemPosition]
  );

  const stopDragging = useCallback(
    (event: React.MouseEvent) => {
      updateDragManager((dragManager) => ({
        ...dragManager,
        isDragging: false,
      }));
      event.stopPropagation();
      event.preventDefault();
    },
    [updateDragManager]
  );

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
        <div
          style={{ height: "100vh" }}
          onMouseMove={handleDrag}
          onMouseUp={stopDragging}
        >
          {todoList.map((id) => (
            <TodoItem key={id} id={id} />
          ))}
        </div>
      </Layout.Section>
    </Layout>
  );
};

export default TodoList;
