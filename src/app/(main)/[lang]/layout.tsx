import type {Metadata} from "next";
import localFont from "next/font/local";
import "../../../styles/globals.css";
import {LANGS} from "@/lib/i18n/i18n";

const geistSans = localFont({
    src: "../../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Next Food Delivery App",
    description: "The best food delivery app out there.",
};

export async function generateStaticParams() {
    // wraps langs in objects
    const langs = LANGS.map((lang) => ({
        lang: lang
    }))
    return langs;
}

export default async function RootLayout(
    {params, children}: { params: { lang: string }, children: React.ReactNode }
) {
    const {lang} = await params;
    return (
        <html lang={lang}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
