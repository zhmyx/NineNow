import { useCallback, useEffect, useState } from 'react';

import { get } from '../utils/apiRequest';

export type Category = {
  id: number;
  name: string;
  image: string;
  type: string;
};

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>();
  const [isLoading, setIsLooading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLooading(true);
      const url = 'https://tv-api.9now.com.au/v2/pages/genres?device=web';
      const response = await get<Category[]>(url);

      const data = response?.genres.map((item) => ({
        type: item.type,
        id: item.id,
        name: item.name,
        image: item.image.sizes.w768,
      }));

      setCategories(data);
    } catch {
      // TODO: do something
    }

    setIsLooading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, categories, fetchData };
}
