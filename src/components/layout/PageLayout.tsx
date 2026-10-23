import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import MobileActionBar from "@/components/layout/MobileActionBar";
import ScrollObserver from "@/components/ui/ScrollObserver";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main id="main-content" className="flex-1 w-full overflow-hidden">
        {children}
      </main>
      <Footer />
      <Chatbot />
      <MobileActionBar />
    </>
  );
}
