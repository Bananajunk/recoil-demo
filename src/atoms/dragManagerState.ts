import { atom } from "recoil";

const dragManagerState = atom({
  key: "dragManager", // must be unique across all atoms + selectors
  default: {
    isDragging: false,
    itemId: "",
    rel: {
      x: 0,
      y: 0,
    },
    cursor: {
      x: 0,
      y: 0,
    },
  },
});

export default dragManagerState;
