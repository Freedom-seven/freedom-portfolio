import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark w-0
          absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300
          dark:bg-light
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
  font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout classname="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-4xl px-1">
            &#9825;
          </span>
          by&nbsp;Freedom
        </div>
        <CustomLink
          href="mailto:abcd@gmail.com"
          target={"_blank"}
          className="ml-4 text-lg font-medium capitalize text-dark dark:text-light"
          title="Say Hello 👋"
        />
      </Layout>
    </footer>
  );
};

export default Footer;
