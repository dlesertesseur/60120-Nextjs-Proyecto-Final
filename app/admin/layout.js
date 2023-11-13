import { Inter } from "next/font/google";
import AdminHeader from "../components/admin/AdminHeader";
import { APP_DESCRIPTION, APP_NAME } from "../data/consfig";

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
