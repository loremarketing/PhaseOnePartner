import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Poppins, Lato, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import SmoothScrolling from "@/components/smooth-scrolling";
import { ThemeProvider } from "@/components/theme-provided";
import StickyDiscoveryButton from "@/components/ui/sticky-discovery-button";

const bricol = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PhaseOne Partners",
  description:
    "Connecting businesses with the right capital partners through strategic deal origination.",
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
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2437767633292999');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2437767633292999&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${bricol.variable} ${manrope.variable} ${poppins.variable} ${lato.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        <SmoothScrolling>
          <StickyDiscoveryButton />
          {children}
          <Footer />
        </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
