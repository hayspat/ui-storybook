import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";

const SideMenu = styled.div(({ theme }) => [
  // The base button styles added with the tw macro
  tw`fixed w-64 h-screen bg-purple-800`

  /*     // Use props to conditionally style your components
    isPrimary && tw`text-white bg-black border-black`,

    // Combine regular css with Tailwind classes within backticks
    isSecondary &&
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
        ${tw`border-2 border-yellow-600`}
      `,

    // Conditional props can be added
    isSmall ? tw`text-sm` : tw`text-lg`,

    // Your tailwind.config.js styles are added by <Theme> in App.js
    css`
      color: ${theme.colors.white};
    ` */
]);

const SideMenuContainer = props => (
  <SideMenu {...props}>{props.children}</SideMenu>
);

export default SideMenuContainer;
