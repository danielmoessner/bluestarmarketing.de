interface Props {
  html: string;
  className?: string;
}

function Component({ html, className = "" }: Props) {
  return (
    <div
      className={
        "prose prose-p:my-2 prose-a:text-bsm-faince prose-ul:list-none prose-ul:mt-3 prose-ul:mb-5 prose-ul:pl-0 prose-p:[nth-child(1)]:mt-0 prose-li:relative prose-li:pl-7 prose-li:before:left-1 prose-li:before:top-1 prose-li:before:absolute prose-li:before:bg-[url('/stern_klein.svg')] prose-li:before:w-4 prose-li:before:bg-no-repeat prose-li:before:inline-block prose-li:before:h-4 max-w-none " +
        className
      }
    >
      <div
        className="-mt-2"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}

export default Component;
