'use client'

import Link from "next/link";
interface Props {
    height: number;
    text:string;
  }
export default function Profilebox({ height, text }: Props) {
    return(
        <div className={`w-[70%] rounded-full bg-white flex justify-center items-center`}  style={{ height: `${height}px` }}>
            <Link href='https://blog.naver.com/kt6062002'>
                <span>{text}</span>
            </Link>
        </div>


    );
}