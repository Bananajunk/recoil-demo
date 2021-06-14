import React from "react";
import { RecoilRoot } from "recoil";
import { AppProvider, Page } from "@shopify/polaris";

import enTranslations from "@shopify/polaris/locales/en.json";

import { TodoList } from "components";

import "@shopify/polaris/dist/styles.css";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page fullWidth title="Recoil Demo">
        <RecoilRoot>
          <TodoList />
        </RecoilRoot>
      </Page>
    </AppProvider>
  );
}

export default App;
