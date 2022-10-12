import { Container, ListSeparator, ListView } from './styles';
import { ShowSection } from '../../components/';
import { SectionItem, useHomeData } from '../../../hooks/useHomeData';
import { getImageSize, SectionType } from '../../../utils/getImageSize';

export function HomePage() {
  const { data, fetchData, isLoading } = useHomeData();

  const getItemLayout = (item: SectionItem, index: number) => {
    const { height } = getImageSize(item.type as SectionType);
    const cardHeight = height + 80;
    return ({ length: cardHeight, offset: cardHeight, index });
  };

  return (
    <Container>
      <ListView
        onRefresh={fetchData}
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        data={data}
        refreshing={isLoading}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListFooterComponent={() => <ListSeparator />}
        getItemLayout={getItemLayout}
        keyExtractor={(item: SectionItem, index: number) => `${item.id}:${index}`}
        renderItem={({ item, index }) => <ShowSection key={`${item.id}:${index}`} {...item} />}
      />
    </Container>
  );
}

//getItemLayout={(_, index: number) => ({ length: 100, offset: 160, index })}
