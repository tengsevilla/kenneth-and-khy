import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ECookies } from "./model";
import Cookies from 'js-cookie';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateGUIDV7(): string {
  // random bytes
  const value = new Uint8Array(16);
  crypto.getRandomValues(value);

  // current timestamp in ms
  const timestamp = BigInt(Date.now());

  // timestamp
  value[0] = Number((timestamp >> BigInt(40)) & BigInt(0xff));
  value[1] = Number((timestamp >> BigInt(32)) & BigInt(0xff));
  value[2] = Number((timestamp >> BigInt(24)) & BigInt(0xff));
  value[3] = Number((timestamp >> BigInt(16)) & BigInt(0xff));
  value[4] = Number((timestamp >> BigInt(8)) & BigInt(0xff));
  value[5] = Number(timestamp & BigInt(0xff));

  // version and variant
  value[6] = (value[6] & 0x0f) | 0x70;
  value[8] = (value[8] & 0x3f) | 0x80;

  return Array.from(value)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const setCookie = (name: ECookies, value: string, days: number) => {
  Cookies.set(name, value, { expires: days, sameSite: 'strict' });
}

export const getCookie = (name: ECookies) => {
  return Cookies.get(name);
}