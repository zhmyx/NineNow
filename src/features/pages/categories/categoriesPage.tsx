import { Container, HeaderContainer, HeaderTitle, ListSeparator, ListView } from './styles';
import { useCategories } from '../../../hooks/useCategories';
import { CategoryCard } from '../../components';

export function CategoriesPage() {
  const { isLoading, categories, fetchData } = useCategories();

  const Header = () => (
    <HeaderContainer>
      <HeaderTitle>Categories</HeaderTitle>
    </HeaderContainer>
  );

  return (
    <Container>
      <ListView
        onRefresh={fetchData}
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        data={categories}
        refreshing={isLoading}
        ListHeaderComponent={() => <Header />}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListFooterComponent={() => <ListSeparator />}
        getItemLayout={(_, index: number) => ({ length: 150, offset: 160, index })}
        keyExtractor={(item: Category, index: number) => `${item.id}:${index}`}
        renderItem={({ item, index }) => (
          <CategoryCard key={`${item.id}:${index}`} title={item.name} imageUrl={item.image} />
        )}
      />
    </Container>
  );

  // ListHeaderComponent={() => <ListHeader />}
}
