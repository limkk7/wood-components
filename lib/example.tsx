import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
import ButtonDemo from "button/demo/button.demo";
import SwitchDemo from "switch/demo/switch.demo";
import LayoutDemo from "layout/demo/layout.demo";
import InputDemo from "input/demo/input.demo";
import { Layout, Header, Aside, Content, Footer, Icon } from "wood-components";
import DialogDemo from "dialog/demo/dialog.demo";
import Introduction from "./introduction";
import "example.scss";

ReactDOM.render(
  <Router>
    <Layout className="index-layout">
      <Header className="header">
        <Link to="/introduction">
          <Icon name="wood" className="logo" />
        </Link>
      </Header>
      <Layout className="main">
        <Aside className="aside">
          <h2>总览</h2>
          <ul>
            <li>
              <NavLink to="/introduction">介绍</NavLink>
            </li>
          </ul>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/switch">Switch</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="content">
          <Switch>
            <Route path="/button" exact component={ButtonDemo} />
            <Route path="/input" exact component={InputDemo} />
            <Route path="/layout" exact component={LayoutDemo} />
            <Route path="/switch" exact component={SwitchDemo} />
            <Route path="/dialog" exact component={DialogDemo} />
            <Route path="/introduction" exact component={Introduction} />
            <Route exact path="/">
              <Redirect to="/introduction" />
            </Route>
          </Switch>
        </Content>
      </Layout>
      <Footer className="footer">
        <ul>
          <li>
            <Icon name="wood" className="logo" />
          </li>
          <li>
            <a
              href="https://github.com/versionlin7/wood-components"
              target="__blank"
            >
              <Icon name="github" className="github" />
            </a>
          </li>
        </ul>
      </Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
