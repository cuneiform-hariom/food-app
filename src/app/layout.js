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
        <body suppressHydrationWarning={true} className={inter.className}>
          {/* <ToastContainer /> */}
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
