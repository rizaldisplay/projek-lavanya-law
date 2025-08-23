"use client";
import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "framer-motion";
import { MenuPageProps } from "@/app/types";
import { FaArrowLeft } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { FaRocketchat } from "react-icons/fa";
import Image from "next/image";
import { HiOutlineDocumentText } from "react-icons/hi";
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
      {/* header bar menempel di sisi kiri/kanan */}
      <div className="absolute inset-x-3 top-3 md:inset-x-8 md:top-8 z-20">
        <div className="flex items-center justify-between">
          {/* LEFT: tombol kembali */}
          <button
            onClick={() => onGoBack("utama")}
            aria-label="Kembali ke halaman utama"
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
          onKeyDown={(e) =>
            e.key === "Enter" ? onNavigate("penanganan") : null
          }
          className={[
            "card p-5 sm:p-6 cursor-pointer text-left",
            "rounded-2xl border border-white/10/0 dark:border-white/10/0",
            "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
            "transition-colors duration-200",
            "h-full flex flex-col",
          ].join(" ")}
        >
          <div className="mb-4" style={{ color: "var(--accent)" }}>
            <GoLaw size={40} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-100">
            Penanganan Hukum
          </h3>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
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
          onKeyDown={(e) =>
            e.key === "Enter" ? onNavigate("permohonan") : null
          }
          className={[
            "card p-5 sm:p-6 cursor-pointer text-left",
            "rounded-2xl border border-white/10/0 dark:border-white/10/0",
            "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
            "transition-colors duration-200",
            "h-full flex flex-col",
          ].join(" ")}
        >
          <div className="mb-4" style={{ color: "var(--accent)" }}>
            <HiOutlineDocumentText size={40} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-100">
            Permohonan
          </h3>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
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
          onKeyDown={(e) =>
            e.key === "Enter" ? onNavigate("konsultasi") : null
          }
          className={[
            "card p-5 sm:p-6 cursor-pointer text-left",
            "rounded-2xl border border-white/10/0 dark:border-white/10/0",
            "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
            "transition-colors duration-200",
            "h-full flex flex-col",
          ].join(" ")}
        >
          <div className="mb-4" style={{ color: "var(--accent)" }}>
            <FaRocketchat size={40} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-100">
            Konsultasi Hukum
          </h3>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            Sesi konsultasi mendalam untuk berbagai masalah hukum.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);
