/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 3% 0;
  border-radius: 20px;
  align-items: center;
  margin: 3% 0;
  width: 70%;
  align-self: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.surface};
  font-size: 16px;
`;

export default Button;
