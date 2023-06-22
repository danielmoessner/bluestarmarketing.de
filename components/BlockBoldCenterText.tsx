function BlockBoldCenterText({ block, padding = "pt-6" }) {
  return (
    <div className={padding}>
      <div className="text-lg font-bold leading-tight text-center whitespace-pre-line">
        {block.text}
      </div>
    </div>
  );
}

export default BlockBoldCenterText;
