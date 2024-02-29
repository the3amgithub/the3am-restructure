import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FavIcon from "../../public/favicon/favicon.ico";
import { Provider } from "@/client/Provider";
import { CMSContext } from "@/context";
import Head from "next/head";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "THE 3:AM PROJECT",
  description: "THE 3:AM PROJECT",
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
      <Head>
        <link rel="shortcut icon" sizes="180x180" href="/favicon/favicon.ico" />
        <meta property="og:image" content="../../public/favicon/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Provider>
          <CMSContext>{children}</CMSContext>
        </Provider>
      </body>
    </html>
  );
}
