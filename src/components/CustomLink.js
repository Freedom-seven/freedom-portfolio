import Link from "next/link";
import React from "react";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark w-0
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300
            
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
