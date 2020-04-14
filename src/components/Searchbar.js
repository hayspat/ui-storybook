import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";

const StyledInput = styled.input(({ theme }) => [
  // The base button styles added with the tw macro
  tw`h-16 px-3 px-8 text-xl rounded shadow-lg  focus:outline-none focus:shadow-outline`
]);

const Input = props => (
  <StyledInput
    {...props}
    type="search"
    placeholder={props.placeholder || "Search..."}
  ></StyledInput>
);

export default Input;
