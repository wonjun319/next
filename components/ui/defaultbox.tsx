'use client'

import Link from "next/link";
interface Props {
    height: number;
    text:string;
    href:string;
  }
export default function Defaultbox({ href, height, text }: Props) {
    return(
        <div className={`w-[70%] rounded-full flex justify-center items-center`}  style={{ height: `${height}px`,backgroundColor: "#FFFFF0", }}>
            <Link href={href} className="px-4 py-2 text-lg font-semibold">
  {text}
</Link>
        </div>


    );
}