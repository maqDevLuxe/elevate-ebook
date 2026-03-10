import AuthorNavbar from "@/components/landing/AuthorNavbar";
import HeroSection from "@/components/landing/HeroSection";
import EndorsementsSection from "@/components/landing/EndorsementsSection";
import MasterGrid from "@/components/landing/MasterGrid";
import CareerFramework from "@/components/landing/CareerFramework";
import ChaptersAccordion from "@/components/landing/ChaptersAccordion";
import AuthorJourney from "@/components/landing/AuthorJourney";
import FreeChapterPreview from "@/components/landing/FreeChapterPreview";
import CinematicPortrait from "@/components/landing/CinematicPortrait";
import CopiesSoldCounter from "@/components/landing/CopiesSoldCounter";
import BehindTheBook from "@/components/landing/BehindTheBook";
import PackagesSection from "@/components/landing/PackagesSection";
import SuccessStories from "@/components/landing/SuccessStories";
import PreorderFooter from "@/components/landing/PreorderFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AuthorNavbar />
      <HeroSection />
      <EndorsementsSection />
      <MasterGrid />
      <CareerFramework />
      <ChaptersAccordion />
      <AuthorJourney />
      <FreeChapterPreview />
      <CinematicPortrait />
      <CopiesSoldCounter />
      <BehindTheBook />
      <PackagesSection />
      <SuccessStories />
      <PreorderFooter />
    </div>
  );
};

export default Index;
