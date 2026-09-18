import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ian Mark Esipisu | Data, Research & Digital Portfolio",
    template: "%s | Ian Mark Esipisu",
  },

  description:
    "Portfolio of Ian Mark Esipisu — data analytics, research, AI data work, financial analysis and digital projects using Power BI, SQL, Python and modern web technologies.",

  keywords: [
    "Ian Mark Esipisu",
    "Data Analytics",
    "Research",
    "Power BI",
    "SQL",
    "Python",
    "Financial Analysis",
    "AI Data Evaluation",
    "Data Annotation",
    "Web Development",
    "Next.js",
    "Kenya",
  ],

  authors: [{ name: "Ian Mark Esipisu" }],
  creator: "Ian Mark Esipisu",

  openGraph: {
    type: "website",
    title: "Ian Mark Esipisu | Data, Research & Digital Portfolio",
    description:
      "Data analytics, research, AI, financial analysis and digital projects.",
    siteName: "Ian Mark Esipisu Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ian Mark Esipisu | Data, Research & Digital Portfolio",
    description:
      "Data analytics, research, AI, financial analysis and digital projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}