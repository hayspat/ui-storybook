import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import {
  Theme,
  Button,
  Logo,
  MenuItem,
  SideMenuContainer,
  Searchbar
} from "./components";
import "tailwindcss/dist/base.css";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Layout from "./components/Layout";

const App = () => (
  <Theme>
    <Layout />
  </Theme>
);

export default App;
