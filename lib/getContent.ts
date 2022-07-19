import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

interface CmsObject {
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type MarkdownLoaded<T> = T & { markdown: string; _path: string };

export type JsonLoaded<T> = T & { _path: string };

function readFile(collection: string, filename: string) {
  const fullPath = join(process.cwd(), "content", collection, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return { content: fileContents, path: fullPath };
}

function loadMarkdown<T extends CmsObject>(
  collection,
  filename
): MarkdownLoaded<T> {
  const { content, path } = readFile(collection, filename);
  const { data, content: markdown } = matter(content);

  return { ...data, markdown, _path: path } as MarkdownLoaded<T>;
}

function loadJson<T extends CmsObject>(
  collection,
  filename
): T & { _path: string } {
  const { content, path } = readFile(collection, filename);
  const data = JSON.parse(content);
  return { ...data, _path: path } as T & { _path: string };
}

export function getAllMarkdown<T extends CmsObject>(
  collection: string
): MarkdownLoaded<T>[] {
  const collectionDirectory = join(process.cwd(), "content", collection);
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) =>
    loadMarkdown<T>(collection, filename)
  );

  return items;
}

export function getAllJson<T extends CmsObject>(
  collection: string
): JsonLoaded<T>[] {
  const collectionDirectory = join(process.cwd(), "content", collection);
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) => loadJson<T>(collection, filename));

  return items;
}
