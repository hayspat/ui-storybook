import React from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";

const StyledInput = styled.input(({ isRounded, theme }) => [
  tw`w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline`,

  isRounded && tw`rounded`,
]);

const StyledLabel = styled.label(({ largeLabel, theme }) => [
  tw`block mb-2 text-sm font-bold text-gray-700 `,
  largeLabel && tw`text-lg`,
]);

const Button = (props) => (
  <>
    <StyledLabel {...props} htmlFor={props.id}>
      {props.label}
    </StyledLabel>
    <StyledInput
      {...props}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
  </>
);

export default Button;
