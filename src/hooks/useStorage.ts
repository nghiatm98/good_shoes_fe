import { useState } from "react";

const getItem = (key: string, storage: any) => {
  const value = storage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

export const useStorage = <T>(
  key: string,
  type = "local"
): [T | undefined, (newValue: any) => void | undefined] => {
  let storage = null;
  switch (type) {
    case "session":
      storage = sessionStorage;
      break;
    case "local":
      storage = localStorage;
      break;
    default:
      storage = null;
      break;
  }
  const [value, setValue] = useState<T>(getItem(key, storage));
  const setItem = (storage: any) => {
    return (newValue: any) => {
      setValue(newValue);
      storage.setItem(key, JSON.stringify(newValue));
    };
  };

  return [value as T, setItem(storage)];
};
