import { Layout } from "antd";
import NavbarMenu from "components/Common/Navbar";
import { EarningPage, HistoryPage, LoginPage, RegisterPage, SpendingPage, TodoPage } from "pages";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

const { Content, Sider } = Layout;
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={(
        <div>
          Loading...
        </div>
)}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />

            <Layout>
              <Sider breakpoint="md" collapsedWidth="0" theme="light">
                <NavbarMenu />
              </Sider>
              <Layout>
                <Content>

                  <Route exact path="/earning" component={EarningPage} />
                  <Route exact path="/spending" component={SpendingPage} />
                  <Route exact path="/history" component={HistoryPage} />
                  <Route exact path="/todo" component={TodoPage} />

                </Content>

              </Layout>
            </Layout>

          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
