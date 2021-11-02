import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import ButtonDemo from "button/demo/button.demo";
import LayoutDemo from "layout/demo/layout.demo";
import { Layout, Header, Aside, Content, Footer, Icon } from "wood-components";
import DialogDemo from "dialog/dialog.demo";
import "example.scss";

ReactDOM.render(
  <Router>
    <Layout className="index-layout">
      <Header className="header">
        <Link to="/">
          <Icon name="wood" className="logo" />
        </Link>
      </Header>
      <Layout className="main">
        <Aside className="aside">
          {/* <h2>wood</h2> */}
          <ul>
            <li>
              <NavLink to="/button">介绍</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">开始使用</NavLink>
            </li>
          </ul>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="content">
          <Route path="/button" component={ButtonDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
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
