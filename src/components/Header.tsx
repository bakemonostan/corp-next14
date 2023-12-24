import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="absolute text-white w-full inset-0 z-10">
      <nav className="container relative flex flex-wrap items-center mx-auto p-8 justify-between">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance"> Performance</Link>
          <Link href="/reliability"> Reliability</Link>
          <Link href="/scale"> Scale</Link>
        </div>
      </nav>
    </header>
  );
}
