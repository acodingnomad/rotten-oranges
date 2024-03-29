import React from "react";
import styled from "styled-components";
import media from "../helpers/media";

const StyledIcon = styled.svg`
  ${media.down.small`
    width: 35px;
  `};
`;

const HealthyHome = ({ width = "50px" }) => (
  <StyledIcon
    width={width}
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="healthy-home"
  >
    <title id="healthy-home">Healthy Home icon</title>
    <rect width="90" height="90" fill="#C4C4C4" />
    <rect x="24" y="34" width="42" height="41" fill="#F7F0DA" />
    <rect x="58" y="14" width="6" height="20" fill="#823333" />
    <path
      d="M68 6.5C68 8.433 66.433 10 64.5 10C62.567 10 61 8.433 61 6.5C61 4.567 62.567 3 64.5 3C66.433 3 68 4.567 68 6.5Z"
      fill="#3F4541"
      fillOpacity="0.3"
    />
    <path
      d="M64 12.5C64 14.433 62.433 16 60.5 16C58.567 16 57 14.433 57 12.5C57 10.567 58.567 9 60.5 9C62.433 9 64 10.567 64 12.5Z"
      fill="#3F4541"
      fillOpacity="0.3"
    />
    <path
      d="M64 8.5C64 10.433 62.433 12 60.5 12C58.567 12 57 10.433 57 8.5C57 6.567 58.567 5 60.5 5C62.433 5 64 6.567 64 8.5Z"
      fill="#3F4541"
      fillOpacity="0.3"
    />
    <path
      d="M43.4629 10.8465C44.2625 9.8859 45.7375 9.8859 46.5371 10.8465L69.1167 37.9704C70.2012 39.2733 69.2748 41.25 67.5796 41.25H22.4204C20.7252 41.25 19.7988 39.2733 20.8833 37.9704L43.4629 10.8465Z"
      fill="#3b33e3"
    />
    <rect x="39" y="57" width="12" height="18" fill="#5C4300" />
    <rect x="28" y="57" width="8" height="8" fill="#3b33e3" />
    <rect x="54" y="57" width="8" height="8" fill="#3b33e3" />
  </StyledIcon>
);

export default HealthyHome;
