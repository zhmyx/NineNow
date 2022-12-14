import { useCallback, useEffect, useState } from 'react';

import { get } from '../utils/apiRequest';

export enum SectionType {
  posterRail = 'posterRail',
  rail = 'rail',
  featuredRail = 'featured-rail',
}

export type ShowItem = {
  id: string;
  name: string;
  imageUrl: string;
};

export type SectionItem = {
  id: number;
  type: SectionType;
  title: string;
  allAction: { text: string };
  items: ShowItem[];
};

function formatItems(items: any): ShowItem[] {
  const list = items.map((item) => ({
    id: item.id,
    name: item.name,
    imageUrl: item?.image?.sizes.w480 ?? '',
  }));

  return list.slice(0, Math.min(list.length, 10));
}

export function useHomeData() {
  const [data, setData] = useState<SectionItem[]>();
  const [isLoading, setIsLooading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLooading(true);
      const url = 'https://tv-api.9now.com.au/v2/pages/home/overseas?device=web';
      const response = await get(url);

      const result = response?.items
        .map((item) => ({
          id: item.id,
          type: item.type,
          title: item.title,
          items: formatItems(item.items),
          allAction: { text: item?.callToAction?.text ?? '' },
        }))
        .filter((item: SectionItem) => item.items.length !== 0);

      setData(result);
    } catch {
      // TODO: do something
    }

    setIsLooading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, data, fetchData };
}
