/* eslint-disable */
import { getPlaiceholder } from "plaiceholder";
import { ImageRendered, Rendered, MarkdownRendered, RenderedMarkdown } from "types/shared";
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
): Promise<ImageRendered>;
async function renderImages(
  data: string[],
  key: "images"
): Promise<ImageRendered[]>;
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
    key.includes("image")
  ) {
    const { base64, img } = await getPlaiceholder(data);
    return {
      ...img,
      blurDataURL: base64,
      placeholder: "blur",
    } as ImageRendered;
  }
  return data;
}

function renderMarkdown1(data: string): MarkdownRendered {
  const renderedMarkdown = md().render(data);
  return {'html': renderedMarkdown};
}

// function renderMarkdown1(data: string): RenderedMarkdown {
//   const renderedMarkdown = md().render(data);
//   return {'html': renderedMarkdown};
// }

// function renderMarkdown<K>(
//   data: K[],
//   key?: string | null
// ): K;
// function renderMarkdown<T>(
//   data: string,
//   key?: 'markdown'
// ): RenderedMarkdown;
function renderMarkdown<T extends object>(
  data: T
): RenderedMarkdown<T> {

  for (const [key, value] of Object.entries(data)) {
    if (key === 'markdown' && typeof value === 'string') {
      data[key] = renderMarkdown1(value);
    } 
    else if (typeof value === 'object') {
      data[key] = renderMarkdown(value);
    }
    else if (Array.isArray(value)) {
      data[key] = value.map(i => renderMarkdown(i));
    }
  }

  return data as RenderedMarkdown<T>;

  // if (Array.isArray(data)) {
  //   return data.map((i) => renderMarkdown(i, key));
  // } else if (typeof data === "object") {
  //   for (const [key, value] of Object.entries(data)) {
  //     data[key] = renderMarkdown(value, key);
  //   }
  // } else if (
  //   typeof data === "string" && key === "markdown"
  // ) {
  //   renderMarkdown1(data);
  // }
  // return data as string;
}


export async function renderContent<T extends Array<object> | object>(data: T): Promise<Rendered<T>> {
  const imageResult = await renderImages(data);
  const markdownResult = renderMarkdown(imageResult);
  return markdownResult as Rendered<T>;
}