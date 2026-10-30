"use client";
import PageBanner from "@/components/PageBanner";
import PlusMinusBtn from "@/components/PlusMinusBtn";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Shopping Cart"} />
      <section className="shopping-cart-area py-130 rel z-1">
        <div className="container">
          <div className="shoping-table mb-50 wow fadeInUp delay-0-2s">
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="assets/images/widgets/news1.jpg" alt="Product" />
                  </td>
                  <td>
                    <span className="title">Shopping Cart</span>
                  </td>
                  <td>
                    <span className="price">70</span>
                  </td>
                  <td>
                    <PlusMinusBtn />
                  </td>
                  <td>
                    <b className="price">70</b>
                  </td>
                  <td>
                    <button type="button" className="close">
                      ×
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/images/widgets/news2.jpg" alt="Product" />
                  </td>
                  <td>
                    <span className="title">Chicken Soup</span>
                  </td>
                  <td>
                    <span className="price">65</span>
                  </td>
                  <td>
                    <PlusMinusBtn />
                  </td>
                  <td>
                    <b className="price">130</b>
                  </td>
                  <td>
                    <button type="button" className="close">
                      ×
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/images/widgets/news3.jpg" alt="Product" />
                  </td>
                  <td>
                    <span className="title">Red king Crab</span>
                  </td>
                  <td>
                    <span className="price">80</span>
                  </td>
                  <td>
                    <PlusMinusBtn />
                  </td>
                  <td>
                    <b className="price">80</b>
                  </td>
                  <td>
                    <button type="button" className="close">
                      ×
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row text-center text-lg-left align-items-center">
            <div className="col-lg-6">
              <div className="discount-wrapper mb-30 wow fadeInLeft delay-0-2s">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="d-sm-flex justify-content-center justify-content-lg-start"
                >
                  <input type="text" placeholder="Coupon Code" required="" />
                  <button className="theme-btn flex-none" type="submit">
                    apply Coupon <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="update-shopping mb-30 text-lg-end wow fadeInRight delay-0-2s">
                <Link href="shop" className="theme-btn style-two my-5">
                  shopping <i className="fas fa-angle-double-right" />
                </Link>
                <Link href="shop" className="theme-btn my-5">
                  update cart <i className="fas fa-angle-double-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="shoping-cart-total pt-20 wow fadeInUp delay-0-2s">
                <h4 className="form-title mb-25 text-center">Cart Totals</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>
                        <span className="price">280</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping Fee</td>
                      <td>
                        <span className="price">10.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <b className="price">290</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  href="checkout"
                  className="theme-btn style-two mt-25 w-100"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};
export default page;
