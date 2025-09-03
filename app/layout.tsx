import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mujer Indomable - Programa de Empoderamiento Femenino",
  description:
    "Descubre tu poder interior y transforma tu vida con Mujer Indomable",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayout>
      {/* Meta Pixel - carrega após interação para não bloquear a renderização */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2234245350355431');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2234245350355431&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {children}
    </ClientLayout>
  );
}
