import React from "react";
import Image from "next/image";
import ShinyText from "./ShinyText";

function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="/assets/pillar.svg"
          alt="Pilar brand"
          width={360}
          height={76}
          priority
          sizes="(min-width: 640px) 460px, 280px"
          className="h-auto w-[280px] sm:w-[460px]"
        />

        <div className="sm:w-auto">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium transition-colors hover:border-transparent hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:border-white/20 dark:hover:bg-neutral-900 dark:focus-visible:ring-white/50"
          >
            <ShinyText text="Jelajahi Layanan Kami" speed={3} className="custom-class" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
