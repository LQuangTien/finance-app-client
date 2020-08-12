import React, { Suspense } from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavbarMenu from "components/Common/Navbar";
import IncomePage from "pages/IncomePage";
import ExpendPage from "pages/ExpendPage";
import HistoryPage from "pages/HistoryPage";
import LoginPage from "pages/LoginPage";

import "./styles.css";

const { Content, Sider } = Layout;
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Sider breakpoint="md" collapsedWidth="0" theme="light">
              <NavbarMenu />
            </Sider>
            <Layout>
              <Content>
                <Switch>
                  <Route exact path="/income" component={IncomePage} />
                  <Route exact path="/expend" component={ExpendPage} />
                  <Route exact path="/history" component={HistoryPage} />
                  <Route exact path="/login" component={LoginPage} />

                  <Redirect from="/" to="/income" />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
