import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardProject() {
  return (
    <main className="mx-auto flex max-w-sm flex-col md:justify-center gap-5">
      <Link href="https://github.com/izzahnin">
        <section className="rounded-xl border border-gray-300 p-2 transition-all delay-75 duration-200 hover:border-blue-primary ">
          <Image
            src="/image/bg-1.svg"
            alt="Project 1"
            width={300}
            height={100}
            className="h-60 w-full rounded-md"
          />
        </section>
      </Link>
      <section>
        <h3 className="font-bold text-lg">Lorem, ipsum dolor.</h3>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi
          quos architecto earum sint.
        </p>
        <div>
          
        </div>
      </section>
    </main>
  );
}
