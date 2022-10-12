import { Container, MaskView, Label } from './styles';

type Props = {
  title: string;
  imageUrl: string;
};

export function CategoryCard({ title, imageUrl }: Props) {
  return (
    <Container source={{ uri: imageUrl }}>
      <MaskView>
        <Label>{title}</Label>
      </MaskView>
    </Container>
  );
}
