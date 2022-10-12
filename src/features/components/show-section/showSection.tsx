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
import { SectionItem, SectionType, ShowItem } from '../../../hooks/useHomeData';
import { getImageSize } from '../../../utils/getImageSize';
import Icon from '../icon/icon';

type Props = SectionItem;

export function ShowSection({ id, type, title, items, allAction }: Props) {
  const { width, height } = getImageSize(type as SectionType);
  const imageStyle = { width, height, borderRadius: 10, marginBottom: 5 };
  const allText = allAction.text;

  const getItemLayout = (index: number) => ({ length: width, offset: (width + 10) * index, index });

  const isPostRail = type === SectionType.posterRail;

  const CardItem = ({ item }: { item: ShowItem }) => (
    <CardContainer width={width}>
      <FastImage
        style={imageStyle}
        source={{ uri: item.imageUrl, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.cover}
      />
      {!isPostRail && (
        <Title numberOfLines={1} size={15}>
          {item.name.toUpperCase()}
        </Title>
      )}
    </CardContainer>
  );

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
        initialNumToRender={3}
        data={items}
        renderItem={CardItem}
        getItemLayout={(_, index: number) => getItemLayout(index)}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListFooterComponent={() => <ListSeparator />}
        keyExtractor={(item, index) => `${id}:${title}:${item.name}:${index}`}
      />
    </Container>
  );
}
