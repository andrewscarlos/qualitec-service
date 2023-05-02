import { Navbar } from "@/shared/components/Navbar";
import { AppThemeProvider } from "@/shared/contexts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AppThemeProvider>
  );
}
