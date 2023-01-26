import React from "react";
import Link from "next/link";

export default function () {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/services">Services</Link>
        {" | "}
        <Link href="/movies">Movies</Link>
        {" | "}
        <Link href="/aboutus">AboutUs</Link>
      </nav>
    </>
  );
}
