import styled, {DefaultTheme} from 'styled-components'
import {Variant} from '../Button/types'
import {menuColor} from '../../common/styles/variables'

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  background-color: ${menuColor};
  border-radius: 16px;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
