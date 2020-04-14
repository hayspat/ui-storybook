import React from "react";
import { SideMenuContainer, MenuItem, Logo } from ".";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

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
