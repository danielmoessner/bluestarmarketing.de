interface Props {
  children: React.ReactNode;
  layout: "sm" | "md" | "lg";
}

function Container({ children, layout }: Props) {
  let maxWidth = "";
  if (layout === "sm") {
    maxWidth = "max-w-[1080px]";
  } else if (layout === "md") {
    maxWidth = "max-w-7xl";
  } else if (layout === "lg") {
    maxWidth = "max-w-8xl";
  }
  return (
    <div className={`px-3 sm:px-6 lg:px-8`}>
      <div className={`${maxWidth} mx-auto`}>{children}</div>
    </div>
  );
}

export default Container;
