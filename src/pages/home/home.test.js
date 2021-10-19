import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";
import Home from "./home";
import FlightSearch from "../search/flight-search";
import FlightDetail from "../flight-detail/flight-detail";
import ClientData from "../client-data/client-data";
import Confirmation from "../confirmation/confirmation";

let pathMap = {};

describe("Home", () => {
  beforeAll(() => {
    const component = shallow(<Home />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  test("Home Component should Rendered", () => {
    let component = shallow(<Home />);
    expect(component).toBeTruthy();
  });

  it("should show initial page with component flight-search route (/flight-search path)", () => {
    expect(pathMap["/flight-search"]).toBe(FlightSearch);
  });
  it("should show Flight Detail component for /flight-detail router", () => {
    expect(pathMap["/flight-detail"]).toBe(FlightDetail);
  });
  it("should show Client Data component techdomain for /client-data router", () => {
    expect(pathMap["/client-data"]).toBe(ClientData);
  });
  it("should show Confirmation component for /confirmation route", () => {
    expect(pathMap["/confirmation"]).toBe(Confirmation);
  });
});
