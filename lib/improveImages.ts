import { getPlaiceholder } from "plaiceholder";

export async function improveImages(data, key = null) {
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
    return { ...img, blurDataURL: base64, placeholder: "blur" };
  }
  return data;
}
