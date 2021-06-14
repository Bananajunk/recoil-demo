import { selector } from "recoil";

import { dragManagerState } from "atoms";

const itemPosition = selector({
  key: "itemPosition",
  get: ({ get }) => {
    const { cursor, rel } = get(dragManagerState);
    return {
      x: cursor.x - rel.x,
      y: cursor.y - rel.y,
    };
  },
});

export default itemPosition;
