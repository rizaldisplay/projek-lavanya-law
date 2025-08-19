'use client'
import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "framer-motion";
import { MenuPageProps } from "@/app/types";
import { FaArrowLeft } from "react-icons/fa";
import * as variants from "@/lib/motionVariants";

export const MenuPage: FC<MenuPageProps> = ({
  onNavigate,
  onGoBack,
  isActive,
}) => (
  <div
    id="halaman-menu"
    className={[
      "halaman relative w-full min-h-dvh flex flex-col items-center justify-center",
      "px-4 sm:px-6 lg:px-8 py-14 sm:py-16",
      "text-center transition-transform duration-500 will-change-transform",
      isActive ? "translate-x-0 is-active" : "translate-x-full",
    ].join(" ")}
  >
    {/* Tombol kembali: sticky di mobile, absolute di md+ */}
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants.fadeInUp}
      className="w-full"
    >
      <button
        onClick={() => onGoBack("utama")}
        aria-label="Kembali ke halaman utama"
        className={[
          "group cursor-pointer inline-flex items-center gap-2",
          // posisi responsif
          "fixed top-3 left-3 md:absolute md:top-8 md:left-8 z-20",
          // tampilan & interaksi
          "rounded-full border border-black/10 dark:border-white/20",
          "bg-white/80 dark:bg-black/30 backdrop-blur px-4 py-2",
          "text-sm font-medium shadow-sm",
          "transition-all hover:border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50 focus-visible:ring-offset-2",
        ].join(" ")}
      >
        <FaArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        <ShinyText text="Kembali" speed={3} className="custom-class" />
      </button>
    </motion.div>

    <div className="mx-auto w-full max-w-6xl">
      <h2 className="text-balance leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
        Area Praktik Kami
      </h2>

      {/* Grid responsif: 1 → 2 → 3 kolom, auto-tinggi kartu */}
      <div
        className={[
          "grid gap-6 sm:gap-8",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          // alternatif auto-fit minmax (butuh Tailwind JIT aktif):
          // "grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
        ].join(" ")}
      >
        {/* Card 1 */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          onClick={() => onNavigate("penanganan")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? onNavigate("penanganan") : null)}
          className={[
            "card p-5 sm:p-6 cursor-pointer text-left",
            "rounded-2xl border border-white/10/0 dark:border-white/10/0",
            "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
            "transition-colors duration-200",
            "h-full flex flex-col",
          ].join(" ")}
        >
          <div className="mb-4" style={{ color: "var(--accent)" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.977M9 21h6"
              />
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-100">
            Penanganan Hukum
          </h3>
          <p className="text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
            Pendampingan komprehensif untuk perkara perdata dan pidana.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          onClick={() => onNavigate("permohonan")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? onNavigate("permohonan") : null)}
          className={[
            "card p-5 sm:p-6 cursor-pointer text-left",
            "rounded-2xl border border-white/10/0 dark:border-white/10/0",
            "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
            "transition-colors duration-200",
            "h-full flex flex-col",
          ].join(" ")}
        >
          <div className="mb-4" style={{ color: "var(--accent)" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-100">
            Permohonan
          </h3>
          <p className="text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
            Pengurusan berbagai permohonan legalitas personal dan keluarga.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          onClick={() => onNavigate("konsultasi")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? onNavigate("konsultasi") : null)}
          className={[
            "card p-5 sm:p-6 cursor-pointer text-left",
            "rounded-2xl border border-white/10/0 dark:border-white/10/0",
            "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
            "transition-colors duration-200",
            "h-full flex flex-col",
          ].join(" ")}
        >
          <div className="mb-4" style={{ color: "var(--accent)" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 01-2-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z"
              />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-100">
            Konsultasi Hukum
          </h3>
          <p className="text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
            Sesi konsultasi mendalam untuk berbagai masalah hukum.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);
