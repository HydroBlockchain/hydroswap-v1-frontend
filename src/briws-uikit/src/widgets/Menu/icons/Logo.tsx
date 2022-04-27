import * as React from "react"
import { SvgProps } from '../../../components';
import swapLogo from '../../../assets/img/swapLogo.png'
import styled from 'styled-components'

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const StyledImg = styled.img`
  width: 200px;
`;

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
      <StyledImg src={swapLogo} alt=""/>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
