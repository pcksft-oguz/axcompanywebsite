import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceSingle from "@/components/containers/service/ServiceSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import { notFound } from "next/navigation";

const services = {
  "big-data": {
    title: "Big Data",
    description: "Advanced data analytics and statistical modeling solutions"
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Custom ML models for automation and prediction"
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Enterprise AI solutions including NLP and computer vision"
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    description: "Forecast future trends with advanced statistical models"
  },
  "data-science": {
    title: "Data Science",
    description: "Neural networks and deep learning architectures"
  },
  "natural-language-processing": {
    title: "Natural Language Processing",
    description: "NLP solutions for chatbots, sentiment analysis, and text mining"
  }
};

type PageProps = {
  params: {
    slug: string;
  };
};

const page = ({ params }: PageProps) => {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title={service.title} />
      <ServiceSingle activeSlug={params.slug} />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;

