import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ListView = styled.FlatList`
  padding-left: 13px;
`;

export const ListSeparator = styled.View`
  flex: 1;
  height: 10px;
`;
