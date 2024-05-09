import { Inter } from "next/font/google";
import "@/utils/css/globals.css";
import RestaurantHeader from "@/components/RestaurantHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Food App",
    description: "Order food online",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RestaurantHeader />
                {children}
            </body>
        </html>
    );
}
