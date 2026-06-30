"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";
interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }

const LanguageContext = createContext<LangCtx>({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
