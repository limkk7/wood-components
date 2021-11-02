import React from "react";
import Aside from "../aside";
import Content from "../content";
import Footer from "../footer";
import Header from "../header";
import Layout from "../layout";
import "./layout.example.scss";

export default () => {
  return (
    <>
      <div>
        <Layout style={{ height: "300px" }}>
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <Layout style={{ height: "300px" }}>
          <Header className="x">header</Header>
          <Layout>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <Layout className="xxx" style={{ height: "300px" }}>
          <Header className="x">header</Header>
          <Layout>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <Layout className="xxx" style={{ height: "300px" }}>
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
