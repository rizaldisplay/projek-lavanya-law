import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";
import * as variants from "@/lib/motionVariants";

import Image from "next/image";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { TbArrowLeft, TbShieldCheck, TbClockHour4 } from "react-icons/tb";

export const KonsultasiPage: FC<GoBackPageProps> = ({ onGoBack, isActive }) => (
  <div
    id="halaman-konsultasi"
    className={[
      "halaman relative w-full min-h-dvh flex flex-col items-center justify-center",
      "px-4 sm:px-6 lg:px-8 py-14 sm:py-16",
      "text-center transition-transform duration-500 will-change-transform",
      isActive ? "translate-x-0 is-active" : "translate-x-full",
    ].join(" ")}
  >
    {/* Tombol Kembali: fixed di mobile, absolute di md+ */}
       <motion.div
      initial="hidden"
      animate="show"
      variants={variants.fadeInUp}
      className="w-full"
    >
      {/* header bar menempel di sisi kiri/kanan */}
      <div className="absolute inset-x-3 top-3 md:inset-x-8 md:top-8 z-20">
        <div className="flex items-center justify-between">
          {/* LEFT: tombol kembali */}
          <button
            onClick={() => onGoBack("menu")}
            aria-label="Kembali ke menu"
            className={[
              "group inline-flex items-center gap-2",
              "rounded-full border border-black/10 dark:border-white/20",
              "bg-white/80 dark:bg-black/30 backdrop-blur px-4 py-2",
              "text-sm font-medium shadow-sm",
              "transition hover:border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50 focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <ShinyText text="Kembali" speed={3} className="custom-class" />
          </button>

          {/* RIGHT: logo kecil & responsif */}
          <Image
            src="/assets/pillar.webp"
            alt="Pilar brand"
            width={192}
            height={40}
            priority
            sizes="(max-width:640px) 7rem, (max-width:1024px) 9rem, 12rem"
            className="h-auto w-24 sm:w-36 md:w-48"
          />
        </div>
      </div>
    </motion.div>

    <div className="max-w-6xl mx-auto w-full">
      <motion.h2
        variants={variants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="text-balance leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
      >
        Konsultasi Hukum
      </motion.h2>

      <motion.p
        variants={variants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="text-pretty text-base sm:text-lg md:text-xl mb-8 sm:mb-10"
        style={{ color: "var(--muted-foreground)" }}
      >
        Kami membantu Anda memahami perkara Perdata, Pidana, TUN, dan
        Niaga—dengan bahasa yang mudah dan solusi yang realistis.
      </motion.p>

      <motion.div
        variants={variants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className={[
          "card mx-auto w-full max-w-2xl",
          "rounded-2xl p-5 sm:p-6 md:p-8",
          // "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
          "transition-colors duration-200 text-left",
        ].join(" ")}
      >
        {/* badge + title */}
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-full bg-yellow-400/15 px-3 py-1 text-xs font-semibold tracking-wide text-yellow-300 ring-1 ring-yellow-300/30">
            GRATIS
          </span>
          <span className="text-xs text-white/60">
            Konsultasi awal 15 menit
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mt-1 mb-4 sm:mb-6 text-slate-100">
          Konsultasi Awal via WhatsApp
        </h3>

        <h4
          className="text-sm sm:text-base md:text-lg mb-2"
          style={{ color: "var(--muted-foreground)" }}
        >
          Hubungi Tim Ahli Kami:
        </h4>

        <ul className="space-y-1.5 mb-6">
          <li className="text-base sm:text-lg text-slate-200">
            Jamilatul Firdaus S.H, M.Kn
          </li>
          <li className="text-base sm:text-lg text-slate-200">
            Zaky Ubaedillah S.H
          </li>
        </ul>

        {/* trust & highlights */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <TbShieldCheck className="text-xl text-emerald-400" />
                    Privasi & kerahasiaan terjamin
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                    <TbClockHour4 className="text-xl text-sky-400" />
                    Respon cepat: <span className="font-medium">09.00–20.00 WIB</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                    <HiOutlineChatBubbleLeftRight className="text-xl text-indigo-300" />
                    Format: chat/voice call sesuai kebutuhan
                  </div>
                </div>

        <a
          href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20berkonsultasi%20hukum%20dengan%20Lavanya%20Law%20Office."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mulai konsultasi awal via WhatsApp"
          className={[
            "mt-6 sm:mt-8 inline-flex items-center justify-center",
            "w-full sm:w-auto rounded-xl px-5 py-3",
            "text-sm sm:text-base font-semibold shadow-sm",
            "bg-blue-600 hover:bg-blue-700",
            "text-white ring-1 ring-inset ring-blue-500/50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
          ].join(" ")}
        >
          Mulai Konsultasi Sekarang
        </a>
      </motion.div>
    </div>
  </div>
);

