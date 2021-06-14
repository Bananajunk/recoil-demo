import { atom } from "recoil";
import _ from "lodash";

import * as Types from "types";

const todoListItemWithId = _.memoize((id: string) =>
  atom({
    key: `item-${id}`,
    default: {
      id: id,
      text: "",
      isComplete: false,
      position: {
        x: 0,
        y: 0,
      },
    },
  } as { key: string; default: Types.TodoItem })
);

export default todoListItemWithId;
