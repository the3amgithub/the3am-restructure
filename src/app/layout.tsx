import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FavIcon from "../../public/favicon/favicon.ico";
import { Provider } from "@/client/Provider";
const inter = Inter({ subsets: ["latin"] });
export const size = {
  width: 32,
  height: 32,
};
export const metadata: Metadata = {
  title: "THE 3:AM PROJECT",
  icons: [
    {
      rel: "icon",
      url: FavIcon.src,
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
