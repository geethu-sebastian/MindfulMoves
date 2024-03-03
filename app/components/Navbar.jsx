import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex px-2 py-2 flex-col">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
