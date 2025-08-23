import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";
import Image from "next/image";
import { TbArrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import * as variants from "@/lib/motionVariants";

const perdata = [
  { label: "Perbuatan Melawan Hukum (PMH)", href: "/perdata/pmh" },
  { label: "Wanprestasi", href: "/perdata/wanprestasi" },
  { label: "Waris & Harta Bersama", href: "/perdata/waris" },
  { label: "Perceraian", href: "/perdata/perceraian" },
  { label: "Pembatalan Sertifikat Hak Milik (SHM)", href: "/perdata/shm" },
  { label: "Sengketa Niaga", href: "/perdata/niaga" },
];

const pidana = [
  { label: "Pendampingan Pidana Khusus", href: "/pidana/khusus" },
  { label: "Pendampingan Pidana Perlindungan Anak", href: "/pidana/anak" },
  { label: "Pendampingan Pidana Umum", href: "/pidana/umum" },
  { label: "Pendampingan Pidana Korupsi", href: "/pidana/korupsi" },
];

export const PenangananPage: FC<GoBackPageProps> = ({ onGoBack, isActive }) => (
  <div
    id="halaman-penanganan"
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
      <div className="absolute inset-x-3 top-3 md:inset-x-8 md:top-8 sm:top-8 z-20">
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
      <h1 className="text-balance leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-30">
        Penanganan Hukum
      </h1>

      {/* Grid responsif 1 → 2 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
        {/* Card Perdata */}
        <PracticeCard title="Perkara Perdata" items={perdata} />
        {/* Card Pidana */}
        <PracticeCard title="Perkara Pidana" items={pidana} />
      </div>
    </div>
  </div>
);

function PracticeCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <motion.section
      variants={variants.fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      aria-labelledby="judul-perdata"
      className={[
        "card p-5 sm:p-6 md:p-8 rounded-2xl",
        "bg-white/5 dark:bg-neutral-900/40 hover:bg-white/10 dark:hover:bg-neutral-900/60",
        "transition-colors duration-200 h-full flex flex-col",
      ].join(" ")}
    >
      {/* heading */}
      <h2 className="mb-4 font-serif text-2xl font-semibold text-amber-300">
        {title}
      </h2>

      {/* list */}
      <ul className="divide-y divide-white/5">
        {items.map((it, i) => (
          <li key={i}>
            <a
              href={it.href}
              className="flex items-center justify-between gap-3 py-3 text-white/85 transition"
            >
              <div className="flex items-center gap-3">
                <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-300/80 ring-2 ring-amber-300/20" />
                <span className="text-sm md:text-[15px]">{it.label}</span>
              </div>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="text-white/50"
              >
                {/* <TbArrowNarrowRight className="text-lg" /> */}
              </motion.span>
            </a>
          </li>
        ))}
      </ul>

      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition group-hover:ring-indigo-300/40" />
    </motion.section>
  );
}
