import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { TopBar, Button } from ".";
import SideMenu from "./Sidemenu";

const Layout = () => {
  return (
    <div tw="">
      <SideMenu />
      <div tw="pl-64">
        <TopBar />
        <div tw="bg-gray-200 px-12 py-12 h-full">
          <h1 tw="text-6xl">Dashboard</h1>
          <div tw="mt-6 border-dashed border-gray-400 rounded border-4 h-64">
            <div tw="flex items-center justify-center h-full">
              <Button tw="mx-4" isPrimary>
                Submit
              </Button>
              <Button tw="mx-4" isSecondary>
                Cancel
              </Button>
              <Button tw="mx-4" isPrimary isSmall>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
