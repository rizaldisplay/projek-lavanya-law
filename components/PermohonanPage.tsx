import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";

import * as variants from "@/lib/motionVariants";

export const PermohonanPage: FC<GoBackPageProps> = ({ onGoBack, isActive }) => (
  <div
    id="halaman-permohonan"
    className={`halaman flex flex-col items-center justify-center text-center ${
      isActive ? "translate-x-0 is-active" : "translate-x-full"
    }`}
  >
    <div className="max-w-6xl mx-auto w-full">
      <button
        onClick={() => onGoBack("menu")}
        className="absolute top-8 left-8 inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium transition-colors hover:border-transparent hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:border-white/20 dark:hover:bg-neutral-900 dark:focus-visible:ring-white/50 cursor-pointer px-4 py-2 rounded"
      >
        <FaArrowLeft className="mr-2 transition-transform duration-200 group-hover:translate-x-1" />
        <ShinyText text="Kembali" speed={3} className="custom-class" />
      </button>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animated-child animation-delay-0">
        Permohonan
      </h2>
      <div className="card p-6 md:p-8 animated-child animation-delay-200">
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-x-8"
          style={{ color: "var(--muted-foreground)" }}
        >
          <ul className="space-y-3 break-inside-avoid-column">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Beda Nama
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Ahli Waris
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Akta Kematian
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Akta Kelahiran
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Kuasa Wali
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Asal Usul Anak
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Pengakuan Anak
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Isbat Nikah
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Dispensasi Nikah
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
