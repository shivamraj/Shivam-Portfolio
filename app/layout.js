import "./globals.css";

export const metadata = {
  title: "Shivam Kumar — Staff Frontend Engineer",
  description:
    "Staff Frontend Engineer with 11+ years leading React, Next.js, and GCP architecture at scale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
