import { useState } from "react";

type LocalStorageKey =
  | "personalInfo"
  | "educations"
  | "experiences"
  | "summary"
  | "skills"
  | "additionalSections"
  | "selectedPattern";

/**
 * Custom hook to manage state synchronized with localStorage.
 * @param key The localStorage key to store the value.
 * @param initialValue The initial value to use if no value is stored.
 * @returns [value, setValue] The current state and a function to update it.
 */
function useLocalStorage<T>(key: LocalStorageKey, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Retrieve stored value or use the initial value
  const getStoredValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("Error reading localStorage key ", key, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn("Error setting localStorage key ", key, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
