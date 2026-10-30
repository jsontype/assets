"use client";
import { Nav, Tab } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <div className="food-menu-item style-two">
      <div className="image">
        <img src={item.img} alt="Food Menu" />
      </div>
      <div className="content">
        <h5>
          <span className="title">{item.title}</span> <span className="dots" />{" "}
          <span className="price">${item.price}</span>
        </h5>
        <p>{item.decs}</p>
      </div>
    </div>
  );
};

const RestaurantMenu = ({ menus }) => {
  const items = menus
    ? menus
    : [
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
              img: "assets/images/food/rm-food1.png",
            },
            {
              id: 2,
              title: "Italian pizza",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 3,
              title: "Chicken roll",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food3.png",
            },
            {
              id: 4,
              title: "shawarma",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food4.png",
            },
            {
              id: 5,
              title: "Sea octopus",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food5.png",
            },
            {
              id: 6,
              title: "Beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food6.png",
            },
            {
              id: 7,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food7.png",
            },
            {
              id: 8,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food8.png",
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
              img: "assets/images/food/rm-food3.png",
            },
            {
              id: 4,
              title: "shawarma",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food4.png",
            },
            {
              id: 1,
              title: "beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food1.png",
            },
            {
              id: 6,
              title: "Beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food6.png",
            },
            {
              id: 2,
              title: "Italian pizza",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 8,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food8.png",
            },
            {
              id: 9,
              title: "Sea octopus",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food5.png",
            },
            {
              id: 10,
              title: "raw mince beef",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food8.png",
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
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 3,
              title: "Chicken roll",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food3.png",
            },
            {
              id: 1,
              title: "beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food1.png",
            },
            {
              id: 4,
              title: "shawarma",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food4.png",
            },
            {
              id: 8,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food7.png",
            },
            {
              id: 5,
              title: "Sea octopus",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food5.png",
            },
            {
              id: 6,
              title: "Beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food6.png",
            },
            {
              id: 10,
              title: "raw mince beef",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food8.png",
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
              img: "assets/images/food/rm-food5.png",
            },
            {
              id: 1,
              title: "beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food1.png",
            },
            {
              id: 2,
              title: "Italian pizza",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 3,
              title: "Chicken roll",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food3.png",
            },
            {
              id: 4,
              title: "shawarma",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food4.png",
            },
            {
              id: 6,
              title: "Beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food6.png",
            },
            {
              id: 7,
              title: "raw mince beef",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food8.png",
            },
            {
              id: 8,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food7.png",
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
              img: "assets/images/food/rm-food2.png",
            },
            {
              id: 1,
              title: "beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food1.png",
            },
            {
              id: 3,
              title: "Chicken roll",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food3.png",
            },
            {
              id: 4,
              title: "shawarma",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food4.png",
            },
            {
              id: 5,
              title: "Sea octopus",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food5.png",
            },
            {
              id: 6,
              title: "Beef burger",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food6.png",
            },
            {
              id: 7,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food7.png",
            },
            {
              id: 8,
              title: "hot dog mustard",
              price: "25",
              decs: "Diverse menu features array delectable",
              img: "assets/images/food/rm-food8.png",
            },
          ],
        },
      ];

  return (
    <section className="restaurant-menu-area pb-100 rpb-70 rel z-1">
      <div className="container container-1050">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">popular menu</span>
              <h2>
                we provide exclusive food based on usa explore our popular food
              </h2>
            </div>
          </div>
        </div>
        <Tab.Container defaultActiveKey={"food-tab1"}>
          <Nav
            as={"ul"}
            className="nav food-menu-tab mb-40"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {items.map((menu) => (
              <Nav.Item as={"li"} key={menu.id}>
                <Nav.Link
                  as={"button"}
                  className="nav-link"
                  eventKey={menu.event}
                >
                  <i className={menu.icon} />
                  <span>{menu.title}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content className="food-menu-tab-content tab-content">
            {items.map((menu) => (
              <Tab.Pane
                className="tab-pane fade"
                eventKey={menu.event}
                key={menu.id}
              >
                <div className="row gap-90">
                  <div
                    className="col-lg-6 pb-30"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    {menu.items.map((item, i) => i < 4 && <Item item={item} />)}
                  </div>
                  <div
                    className="col-lg-6 pb-30"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    {" "}
                    {menu.items.map(
                      (item, i) => i >= 4 && <Item item={item} />
                    )}
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
      <div className="testimonials-shapes">
        <div className="shape one">
          <img src="assets/images/shapes/chicken-menu1.png" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="assets/images/shapes/chicken-menu2.png" alt="Shape" />
        </div>
      </div>
    </section>
  );
};
export default RestaurantMenu;
