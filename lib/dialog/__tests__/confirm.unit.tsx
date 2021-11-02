import * as renderer from "react-test-renderer";
import * as React from "react";
import { confirm, Button } from "../../wood-components";

describe("测试 dialog", () => {
  it("confirm", () => {
    const json = renderer
      .create(
        <Button
          onClick={() =>
            confirm(
              "confirm",
              () => {
                console.log("hah");
              },
              () => {
                console.log("oh no");
              }
            )
          }
        >
          show confirm
        </Button>
      )
      .toJSON();
    expect(json).toMatchSnapshot();
  });
});
