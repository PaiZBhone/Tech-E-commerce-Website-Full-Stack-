import prisma from "@/lib/prisma";
import Link from "next/link";
import "../../home.css";
import "./buy.css";
import { myFunction } from "../../function";
import SubscribeButton from "@/app/components/SubscribeButtion";
import AddToCartButton from "@/app/components/addtocart";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);

  // --- DIAGNOSTIC CHECK 1: Is the URL a valid number? ---
  if (isNaN(productId)) {
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ color: "red", fontSize: "40px" }}>URL Error!</h1>
        <p style={{ fontSize: "20px" }}>
          You tried to visit: <b>/product/{resolvedParams.id}</b>
        </p>
        <p style={{ fontSize: "20px" }}>
          The URL must end in a number (like /product/1). Please use the
          navigation menu to select a product.
        </p>
      </div>
    );
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: { brand: true, category: true },
  });

  if (!product) {
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ color: "red", fontSize: "40px" }}>Database Error!</h1>
        <p style={{ fontSize: "20px" }}>
          We looked in TiDB for Product ID: <b>{productId}</b>
        </p>
        <p style={{ fontSize: "20px" }}>
          That product number does not exist in your database. It might have
          been deleted, or the IDs might start at a higher number.
        </p>
        <p style={{ fontSize: "20px" }}>
          Go to{" "}
          <Link
            href="/category/apple"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            /category/apple
          </Link>{" "}
          and click a phone to find a valid ID.
        </p>
      </div>
    );
  }

  // If both checks pass, format the data
  const colorsArray = product.colors
    ? product.colors.split(/[,|]/).map((c) => c.trim())
    : [];
  const storageArray = product.storage
    ? product.storage.split(/[,|]/).map((s) => s.trim())
    : [];
  const descriptionBullets = product.description
    ? product.description.split(/\n|\|/).filter((b) => b.trim() !== "")
    : [];

  //html
  return (
    <>
    {/* <div class="all"> */}
      <div className="fix">
        <div className="head">
          <p>
            <Link href="/" className="title">
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
              <a href="/category/mobile-phone/apple" className="g">
                <p>iPhone</p>
              </a>
              <a href="/category/mobile-phone/Samsung" className="g">
                <p>Samsung</p>
              </a>
              <a href="/category/mobile-phone/Huawei" className="g">
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
              <a href="/category/smart-watch/apple" className="g">
                <p>Apple</p>
              </a>
              <a href="/category/smart-watch/samsung" className="g">
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
              <a href="/category/notebook/asus" className="g">
                <p>Asus</p>
              </a>
              <a href="/category/notebook/lenovo" className="g">
                <p>Lenovo</p>
              </a>
              <a href="/category/notebook/macbook" className="g">
                <p>Macbook</p>
              </a>
              <a href="/category/notebook/MSI Gaming" className="g">
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
          <a href="/about3" className="t">
            <span>FAQS</span>
          </a>
          <a href="/about" className="t">
            <span>Location</span>
          </a>
          <a href="/about1" className="t">
            <span>About Micro IT</span>
          </a>
          <a href="/about2" className="t">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <main className="container">
        <div className="left-column">
          <img className="active" src={product.imageUrl} alt={product.name} />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>{product.category.name}</span>
            <h1>{product.name}</h1>
            <div>
              <ul
                style={{
                  paddingLeft: "20px",
                  color: "#86939E",
                  lineHeight: "24px",
                  fontWeight: 300,
                }}
              >
                {descriptionBullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          <AddToCartButton
            product={product}
            colorsArray={colorsArray}
            storageArray={storageArray}
          />
        </div>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <div class="ban">
<div class="banner">
      {/* Card AD */}
      <div className="other">
        <div className="credit">
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772171/credit-card_zc8zck.png"
            className="c2"
          />
          <figcaption className="c1">We accept Credit/Debit Card</figcaption>
        </div>
        <div className="credit1">
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772198/payment_c8pfq5.png"
            className="c2"
          />
          <figcaption className="c1">Digital Payment Options</figcaption>
        </div>
        <div className="credit2">
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772181/install_rpxub9.png"
            className="c2"
          />
          <figcaption className="c1">For Installment payments</figcaption>
        </div>
      </div>
      {/* <div class="about">
	
	<img src="./photo/about.jpg" width="500px" height="300px">
	<div>
		<span>About Micro It</span>
				<p class="p1"> 
		 		Micro It is the largest and leading Authorized Reseller in Myanmar, selling the latest products and accessories in multiple stores across Yangon. We provide exceptional support and services through a team of passionate and well-trained staff, committed to deliver an outstanding experience to our customers.We have access to a strong network and extensive resources to provide even better services to our customers.
				</p>
</div>
	
</div> */}

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
