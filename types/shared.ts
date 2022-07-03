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

type SourceImage = {
  image: string;
};

export type ImprovedImage = {
  placeholder: "blur";
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export type ImageTransformed<T> = {
  [V in keyof T]: V extends "image" ? ImprovedImage : ImageTransformed<T[V]>;
};

// const i: SourceImage = {
//   image: "test",
// };

// const o: ImageTransformed<typeof i> = {
//   src: "test",
// };

// console.log(o.src);
