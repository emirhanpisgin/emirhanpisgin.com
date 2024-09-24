import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({ weight: ["400", "700"], style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Emirhan Pişgin",
    description: "Built by Emirhan Pişgin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${courierPrime.className} antialiased min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
