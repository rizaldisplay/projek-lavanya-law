'use client'
import React from "react";
import Image from "next/image";
import ShinyText from "./ShinyText";
import { NavigatablePageProps } from "@/app/types";

export const HomePage: React.FC<NavigatablePageProps> = ({
  onNavigate,
  isActive,
}) => {
  return (
    <div
      className={`halaman flex flex-col items-center justify-center text-center ${
        isActive ? "translate-x-0 is-active" : "-translate-x-full"
      }`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="/assets/pillar.webp"
          alt="Pilar brand"
          width={460} // natural max size
          height={97} // jaga rasio
          priority
          sizes="(min-width: 640px) 460px, 280px"
          className="h-auto w-[280px] sm:w-[460px]"
        />

        <div className="sm:w-auto">
          <button
            onClick={() => onNavigate("menu")}
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium transition-colors hover:border-transparent hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:border-white/20 dark:hover:bg-neutral-900 dark:focus-visible:ring-white/50 cursor-pointer px-4 py-2 rounded"
          >
            <ShinyText
              text="Jelajahi Layanan Kami"
              speed={3}
              className="custom-class"
            />
          </button>
        </div>
      </main>
    </div>
  );
};
