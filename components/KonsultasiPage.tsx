import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";

import * as variants from '@/lib/motionVariants'


export const KonsultasiPage: FC<GoBackPageProps> = ({ onGoBack, isActive }) => (
  <div
    id="halaman-konsultasi"
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
      <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-child animation-delay-0">
        Konsultasi Hukum
      </h2>
      <p
        className="text-xl mb-10 animated-child animation-delay-200"
        style={{ color: "var(--muted-foreground)" }}
      >
        Kami siap membantu Anda memahami perkara Perdata, Pidana, TUN, dan
        Niaga.
      </p>
      <div className="card p-8 animated-child animation-delay-400">
        <p className="text-lg font-semibold" style={{ color: "var(--accent)" }}>
          GRATIS
        </p>
        <h3 className="text-3xl font-bold mt-1 mb-6 text-slate-100">
          Konsultasi Awal via WhatsApp
        </h3>
        <h4
          className="text-lg mb-2"
          style={{ color: "var(--muted-foreground)" }}
        >
          Hubungi Tim Ahli Kami:
        </h4>
        <p className="text-xl text-slate-200">Jamilatul Firdaus S.H, M.Kn</p>
        <p className="text-xl text-slate-200">Zaky Ubaedillah S.H</p>
        <a
          href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20berkonsultasi%20hukum%20dengan%20Lavanya%20Law%20Office."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-8 py-3 px-6 text-base"
        >
          Mulai Konsultasi Sekarang
        </a>
      </div>
    </div>
  </div>
);
