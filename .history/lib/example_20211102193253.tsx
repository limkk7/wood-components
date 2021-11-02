import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import IconExample from "icon/icon.example";
import ButtonDemo from "button/button.demo";
import LayoutExample from "layout/demo/layout.example";
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
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
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
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutExample} />
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
