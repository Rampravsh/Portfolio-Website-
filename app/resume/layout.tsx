import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Rampravesh - Full Stack • Mobile • AI Developer",
  description:
    "Professional Resume & Technical Skills of Rampravesh - Full Stack, Mobile & AI Engineer.",
  alternates: {
    canonical: "https://rampraveshkumar.vercel.app/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
