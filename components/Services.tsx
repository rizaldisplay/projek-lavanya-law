import React from "react";

type ServicesProps = {
  onNavigate: (page: string) => void;
  onGoBack: (page: string) => void;
  isActive: boolean;
};

function Services({ onNavigate, onGoBack, isActive }: ServicesProps) {
  return (
    <div
      id="halaman-menu"
      className={`halaman flex flex-col items-center justify-center text-center ${
        isActive ? "translate-x-0 is-active" : "translate-x-full"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <button
          onClick={() => onGoBack("utama")}
          className="absolute top-8 left-8 btn btn-secondary px-4 py-2"
        >
          &larr; Kembali
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animated-child animation-delay-0">
          Area Praktik Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card Penanganan Hukum */}
          <div
            onClick={() => onNavigate("penanganan")}
            className="card p-6 cursor-pointer animated-child animation-delay-200"
          >
            <div className="mb-4" style={{ color: "var(--accent)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
            <h3 className="text-2xl font-bold mb-2 text-slate-100">
              Penanganan Hukum
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              Pendampingan komprehensif untuk perkara perdata dan pidana.
            </p>
          </div>
          {/* Card Permohonan */}
          <div
            onClick={() => onNavigate("permohonan")}
            className="card p-6 cursor-pointer animated-child animation-delay-400"
          >
            <div className="mb-4" style={{ color: "var(--accent)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
            <h3 className="text-2xl font-bold mb-2 text-slate-100">
              Permohonan
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              Pengurusan berbagai permohonan legalitas personal dan keluarga.
            </p>
          </div>
          {/* Card Konsultasi Hukum */}
          <div
            onClick={() => onNavigate("konsultasi")}
            className="card p-6 cursor-pointer animated-child animation-delay-600"
          >
            <div className="mb-4" style={{ color: "var(--accent)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-100">
              Konsultasi Hukum
            </h3>
            <p style={{ color: "var(--muted-foreground)" }}>
              Sesi konsultasi mendalam untuk berbagai masalah hukum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
