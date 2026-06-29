import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import "../home.css";

export default function ContactPage() {
  // --- SERVER ACTION ---
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

  return (
    <main>
      <div className="head">
        <p>
          <a href="/" className="title">
            <img
              src="/photo/logo2.png"
              width={200}
              height={150}
              alt="Micro IT"
            />
          </a>
          <a href="#">
            <img src="/photo/search.png" className="main1" alt="Search" />
          </a>
          <a href="/cart">
            <img src="/photo/shopping-cart.png" className="main1" alt="Cart" />
          </a>
          <a href="/profile">
            <img src="/photo/user.png" className="main1" alt="User" />
          </a>
        </p>
      </div>

      <div className="promotion">
        {/* Replaced <marquee> with a standard div. If you want it to scroll, you can add an animation to the .pro class in your CSS */}
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
            <img src="/photo/down-arrow.png" className="arrow" alt="Arrow" />
          </span>
          <div className="taskbar-content">
            <a href="/category/apple" className="g">
              <p>iPhone</p>
            </a>
            <a href="/category/samsung" className="g">
              <p>Samsung</p>
            </a>
            <a href="/category/huawei" className="g">
              <p>Huawei</p>
            </a>
          </div>
        </div>
        <div className="taskbar3">
          <span>
            Smart Watch{" "}
            <img src="/photo/down-arrow.png" className="arrow" alt="Arrow" />
          </span>
          <div className="taskbar-content3">
            <a href="/category/apple-watch" className="g">
              <p>Apple</p>
            </a>
            <a href="/category/samsung-watch" className="g">
              <p>Samsung</p>
            </a>
          </div>
        </div>
        <div className="taskbar2">
          <span>
            Notebook{" "}
            <img src="/photo/down-arrow.png" className="arrow" alt="Arrow" />
          </span>
          <div className="taskbar-content2">
            <a href="/category/asus" className="g">
              <p>Asus</p>
            </a>
            <a href="/category/lenovo" className="g">
              <p>Lenovo</p>
            </a>
            <a href="/category/macbook" className="g">
              <p>Macbook</p>
            </a>
            <a href="/category/msi" className="g">
              <p>MSI gaming</p>
            </a>
          </div>
        </div>

        <a href="/faqs" className="t">
          <span>FAQS</span>
        </a>
        <a href="/location" className="t">
          <span>Location</span>
        </a>
        <a href="/about" className="t">
          <span>About Micro IT</span>
        </a>
        <a href="/contact" className="t">
          <span>Contact</span>
        </a>
      </div>

      <br />
      <br />
      <br />

      <div className="form2">
        <h1>Contact Us</h1>
        <h4>Have any questions? We'd love to hear from you.</h4>
      </div>
      <br />

      {/* Form wrapper perfectly matching your original HTML flow */}
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
            <input type="text" placeholder="Your Phone" name="phone" required />
          </div>

          <div className="kopaing">
            <textarea
              name="message"
              placeholder="Your Message here"
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
      <br />
      <br />

      <div className="time">
        <div className="mesg">
          <img src="/photo/email.png" alt="Email" />
        </div>
        <div className="work">
          <img src="/photo/alarm.png" alt="Alarm" />
        </div>
      </div>

      <div className="time">
        <div className="mesg1">
          <h3>Chat Directly With Our Customer Service?</h3>
          <a href="#">Messenger</a>
        </div>
        <div className="work1">
          <h3>Office Hour</h3>
          <h4>Open daily</h4>
          <h4>8:00AM to 4:30PM</h4>
        </div>
      </div>

      <div className="gmailbar">
        {/* Replaced <font> with <span> */}
        <span>Be the first to get latest updates and offers!</span>
        <input type="text" name="text" placeholder="Enter your email address" />
        <button className="button2" type="button">
          subscribe now
        </button>
        <a href="https://www.facebook.com/">
          <img src="/photo/facebook.png" className="gmail" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/">
          <img src="/photo/twitter.png" className="gmail" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/">
          <img src="/photo/youtube.png" className="gmail" alt="YouTube" />
        </a>
      </div>

      <div className="bottom">
        <div className="s1">
          {/* Replaced <font> with <span> and preserved your 'shoppy' class */}
          <span className="shoppy">Shop</span>
          <br />
          <br />
          <div className="shoppy2">
            <a
              href="/category/mobile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Mobile Phone</span>
            </a>
            <br />
            <br />
            <a
              href="/category/laptop"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Laptop</span>
            </a>
            <br />
            <br />
            <a
              href="/category/watch"
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
              href="/privacy"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Privacy & Policy</span>
            </a>
            <br />
            <br />
            <a href="/terms" style={{ textDecoration: "none", color: "black" }}>
              <span>Terms & Conditions</span>
            </a>
            <br />
            <br />
            <a
              href="/refund"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Return & Refund Policy</span>
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

      {/* Replaced <center> tag with standard flexbox alignment to prevent React errors */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/photo/mylast.png"
          style={{ width: "500px" }}
          alt="Footer Banner"
        />
      </div>
      <br />
      <span className="last">
        © Micro Technology Company Limited 2023. All Rights Reserved
      </span>
    </main>
  );
}
