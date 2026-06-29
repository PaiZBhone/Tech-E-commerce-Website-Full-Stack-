"use client";
import Link from 'next/link';
import { useState } from 'react';
// Import your global CSS and specific cart CSS here
import "../home.css";
import "./cart.css";
import SubscribeButton from '../components/SubscribeButtion';

export default function CartPage() {
  // React state to control the checkout modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent page refresh when submitting the dummy login form
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Checkout form submitted!");
    setIsModalOpen(false);
  };

  return (
    <>
        {/* <div class="all"> */}
      <div className="fix">
        <div className="head">
          <p>
            <a href="../../" className="title">
              <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772187/logo2_zqjlxs.png" width="200px" height="150px" />
            </a>
            <a href="#">
              <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772208/search_tyertz.png" className="main1" />
            </a>
            <a href="cart.html">
              <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772209/shopping-cart_sroitn.png" className="main1" />
            </a>
            <a href="profile.html">
              <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772216/user_ey4xfx.png" className="main1" />
            </a>
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
              Mobile Phone <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png" className="arrow" />
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
              Smart Watch <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png" className="arrow" />
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
              Notebook <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772173/down-arrow_keirfm.png" className="arrow" />
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
          <a href="./about/page.tsx" className="t">
            <span>Location</span>
          </a>
          <a href="about1.html" className="t">
            <span>About Micro IT</span>
          </a>
          <a href="about2.html" className="t">
            <span>Contact</span>
          </a>
        </div>
      </div>
      {/* Cart Section */}
      <div className="wathanoo">
        <div className="cart-tittle">
          <h2>Shopping Cart</h2>
        </div>

        {/* Static Cart Item 1 */}
        <div className="htoo">
          <div className="htoo1">
            <img src="/photo/14blue.png" alt="iPhone 14" />
          </div>
          <div className="htoo2">
            <h3>iPhone 14</h3>
            <p><span>Color : </span> Blue</p>
            <p><span>Product : </span>iPhone</p>
            <p><span>STORAGE : </span>128 GB</p>
          </div>
          <div className="htoo3">
            <form className="quantity" onSubmit={(e) => e.preventDefault()}>
              <h3>Quantity</h3>
              <input type="number" name="quantity" min="1" max="5" defaultValue="1" />
            </form>
          </div>
          <div className="htoo4">
            <h3>3,430,000 MMK</h3>
          </div>
        </div>

        {/* Static Cart Item 2 */}
        <div className="htoo">
          <div className="htoo1">
            <img src="/photo/14blue.png" alt="Raider GE75" />
          </div>
          <div className="htoo2">
            <h3>Raider GE75</h3>
            <p><span>CPU : </span> Ryzen 9</p>
            <p><span>GPU : </span>iPhone</p>
            <p><span>STORAGE : </span>1 TB</p>
          </div>
          <div className="htoo3">
            <form className="quantity" onSubmit={(e) => e.preventDefault()}>
              <h3>Quantity</h3>
              <input type="number" name="quantity" min="1" max="5" defaultValue="1" />
            </form>
          </div>
          <div className="htoo4">
            <h3>8,640,000 MMK</h3>
          </div>
        </div>

        {/* Static Cart Item 3 */}
        <div className="htoo">
          <div className="htoo1">
            <img src="/photo/s8.jpg" alt="Series 8" />
          </div>
          <div className="htoo2">
            <h3>Series 8</h3>
            <p><span>Color : </span> Black</p>
            <p><span>Product : </span>Apple</p>
            <p><span>Type : </span>Bluetooth+Wifi</p>
          </div>
          <div className="htoo3">
            <form className="quantity" onSubmit={(e) => e.preventDefault()}>
              <h3>Quantity</h3>
              <input type="number" name="quantity" min="1" max="5" defaultValue="1" />
            </form>
          </div>
          <div className="htoo4">
            <h3>1,530,000 MMK</h3>
          </div>
        </div>
      </div>
      
      <hr />

      {/* Cart Summary */}
      <div>
        <div className="cart-tittle">
          <h2>Summary</h2>
          <div className="cart-tittle2">
            <div className="sub">
              <span>Subtotal</span> <br /><br />
              <span>Discount</span> <br /><br />
              <span>Shipping</span> <br /><br />
              <hr />
              <span>Total</span>
            </div>
            <div className="sub2">
              <span>13,600,000 MMK</span> <br /><br />
              <span>0 MMK</span> <br /><br />
              <span>5,000 MMK</span> <br /><br />
              <hr />
              <span>13,605,000 MMK</span>
            </div>
          </div>
          <div>
            <br /><br /><br />
            <center>
              {/* This button toggles the React state to open the modal */}
              <button 
                className="button3" 
                onClick={() => setIsModalOpen(true)}
              >
                <span>Checkout</span>
              </button>
            </center>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>
    
    {/* Card AD */}
      <div className="other">
        <div className="credit">
          <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772171/credit-card_zc8zck.png" className="c2" />
          <figcaption className="c1">We accept Credit/Debit Card</figcaption>
        </div>
        <div className="credit1">
          <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772198/payment_c8pfq5.png" className="c2" />
          <figcaption className="c1">Digital Payment Options</figcaption>
        </div>
        <div className="credit2">
          <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772181/install_rpxub9.png" className="c2" />
          <figcaption className="c1">For Installment payments</figcaption>
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
                  <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772175/facebook_umemqa.png" className="gmail" />
                </a>
                <a href="https://www.twitter.com/">
                  <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772214/twitter_xutsrp.png" className="gmail" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772219/youtube_tifwv2.png" className="gmail" />
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
      {/* Conditionally Render the Modal based on state */}
      {isModalOpen && (
        <div id="id01" className="modal" style={{ display: 'block' }}>
          <form className="modal-content animate" onSubmit={handleLoginSubmit}>
            <div className="imgcontainer">
              <span onClick={() => setIsModalOpen(false)} className="close" title="Close Modal">&times;</span>
              <img src="/photo/logo2.png" alt="Avatar" className="avatar" />
            </div>
        
            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="myname" required />
        
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="mypassword" required />

              <label><b> Your phone number</b></label>
              <input type="tel" name="tel" pattern="[0-9]{2}-[0-9]{9}" placeholder="09 -" required />
              
              <div className="sub3">
                <span>Choose your payment</span>
                <div>
                  <select name="payment" required defaultValue="">
                    <option value="" disabled></option>
                    <option value="1">Online Payment</option>
                    <option value="2">Credit Card</option>
                    <option value="3">Cash On delivery</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="button4">Confirm</button>
              <label>
                <input type="checkbox" defaultChecked name="remember" /> Remember me
              </label>
            </div>
        
            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={() => setIsModalOpen(false)} className="cancelbtn">Cancel</button>
              <span className="psw">Don't have account? <Link href="/signup">sign up</Link></span>
            </div> 
          </form>
        </div>
      )}

      <div style={{ textAlign: "center" }}>
        <img src="https://res.cloudinary.com/dbi8luzul/image/upload/v1781772193/mylast_fwd9yn.png" style={{ width: 500 }} alt="Last" />
      </div>
      <br />
      <span className="last" style={{ display: 'block', textAlign: 'left', marginBottom: '20px' }}>
        © Micro Technology Company Limited 2023. All Rights Reserved
      </span>
    </>
  );
}