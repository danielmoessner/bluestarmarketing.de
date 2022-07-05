interface Props {
  text: string;
  className?: string;
}

function Component({ text, className }: Props) {
  return (
    <div className={className}>
      <div className="space-y-2">
        {text.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Component;
