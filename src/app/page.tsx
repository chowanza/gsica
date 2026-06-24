import { LanguageProvider } from "@/context/LanguageContext";
import ConstructionPage from "@/components/ConstructionPage";

export default function Home() {
  return (
    <LanguageProvider>
      <ConstructionPage />
    </LanguageProvider>
  );
}
