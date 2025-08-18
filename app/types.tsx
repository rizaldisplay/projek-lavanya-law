// Mendefinisikan nama-nama halaman yang valid untuk type safety
export type PageName = 'utama' | 'menu' | 'penanganan' | 'permohonan' | 'konsultasi';

// Tipe dasar untuk props setiap komponen halaman
export interface PageProps {
    isActive: boolean;
}

// Tipe props untuk halaman yang memiliki fungsi navigasi
export interface NavigatablePageProps extends PageProps {
    onNavigate: (page: PageName) => void;
}

// Tipe props untuk halaman yang memiliki fungsi kembali
export interface GoBackPageProps extends PageProps {
    onGoBack: (page: PageName) => void;
}

// Tipe props untuk halaman menu yang memiliki keduanya
export interface MenuPageProps extends NavigatablePageProps, GoBackPageProps {}
