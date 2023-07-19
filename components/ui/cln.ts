import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cln = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
