import Image from "next/image";
import Link from "next/link";
import "../home.css";
import "./about3.css";
import "../about/about.css";
import { myFunction } from "../function";
import SubscribeButton from "../components/SubscribeButtion";

export default function Home() {
  return (
    <>
      {/* <div class="all"> */}
    <div className="fix">
        <div className="head">
          <p>
            <Link href="../../" className="title">
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772187/logo2_zqjlxs.png"
                width="200px"
                height="150px"
              />
            </Link>
            <Link href="#">
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772208/search_tyertz.png"
                className="main1"
              />
            </Link>
            <Link href="/cart">
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772209/shopping-cart_sroitn.png"
                className="main1"
              />
            </Link>
            <Link href="#">
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772216/user_ey4xfx.png"
                className="main1"
              />
            </Link>
          </p>
        </div>
        <div className="promotion">
          <div className="marquee">
            <p className="pro">
              {" "}
              Pure Love from May sale!! Up to 30% to any devices purchase(From
              May 1st - May 31, 2023) Pure Love from May sale!! Up to 30% to any
              devices purchase(From May 1st - May 31, 2023){" "}
            </p>
          </div>
        </div>
        <div className="hehe">
          <div className="taskbar">
            <span>
              Mobile Phone{" "}
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png"
                className="arrow"
              />
            </span>
            <div className="taskbar-content">
              <a href="phone1.html" className="g">
                <p>iPhone</p>
              </a>
              <a href="phone2.html" className="g">
                <p>Samsung</p>
              </a>
              <a href="phone3.html" className="g">
                <p>Huawei</p>
              </a>
            </div>
          </div>
          <div className="taskbar3">
            <span>
              Smart Watch{" "}
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png"
                className="arrow"
              />
            </span>
            <div className="taskbar-content3">
              <a href="watch1.html" className="g">
                <p>Apple</p>
              </a>
              <a href="watch2.html" className="g">
                <p>Samsung</p>
              </a>
            </div>
          </div>
          <div className="taskbar2">
            <span>
              Notebook{" "}
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png"
                className="arrow"
              />
            </span>
            <div className="taskbar-content2">
              <a href="laptop2.html" className="g">
                <p>Asus</p>
              </a>
              <a href="laptop3.html" className="g">
                <p>Lenovo</p>
              </a>
              <a href="laptop1.html" className="g">
                <p>Macbook</p>
              </a>
              <a href="laptop4.html" className="g">
                <p>MSI gaming</p>
              </a>
            </div>
          </div>
          {/* <div class="taskbar3">
				<span>Smart Watch <img src="./photo/down-arrow.png" class="arrow"></span>
				<div class="taskbar-content3">
					<a href="about.html" class="g"><p>Apple</p></a>
					<a href="about.html" class="g"><p>Samsung</p></a>
					<a href="about.html" class="g"><p>Huawei</p></a>
					
					
				</div>
			</div> */}
          <a href="about3.html" className="t">
            <span>FAQS</span>
          </a>
          <a href="about" className="t">
            <span>Location</span>
          </a>
          <a href="about1.html" className="t">
            <span>About Micro IT</span>
          </a>
          <a href="about2" className="t">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <>
<div className="main">
  <div className="faq">
    <h1>Shipping</h1>
    <span>Do we Ship overseas?</span>
    <p>
      At the moment, we don't ship outside Myanmar. Sorry for the inconvenience.
      We will try to expand our services soon.
    </p>
    <br />
    <span>Do you ship nationwide?</span>
    <p>
      Yes, we ship all over the country. Shipping costs apply depending upon
      size and the shipping address. We run discounts and promotions all year,
      so stay tuned for more exclusive deals.
    </p>
    <br />
    <span>How long will it take to get my order?</span>
    <p>
      It depends on where you are. For most of the major cities and townships in
      Myanmar, orders processed here will take 1-3 business days to arrive.
      Other areas can take from 2-5 days.Delivery details will be provided in
      your confirmation email or mobile.
    </p>
    <br />
    <span>What shipping carriers do you use?</span>
    <p>
      We use all major carriers, and local courier partners. You’ll be asked to
      select a delivery method during checkout..
    </p>
    <br />
  </div>
  <br />
  <div className="faq">
    <h1>Product</h1>
    <span>Can I return my product?</span>
    <p>
      We always aim for make sure our customers love our products, but if you do
      need to return an order, we’re happy to help. Just email us directly and
      we’ll take you through the process.
    </p>
    <br />
    <span>Do you ship nationwide?</span>
    <p>
      Yes, we ship all over the country. Shipping costs apply depending upon
      size and the shipping address. We run discounts and promotions all year,
      so stay tuned for more exclusive deals.
    </p>
    <br />
    <span>Do the product have warranty?</span>
    <p>
      Yes, We only sell official product. We will support software and hardware
      warranty for every products. Warranty years may be depend on your product.
    </p>
    <br />
    <span>Can I get my product personalized?</span>
    <p>
      It depends on the creator and the product. All options are outlined on the
      product page, so look out for customization options there.
    </p>
    <br />
  </div>
  <br />
  <div className="faq">
    <h1>Any Question?</h1>
    <span>
      You can contact us through our contact page! We will be happy to assist
      you.
    </span>
    <br />
    <br />
    <br />
    <a href="about2">
      <button className="button">
        <span>Contact</span>
      </button>
    </a>
  </div>
</div>

</>

 
      {/* Footer */}

      <div className="gmailbar">
        <span>Be the first to get latest updates and offers!</span>
        <input
          type="textbox"
          name="text"
          placeholder="Enter your email address"
        />
        {/* <button className="button2" onClick="myFunction(this, 'green')"> 
                  subscribe now
                </button> */}
        <SubscribeButton />
        <a href="https://www.facebook.com/">
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772175/facebook_umemqa.png"
            className="gmail"
          />
        </a>
        <a href="https://www.twitter.com/">
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772214/twitter_xutsrp.png"
            className="gmail"
          />
        </a>
        <a href="https://www.youtube.com/">
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772219/youtube_tifwv2.png"
            className="gmail"
          />
        </a>
      </div>
      <div className="bottom">
        <div className="s1">
          <span className="shoppy">Shop</span>
          <br />
          <br />
          <div className="shoppy2">
            <a
              href="phone1.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Mobile Phone</span>
            </a>
            <br />
            <br />
            <a
              href="laptop1.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Laptop</span>
            </a>
            <br />
            <br />
            <a
              href="watch1.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Smart Watch</span>
            </a>
            <br />
          </div>
        </div>
        <div className="s2">
          <span className="shoppy">Legal</span>
          <br />
          <br />
          <div className="shoppy2">
            <a
              href="about4.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Privacy &amp; Policy</span>
            </a>
            <br />
            <br />
            <a
              href="about5.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Terms &amp; Conditions</span>
            </a>
            <br />
            <br />
            <a
              href="about6.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Return &amp; Refund Policy</span>
            </a>
          </div>
        </div>
        <div className="s3">
          <span className="shoppy">Customer Care</span>
          <br />
          <br />
          <div className="shoppy2">
            <span>Phone : +959 951 884 227</span>
            <br />
            <br />
            <span>Live Chat @ Messenger/ Viber / Telegram</span>
            <br />
            <br />
            <span>Email : contact@micromyanmar.com</span>
          </div>
        </div>
        <div className="s4">
          <span className="shoppy">Location</span>
          <br />
          <br />
          <div className="shoppy2">
            <span>No127,Modern City Center, 4th floor,Yangon,Myanmar</span>
            <br />
            <br />
            <span>No67,Time City Center, 1st floor,Yangon,Myanmar</span>
            <br />
            <br />
          </div>
          <span className="shoppy">Store Timing</span>
          <br />
          <div className="shoppy2">
            <span>Open Daily : 9:00AM ~ 5:30PM</span>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772193/mylast_fwd9yn.png"
          style={{ width: 500 }}
          alt="Last"
        />
      </div>
      <br />
      <span
        className="last"
        style={{ display: "block", textAlign: "left", marginBottom: "20px" }}
      >
        © Micro Technology Company Limited 2023. All Rights Reserved
      </span>

    </>
  );
}
