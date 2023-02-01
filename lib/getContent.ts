import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import { mergeDeep } from "./utils";

interface CmsObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function readFile(filename: string): { content: string; path: string } {
  const fileContents = fs.readFileSync(filename, "utf8");
  return { content: fileContents, path: filename };
}

function loadMarkdown(filename: string, attrs = {}) {
  const { content, path } = readFile(filename);
  const { data, content: markdown } = matter(content);

  return { ...data, markdown, _path: path, ...attrs };
}

function localizeJson(data: CmsObject, locale?: string) {
  if (!locale) return data;

  const original = JSON.parse(JSON.stringify(data));
  let ret = original[locale];
  Object.keys(data).forEach((key) => {
    ret = mergeDeep(original[key], ret);
  });

  return { ...ret, _original: data };
}

function loadJson(filename: string, locale?: string) {
  const { content, path } = readFile(filename);

  const data = JSON.parse(content);
  const localizedData = localizeJson(data, locale);

  return { ...localizedData, _path: path, _locale: locale };
}

export function getAllMarkdown(collection: string, locale?: string) {
  const collectionDirectory = join(
    process.cwd(),
    "content",
    collection,
    locale
  );
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) =>
    loadMarkdown(`${collectionDirectory}/${filename}`, { _locale: locale })
  );

  return items;
}

export function getSingleJson(
  collection: string,
  item: string,
  locale?: string
): CmsObject {
  const filename = join(process.cwd(), "content", collection, item) + ".json";
  const data = loadJson(filename, locale);

  return data;
}

export function getAllJson(collection: string, locale?: string): CmsObject {
  const collectionDirectory = join(process.cwd(), "content", collection);
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) =>
    loadJson(`${collectionDirectory}/${filename}`, locale)
  );

  return items;
}
