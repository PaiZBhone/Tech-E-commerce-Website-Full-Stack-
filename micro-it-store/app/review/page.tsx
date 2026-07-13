import Image from "next/image";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import "../home.css";
import "./review.css";
import { myFunction } from "../function";
import SubscribeButton from "../components/SubscribeButtion";

async function submitMessage(formData: FormData) {
  "use server";

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  await prisma.contactMessage.create({
    data: {
      firstName,
      lastName,
      phone,
      message,
    },
  });

  redirect("/contact?success=true");
}

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
        <br />
        <br />
        <br />
        <div className="form2">
          <h1>Reviews</h1>
          <h4>We'd love to hear from you.</h4>
        </div>
        <br />
        <form action={submitMessage}>
          <div className="form1">
            <div className="kopaing1">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
              />
              <br />
              <br />
              <br />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
              />
              <br />
              <br />
              <br />
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                required
              />
            </div>

            <div className="kopaing">
              <textarea
                name="message"
                placeholder="Your Review here"
                rows={10}
                cols={50}
                className="mytext"
                required
              ></textarea>
            </div>
          </div>

          <br />
          <br />
          <button type="submit" className="button4">
            Confirm
          </button>
        </form>

        <br />
        <br />
        <div className="time">
          <div className="mesg">
            <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772174/email_v7dofi.png" />
          </div>
          <div className="work">
            <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772164/alarm_tnjc22.png" />
          </div>
        </div>
        <div className="time">
          <div className="mesg1">
            <h3>Chat Directly With Our Customer Serivce?</h3>
            <a href="./photo/facebook.png">Messenger</a>
          </div>
          <div className="work1">
            <h3>Office Hour</h3>
            <h4>Open daily</h4>
            <h4>8:00AM to 4:30PM</h4>
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
