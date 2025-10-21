import Index from "@/components/Index";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Matt Williams - Full-Stack Developer & Designer",
  description:
    "Portfolio website of Matt Williams, showcasing full-stack development and design projects.",
  keywords: [
    "Matt Williams",
    "Full-Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "HTML",
    "Graphic Design",
  ],
  authors: [{ name: "Matt Williams", url: "https://matt-williams.net" }],
};

export default function Page() {
  return <Index />;
}
