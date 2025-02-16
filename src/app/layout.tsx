import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import NavBar from "../components/Header";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} bg-background text-foreground`}
      >
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
