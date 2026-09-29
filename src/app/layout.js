import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),

  title: {
    default: "A Little Surprise ❤️",
    template: "%s | A Little Surprise",
  },

  description:
    "A little journey made with love, memories, music and a few surprises. ❤️",

  applicationName: "A Little Surprise",

  authors: [
    {
      name: "Someone who loves you ❤️",
    },
  ],

  creator: "Someone who loves you ❤️",

  keywords: [
    "birthday surprise",
    "birthday",
    "birthday memories",
    "birthday journey",
  ],

  openGraph: {
    title: "A Little Surprise ❤️",
    description:
      "A little journey made with love, memories, music and a few surprises. ❤️",
    type: "website",
    locale: "en_IN",
    siteName: "A Little Surprise",
  },

  twitter: {
    card: "summary_large_image",
    title: "A Little Surprise ❤️",
    description:
      "A little journey made with love, memories, music and a few surprises. ❤️",
  },

  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
