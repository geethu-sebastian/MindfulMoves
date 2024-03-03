import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex px-2 py-2 flex-col justify-between">
        <div className="flex w-[10%] px-1">
          <Image
            src="/Logo.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={50}
            height={20}
            priority
          />
          <p>Mindful Moves</p>
          <Link href="/">Home</Link>
            <Link href="/reccomendation">Recommendation</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
