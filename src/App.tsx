import React from "react";
import { RecoilRoot } from "recoil";

import { TodoList } from "components";

import "./App.scss";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
