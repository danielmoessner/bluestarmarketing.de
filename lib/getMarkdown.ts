import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import { Loaded, Markdown } from "../types/shared";
import md from "markdown-it";

interface Frontmatter {
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function readFile(filename, collection) {
  const fullPath = join(process.cwd(), "content", collection, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return { content: fileContents, path: fullPath };
}

function loadMarkdown<T extends Frontmatter>(path: string): Markdown<T> {
  const content = fs.readFileSync(path, "utf8");
  const { data, content: markdown } = matter(content);

  const html = md().render(markdown);

  return { frontmatter: data, html: html, _path: path } as Markdown<T>;
}

function loadFrontmatter<T extends Frontmatter>(
  filename,
  collection
): T & { _path: string } {
  const { content, path } = readFile(filename, collection);
  const { data } = matter(content);

  return { ...data, _path: path } as T & { _path: string };
}

function loadJSON<T extends Frontmatter>(
  filename,
  collection
): T & { _path: string } {
  const { content, path } = readFile(filename, collection);
  return { ...JSON.parse(content), _path: path } as T & { _path: string };
}

export function getAllMarkdown<T extends Frontmatter>(
  collection: string
): (T & { _path: string })[] {
  const collectionDirectory = join(process.cwd(), "content", collection);
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) =>
    loadFrontmatter<T>(filename, collection)
  );

  return items;
}

export function findMarkdown<T extends Frontmatter>(
  slug,
  collection
): Markdown<T> {
  const items = getAllMarkdown<T>(collection);
  const item = items.find((item) => item.slug === slug);
  return loadMarkdown<T>(item._path);
}

export function getAllJSON<T extends Frontmatter>(
  collection: string
): Loaded<T>[] {
  const collectionDirectory = join(process.cwd(), "content", collection);
  const filenames = fs.readdirSync(collectionDirectory);
  const items = filenames.map((filename) => loadJSON<T>(filename, collection));

  return items;
}
