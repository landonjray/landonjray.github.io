import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landon Ray | Business, CTE & Physical Education Educator",
  description:
    "Landon Ray is a California Business/CTE and Physical Education educator who builds curriculum, career-readiness systems, and practical learning experiences grounded in business, athletics, and technology.",
  openGraph: {
    title: "Landon Ray | Business, CTE & Physical Education Educator",
    description:
      "California educator and curriculum builder connecting CTE, business, athletics, technology, and clear instructional systems.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
