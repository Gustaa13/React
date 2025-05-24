import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/exercise/darkTheme/ThemeContext";
import { Container } from "@/components/exercise/darkTheme/Container";
import { ThemeButton } from "@/components/exercise/darkTheme/ThemeButton";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Estudos React e Next',
  description: '...',
}

/*export const generateMetadata = () => {
    return {
      title: 'Estudos React e Next'
    }
}*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Container>
            <ThemeButton />

            {children}
            
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
