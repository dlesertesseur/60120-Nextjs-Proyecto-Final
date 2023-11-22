import { Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME } from "@/app/data/consfig";
import AdminHeader from "@/app/components/admin/AdminHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${APP_NAME} - Admin Panel`,
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({ children }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
