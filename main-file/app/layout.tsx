import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "AX Company | Data Science, AI & Machine Learning Solutions",
  description: "Leading provider of Data Science, Artificial Intelligence, and Machine Learning solutions. Transform your business with cutting-edge AI technologies.",
  keywords: [
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Solutions",
    "ML Models",
    "Data Analytics",
    "Deep Learning",
    "Predictive Analytics",
  ],
  authors: [
    {
      name: "AX Company",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
