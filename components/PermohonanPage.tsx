import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";
import * as variants from "@/lib/motionVariants";

export const PermohonanPage: FC<GoBackPageProps> = ({ onGoBack, isActive }) => (
  <div
    id="halaman-permohonan"
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
      <h2 className="text-balance leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
        Permohonan
      </h2>

      <motion.section
        variants={variants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className={[
          "card p-5 sm:p-6 md:p-8 rounded-2xl",
          "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
          "transition-colors duration-200 text-left",
        ].join(" ")}
      >
        {/* Grid responsif: 1 → 2 → 3 kolom */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          style={{ color: "var(--muted-foreground)" }}
        >
          {[
            "Beda Nama",
            "Ahli Waris",
            "Akta Kematian",
            "Akta Kelahiran",
            "Kuasa Wali",
            "Asal Usul Anak",
            "Pengakuan Anak",
            "Isbat Nikah",
            "Dispensasi Nikah",
          ].map((item) => (
            <li key={item} className="flex items-start">
              <span className="mr-3 mt-1 shrink-0" style={{ color: "var(--accent)" }}>
                &rarr;
              </span>
              <span className="text-sm sm:text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  </div>
);
