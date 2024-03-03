import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex px-2 py-2 flex-col justify-between w-full h-[10%]">
        <div className="flex w-[10%] px-1">
          <Image
            src="/Logo.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={50}
            height={20}
            priority
          />
          
          <p className="text-xl text-red-400 font-semibold w-[30%]">Mindful Moves</p>
          <div>
          <Link href="/" className="flex font-semibold text-xl px-2">Home</Link>
          </div>
          <div>
            <Link href="/reccomendation" className="flex font-semibold text-xl px-2">Recommendation</Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
