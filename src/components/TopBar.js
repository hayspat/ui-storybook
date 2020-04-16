import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const TopBar = (props) => (
  <div tw="w-full flex items-center bg-white shadow-xl">
    <Searchbar tw="w-full shadow-none focus:outline-none" />
    <FontAwesomeIcon tw="h-6 w-6 text-gray-600 text-2xl mx-4" icon={faBell} />
    <img
      tw="rounded-full h-10 w-10 mx-4"
      alt="avatar"
      src={"https://upload.wikimedia.org/wikipedia/tr/8/8b/Avatar_2_logo.jpg"}
    />
  </div>
);

export default TopBar;
