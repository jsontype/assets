"use client";
import FoodCategory from "@/components/FoodCategory";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const page = () => {
  const faqItems = [
    {
      id: 1,
      title: "What is your restaurant's cuisine or specialty?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 2,
      title: "What are your hours of operation?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 3,
      title: "Do you have a dress code?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 4,
      title: "Can you accommodate dietary restrictions or food allergies?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 5,
      title: "Do you have a corkage fee for bringing in our own wine?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 6,
      title: "Do you have any special promotions or discounts?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 7,
      title: "How can I contact you for further inquiries?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 8,
      title: "Do you have any current promotions or special offers?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 9,
      title: "Do you host private events or parties?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 10,
      title: "What payment methods do you accept?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
    {
      id: 11,
      title: "Can I bring my own wine, and is there a corkage fee?",
      content:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudanti totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae dicta sunt explicaboemo enim ipsam",
    },
  ];
  const [active, setActive] = useState("collapse1");
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Faq"} />
      <section className="faq-area pt-130 rpt-100 pb-120 rpb-90 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-content-part rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="col-lg-9">
                    <div className="section-title mb-50">
                      <span className="sub-title mb-5">faqs</span>
                      <h2>
                        Have Any Questions On Mind frequently asked questions ?
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/about/faq.jpg" alt="FAQ" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="fpq-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Accordion
                  className="accordion"
                  id="faq-accordion"
                  defaultActiveKey={active}
                >
                  {faqItems.map((faq) => (
                    <div className="accordion-item" key={faq.id}>
                      <h5 className="accordion-header">
                        <Accordion.Toggle
                          as={"button"}
                          className={`accordion-button ${
                            active == `collapse${faq.id}` ? "" : "collapsed"
                          }`}
                          eventKey={`collapse${faq.id}`}
                          onClick={() =>
                            setActive(
                              active == `collapse${faq.id}`
                                ? null
                                : `collapse${faq.id}`
                            )
                          }
                        >
                          {faq.title}
                        </Accordion.Toggle>
                      </h5>
                      <Accordion.Collapse
                        eventKey={`collapse${faq.id}`}
                        className="accordion-collapse "
                      >
                        <div className="accordion-body">
                          <p>{faq.content}</p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Headline />
      <FoodCategory />
    </WellFoodLayout>
  );
};
export default page;
