import { FC } from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { GoBackPageProps } from "@/app/types";
import Image from "next/image";
import { TbArrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import * as variants from "@/lib/motionVariants";

type Item = { label: string; href: string };

const items: Item[] = [
  { label: "Beda Nama", href: "/permohonan/beda-nama" },
  { label: "Akta Kelahiran", href: "/permohonan/akta-kelahiran" },
  { label: "Pengakuan Anak", href: "/permohonan/pengakuan-anak" },
  { label: "Ahli Waris", href: "/permohonan/ahli-waris" },
  { label: "Kuasa Wali", href: "/permohonan/kuasa-wali" },
  { label: "Isbat Nikah", href: "/permohonan/isbat-nikah" },
  { label: "Akta Kematian", href: "/permohonan/akta-kematian" },
  { label: "Asal Usul Anak", href: "/permohonan/asal-usul-anak" },
  { label: "Dispensasi Nikah", href: "/permohonan/dispensasi-nikah" },
];

const cols = 3;
const chunkSize = Math.ceil(items.length / cols);
const columns = Array.from({ length: cols }, (_, i) =>
  items.slice(i * chunkSize, i * chunkSize + chunkSize)
);

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
      <h2 className="text-balance leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
        Permohonan
      </h2>

      <PracticeCard title="Permohonan" items={items} />
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
      {/* <h2 className="mb-4 font-serif text-2xl font-semibold text-amber-300">
        {title}
      </h2> */}

      {/* list */}
      <ul className="grid gap-1 md:grid-cols-3">
        {columns.map((col, ci) => (
          <div key={ci} className="divide-y divide-white/5">
            {col.map((it) => (
              <li key={it.href}>
                <a
                  // href={it.href}
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
          </div>
        ))}
      </ul>

      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition group-hover:ring-indigo-300/40" />
    </motion.section>
  );
}
