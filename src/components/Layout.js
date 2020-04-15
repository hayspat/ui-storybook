import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";

import SideMenu from "./Sidemenu";
import TopBar from "./TopBar";
import Button from "./Button";
import Form from "./Form";

const Layout = () => {
  return (
    <div tw="">
      <SideMenu />
      <div tw="pl-64">
        <TopBar />
        <div tw="bg-gray-200 px-12 py-12 h-full">
          <h1 tw="text-6xl">Dashboard</h1>
          <div tw="mt-6 border-dashed border-gray-400 rounded border-4 py-12">
            <div tw="flex flex-col items-center justify-center h-full">
              <Form />
              <div tw="pt-12">
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
    </div>
  );
};

export default Layout;
