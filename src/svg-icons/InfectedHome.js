import React from "react";
import styled from "styled-components";
import media from "../helpers/media";

const StyledIcon = styled.svg`
  ${media.down.small`
    width: 35px;
  `};
`;

const InfectedHome = ({ width = "50px" }) => (
  <StyledIcon
    width={width}
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="infected-home"
  >
    <title id="infected-home">Infected Home icon</title>
    <rect width="90" height="90" fill="#C4C4C4" />
    <rect x="24" y="34" width="42" height="41" fill="#F7F0DA" />
    <rect x="58" y="14" width="6" height="20" fill="#823333" />
    <path
      d="M43.4629 10.8465C44.2625 9.8859 45.7375 9.8859 46.5371 10.8465L69.1167 37.9704C70.2012 39.2733 69.2748 41.25 67.5796 41.25H22.4204C20.7252 41.25 19.7988 39.2733 20.8833 37.9704L43.4629 10.8465Z"
      fill="#19DA4C"
    />
    <rect x="39" y="57" width="12" height="18" fill="#5C4300" />
    <path d="M54 57H62V65H54V57Z" fill="#19DA4C" />
    <rect x="28" y="57" width="8" height="8" fill="#19DA4C" />
  </StyledIcon>
);

export default InfectedHome;
