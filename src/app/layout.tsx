import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FavIcon from "../../public/favicon/favicon.ico";
import { Provider } from "@/client/Provider";
import { Layout } from "@/components/common/Layout";
import { CMSContext } from "@/context";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
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
        <Provider>
          <CMSContext>
            <Layout>{children}</Layout>
          </CMSContext>
        </Provider>
      </body>
    </html>
  );
}
