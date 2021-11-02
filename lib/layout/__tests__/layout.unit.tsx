import * as renderer from "react-test-renderer";
import * as React from "react";
import { Layout, Header, Content } from "wood-components";

describe("layout", () => {
  it("是个 layout", () => {
    const json = renderer
      .create(
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
        </Layout>
      )
      .toJSON();
    expect(json).toMatchSnapshot();
  });
});
