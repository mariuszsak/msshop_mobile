import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import BasketComponent from "../src/components/basketComponent";
import Home from "../src/screens/home";


describe("Snapshot tests", () => {
  beforeEach(() => {
      jest.useFakeTimers();
    }
  );

  it("Snapshot test BasketComponent", () => {
    const tree = renderer.create(
      <BasketComponent name={"test"} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Snapshot test Home", () => {
    const tree = renderer.create(
      <Home navigation={null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Snapshot test", () => {
    const tree = renderer.create(
      <App navigation={null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
