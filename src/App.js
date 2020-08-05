import React, { Suspense } from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarMenu from "components/Common/Navbar";
import IncomePage from "pages/IncomePage";

import ExpendPage from "pages/ExpendPage";
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
                  <Route exact path="/" component={IncomePage} />
                  <Route exact path="/expend" component={ExpendPage} />

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
