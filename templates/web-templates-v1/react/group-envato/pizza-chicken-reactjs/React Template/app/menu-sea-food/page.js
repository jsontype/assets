import { AboutUs2 } from "@/components/AboutUs";
import Headline from "@/components/Headline";
import OfferCard from "@/components/OfferCard";
import PageBanner from "@/components/PageBanner";
import RestaurantMenu from "@/components/RestaurantMenu";
import WellFoodLayout from "@/layout/WellFoodLayout";
const page = () => {
  const items = [
    {
      id: 1,
      title: "dessert",
      icon: "flaticon-cupcake",
      event: "food-tab1",
      items: [
        {
          id: 1,
          title: "beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu1.png",
        },
        {
          id: 2,
          title: "Italian pizza",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu2.png",
        },
        {
          id: 3,
          title: "Chicken roll",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu3.png",
        },
        {
          id: 4,
          title: "shawarma",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu4.png",
        },
        {
          id: 5,
          title: "Sea octopus",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu5.png",
        },
        {
          id: 6,
          title: "Beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu6.png",
        },
        {
          id: 7,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu7.png",
        },
        {
          id: 8,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu8.png",
        },
      ],
    },
    {
      id: 2,
      title: "vegetarian",
      icon: "flaticon-broccoli",
      event: "food-tab2",
      items: [
        {
          id: 3,
          title: "Chicken roll",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu3.png",
        },
        {
          id: 4,
          title: "shawarma",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu4.png",
        },
        {
          id: 1,
          title: "beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu1.png",
        },
        {
          id: 6,
          title: "Beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu6.png",
        },
        {
          id: 2,
          title: "Italian pizza",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu2.png",
        },
        {
          id: 8,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu8.png",
        },
        {
          id: 9,
          title: "Sea octopus",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu5.png",
        },
        {
          id: 10,
          title: "raw mince beef",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu8.png",
        },
      ],
    },
    {
      id: 3,
      title: "potatoes",
      icon: "flaticon-fried-potatoes",
      event: "food-tab3",
      items: [
        {
          id: 2,
          title: "Italian pizza",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu2.png",
        },
        {
          id: 3,
          title: "Chicken roll",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu3.png",
        },
        {
          id: 1,
          title: "beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu1.png",
        },
        {
          id: 4,
          title: "shawarma",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu4.png",
        },
        {
          id: 8,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu7.png",
        },
        {
          id: 5,
          title: "Sea octopus",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu5.png",
        },
        {
          id: 6,
          title: "Beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu6.png",
        },
        {
          id: 10,
          title: "raw mince beef",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu8.png",
        },
      ],
    },
    {
      id: 4,
      title: "seafood",
      icon: "flaticon-crab",
      event: "food-tab4",
      items: [
        {
          id: 5,
          title: "Sea octopus",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu5.png",
        },
        {
          id: 1,
          title: "beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu1.png",
        },
        {
          id: 2,
          title: "Italian pizza",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu2.png",
        },
        {
          id: 3,
          title: "Chicken roll",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu3.png",
        },
        {
          id: 4,
          title: "shawarma",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu4.png",
        },
        {
          id: 6,
          title: "Beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu6.png",
        },
        {
          id: 7,
          title: "raw mince beef",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu8.png",
        },
        {
          id: 8,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu7.png",
        },
      ],
    },
    {
      id: 5,
      title: "drinks",
      icon: "flaticon-poinsettia",
      event: "food-tab5",
      items: [
        {
          id: 2,
          title: "Italian pizza",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu2.png",
        },
        {
          id: 1,
          title: "beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu1.png",
        },
        {
          id: 3,
          title: "Chicken roll",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu3.png",
        },
        {
          id: 4,
          title: "shawarma",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu4.png",
        },
        {
          id: 5,
          title: "Sea octopus",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu5.png",
        },
        {
          id: 6,
          title: "Beef burger",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu6.png",
        },
        {
          id: 7,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu7.png",
        },
        {
          id: 8,
          title: "hot dog mustard",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/seafood-menu8.png",
        },
      ],
    },
  ];
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Menu Sea Food"} />
      <AboutUs2
        aboutImg1="/assets/images/about/about-four5.jpg"
        aboutImg2="/assets/images/about/about-four6.jpg"
      />
      <Headline />
      <RestaurantMenu menus={items} />
      <OfferCard />
    </WellFoodLayout>
  );
};
export default page;
