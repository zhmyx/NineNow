import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  height: 150px;
  background-color: white;
  border-radius: 10px;
`;

export const MaskView = styled.View`
  flex: 1;
  background-color: rgba(240, 240, 240, 0.1);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;
