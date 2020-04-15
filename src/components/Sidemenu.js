import React from "react";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import SideMenuContainer from "./SideMenuContainer";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <Logo />
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
      <MenuItem faIcon={faAddressBook}>Test</MenuItem>
    </SideMenuContainer>
  );
};

export default SideMenu;
