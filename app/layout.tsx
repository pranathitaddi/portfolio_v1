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
  title: "Pranathi Taddi",
  description: "Full Stack AI Developer | IIT Kharagpur",
  keywords: [
    "Pranathi Taddi",
    "Full Stack Developer",
    "AI Developer",
    "IIT Kharagpur",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Machine Learning",
    "Data Science",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pranathi Taddi",
              "jobTitle": "Full Stack AI Developer",
              "description": "Dual Degree in Civil Engineering with Minor in CS and AI/ML at IIT Kharagpur. Full stack developer with focus on data science and ML.",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://github.com/pranathitaddi",
                "https://linkedin.com/in/pranathi-taddi-662ab027b"
              ],
              "knowsAbout": [
                "Python", "C++", "JavaScript", "TypeScript", "Java", "C", "HTML/CSS",
                "Next.js", "Node.js", "Express.js", "Redux", "Flask", "Django", "Angular", "PyTorch", "TensorFlow", "Keras", "Spring Boot",
                "Git", "GitHub", "MongoDB", "Firebase", "Tailwind CSS", "ShadCN", "ABAQUS", "Jupyter", "Linux"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
