import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay: number = 400): string {
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}