'use client'

import Link from "next/link";
interface Props {
    height: number;
    text:string;
    href:string;
  }
  
  export default function Defaultbox({ href, height, text }: Props) {
    return (
      <div
        className="relative w-[70%] rounded-full flex justify-center items-center overflow-hidden group"
        style={{ height: `${height}px`, backgroundColor: "#FFFFF0" }}
      >
        <span
          className="absolute inset-0 w-full h-full bg-blue-500 transform scale-x-0 opacity-0 origin-center transition-all duration-400 group-hover:scale-x-100 group-hover:opacity-100 group-focus:scale-x-100 group-focus:opacity-100 group-active:scale-x-100 group-active:opacity-100"
        />
        <Link
          href={href}
          className="relative px-4 py-2 text-lg font-semibold z-10 transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 group-active:scale-105"
        >
          {text}
        </Link>
      </div>
    );
  }
  