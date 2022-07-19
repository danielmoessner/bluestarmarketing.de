export type ImageRendered = {
  placeholder: "blur";
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export type MarkdownRendered = {
  html: string;
};

export type RenderedMarkdown<T> = T extends object
  ? {
      [K in keyof T]: K extends "markdown"
        ? MarkdownRendered
        : RenderedMarkdown<T[K]>;
    }
  : T extends Array<infer U>
  ? RenderedMarkdown<U>[]
  : T;

export type RenderedImage<T> = T extends object
  ? {
      [K in keyof T]: K extends "image" ? ImageRendered : RenderedImage<T[K]>;
    }
  : T extends Array<infer U>
  ? RenderedImage<U>[]
  : T;

export type Rendered<T> = T extends object
  ? {
      [K in keyof T]: K extends "image"
        ? ImageRendered
        : K extends "markdown"
        ? MarkdownRendered
        : Rendered<T[K]>;
    }
  : T extends Array<infer U>
  ? Rendered<U>[]
  : T;

// const i: { image: string; markdown: string } = {
//   image: "test",
//   markdown: "test",
// };

// const o: Rendered<typeof i> = {
//   image: {
//     src: "test",
//     placeholder: "blur",
//     width: 1,
//     height: 1,
//     blurDataURL: "test",
//   } as RenderedImage,
//   markdown: {
//     html: "test",
//   } as RenderedMarkdown,
// };

// console.log(o.src);
