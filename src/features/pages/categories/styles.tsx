import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContainer = styled.View`
  flex: 1;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 27px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

export const ListSeparator = styled.View`
  flex: 1;
  height: 10px;
`;

export const ListView = styled.FlatList`
  padding-horizontal: 13px;
`;
