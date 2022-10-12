import { Container, HeaderContainer, HeaderTitle, ListSeparator, ListView } from './styles';
import { useCategories, Category } from '../../../hooks/useCategories';
import { CategoryCard } from '../../components';

export function CategoriesPage() {
  const { categories } = useCategories();

  const Header = () => (
    <HeaderContainer>
      <HeaderTitle>Categories</HeaderTitle>
    </HeaderContainer>
  );

  return (
    <Container>
      <ListView
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        data={categories}
        ListHeaderComponent={() => <Header />}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListFooterComponent={() => <ListSeparator />}
        getItemLayout={(_, index: number) => ({ length: 150, offset: 170 * index, index })}
        keyExtractor={(item: Category, index: number) => `${item.id}:${index}`}
        renderItem={({ item, index }) => (
          <CategoryCard key={`${item.id}:${index}`} title={item.name} imageUrl={item.image} />
        )}
      />
    </Container>
  );
}
