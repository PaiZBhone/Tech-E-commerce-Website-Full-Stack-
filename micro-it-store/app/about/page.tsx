"use client";
import React from "react";
import { myFunction } from "../function";
import Link from "next/link";
import "./about.css";
import "../home.css";
import SubscribeButton from "../components/SubscribeButtion";


export default function about() {
  return (
    <div>
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
      <br></br>
      <br></br>
      <br></br>
      <h1 className="map11">Our Location</h1>
      <br></br>
      <br></br>

      <div className="map">
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.6413558655086!2d96.13244377916129!3d16.844139042578174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194962007f863%3A0x1ce0d39a47ca647c!2sLOTTE%20HOTEL%20YANGON!5e0!3m2!1sen!2smm!4v1684050704414!5m2!1sen!2smm"
            style={{ border: "0", width: "700px", height: "500px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mapb">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.2037958658752!2d96.12531077502139!3d16.816242983976725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb34335a92f5%3A0xea3210d0410309d7!2sTimes%20City%20Yangon!5e0!3m2!1sen!2smm!4v1684054376834!5m2!1sen!2smm"
            style={{ width: "700px", height: "500px", border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="map1">
        <div className="map1a">
          <h2>Micro it@Modern city</h2>
          <br></br>
          <h4>No127,Modern City Tower, 4th floor,Yangon,Myanmar</h4>
          <span>Call Us</span>
          <br></br>
          <br></br>
          <span>+959 951 884 227</span>
          <br></br>
          <span>+959 951 884 228</span>
          <br></br>
          <span>+959 951 884 229</span>
          <br></br>
          <br></br>
          <br></br>
          <span>Store Timing</span>
          <br></br>
          <br></br>
          <span>Open Daily : 9:00AM ~ 5:30PM</span>
        </div>
        <div className="map1b">
          <h2>Micro it@Time city</h2>
          <br></br>
          <h4>No67,Time City Center, 1st floor,Yangon,Myanmar</h4>
          <span>Call Us</span>
          <br></br>
          <br></br>
          <span>+959 951 884 300</span>
          <br></br>
          <span>+959 951 884 301</span>
          <br></br>
          <span>+959 951 884 302</span>
          <br></br>
          <br></br>
          <br></br>
          <span>Store Timing</span>
          <br></br>
          <br></br>
          <span>Open Daily : 9:00AM ~ 5:30PM</span>
        </div>
      </div>


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
  );
}
