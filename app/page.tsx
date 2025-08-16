"use client";
import Home from "@/components/Home";
import Services from "@/components/Services";
import { FC, useState } from "react";

// Mendefinisikan nama-nama halaman yang valid untuk type safety
type PageName = 'utama' | 'menu' | 'penanganan' | 'permohonan' | 'konsultasi';
// Tipe dasar untuk props setiap komponen halaman
interface PageProps {
    isActive: boolean;
}

// Tipe props untuk halaman yang memiliki fungsi navigasi
interface NavigatablePageProps extends PageProps {
    onNavigate: (page: PageName) => void;
}

// Tipe props untuk halaman yang memiliki fungsi kembali
interface GoBackPageProps extends PageProps {
    onGoBack: (page: PageName) => void;
}

export default function Page() {
  const [activePage, setActivePage] = useState<PageName>("utama");

  const handleNavigate = (page: PageName) => setActivePage(page);
  const handleGoBack = (page: PageName) => setActivePage(page);

  return (
    <div>
      <main className="relative h-screen w-full overflow-hidden">
        <Home/>
        {/* <Services/> */}
      </main>
    </div>
  );
}
