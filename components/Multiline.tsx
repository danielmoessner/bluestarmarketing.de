interface Props {
  text: string;
  className?: string;
  spaceClass?: string;
}

function Component({ text, className, spaceClass = "space-y-2" }: Props) {
  return (
    <div className={className}>
      <div className={spaceClass}>
        {text.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Component;
