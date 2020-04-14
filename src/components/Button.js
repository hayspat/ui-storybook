import React from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";

const StyledButton = styled.button(
  ({ isPrimary, isSecondary, isSmall, isRounded, theme }) => [
    tw`px-4 py-2 font-bold rounded `,

    isPrimary && tw`text-white bg-blue-500 hover:bg-blue-700`,

    isRounded && tw`text-white bg-blue-500 rounded-full hover:bg-blue-700`,

    isSecondary &&
      tw`font-semibold text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent`,

    isSmall ? tw`text-sm` : tw`text-lg`
  ]
);

const Button = props => <StyledButton {...props} />;

export default Button;
