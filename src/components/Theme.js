import React from "react";
import { ThemeProvider } from "styled-components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const { theme } = resolveConfig(tailwindConfig);

console.log(theme, "theme");

const Theme = props => <ThemeProvider {...props} {...{ theme }} />;

export default Theme;
