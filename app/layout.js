import "./globals.css";

export const metadata = {
  title: "Shivam Kumar — Staff Fullstack Engineer | Agentic AI",
  description:
    "Staff Fullstack Engineer with 11+ years building high-traffic web platforms across frontend and backend, now building agentic AI systems (Code Crafter, GullyScore).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
