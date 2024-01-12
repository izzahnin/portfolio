import React from "react";

export const SectionContact = () => {
  return (
    <main id="contact" className="flex flex-col gap-5">
      <section className="flex flex-col items-center gap-4 text-5xl md:flex-row" >
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">Contact Me</h1>
          <span className="h-3 w-3 rounded-full bg-blue-primary"></span>
        </div>
      </section>
    </main>
  );
}
