// atoms/userAtom.ts
import { atom } from "recoil";

export const userState = atom({
  key: "userState", // Unique ID (with respect to other atoms/selectors)
  default: null, // Default value (can be an empty object or null)
});
