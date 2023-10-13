import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productsData } from "../Store/Products";
import { latestProductsData } from "../Store/LatestProducts";
import { categoriesData } from "../Store/Categories";
import { offersData } from "../Store/Offers";
import { mostDemandProductsData } from "../Store/MostDemandProducts";

import SectionOne from "../Components/MainComponents/SectionOne";
import SectionTwo from "../Components/MainComponents/SectionTwo";
import SectionThird from "../Components/MainComponents/SectionThird";
import SendMail from "../Components/MainComponents/SendMail";
import RecomendedItems from "../Components/MainComponents/RecomendedItems";
import RIheader from "../Components/MainComponents/RIheader";
import ExtraServices from "../Components/MainComponents/ExtraServices";
import SubscribeBar from "../Components/MainComponents/SubscribeBar";

import StPicOne from "../images/image92.png";
import StPicTwo from "../images/image98.png";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData()); // 5
    dispatch(latestProductsData()); // 6
    dispatch(categoriesData()); // 12
    dispatch(offersData()); // 5
    dispatch(mostDemandProductsData()); // 5 @index.js:30
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { latestProducts } = useSelector((state) => state.latestProducts);
  const { mostDemandProducts } = useSelector(
    (state) => state.mostDemandProducts
  );


  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThird
        Pdata={products}
        LPdata={latestProducts}
        img={StPicOne}
        title={"Latest products"}
      />
      <SectionThird
        Pdata={products}
        LPdata={mostDemandProducts}
        img={StPicTwo}
        title={"Most demand products"}
      />
      <SendMail />
      <RIheader text={"Recomended Items"} />
      <RecomendedItems />
      <RIheader text={"Our extra services"} />
      <ExtraServices />
      <SubscribeBar />
    </div>
  );
};

export default Main;
