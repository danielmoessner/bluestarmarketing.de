import ProseRaw from "./ProseRaw";

interface Props {
  html: string;
  className?: string;
}

function Component({ html, className = "" }: Props) {
  return (
    <ProseRaw className={className}>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </ProseRaw>
  );
}

export default Component;
