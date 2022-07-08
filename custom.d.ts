import "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module "*.md" {
  const html: string;
  const attributes: Record<string, unknown>;
  export { html, attributes };
}
