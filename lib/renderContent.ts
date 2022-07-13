/* eslint-disable */
import { getPlaiceholder } from "plaiceholder";
import { ImprovedImage } from "types/shared";
import md from "markdown-it";

async function renderImages(
  data: any,
  key?: string | null
): Promise<any>;
async function renderImages(
  data: Record<string, any>,
  key?: string | null
): Promise<Record<string, any>>;
async function renderImages(
  data: string,
  key: "image"
): Promise<ImprovedImage>;
async function renderImages(
  data: string[],
  key: "images"
): Promise<ImprovedImage[]>;
async function renderImages(
  data: Record<string, any> | string | string[],
  key?: string | null
) {
  if (Array.isArray(data)) {
    return await Promise.all(data.map((i) => renderImages(i, key)));
  } else if (typeof data === "object") {
    for (const [key, value] of Object.entries(data)) {
      data[key] = await renderImages(value, key);
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

function renderMarkdown(
  data: any,
  key?: string | null
): Promise<any>;
function renderMarkdown(
  data: Record<string, any>,
  key?: string | null
): Promise<Record<string, any>>;
function renderMarkdown(
  data: string,
  key: "image"
): Promise<ImprovedImage>;
function renderMarkdown(
  data: string[],
  key: "images"
): Promise<ImprovedImage[]>;
function renderMarkdown(
  data: Record<string, any> | string | string[],
  key?: string | null
) {
  if (Array.isArray(data)) {
    return data.map((i) => renderMarkdown(i, key));
  } else if (typeof data === "object") {
    for (const [key, value] of Object.entries(data)) {
      data[key] = renderMarkdown(value, key);
    }
  } else if (
    typeof data === "string" && key === "markdown"
  ) {
    const renderedMarkdown = md().render(data);
    return {'html': renderedMarkdown};
  }
  return data;
}


export async function renderContent(data: Record<string, any>) {
  const imageResult = await renderImages(data);
  const markdownResult = await renderMarkdown(imageResult);
  return markdownResult;
}