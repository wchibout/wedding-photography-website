"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="landing-page">
      {/* ================= Navbar ================= */}
      <header className="navbar-container">
        <div className="navbar-logo">
          <h1>Loubna</h1>
        </div>
        <nav className="navbar">
          <a href="#about-section"><p>About</p></a>
          <a href="#work-section"><p>Work</p></a>
          <a href="#contact-section"><p>Book</p></a>
        </nav>
      </header>

      {/* ================= Home Section ================= */}
      <section className="home" data-aos="fade-up" data-aos-delay="100">
        <Image className="flower-image" src="/flower.png" alt="flower" width={300} height={200} />
        <Image className="img_frame" src="/img_frame.png" alt="img_frame" width={400} height={200} />
        <Image className="little-stars-image" src="/little_stars.png" alt="stars" width={400} height={200} />
        <Image className="little-stars-image2" src="/little_stars.png" alt="stars" width={400} height={200} />

        <div className="text-container">
          <p>
            Capture The Moment <br /> Make Your Day Unforgettable
          </p>
          <Link href="Booking" className="contact-us">
            <p>Make a Book</p>
          </Link>
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section id="about-section" className="About" data-aos="fade-up" data-aos-delay="100">
        <Image className="ring" src="/ring.png" alt="ring" width={40} height={40} />

        <div className="about-container">
          <div className="about-text">
            <p>About Us</p>
            <p id="about-name">Loubna Darlbeida</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quos,
              provident commodi quis qui iure voluptatum nesciunt vero, repellendus
              natus delectus voluptates expedita autem quas? Veniam vitae distinctio
              vel ratione?
            </p>
          </div>
          <Image className="about-image" src="/about_img.png" alt="about" width={250} height={450} />
        </div>

        <Image className="flower2" src="/flower2.png" alt="flower" width={400} height={450} />
      </section>

      {/* ================= Work Section ================= */}
      <section id="work-section" className="Work" data-aos="fade-up" data-aos-delay="200">
        <Image className="flower2" src="/flower2.png" alt="flower" width={400} height={450} />
        <Image className="little-stars-image" src="/little_stars.png" alt="stars" width={400} height={200} />
        <Image className="little-stars-image2" src="/little_stars.png" alt="stars" width={400} height={200} />

        <p>Highlights</p>
        <p id="collection">Bride & Groom Collection</p>

        <div className="image-container">
          <Image className="more-image" src="/more.png" alt="more" width={40} height={40} />

          <div className="ring-images">
            <Image className="ring-image" src="/ring_img1.png" alt="ring" width={200} height={350} />
            <Image className="ring-image" src="/ring_img2.png" alt="ring" width={200} height={350} />
            <Image className="ring-image" src="/ring_img3.png" alt="ring" width={200} height={350} />
          </div>

          <Image id="more-image2" className="more-image" src="/more.png" alt="more" width={40} height={40} />
        </div>
      </section>

      {/* ================= Booking Section ================= */}
      <section id="Booking" className="Booking" data-aos="fade-up" data-aos-delay="300">
        <h1>Make a Booking</h1>
        <form className="Booking-form">
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" required />
            </label>

            <label>
              Phone:
              <input type="tel" name="phone" required />
            </label>

            <label>
              Email:
              <input type="email" name="email" required />
            </label>

            <label htmlFor="message" >
              Message:
              <textarea name="message" style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '8px'}}></textarea>
            </label>
          </div>

          <div className="form-group-2">

            <label>
              Date:
              <input type="date" name="date" required />
            </label>

            <label>
              Time:
              <input type="time" name="time" required />
            </label>

            <button type="submit">Book</button>
          </div>
         
        </form>
        
      </section>

      {/* ================= Contact Section ================= */}
      <section id="contact-section" className="Contact" data-aos="fade-up" data-aos-delay="300">
        <Image className="flower" src="/flower2.png" alt="flower" width={400} height={200} />

        <div className="text-container">``
          <Link href="Booking" className="contact-us">
            <p>Book Now</p>
          </Link>
        </div>

        <div className="description">
          <p>
            Make your special day unforgettable with our professional photography services.
            Whether it's a wedding, engagement, or any other event, we capture the moments
            that matter most. Contact us today to book your session and let us help you
            create lasting memories.
          </p>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="footer">
        <div className="navbar-logo">
          <h1>Loubna</h1>
        </div>
        <nav className="navbar">
          <a href="#about-section">
            <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
            <p>Instagram</p>
          </a>
          <a href="#work-section">
            <Image src="/tiktok.png" alt="TikTok" width={35} height={35} />
            <p>TikTok</p>
          </a>
          <a href="#contact-section">
            <Image src="/twitter.png" alt="Twitter" width={25} height={25} />
            <p>Twitter</p>
          </a>
        </nav>
        <Image className="flower3" src="/flower3.png" alt="flower" width={200} height={100} />
        <div className="footer-decoration"></div>
        <p className="footer-text">&copy; 2025 Loubna Darlbeida. All rights reserved.</p>
      </footer>
    </div>
  );
}

