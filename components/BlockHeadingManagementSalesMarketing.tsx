function BlockHeadingManagementSalesMarketing({ block }) {
  return (
    <div className="text-center">
      <h2 className="text-5xl">
        Management <span className="font-rose text-bsm-ocean">&</span> Sales{" "}
        <span className="font-rose text-bsm-ocean">&</span> Marketing
      </h2>
      <div className="text-xl tracking-wide uppercase">{block.subtitle}</div>
    </div>
  );
}

export default BlockHeadingManagementSalesMarketing;
