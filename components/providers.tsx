"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";
import { BaseThemeTaggedType } from "@clerk/types";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <ThemedClerkProvider>
        {children}
        <ToasterProvider />
      </ThemedClerkProvider>
    </ThemeProvider>
  );
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      richColors
      closeButton
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      className="mt-16"
      duration={2000}
    />
  );
}

function ThemedClerkProvider({ children }: { children: React.ReactNode }) {
  const [clerkTheme, setClerkTheme] = useState<BaseThemeTaggedType | undefined>(
    undefined
  );
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setClerkTheme(dark);
    } else {
      setClerkTheme(undefined);
    }
  }, [resolvedTheme]);
  return (
    <ClerkProvider
      appearance={{
        baseTheme: clerkTheme,
      }}
    >
      {children}
    </ClerkProvider>
  );
}
