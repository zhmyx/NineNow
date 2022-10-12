import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  name: string;
  size: number;
  color: string;
};

export const Icon: React.FC<Props> = ({ name, size, color }) => {
  return <MaterialIcons name={name} color={color} size={size} />;
};

export default Icon;
