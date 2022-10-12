import styled from 'styled-components/native';

export const Container = styled.View<{ height?: number }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ListSeparator = styled.View`
  flex: 1;
  width: 10px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10px;
  padding-right: 15px;
`;

export const HeaderRightContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<{ size: number; weight?: number }>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight ?? 400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CardContainer = styled.View<{ width: number }>`
  width: ${({ width }) => width};
`;
