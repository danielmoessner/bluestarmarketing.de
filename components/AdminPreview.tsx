import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function Component({ children }: Props) {
  useEffect(() => {
    const style: HTMLStyleElement | undefined = document.querySelector("style");
    const iframe: HTMLIFrameElement | undefined =
      document.querySelector("#preview-pane");
    const link: HTMLLinkElement | undefined = document.querySelector(
      "link[rel='stylesheet']",
    );
    if (iframe && style && style.innerHTML)
      iframe.contentDocument.head.appendChild(style.cloneNode(true));
    if (iframe && link)
      iframe.contentDocument.head.appendChild(link.cloneNode(true));
  }, []);

  return <>{children}</>;
}

export default Component;
