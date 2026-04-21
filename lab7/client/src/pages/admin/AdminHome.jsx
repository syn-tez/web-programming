import AdminHeader from "../../components/admin/AdminHeader";
import AdminHero from "../../components/admin/AdminHero";
import AdminBrands from "../../components/admin/AdminBrands";
import AdminFutureHere from "../../components/admin/AdminFutureHere";
import AdminWhatIsChatGpt from "../../components/admin/AdminWhatIsChatGpt";
import AdminBlog from "../../components/admin/AdminBlog";
import AdminFooter from "../../components/admin/AdminFooter";
import AdminCta from "../../components/admin/AdminCta";
import AdminShowcase from "../../components/admin/AdminShowcase";

import HeroContextProvider from "../../contexts/admin/HeroContext";
import HeaderContextProvider from "../../contexts/admin/HeaderContext";
import FutureHereContextProvider from "../../contexts/admin/FutureHereContext";
import BrandsContextProvider from "../../contexts/admin/BrandsContext";
import WhatIsChatGptContextProvider from "../../contexts/admin/WhatIsChatGpt";
import BlogContextProvider from "../../contexts/admin/BlogContext";
import FooterContextProvider from "../../contexts/admin/FooterContext";
import CtaContextProvider from "../../contexts/admin/CtaContext";
import ShowcaseContextProvider from "../../contexts/admin/ShowcaseContext";

const AdminHome = () => {
  return (
    <div>
      <HeaderContextProvider>
        <AdminHeader />
      </HeaderContextProvider>
      <HeroContextProvider>
        <AdminHero />
      </HeroContextProvider>
      <BrandsContextProvider>
        <AdminBrands />
      </BrandsContextProvider>
      <WhatIsChatGptContextProvider>
        <AdminWhatIsChatGpt />
      </WhatIsChatGptContextProvider>
      <FutureHereContextProvider>
        <AdminFutureHere />
      </FutureHereContextProvider>
      <BlogContextProvider>
        <AdminBlog />
      </BlogContextProvider>
      <CtaContextProvider>
        <AdminCta />
      </CtaContextProvider>
      <ShowcaseContextProvider>
        <AdminShowcase />
      </ShowcaseContextProvider>
      <FooterContextProvider>
        <AdminFooter />
      </FooterContextProvider>
    </div>
  );
};

export default AdminHome;
