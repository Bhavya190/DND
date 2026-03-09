import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import React from "react";

export const metadata: Metadata = {
  title: "DND CAFE | Premium Specialty Coffee",
  description: "Experience the ultimate tranquility and exceptional artisanal coffee at DND Cafe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return React.createElement("html", { lang: "en" },
    React.createElement("body", null,
      React.createElement(Providers, null,
        React.createElement(Navbar, null),
        React.createElement("main", null, children),
        React.createElement(Footer, null)
      )
    )
  );
}
