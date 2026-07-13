import Image from "next/image";
import Link from "next/link";
import "./home.css";
import { myFunction } from "./function";
import SubscribeButton from "./components/SubscribeButtion";

export default function Home() {
  return (
    <>
      {/* <div class="all"> */}
    <div className="fix">
        <div className="head">
          <p>
            <Link href="#" className="title">
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
              <a href="category/mobile-phone/apple" className="g">
                <p>iPhone</p>
              </a>
              <a href="category/mobile-phone/Samsung" className="g">
                <p>Samsung</p>
              </a>
              <a href="category/mobile-phone/Huawei" className="g">
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
              <a href="category/smart-watch/apple" className="g">
                <p>Apple</p>
              </a>
              <a href="category/smart-watch/samsung" className="g">
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
              <a href="category/notebook/asus" className="g">
                <p>Asus</p>
              </a>
              <a href="category/notebook/lenovo" className="g">
                <p>Lenovo</p>
              </a>
              <a href="category/notebook/macbook" className="g">
                <p>Macbook</p>
              </a>
              <a href="category/notebook/MSI Gaming" className="g">
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
          <a href="about3" className="t">
            <span>FAQS</span>
          </a>
          <a href="about" className="t">
            <span>Location</span>
          </a>
          <a href="about1" className="t">
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
      <div className="mid">
        <div className="advs">
          <br />
          <span>iPhone 14 Pro</span>
          <br />
          <span>Pro. Beyond.</span>
          <br />
          <a href="product/1" className="tag">
            {" "}
            Learn more <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png" className="arrow1" />
          </a>
          <a href="product/1" className="tag">
            {" "}
            Buy <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png" className="arrow1" />
          </a>
          <video autoPlay loop muted className="adv">
            <source
              src="https://res.cloudinary.com/dbi8luzul/video/upload/v1781772292/14pro_bdgipv.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <img src="./photo/back.jpg" class="adv"> */}
      </div>
      <div className="harry">
        <div className="harry1">
          <h1>
            <i> msi</i>
          </h1>
          <h2>GE76 Raider</h2>
          <h3>
            LIGHT <span>'EM UP</span>
          </h3>
          {/* <center><a href="buy1.html"><button class="button7"><span>Buy</span></button></a></center> */}
          <img
            src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772160/1024_1_gep05x.png"
            width="300px"
          />
          <br />
          <br />
          <center>
            <a href="product/55">
              <button className="button7">
                <span>Buy now</span>
              </button>
            </a>
          </center>
        </div>
        <div className="harry2">
          <video autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dbi8luzul/video/upload/v1781772313/rog_dnwtq0.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772207/screen_t0x8zq.png"
          width="100%"
        />
      </div>
      {/* <div class="mid">
	<div class="mid1">
				<div class="advs">
				<span>iPhone 14 Pro</span>
				<br>
				<span>Pro. Beyond.</span>
				<br>
				<a href="" class="tag"> Learn more<img src="./photo/right-arrow.png" class="arrow1"></a>
				<a href="" class="tag"> Buy now <img src="./photo/right-arrow.png" class="arrow1"></a>
				
				</div>
				<img src="./photo/back.jpg" class="adv">
			</div>

	<div class="mid2">
		
		
	</div>		
</div> */}
      <br />
      {/* <center><span class="trend">Trending Now</span></center>
<br><br><br>
<div class="lineup">
	
	<div class="border">
		<img src="./photo/14prob.jpg" class="l1">
		

		<figcaption class="l2">iPhone 14pro</figcaption>
		<figcaption class="l3">3,430,000 MMK</figcaption>
	

		
	</div>
	<div class="border">
		<img src="./photo/zfold4.webp" class="l1">

		<figcaption class="l2">Samsung zFold4</figcaption>
		<figcaption class="l3">3,430,000 MMK</figcaption>

		
		
	</div>
	<div class="border">
		<img src="./photo/p50problack.png" class="l1">

		<figcaption class="l2">Huawei P50pro</figcaption>
		<figcaption class="l3">3,430,000 MMK</figcaption>

		
		
	</div>
	<div class="border">
		<img src="./photo/zflip4.webp" class="l1">

		<figcaption class="l2">Zflip 4</figcaption>
		<figcaption class="l3">3,430,000 MMK</figcaption>

		
	</div>
	

</div> */}
      <div>
        <div className="zi">
          <center>
            <span>iPhone 14</span>
            <br />
          </center>
          <center>
            <span style={{ fontSize: 40 }}>Wonderful</span>
            <br />
          </center>
          <center>
            <a href="buy4.html" className="tag">
              {" "}
              Learn more{" "}
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772202/right-arrow_qhtj64.png"
                className="arrow1"
              />
            </a>
            <a href="buy3.html" className="tag">
              {" "}
              Buy{" "}
              <img
                src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772202/right-arrow_qhtj64.png"
                className="arrow1"
              />
            </a>
          </center>
          <center>
          <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772155/14alll_os7qwh.jpg" /></center>
        </div>
      </div>
      {/* <div class="banner">
  
</div> */}
      <div className="fixx">
        <div className="midd">
          <div className="advss">
            <span>ROG Strix</span>
            <br />
            <span>Zephyrus DUO 16</span>
            <br />
            <span>Two Screen. Zero Boundry</span>
            <br />
            {/* <a href="" class="tag"> Learn more <img src="./photo/right-arrow.png" class="arrow1"></a>
	<a href="" class="tag"> Buy <img src="./photo/right-arrow.png" class="arrow1"></a> */}
          </div>
          <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772178/h732_cx3jmy.png" />
          <center>
            <a href="buy32.html">
              <button className="button7">
                <span>Buy</span>
              </button>
            </a>
          </center>
        </div>
        <video autoPlay loop muted>
          <source src="https://res.cloudinary.com/dbi8luzul/video/upload/v1781772297/asus1_tjvlng.webm" type="video/webm" />
        </video>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772172/detai_kapghq.png" width="100%" />
      </div>
      <br />
      <br />
      <center>
        <span className="trend">Trending Now</span>
      </center>
      <div className="lineup">
        <div className="border">
          <a href="buy30.html">
            <img src="photo/kv-pd.png" className="l11" />
          </a>
          <figcaption className="l22">Raider GE75</figcaption>
          <figcaption className="l33">8,640,000 MMK</figcaption>
          <a href="buy2.html">
            <img src="photo/14prblack.png" className="l11" />
          </a>
          <figcaption className="l22">iPhone 14 Pro</figcaption>
          <figcaption className="l33">3,430,000 MMK</figcaption>
        </div>
        <div className="border">
          <a href="buy20.html">
            <img src="photo/macair.png" className="l11" />
          </a>
          <figcaption className="l22">Macbook Air M2</figcaption>
          <figcaption className="l33">2,430,000 MMK</figcaption>
          <a href="buy31.html">
            <img src="photo/msi_modern_14.jpg" className="l11" />
          </a>
          <figcaption className="l22">msi Modern 14</figcaption>
          <figcaption className="l33">2,010,000 MMK</figcaption>
        </div>
        <div className="border">
          <a href="./buy8.html">
            <img src="photo/zflip4.webp" className="l11" />
          </a>
          <figcaption className="l22">Z Flip 4</figcaption>
          <figcaption className="l33">3,110,000 MMK</figcaption>
          <a href="buy11.html">
            <img src="photo/p50pocket.png" className="l11" />
          </a>
          <figcaption className="l22">P50 Pocket</figcaption>
          <figcaption className="l33">3,430,000 MMK</figcaption>
        </div>
        <div className="border">
          <a href="buy24.html">
            <img src="photo/zenbookduo.png" className="l11" />
          </a>
          <figcaption className="l22">Zenbook Duo</figcaption>
          <figcaption className="l33">2,640,000 MMK</figcaption>
          <a href="buy28.html">
            <img src="photo/yoga.jpg" className="l11" />
          </a>
          <figcaption className="l22">Yoga 9i</figcaption>
          <figcaption className="l33">2,010,000 MMK</figcaption>
        </div>
      </div>
      
      <br />
      <br />
      <br />
      <div>
        <div className="zzi">
          <center>
            <span style={{ color: "red", fontSize: 27 }}>SERIES 8</span>
            <br />
          </center>
          <center>
            <span>A healthy leap ahead.</span>
            <br />
          </center>
          <center>
            <a href="buy14.html" className="tag">
              {" "}
              Learn more <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772202/right-arrow_qhtj64.png" className="arrow1" />
            </a>
            <a href="buy14.html" className="tag">
              {" "}
              Buy <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772202/right-arrow_qhtj64.png" className="arrow1" />
            </a>
          </center>
          <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772217/watch_gtwscm.jpg" width="100%" />
        </div>
      </div>
      <div className="gg">
        <div className="slider">
          <div className="images">
            <input type="radio" name="slide" id="img1" defaultChecked></input>
            <input type="radio" name="slide" id="img2"></input>
            <input type="radio" name="slide" id="img3"></input>
            <input type="radio" name="slide" id="img4"></input>
            <video autoPlay loop muted className="m1" id="img1">
              <source src="video/bulidairpod.webm" type="video/webm" />
            </video>
            <video autoPlay loop muted className="m2" id="img2">
              <source src="video/mac.webm" type="video/webm" />
            </video>
            <video autoPlay loop muted className="m3" id="img3">
              <source src="video/h2.webm" type="video/webm" />
            </video>
          </div>
          <div className="dots">
            <label htmlFor="img1" />
            <label htmlFor="img2" />
            <label htmlFor="img3" />
          </div>
        </div>
      </div>
      {/* <div class="ban">
<div class="banner">
  
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
      {/* <div class="about">
	
	<img src="./photo/about.jpg" width="500px" height="300px">
	<div>
		<span>About Micro It</span>
				<p class="p1"> 
		 		Micro It is the largest and leading Authorized Reseller in Myanmar, selling the latest products and accessories in multiple stores across Yangon. We provide exceptional support and services through a team of passionate and well-trained staff, committed to deliver an outstanding experience to our customers.We have access to a strong network and extensive resources to provide even better services to our customers.
				</p>
</div>
	
</div> */}
      {/* ----footer-- */}
      <div className="footer">
        <div className="review">
          <div className="title">
            <span className="t1">Reviews</span>
            <br />
            <br />
            <span className="t2">We love to hear from you</span>
            <br />
            <a href="review">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Add your thought</span>
              </button>
            </a>
          </div>
          <div className="form">
            <div className="sliders">
              <div className="imagess">
                <input type="radio" name="slide" id="img11" defaultChecked />
                <input type="radio" name="slide" id="img22" />
                <input type="radio" name="slide" id="img33" />
                <input type="radio" name="slide" id="img44" />
                <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772211/snap4_zadmyw.jpg" className="m11" alt="img11" />
                <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772210/snap1_ykxvyj.jpg" className="m22" alt="img22" />
                <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772210/snap3_kdga2k.jpg" className="m33" alt="img33" />
                <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772210/snap2_hz73zr.jpg" className="m44" alt="img44" />
              </div>
              <div className="dotss">
                <label htmlFor="img11" />
                <label htmlFor="img22" />
                <label htmlFor="img33" />
                <label htmlFor="img44" />
              </div>
            </div>
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
      <span
        className="last"
        style={{ display: "block", textAlign: "left", marginBottom: "20px" }}
      >
        © Micro Technology Company Limited 2023. All Rights Reserved
      </span>
      </div>
    </>
  );
}
