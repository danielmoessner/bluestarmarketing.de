/* eslint-disable */
import { getPlaiceholder } from "plaiceholder";
import { ImprovedImage } from "types/shared";

export async function improveImages(
  data: any,
  key?: string | null
): Promise<any>;
export async function improveImages(
  data: Record<string, any>,
  key?: string | null
): Promise<Record<string, any>>;
export async function improveImages(
  data: string,
  key: "image"
): Promise<ImprovedImage>;
export async function improveImages(
  data: string[],
  key: "images"
): Promise<ImprovedImage[]>;
export async function improveImages(
  data: Record<string, any> | string | string[],
  key?: string | null
) {
  if (Array.isArray(data)) {
    return await Promise.all(data.map((i) => improveImages(i, key)));
  } else if (typeof data === "object") {
    for (const [key, value] of Object.entries(data)) {
      data[key] = await improveImages(value, key);

      // if (key === "image" && typeof value === "string") {
      //   const { base64, img } = await getPlaiceholder(value as string);
      //   data[key] = { ...img, blurDataURL: base64 };
      // } else if (key === "images" && Array.isArray(value)) {
      //   data[key].map(async (item) => await getPlaiceholder(item));
      // } else if (typeof value === "object") {
      //   data[key] = await improveImages(value);
      // }
    }
  } else if (
    typeof data === "string" &&
    data.startsWith("/media") &&
    (key === "image" || key === "images")
  ) {
    const { base64, img } = await getPlaiceholder(data);
    return {
      ...img,
      blurDataURL: base64,
      placeholder: "blur",
    } as ImprovedImage;
  }
  return data;
}
