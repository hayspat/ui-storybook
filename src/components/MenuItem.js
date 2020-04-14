import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledMenuItem = styled.div(({ active, theme }) => [
  tw`flex px-2 py-2 mx-2 text-lg text-white rounded hocus:bg-indigo-900 focus:outline-none`,

  active && tw`underline`
]);

const MenuItem = props => (
  <StyledMenuItem {...props}>
    {props.faIcon && (
      <div tw="w-6">
        <FontAwesomeIcon
          tw="h-6 w-6 fill-current xl:mr-2"
          icon={props.faIcon}
        />
      </div>
    )}
    <span tw="px-1" />
    <span>{props.children}</span>
  </StyledMenuItem>
);

export default MenuItem;
