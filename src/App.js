import React, { Suspense } from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavbarMenu from "components/Common/Navbar";
import EarningPage from "pages/EarningPage";
import SpendingPage from "pages/SpendingPage";
import HistoryPage from "pages/HistoryPage";
import LoginPage from "pages/LoginPage";

import "./styles.css";

const { Content, Sider } = Layout;
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Layout>
              <Sider breakpoint="md" collapsedWidth="0" theme="light">
                <NavbarMenu />
              </Sider>
              <Layout>
                <Content>

                  <Route exact path="/earning" component={EarningPage} />
                  <Route exact path="/spending" component={SpendingPage} />
                  <Route exact path="/history" component={HistoryPage} />


                  {/* <Redirect from="/" to="/earning" /> */}
                  {/* <Route component={NotFound} /> */}

                </Content>
              </Layout>
            </Layout>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
