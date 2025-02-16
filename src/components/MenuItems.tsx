"use client";

import Link from "next/link";

type Props = {
  styling: string;
  textStyle: string;
};

const MenuItems = ({ styling, textStyle }: Props) => (
  <div className={styling}>
    <Link href="/" className={textStyle}>
      Home
    </Link>
    <Link href="/" className={textStyle}>
      About
    </Link>
    <Link href="/" className={textStyle}>
      Services
    </Link>
    <Link href="/" className={textStyle}>
      Contact
    </Link>
  </div>
);

export default MenuItems;
