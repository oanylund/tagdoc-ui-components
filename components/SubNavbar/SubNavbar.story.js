import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Navbar from "../Navbar/Navbar";
import NavItem from "../NavItem/NavItem";

import SubNavbar from "./SubNavbar";
import SubNavItem from "../SubNavItem/SubNavItem";

storiesOf("SubNavbar", module).add("default", () => (
  <div>
    <Navbar>
      <NavItem>TagDoc</NavItem>
      <NavItem>Partials</NavItem>
      <NavItem>Playground</NavItem>
      <NavItem>Export</NavItem>
    </Navbar>
    <SubNavbar>
      <SubNavItem active>Create</SubNavItem>
      <SubNavItem>Connect</SubNavItem>
    </SubNavbar>
  </div>
));
