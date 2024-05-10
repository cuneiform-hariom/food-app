import { Inter } from "next/font/google";
import "@/utils/css/globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant - Food App",
  description: "Order food online",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body suppressHydrationWarning={true} className={inter.className}>
          {/* <ToastContainer /> */}
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
