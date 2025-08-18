import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";

import * as variants from "@/lib/motionVariants";

export const PenangananPage: FC<GoBackPageProps> = ({ onGoBack, isActive }) => (
  <div
    id="halaman-penanganan"
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
        Penanganan Hukum
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6 md:p-8 animated-child animation-delay-200">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--accent)" }}
          >
            Perkara Perdata
          </h3>
          <ul
            className="space-y-3"
            style={{ color: "var(--muted-foreground)" }}
          >
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Perbuatan Melawan Hukum (PMH)
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Wanprestasi
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Waris & Harta Bersama
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Perceraian
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Pembatalan Sertifikat Hak Milik (SHM)
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Sengketa Niaga
            </li>
          </ul>
        </div>
        <div className="card p-6 md:p-8 animated-child animation-delay-400">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--accent)" }}
          >
            Perkara Pidana
          </h3>
          <ul
            className="space-y-3"
            style={{ color: "var(--muted-foreground)" }}
          >
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Pendampingan Pidana Khusus
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Pendampingan Pidana Perlindungan Anak
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Pendampingan Pidana Umum
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              Pendampingan Pidana Korupsi
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
