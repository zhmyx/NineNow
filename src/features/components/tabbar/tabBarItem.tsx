import { ItemContainer, Label } from './styles';

import Icon from '../icon/icon';

type Props = {
  label: string;
  icon: string;
  isFocused: boolean;
};

function TabBarItem({ label, icon, isFocused = false }: Props) {
  // TODO: get color from theme
  const iconColor = isFocused ? '#007AC8' : '#999EA1';
  return (
    <ItemContainer>
      <Icon name={icon} color={iconColor} size={26} />
      <Label isFocused={isFocused}>{label}</Label>
    </ItemContainer>
  );
}

export default TabBarItem;
