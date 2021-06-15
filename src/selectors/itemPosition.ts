import { DefaultValue, selector } from "recoil";

import { dragManagerState, todoListItemWithId } from "atoms";
import * as Types from "types";

const itemPosition = selector({
  key: "itemPosition",
  get: ({ get }) => {
    const { rel } = get(dragManagerState);
    return {
      x: rel.x,
      y: rel.y,
    };
  },
  set: ({ get, set }, cursor: Types.Position | DefaultValue) => {
    const { itemId, rel, isDragging } = get(dragManagerState);
    const item = get(todoListItemWithId(itemId));
    if (!isDragging) return;
    if (!(cursor instanceof DefaultValue)) {
      set(todoListItemWithId(itemId), {
        ...item,
        position: {
          x: cursor.x - rel.x,
          y: cursor.y - rel.y,
        },
      });
    }
  },
});

export default itemPosition;
