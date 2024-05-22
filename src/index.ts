import anyAscii from "any-ascii";
import { GSM7_CHARS, GSM7_CHARS_EXTENDED } from "./consts";

export const convertUnicodeToGSM7 = (
  text: string,
  allowExtended = true,
): string => {
  const GSM7Array = [];

  for (const char of text) {
    if (
      GSM7_CHARS.includes(char) ||
      (allowExtended && GSM7_CHARS_EXTENDED.includes(char))
    ) {
      GSM7Array.push(char);
      continue;
    }

    const asciiedChar = anyAscii(char);
    if (
      GSM7_CHARS.includes(asciiedChar) ||
      (allowExtended && GSM7_CHARS_EXTENDED.includes(asciiedChar))
    ) {
      GSM7Array.push(asciiedChar);
    }
  }

  return GSM7Array.join("");
};
