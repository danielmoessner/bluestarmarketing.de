import { getPlaiceholder } from "plaiceholder";
import {
  ImageRendered,
  Rendered,
  MarkdownRendered,
  RenderedMarkdown,
  RenderedImage,
} from "types/shared";
import md from "markdown-it";
import fs from "fs/promises";
import path from "path";

// render images
async function renderImages1(data: string): Promise<ImageRendered> {
  const buffer = await fs.readFile(path.join("./public", data));
  const {
    base64,
    metadata: { height, width },
  } = await getPlaiceholder(buffer);

  return {
    src: data,
    height,
    width,
    blurDataURL: base64,
    placeholder: "blur",
  };
}

async function renderImages<T extends object | Array<object>>(
  data: T,
): Promise<RenderedImage<T>> {
  let result;

  if (data) {
    result = data;

    for (const [key, value] of Object.entries(data)) {
      if (key.toLowerCase().includes("image") && typeof value === "string") {
        result[key] = await renderImages1(value);
      } else if (key.toLowerCase().includes("image") && Array.isArray(value)) {
        result[key] = await Promise.all(
          value.map((i) => (typeof i === "string" ? renderImages1(i) : i)),
        );
      } else if (typeof value === "object" || Array.isArray(value)) {
        result[key] = await renderImages(value);
      }
    }
  } else {
    result = data;
  }

  return result;
}

// render markdown
function renderMarkdown1(data: string): MarkdownRendered {
  const renderedMarkdown = md().render(data);
  return { html: renderedMarkdown };
}

function renderMarkdown<T extends object | Array<object>>(
  data: T,
): RenderedMarkdown<T> {
  let result;

  if (Array.isArray(data)) {
    result = data.map((i) => renderMarkdown(i));
  } else if (data) {
    result = data;

    for (const [key, value] of Object.entries(data)) {
      if (key.toLowerCase().includes("markdown") && typeof value === "string") {
        result[key] = renderMarkdown1(value);
      } else if (typeof value === "object") {
        result[key] = renderMarkdown(value);
      }
    }
  } else {
    result = data;
  }

  return result;
}

// render everything
export async function renderContent<T extends Array<object> | object>(
  data: T,
): Promise<Rendered<T>> {
  const imageResult = await renderImages<T>(data);
  const markdownResult = renderMarkdown<RenderedImage<T>>(imageResult);
  return markdownResult as Rendered<T>;
}
