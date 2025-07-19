import '../styles/Home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen bg-[#1c1c1a] text-[#d1b77f] flex flex-col md:flex-row">
  <div className="flex-1 flex flex-col justify-center items-start px-10 py-20 space-y-6">
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-md">
      Let us help you find your dream home.
    </h1>
    <div className="space-x-4 relative">
      <button
        onClick={() => navigate("/models-preview")}
        className="border border-[#d1b77f] text-[#d1b77f] px-6 py-2 rounded hover:bg-[#d1b77f] hover:text-[#1c1c1a] transition"
      >
        Buy a home
      </button>

      {/* Dropdown Trigger */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-[#d1b77f] text-[#1c1c1a] px-6 py-2 rounded hover:opacity-90 transition"
      >
        List a home
      </button>

      {/* Dropdown Items */}
      {dropdownOpen && (
        <div className="absolute mt-2 bg-[#1c1c1a] border border-[#d1b77f] rounded shadow-md z-10">
          <button
            onClick={() => {
              navigate("/contact-agent");
              setDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-[#d1b77f] hover:text-[#1c1c1a]"
          >
            Contact Agent
          </button>
          <button
            onClick={() => {
              navigate("/agent-login");
              setDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-[#d1b77f] hover:text-[#1c1c1a]"
          >
            Agent Login
          </button>
        </div>
      )}
    </div>
  </div>

  <div className="flex-1 relative">
    <img
      src="/public/images/03_08_26_754_403_2_1.png"
      alt="Modern Kitchen"
      className="absolute inset-0 w-60px h-100px object-cover"
    />
  </div>
</section>

{/* 2. Vision/About Section */}
<section id="about" className="bg-[#1c1c1a] text-[#d1b77f] flex flex-col md:flex-row">
  <div className="flex-1">
    <img src="/public/images/image1.jpeg" alt="Modern Lounge" className="w-10px h-10px object-cover" />
  </div>
  <div className="flex-1 flex flex-col justify-center items-start px-10 py-20 space-y-6">
    <h2 className="text-2xl md:text-3xl font-medium max-w-md">
      Our vision is to be the most trusted and respected real estate agency in Roseton.
    </h2>
    <button className="border border-[#d1b77f] text-[#d1b77f] px-6 py-2 rounded hover:bg-[#d1b77f] hover:text-[#1c1c1a] transition">Contact us</button>
  </div>
</section>


      {/* 3. Features Section */}
      <section className="py-20 px-10 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="font-bold mb-2">Locally Made</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="font-bold mb-2">Eco-Friendly</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="font-bold mb-2">Ethically Sourced</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      {/* 4. Events Section
      <section className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Upcoming Events</h2>
        <ul className="max-w-xl mx-auto space-y-4 text-left">
          <li>📅 <strong>Aug 30, 2030</strong> – Community Market @ Harmonious Park</li>
          <li>📅 <strong>Oct 23, 2030</strong> – Art Mart @ Community Square</li>
          <li>📅 <strong>Nov 20–22, 2030</strong> – Grand Sale @ Main Branch</li>
        </ul>
      </section> */}

      {/* 5. Store Info Section
      <section className="py-20 px-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">Visit Our Stores</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center text-center">
          <div>
            <p>📍 Modern Lifestyle Main Branch</p>
            <p>🕒 10:00 AM – 9:00 PM</p>
            <p>📞 123-456-7890</p>
          </div>
          <div>
            <p>📍 Northeast Mall Branch</p>
            <p>🕒 10:00 AM – 10:00 PM</p>
            <p>📞 123-456-7890</p>
          </div>
        </div>
      </section> */}
{/* 6. Happy Clients Section */}
<section id="faq" className="py-20 px-6 bg-[#1c1c1a] text-[#d1b77f]">
  <h2 className="text-3xl font-semibold text-center mb-10">Happy Clients</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="space-y-4">
      <p className="text-4xl">“</p>
      <hr className="border-[#d1b77f] w-16" />
      <p>
        Boost your product and service’s credibility by adding testimonials from your clients.
        People love recommendations so feedback from others who’ve tried it is invaluable.
      </p>
      <p className="font-semibold">– Natalia Lowe</p>
    </div>
    <div className="space-y-4">
      <p className="text-4xl">“</p>
      <hr className="border-[#d1b77f] w-16" />
      <p>
        Boost your product and service’s credibility by adding testimonials from your clients.
        People love recommendations so feedback from others who’ve tried it is invaluable.
      </p>
      <p className="font-semibold">– Elliot Sterling</p>
    </div>
    <div className="space-y-4">
      <p className="text-4xl">“</p>
      <hr className="border-[#d1b77f] w-16" />
      <p>
        Boost your product and service’s credibility by adding testimonials from your clients.
      </p>
      <p className="font-semibold">– Lillian Pratt</p>
    </div>
  </div>
</section>

{/* 7. Contact Section */}
<footer id="contact" className="py-20 px-6 bg-[#1c1c1a] text-[#d1b77f]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
      <div className="space-y-4">
        <p className="border border-[#d1b77f] rounded-full px-4 py-2 w-fit">123 Anywhere St. Any City, ST 12345</p>
        <p className="border border-[#d1b77f] rounded-full px-4 py-2 w-fit">(123) 456-7890</p>
        <p className="border border-[#d1b77f] rounded-full px-4 py-2 w-fit">hello@reallygreatsite.com</p>
      </div>
      <button className="mt-6 bg-[#d1b77f] text-[#1c1c1a] px-6 py-2 rounded-full hover:opacity-90 transition">GET SOCIAL</button>
      <div className="flex space-x-4 mt-4">
        <i className="fab fa-facebook text-xl"></i>
        <i className="fab fa-twitter text-xl"></i>
        <i className="fab fa-instagram text-xl"></i>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
      <div className="bg-[#d1b77f] text-[#1c1c1a] p-6 rounded-lg w-fit">
        <p>Monday to Friday</p>
        <p>9:00 am to 6:00 pm</p>
        <p className="mt-2">Saturday</p>
        <p>9:00 am to 12 noon</p>
        <p className="mt-2 italic">Sunday by appointment only.</p>
      </div>
    </div>
  </div>
  <p className="text-center mt-10 text-sm text-[#d1b77f]">© 2030 Morris-Raine Real Estate Co.</p>
</footer>

    </div>
  );
}

export default Home;
