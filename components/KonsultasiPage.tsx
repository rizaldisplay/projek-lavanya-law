import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";
import * as variants from "@/lib/motionVariants";

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
      <button
        onClick={() => onGoBack("menu")}
        aria-label="Kembali ke menu"
        className={[
          "group inline-flex items-center gap-2 cursor-pointer z-20",
          "fixed top-3 left-3 md:absolute md:top-8 md:left-8",
          "rounded-full border border-black/10 dark:border-white/20",
          "bg-white/80 dark:bg-black/30 backdrop-blur px-4 py-2 text-sm font-medium shadow-sm",
          "transition-all hover:border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50 focus-visible:ring-offset-2",
        ].join(" ")}
      >
        <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        <ShinyText text="Kembali" speed={3} className="custom-class" />
      </button>
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
        Kami siap membantu Anda memahami perkara Perdata, Pidana, TUN, dan Niaga.
      </motion.p>

      <motion.div
        variants={variants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className={[
          "card mx-auto w-full max-w-2xl",
          "rounded-2xl p-5 sm:p-6 md:p-8",
          "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
          "transition-colors duration-200 text-left",
        ].join(" ")}
      >
        {/* Badge GRATIS */}
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-3"
          style={{
            color: "var(--accent)",
            background:
              "color-mix(in oklab, var(--accent) 12%, transparent)",
          }}
        >
          GRATIS
        </span>

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
