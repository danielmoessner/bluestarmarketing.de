import Image from "next/image";

export default function ManagementSalesMarketing() {
  return (
    <div>
      <div className="flex items-center flex-wrap text-[1.7rem] tracking-tight leading-none uppercase">
        <span>Management</span>
        <div className="flex-shrink-0 w-5 ml-1 mr-0.5">
          <Image
            width={151}
            height={177}
            src="/herz_und_gross.png"
            alt="& Zeichen"
          />
        </div>
        <span>Sales</span>
        <div className="flex-shrink-0 w-5 ml-1 mr-0.5">
          <Image
            width={151}
            height={177}
            src="/herz_und_gross.png"
            alt="& Zeichen"
          />
        </div>
        <span>Marketing</span>
      </div>
    </div>
  );
}
