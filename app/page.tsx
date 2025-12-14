import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import Service from "@/components/containers/HomeOne/Service";
import About from "@/components/containers/HomeOne/About";
import Case from "@/components/containers/HomeOne/Case";
import Offer from "@/components/containers/HomeOne/Offer";
import Brand from "@/components/containers/HomeOne/Brand";
import Process from "@/components/containers/HomeOne/Process";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <Service />
      <About />
      <Case />
      <Offer />
      <Brand />
      <Process />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
