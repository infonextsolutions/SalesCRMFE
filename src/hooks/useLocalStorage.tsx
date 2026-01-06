import React, { useEffect, useState } from "react";

export function useLocalStorage(key: any, fallbackValue: any) {
  const [value, setValue] = useState<any>(fallbackValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const stored = localStorage.getItem(key);
      if (stored) {
        setValue(stored);
      } else {
        setValue(null);
      }
    }
  }, [fallbackValue, key, isClient]);

  return [value, setValue] as const;
}
