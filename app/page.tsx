"use client";

import { useState } from 'react';
import { PageName } from './types'; // Adjust the import path as necessary

// Impor semua komponen halaman
import { HomePage } from '@/components/HomePage';
import { MenuPage } from '@/components/MenuPage';
import { PenangananPage } from '@/components/PenangananPage';
import { PermohonanPage } from '@/components/PermohonanPage';
import { KonsultasiPage } from '@/components/KonsultasiPage';

export default function Page() {
  const [activePage, setActivePage] = useState<PageName>("utama");

  const handleNavigate = (page: PageName) => setActivePage(page);
  const handleGoBack = (page: PageName) => setActivePage(page);

  return (
    <>
      <main className="relative h-screen w-full overflow-hidden">
        <HomePage onNavigate={handleNavigate} isActive={activePage === 'utama'} />
        <MenuPage onNavigate={handleNavigate} onGoBack={handleGoBack} isActive={activePage === 'menu'} />
        <PenangananPage onGoBack={handleGoBack} isActive={activePage === 'penanganan'} />
        <PermohonanPage onGoBack={handleGoBack} isActive={activePage === 'permohonan'} />
        <KonsultasiPage onGoBack={handleGoBack} isActive={activePage === 'konsultasi'} />
      </main>
    </>
  );
}
