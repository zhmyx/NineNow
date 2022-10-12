import { Container, ListSeparator, ListView } from './styles';
import { ShowSection } from '../../components/';
import { SectionItem, useHomeData } from '../../../hooks/useHomeData';
import { getImageSize, SectionType } from '../../../utils/getImageSize';

export function HomePage() {
  const { data } = useHomeData();

  const getItemLayout = (item: SectionItem, index: number) => {
    const { height } = getImageSize(item.type as SectionType);
    const cardHeight = height + 80;
    return { length: cardHeight, offset: (cardHeight + 10) * index, index };
  };

  return (
    <Container>
      <ListView
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        data={data}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListFooterComponent={() => <ListSeparator />}
        getItemLayout={getItemLayout}
        keyExtractor={({ id, title }: SectionItem, index: number) => `${id}:${title}:${index}`}
        renderItem={({ item, index }: { item: SectionItem; index: number }) => (
          <ShowSection key={`${item.id}:${index}`} {...item} />
        )}
      />
    </Container>
  );
}

//getItemLayout={(_, index: number) => ({ length: 100, offset: 160, index })}
