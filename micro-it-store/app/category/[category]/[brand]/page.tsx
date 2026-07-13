import Link from "next/link";
import prisma from "@/lib/prisma";
// Make sure to import your global CSS file here if it's not in your layout.tsx
import "../../../home.css";
import "./category.css";
import SubscribeButton from "@/app/components/SubscribeButtion";

export default async function FilteredCategoryPage({
  params,
}: {
  params: Promise<{ category: string; brand: string }>;
}) {
  const resolvedParams = await params;

  // Format the Category Name
  let formattedCategory = decodeURIComponent(resolvedParams.category).replace(
    /-/g,
    " ",
  );
  formattedCategory = formattedCategory.replace(/\b\w/g, (char) =>
    char.toUpperCase(),
  );

  // Format the Brand Name
  let formattedBrand = decodeURIComponent(resolvedParams.brand).replace(
    /-/g,
    " ",
  );
  formattedBrand = formattedBrand.replace(/\b\w/g, (char) =>
    char.toUpperCase(),
  );

  // Fetch from Database
  const products = await prisma.product.findMany({
    where: {
      category: {
        name: formattedCategory,
      },
      brand: {
        name: formattedBrand,
      },
    },
  });

  // Chunk products into groups of 3 to match the HTML <div className="border"> layout
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    chunkedProducts.push(products.slice(i, i + 3));
  }

  return (
    <>
      {/* Header */}
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
              <Link href="/category/mobile-phone/Apple" className="g">
                <p>iPhone</p>
              </Link>
              <Link href="/category/mobile-phone/samsung" className="g">
                <p>Samsung</p>
              </Link>
              <Link href="/category/mobile-phone/huawei" className="g">
                <p>Huawei</p>
              </Link>
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
              <Link href="/category/smart-watch/apple" className="g">
                <p>Apple</p>
              </Link>
              <Link href="/category/smart-watch/samsung" className="g">
                <p>Samsung</p>
              </Link>
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
              <Link href="/category/notebook/asus" className="g">
                <p>Asus</p>
              </Link>
              <Link href="/category/notebook/lenovo" className="g">
                <p>Lenovo</p>
              </Link>
              <Link href="/category/notebook/Apple" className="g">
                <p>Macbook</p>
              </Link>
              <Link href="/category/notebook/msi-gaming" className="g">
                <p>MSI gaming</p>
              </Link>
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
          <Link href="about3.html" className="t">
            <span>FAQS</span>
          </Link>
          <Link href="./about/page.tsx" className="t">
            <span>Location</span>
          </Link>
          <Link href="about1.html" className="t">
            <span>About Micro IT</span>
          </Link>
          <Link href="about2.html" className="t">
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* Video Trailer */}
      <div className="trailer">
        <video autoPlay loop muted className="video">
          <source src="/video/14.webm" type="video/webm" />
        </video>
      </div>

      <div className="kopai">
        <br />
        <br />
        <br />

        {/* Dynamic Title and Count */}
        <span className="trend">
          {formattedBrand} {formattedCategory} ({products.length})
        </span>

        {/* Dynamic Product Grid */}
        <div className="lineup">
          {products.length === 0 ? (
            <p style={{ padding: "20px" }}>
              No products found for this category and brand combination.
            </p>
          ) : (
            chunkedProducts.map((group, groupIndex) => (
              <div className="border" key={groupIndex}>
                {group.map((product) => (
                  <div
                    key={product.id}
                    style={{ marginBottom: "20px", textAlign: "center" }}
                  >
                    <Link href={`/product/${product.id}`}>
                      <img
                        src={product.imageUrl || "/photo/logo2.png"}
                        className="l1"
                        alt={product.name}
                      />
                    </Link>
                    <figcaption className="l2">{product.name}</figcaption>
                    <figcaption className="l3">
                      {product.price.toLocaleString()} MMK
                    </figcaption>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Video Slider */}
      <div className="gg">
        <div className="slider">
          <div className="images">
            <input type="radio" name="slide" id="img1" defaultChecked />
            <input type="radio" name="slide" id="img2" />
            <input type="radio" name="slide" id="img3" />
            <input type="radio" name="slide" id="img4" />

            <video autoPlay loop muted className="m1">
              <source src="/video/14yellow.webm" type="video/webm" />
            </video>
            <video autoPlay loop muted className="m2">
              <source src="/video/dynamic.webm" type="video/webm" />
            </video>
          </div>
          <div className="dots">
            <label htmlFor="img1"></label>
            <label htmlFor="img2"></label>
          </div>
        </div>
      </div>

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

      {/* About Section */}
      <div className="about">
        <img
          src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772162/about_pklhuo.jpg"
          width="500px"
          height="300px"
          alt="About"
        />
        <div>
          <span>About Micro It</span>
          <p className="p1">
            Micro It is the largest and leading Authorized Reseller in Myanmar,
            selling the latest products and accessories in multiple stores
            across Yangon. We provide exceptional support and services through a
            team of passionate and well-trained staff, committed to deliver an
            outstanding experience to our customers.We have access to a strong
            network and extensive resources to provide even better services to
            our customers.
          </p>
        </div>
      </div>

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
      <span className="last">
        © Micro Technology Company Limited 2023. All Rights Reserved
      </span>
    </>
  );
}
