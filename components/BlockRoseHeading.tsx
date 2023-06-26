function BlockRoseHeading({ block }) {
  return (
    <div>
      <h2 className="text-5xl text-center uppercase">
        {block.titleNormal}{" "}
        <span className="normal-case font-rose">{block.titleRose} </span>
        {block.titleNormalAfter}
      </h2>
    </div>
  );
}

export default BlockRoseHeading;
