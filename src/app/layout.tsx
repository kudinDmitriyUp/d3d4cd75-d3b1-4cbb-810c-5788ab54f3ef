import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'IT Academy - Master In-Demand Tech Skills',
  description: 'Launch your career in tech with IT Academy\'s expert-led courses in software development, cybersecurity, data science, and more. Hands-on learning, career support, and industry-recognized certifications.',
  keywords: ["IT academy, tech education, software development, cybersecurity, data science, coding school, career training, tech bootcamp"],
  openGraph: {
    "title": "IT Academy - Master In-Demand Tech Skills",
    "description": "Launch your career in tech with IT Academy's expert-led courses in software development, cybersecurity, data science, and more.",
    "url": "https://itacademy.com",
    "siteName": "IT Academy",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-modern-clean-software-dashboard-interf-1774442730909-a3d74352.png",
        "alt": "IT Academy dashboard interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "IT Academy - Master In-Demand Tech Skills",
    "description": "Launch your career in tech with IT Academy's expert-led courses in software development, cybersecurity, data science, and more.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3A2kdHi1NSExmmN97qC0PBBxl6G/a-modern-clean-software-dashboard-interf-1774442730909-a3d74352.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
