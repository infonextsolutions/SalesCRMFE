import React, { useEffect, useState } from "react";

export function useLocalStorage(key: any, fallbackValue: any) {
  const [value, setValue] = useState<any>(fallbackValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      setValue(stored);
    } else {
      setValue(null);
    }
  }, [fallbackValue, key]);

  return [value, setValue] as const;
}
