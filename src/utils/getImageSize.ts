export enum SectionType {
  posterRail = 'posterRail',
  rail = 'rail',
  featuredRail = 'featured-rail',
}

export function getImageSize(type: SectionType): { width: number, height: number } {
  if (type === SectionType.posterRail) {
    return { width: 170, height: 280 };
  }

  return { width: 190, height: 110 };
}
