import { Metadata } from "next";
import "./globals.scss";
import { TheHeader } from "../components/TheHeader";
import { TheFooter } from "../components/TheFooter";

import { StoreProvider } from "../store/StoreProvider";

export const metadata: Metadata = {
    title: 'Билетопоиск',
    description: 'Билетопоиск. Ищешь билет? Иди своей дорогой, Сталкер'
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body>
                <StoreProvider>
                    <TheHeader />
                    <main className="main">{children}</main>
                    <TheFooter />
                </StoreProvider>
            </body>
        </html>
    )
}