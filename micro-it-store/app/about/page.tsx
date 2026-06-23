"use client";
import React from "react";
import { myFunction } from "../function";
import "./about.css";
import "../home.css";

<button
  className="button2"
  onClick={(e) => myFunction(e.currentTarget, "green")}
>
  subscribe now
</button>;

export default function about() {
  return (
    <div>
      <div className="head">
        <p>
          <a href="Microit.html" className="title">
            <img src="photo/logo2.png" width="200px" height="150px"></img>
          </a>
          <a href="#">
            <img src="photo/search.png" className="main1"></img>
          </a>
          <a href="cart.html">
            <img src="photo/shopping-cart.png" className="main1"></img>
          </a>
          <a href="profile.html">
            <img src="photo/user.png" className="main1"></img>
          </a>
        </p>
      </div>
      <div className="promotion">
        <div className="marquee">
          <p className="pro">
            {" "}
            Pure Love from May sale!! Up to 30% to any devices purchase(From May
            1st - May 31, 2023) Pure Love from May sale!! Up to 30% to any
            devices purchase(From May 1st - May 31, 2023){" "}
          </p>
        </div>
      </div>
      <div className="hehe">
        <div className="taskbar">
          <span>
            Mobile Phone{" "}
            <img src="photo/down-arrow.png" className="arrow"/>
              {" "}
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
            Smart Watch <img src="photo/down-arrow.png" className="arrow"></img>
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
            Notebook <img src="photo/down-arrow.png" className="arrow"></img>
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
        {/* <div className="taskbar3">
            <span>Smart Watch <img src="./photo/down-arrow.png" className="arrow"></span>
            <div className="taskbar-content3">
                <a href="about.html" className="g"><p>Apple</p></a>
                <a href="about.html" className="g"><p>Samsung</p></a>
                <a href="about.html" className="g"><p>Huawei</p></a>
                
                
            </div>
        </div> */}

        <a href="about3.html" className="t">
          <span>FAQS</span>
        </a>
        <a href="about.html" className="t">
          <span>Location</span>
        </a>
        <a href="about1.html" className="t">
          <span>About Micro IT</span>
        </a>
        <a href="about2.html" className="t">
          <span>Contact</span>
        </a>
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
          name="textname"
          placeholder="Enter your email address"
        ></input>
        {/* <button className="button2" onClick="myFunction(this, 'green')"> 
            subscribe now
          </button> */}
        <button
          className="button2"
          onClick={() => {
            alert(
              "Thanks for following us and be the first one to get latest updates <3",
            );
          }}
        >
          subscribe now
        </button>

        <a href="https://www.facebook.com/">
          <img src="photo/facebook.png" className="gmail"></img>
        </a>
        <a href="https://www.twitter.com/">
          <img src="photo/twitter.png" className="gmail"></img>
        </a>
        <a href="https://www.youtube.com/">
          <img src="photo/youtube.png" className="gmail"></img>
        </a>
      </div>
      <div className="bottom">
        <div className="s1">
          <span className="shoppy">Shop</span>
          <br></br>
          <br></br>
          <div className="shoppy2">
            <a
              href="phone1.html"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Mobile Phone</span>
            </a>
            <br></br>
            <br></br>

            <a
              href="laptop1.html"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Laptop</span>
            </a>
            <br></br>
            <br></br>
            <a
              href="watch1.html"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Smart Watch</span>
            </a>
            <br></br>
          </div>
        </div>

        <div className="s2">
          <span className="shoppy">Legal</span>
          <br></br>
          <br></br>
          <div className="shoppy2">
            <a
              href="about4.html"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Privacy & Policy</span>
            </a>
            <br></br>
            <br></br>
            <a
              href="about5.html"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Terms & Conditions</span>
            </a>
            <br></br>
            <br></br>
            <a
              href="about6.html"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <span>Return & Refund Policy</span>
            </a>
          </div>
        </div>

        <div className="s3">
          <span className="shoppy">Customer Care</span>
          <br></br>
          <br></br>
          <div className="shoppy2">
            <span>Phone : +959 951 884 227</span>
            <br></br>
            <br></br>
            <span>Live Chat @ Messenger/ Viber / Telegram</span>
            <br></br>
            <br></br>
            <span>Email : contact@micromyanmar.com</span>
          </div>
        </div>
        <div className="s4">
          <span className="shoppy">Location</span>
          <br></br>
          <br></br>
          <div className="shoppy2">
            <span>No127,Modern City Tower, 4th floor,Yangon,Myanmar</span>
            <br></br>
            <br></br>
            <span>No67,Time City Center, 1st floor,Yangon,Myanmar</span>
            <br></br>
            <br></br>
          </div>
          <span className="shoppy">Store Timing</span>
          <br></br>
          <div className="shoppy2">
            <span>Open Daily : 9:00AM ~ 5:30PM</span>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      <center>
        <img src="photo/mylast.png" style={{ width: "500px" }}></img>
      </center>
      <br></br>
      <span className="last">
        © Micro Technology Company Limited 2023. All Rights Reserved
      </span>
    </div>
  );
}
