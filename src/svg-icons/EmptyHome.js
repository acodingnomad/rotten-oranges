import React from "react";
import styled from "styled-components";
import media from "../helpers/media";

const StyledIcon = styled.svg`
  ${media.down.small`
    width: 35px;
  `};
`;

const EmptyHome = ({ width = "50px" }) => (
  <StyledIcon
    width={width}
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="empty-home"
  >
    <title id="empty-home">Empty Home icon</title>
    <path fill="#C4C4C4" d="M0 0h90v90H0z" />
    <path fill="#F7F0DA" d="M24 34h42v41H24z" />
    <path fill="#823333" d="M56 14h6v20h-6z" />
    <path
      d="M43.463 10.847a2 2 0 013.074 0l22.58 27.123c1.084 1.303.158 3.28-1.537 3.28H22.42c-1.695 0-2.621-1.977-1.537-3.28l22.58-27.123z"
      fill="#3F4541"
    />
    <path fill="#5C4300" d="M39 57h12v18H39z" />
    <path fill="#3F4541" d="M28 57h8v8h-8zM54 57h8v8h-8z" />
  </StyledIcon>
);

export default EmptyHome;
