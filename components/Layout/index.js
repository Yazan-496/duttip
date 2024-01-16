import Header from "./Header";
import Footer from "./Footer";
import CategoryNav from "./Header/CategoryNav";
import hospitality from "public/svg/hospitality.svg"
import hospitalityLight from "public/svg/hospitalityLight.svg"
import health from "public/svg/health.svg"
import healthLight from "public/svg/healthLight.svg"
import packaging from "public/svg/packaging.svg"
import packagingLight from "public/svg/packagingLight.svg"
import industrial from "public/svg/industrial.svg"
import industrialLight from "public/svg/industrialLight.svg"
import construction from "public/svg/construction.svg"
import constructionLight from "public/svg/constructionLight.svg"
import auto from "public/svg/auto.svg"
import autoLight from "public/svg/autoLight.svg"
import electronics from "public/svg/electronics.svg"
import electronicsLight from "public/svg/electronicsLight.svg"
import home from "public/svg/home.svg"
import homeLight from "public/svg/homeLight.svg"

const categories = [
  {
    id: 0,
    name: "Hospitality",
    qty: "2800",
    icon: hospitality,
    iconLight: hospitalityLight,
  },
  {
    id: 2,
    name: "Health & Beauty",
    qty: "2800",
    icon: health,
    iconLight: healthLight,
  },
  {
    id: 3,
    name: "Packaging",
    qty: "2800",
    icon: packaging,
    iconLight: packagingLight,
  },
  {
    id: 4,
    name: "Industrial",
    qty: "2800",
    icon:  industrial ,
    iconLight:  industrialLight ,
  },
  {
    id: 5,
    name: "Construction",
    qty: "2800",
    icon:  construction ,
    iconLight:  constructionLight ,
  },
  {
    id: 6,
    name: "Auto",
    qty: "2800",
    icon:  auto ,
    iconLight:  autoLight ,
  },
  {
    id: 7,
    name: "Electronics",
    qty: "2800",
    icon:  electronics ,
    iconLight:  electronicsLight ,
  },
  {
    id: 8,
    name: "Home",
    qty: "2800",
    icon:  home ,
    iconLight:  homeLight ,
  },
];

const Layout = ({ categoriesJson, isShowCategory, children }) => {
  return (
    <>
      <Header
        isShowCategory={isShowCategory}
        categories={categories}
        categoriesJson={categoriesJson}
      />
      {isShowCategory && <CategoryNav categories={categories} />}
      <main className=" w-full bg-white px-[0px] md:px-[100px] lg:px-[200px] flex items-start justify-center min-h-screen">
        <div className="w-full lg:w-[1520px] flex items-start justify-center ">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
