import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//TODO update
export const metadata = {
    metadataBase: new URL("https://www.newraah.com"),
    title: "NewRaah – Your Swiss Army Knife For Job" +
        " Hunting",
    description: "Build ATS-optimized resumes, reach recruiters, track applications, and grow your career — all in one tool.",
    openGraph: {
        title: "NewRaah – Your Swiss Army Knife For Job" +
            " Hunting",
        description: "The ultimate toolkit for landing your dream job.",
        url: "https://www.newraah.com",
        siteName: "NewRaah",
        images: [
            {
                url: "/newraah_icon_svg.svg",
                // /public
                width: 1200,
                height: 630,
                alt: "NewRaah – Career Toolkit",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NewRaah – Your Swiss Army Knife For Job" +
            " Hunting",
        description: "Resume builder, skill insights, recruiter outreach and more.",
        images: ["/newraah_icon_svg.svg"],
        site: "@ArnavSax", // Optional
    },
    alternates: {
        canonical: "https://www.newraah.com",
    },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <GoogleAnalytics gaId="G-N5Y7ZGS4Q4" />
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >

        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
