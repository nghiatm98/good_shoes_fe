import { useEffect, useRef, useState } from "react";

type DebounceCallback<T> = (value: T) => void;

export const useDebounce = <T>(
  callback: DebounceCallback<T>,
  delay: number
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(null as T);
  const timer: any = useRef<number>(null);

  useEffect(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(value);
    }, delay);
  }, [value]);

  const handleChange = (newValue: T): void => {
    setValue(newValue);
  };

  return [value, handleChange];
};
