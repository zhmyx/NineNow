import { FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Container,
  ListSeparator,
  HeaderContainer,
  Title,
  CardContainer,
  HeaderRightContainer,
} from './styles';
import { SectionItem, ShowItem } from '../../../hooks/useHomeData';
import { getImageSize, SectionType } from '../../../utils/getImageSize';
import Icon from '../icon/icon';

type Props = SectionItem;

export function ShowSection({ id, type, title, items, allAction }: Props) {
  // use type to decide the size of the cell item
  console.log('type:', type);

  const { width, height } = getImageSize(type as SectionType);
  const allText = allAction.text;

  const CardItem = ({ item }: { item: ShowItem }) => {
    return (
      <CardContainer width={width}>
        <FastImage
          style={{ width, height, borderRadius: 10, marginBottom: 5 }}
          source={{ uri: item.imageUrl, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Title numberOfLines={1} size={15}>
          {item.name.toUpperCase()}
        </Title>
      </CardContainer>
    );
  };

  const SectionHeader = () => (
    <HeaderContainer>
      <Title size={16} weight={600}>
        {title}
      </Title>
      {allText && (
        <HeaderRightContainer>
          <Title size={12}>{allText}</Title>
          <Icon name="chevron-right" color="white" size={18} />
        </HeaderRightContainer>
      )}
    </HeaderContainer>
  );

  return (
    <Container key={id}>
      <SectionHeader />
      <FlatList
        horizontal
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
        data={items}
        renderItem={CardItem}
        getItemLayout={(_, index: number) => ({ length: width, offset: width, index })}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListFooterComponent={() => <ListSeparator />}
        keyExtractor={(item, index) => `${item.id}:${index}:${id}`}
      />
    </Container>
  );
}
