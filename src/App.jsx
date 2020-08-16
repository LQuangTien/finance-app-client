import React, { Suspense } from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavbarMenu from "components/Common/Navbar";
import { EarningPage, SpendingPage, HistoryPage, LoginPage, RegisterPage, NotFoundPage } from "pages";
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

                </Content>

              </Layout>
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Layout>

          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
