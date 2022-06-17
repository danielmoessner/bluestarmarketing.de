export type Markdown<T> = { html: string; _path: string; frontmatter: T };

export type BlurImage = {
  imageProps: {
    src: string;
    width: number;
    height: number;
    type: string;
    blurDataURL: string;
  };
};
