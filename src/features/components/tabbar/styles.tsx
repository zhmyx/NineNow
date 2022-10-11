import styled from 'styled-components/native';

import Icon from '../icon/icon';

export const Container = styled.View`
  flex: 1;
  height: 94px;
  background-color: #2c3032;
`;

export const ItemContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 10px;
`;

export const Label = styled.Text<{
  isFocused: boolean;
}>`
  font-weight: ${({ isFocused }) => (isFocused ? 600 : 500)};
  color: ${({ isFocused }) => (isFocused ? 'white' : '#999EA1')};
  font-size: 11px;
`;
