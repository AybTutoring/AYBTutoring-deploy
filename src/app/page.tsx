"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // ...existing hooks and useEffect...

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-white text-gray-900 flex flex-col font-sans">
      {/* Header Navigation with Dropdowns */}
      <header className="bg-white shadow-sm rounded-b-xl">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/ayb-logo.png" alt="AYB Tutoring Logo" className="h-10 w-10 object-contain drop-shadow-lg" />
            <span className="text-2xl font-extrabold text-blue-600 tracking-wide">AYB Tutoring</span>
          </div>
          <ul className="flex items-center gap-8 text-lg font-semibold">
            <li><a href="#home" className="text-blue-700 hover:text-blue-900 transition">Home</a></li>
            <li><a href="#about" className="text-blue-700 hover:text-blue-900 transition">About Us</a></li>
            <li><a href="#reviews" className="text-blue-700 hover:text-blue-900 transition">Reviews</a></li>
            <li><a href="#contact" className="text-blue-700 hover:text-blue-900 transition">Contact</a></li>
            <li className="relative" ref={dropdownRef}>
              <button
                className="text-blue-700 hover:text-blue-900 transition focus:outline-none flex items-center gap-1"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <li>
                    <a
                      href="#students"
                      className="block px-4 py-2 text-blue-700 font-bold hover:bg-blue-50 hover:text-blue-900"
                      onClick={() => setDropdownOpen(false)}
                    >
                      For Students
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tutors"
                      className="block px-4 py-2 text-blue-700 font-bold hover:bg-blue-50 hover:text-blue-900"
                      onClick={() => setDropdownOpen(false)}
                    >
                      For Tutors
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="/signin" className="bg-blue-100 text-blue-900 font-bold px-5 py-2 rounded-lg shadow hover:bg-blue-200 transition">Sign In</a>
            <a href="/get-started" className="bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-lg shadow hover:bg-yellow-500 transition">Get Started</a>
          </div>
        </nav>
      </header>

      {/* Home Section - Modern Hero */}
      <section id="home" className="flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-br from-blue-100 via-blue-300 via-yellow-100 to-blue-100 shadow-inner">
        <span className="inline-block mb-6 px-4 py-2 bg-yellow-200 text-blue-900 rounded-full font-semibold text-sm shadow-lg animate-slide-in-left">🎓 Connecting students with expert tutors</span>
        <h1 className="text-6xl font-extrabold text-black mb-6 tracking-tight drop-shadow-lg text-center animate-slide-in-left">Find Your Perfect Tutor Today</h1>
        <p className="text-xl text-black max-w-2xl text-center mb-8 animate-slide-in-left">
          Connect with qualified tutors in minutes. Whether you need help with math, science, languages, or any subject, our platform matches you with the perfect tutor for personalized 1-on-1 learning.
        </p>
        <div className="flex gap-4 mb-8 animate-fade-in-up">
          <a href="#find-tutor" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition text-lg flex items-center gap-2">Find a Tutor <span className="text-xl">→</span></a>
          <a href="#become-tutor" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition text-lg flex items-center gap-2">Become a Tutor</a>
        </div>
      </section>

      {/* For Tutors Section */}
      <section id="tutors" className="flex flex-col items-center py-16 px-8 bg-yellow-50">
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 bg-gray-800 text-white rounded-full font-semibold text-xs mb-2">For Tutors</span>
          <h3 className="text-base font-semibold text-black mb-2">Earn Money Teaching What You Love</h3>
          <p className="text-base text-black max-w-2xl mx-auto mb-8">
            Join our community of expert tutors and help students succeed while building a flexible, rewarding career in education.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <a href="#apply-tutor" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow text-sm flex items-center gap-2">Apply to Become a Tutor</a>
            <a href="#learn-more" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded shadow text-sm">Learn More</a>
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
            <div className="bg-blue-900 rounded-xl p-6 shadow text-white flex flex-col">
              <div className="font-bold mb-2">Earn Great Money</div>
              <div className="text-sm">Set your own rates and earn $15-50+ per hour. Keep 80% of your earnings with transparent pricing.</div>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow text-white flex flex-col">
              <div className="font-bold mb-2">Flexible Schedule</div>
              <div className="text-sm">Teach when you want. Set your availability and work around your existing commitments.</div>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow text-white flex flex-col">
              <div className="font-bold mb-2">Find Great Students</div>
              <div className="text-sm">Our matching system connects you with motivated students who need your expertise.</div>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow text-white flex flex-col">
              <div className="font-bold mb-2">Teach From Anywhere</div>
              <div className="text-sm">Work from home or anywhere in the world. All you need is a computer and internet connection.</div>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow text-white flex flex-col">
              <div className="font-bold mb-2">Build Your Reputation</div>
              <div className="text-sm">Shape your tutoring journey with reviews, ratings, and our marketing support.</div>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow text-white flex flex-col">
              <div className="font-bold mb-2">Dedicated Support</div>
              <div className="text-sm">Get help when you need it with our tutor support team and comprehensive resource center.</div>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto mt-8 mb-8">
            <h4 className="text-base font-semibold text-black mb-4 text-center">How to Get Started</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">1</div>
                <div className="font-semibold text-black mb-1">Apply & Get Verified</div>
                <div className="text-xs text-black text-center">Submit your application with your qualifications and teaching experience. We'll verify your credentials.</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">2</div>
                <div className="font-semibold text-black mb-1">Create Your Profile</div>
                <div className="text-xs text-black text-center">Build an attractive profile showcasing your expertise, set your rates, and upload a professional photo.</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-2">3</div>
                <div className="font-semibold text-black mb-1">Start Teaching</div>
                <div className="text-xs text-black text-center">Get matched with students, schedule sessions, and start earning money doing what you love.</div>
              </div>
            </div>
          </div>
        </section>

        {/* For Students Section */}
        <section id="students" className="flex flex-col items-center py-16 px-8 bg-[#868fa6]">
        <div className="relative w-full flex flex-col items-center">
          <span className="inline-block mb-4 px-3 py-1 bg-gray-800 text-white rounded-full font-semibold text-xs">For Students</span>
          <h2 className="text-lg font-semibold text-black mb-2 text-center">Find Your Perfect Tutor Today</h2>
          <p className="text-base text-black max-w-2xl text-center mb-6">
            Join thousands of students who have improved their grades and confidence with personalized tutoring. It's free to sign up and browse tutors.
          </p>
          <div className="flex gap-4 mb-8 justify-center">
            <a href="#browse-tutors" className="bg-[#4a5fc1] hover:bg-[#3a4fa1] text-white font-semibold px-6 py-2 rounded shadow text-sm flex items-center gap-2">Browse Tutors <span className="text-lg">→</span></a>
            <a href="#signup" className="bg-[#bfc3d1] hover:bg-[#a0a4b8] text-gray-900 font-semibold px-6 py-2 rounded shadow text-sm">Sign Up Free</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
            <div className="bg-[#181e2b] rounded-xl p-6 shadow text-white flex flex-col">
              <div className="flex items-center mb-2"><span className="bg-[#22316c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="2"/></svg></span><span className="font-bold">Easy Tutor Discovery</span></div>
              <div className="text-sm">Browse hundreds of qualified tutors, filter by subject, price, and availability to find your perfect match.</div>
            </div>
            <div className="bg-[#181e2b] rounded-xl p-6 shadow text-white flex flex-col">
              <div className="flex items-center mb-2"><span className="bg-[#22316c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4"/></svg></span><span className="font-bold">Flexible Scheduling</span></div>
              <div className="text-sm">Book sessions that fit your schedule. Many tutors offer evening and weekend availability.</div>
            </div>
            <div className="bg-[#181e2b] rounded-xl p-6 shadow text-white flex flex-col">
              <div className="flex items-center mb-2"><span className="bg-[#22316c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg></span><span className="font-bold">Interactive Learning</span></div>
              <div className="text-sm">High-quality video sessions with screen sharing, digital whiteboards, and file sharing capabilities.</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
            <div className="bg-[#181e2b] rounded-xl p-6 shadow text-white flex flex-col">
              <div className="flex items-center mb-2"><span className="bg-[#22316c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg></span><span className="font-bold">Safe & Secure</span></div>
              <div className="text-sm">All tutors are verified and background-checked. Your safety and privacy are our top priorities.</div>
            </div>
            <div className="bg-[#181e2b] rounded-xl p-6 shadow text-white flex flex-col">
              <div className="flex items-center mb-2"><span className="bg-[#22316c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/></svg></span><span className="font-bold">Transparent Pricing</span></div>
              <div className="text-sm">Know the cost before you book, with clear pricing and trusted secure payments.</div>
            </div>
            <div className="bg-[#181e2b] rounded-xl p-6 shadow text-white flex flex-col">
              <div className="flex items-center mb-2"><span className="bg-[#22316c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 18l8-8 8 8"/></svg></span><span className="font-bold">Track Progress</span></div>
              <div className="text-sm">Monitor your improvement with session notes, feedback, and progress tracking tools.</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Community Says Section (from attachment) */}
  <section className="w-full flex flex-col items-center py-12 px-4 bg-[#cfd4e3]">
        <h2 className="text-2xl font-bold text-center text-black mb-2">What Our Community Says</h2>
        <p className="text-base text-[#8a93a8] text-center mb-8">Join thousands of students and tutors who have found success through TutorConnect.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Review Card 1 */}
          <div className="bg-[#5c6170] rounded-xl p-6 shadow text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="mb-4 text-base">"My tutor Jessica helped me improve my calculus grades from C+ to A- in just one semester! Her explanations make complex concepts so much clearer."</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#3b4260] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">SC</span>
              <div>
                <div className="font-bold">Sarah Chen</div>
                <div className="text-xs">High School Student</div>
              </div>
              <span className="ml-auto bg-[#22263a] text-white text-xs px-3 py-1 rounded">Grade 11</span>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="bg-[#5c6170] rounded-xl p-6 shadow text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="mb-4 text-base">"Found an amazing organic chemistry tutor through TutorConnect. Dr. Smith's step-by-step approach and practice problems were exactly what I needed for my pre-med studies."</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#3b4260] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">MJ</span>
              <div>
                <div className="font-bold">Marcus Johnson</div>
                <div className="text-xs">College Student</div>
              </div>
              <span className="ml-auto bg-[#22263a] text-white text-xs px-3 py-1 rounded">Sophomore</span>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="bg-[#5c6170] rounded-xl p-6 shadow text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="mb-4 text-base">"My English tutor Maria helped me overcome my fear of writing essays. Now I actually enjoy creative writing! The platform made it so easy to find the right match."</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#3b4260] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">ER</span>
              <div>
                <div className="font-bold">Emma Rodriguez</div>
                <div className="text-xs">Middle School Student</div>
              </div>
              <span className="ml-auto bg-[#22263a] text-white text-xs px-3 py-1 rounded">Grade 8</span>
            </div>
          </div>
          {/* Review Card 4 */}
          <div className="bg-[#5c6170] rounded-xl p-6 shadow text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="mb-4 text-base">"As a tutor on TutorConnect, I love how the platform connects me with motivated students. The scheduling and payment system makes everything seamless."</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#3b4260] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">MF</span>
              <div>
                <div className="font-bold">Dr. Michael Foster</div>
                <div className="text-xs">Math Tutor</div>
              </div>
              <span className="ml-auto bg-[#22263a] text-white text-xs px-3 py-1 rounded">PhD Mathematics</span>
            </div>
          </div>
          {/* Review Card 5 */}
          <div className="bg-[#5c6170] rounded-xl p-6 shadow text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="mb-4 text-base">"The flexibility to choose tutors based on my schedule and budget is amazing. My Spanish tutor Carlos fits perfectly with my busy college life."</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#3b4260] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">LT</span>
              <div>
                <div className="font-bold">Lisa Thompson</div>
                <div className="text-xs">College Student</div>
              </div>
              <span className="ml-auto bg-[#22263a] text-white text-xs px-3 py-1 rounded">Junior</span>
            </div>
          </div>
          {/* Review Card 6 */}
          <div className="bg-[#5c6170] rounded-xl p-6 shadow text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="mb-4 text-base">"TutorConnect allows me to continue teaching and helping students after retirement. The platform's tools make online tutoring effective and engaging."</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-[#3b4260] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">AW</span>
              <div>
                <div className="font-bold">Prof. Amanda Wright</div>
                <div className="text-xs">Science Tutor</div>
              </div>
              <span className="ml-auto bg-[#22263a] text-white text-xs px-3 py-1 rounded">Former Professor</span>
            </div>
          </div>
        </div>
      </section>

      {/* How AYB Tutoring Works Section */}
      <section className="flex flex-col items-center py-16 px-8 bg-blue-900">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">How AYB Tutoring Works</h3>
        <p className="text-base text-gray-300 mb-10 text-center max-w-2xl">
          Discover how our platform connects you with the perfect tutor for personalized, effective learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-100">
            <div className="font-bold mb-2">Expert Tutors</div>
            <div className="text-sm">Book sessions that fit your schedule. Available 24/7 with tutors in different time zones.</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-100">
            <div className="font-bold mb-2">Personalized Matching</div>
            <div className="text-sm">Our smart matching system connects you with tutors based on your subject, level, and learning style.</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-100">
            <div className="font-bold mb-2">Progress Tracking</div>
            <div className="text-sm">Engage in live video sessions with screen sharing, digital whiteboards, and real-time collaboration.</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow text-gray-100">
            <div className="font-bold mb-2">All Subjects Covered</div>
            <div className="text-sm">From math and science to languages and test prep – find tutors for any subject you need help with.</div>
          </div>
        </div>
      </section>

      {/* About AYB Tutoring Section */}
      <section id="about" className="flex flex-col items-center py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">About AYB Tutoring</h2>
        <p className="text-base text-gray-700 max-w-3xl text-center mb-8">
          AYB Tutoring is dedicated to helping students achieve their academic goals by connecting them with expert tutors in every subject. Our platform is designed for ease of use, safety, and results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-blue-100 rounded-xl p-6 shadow text-black flex flex-col">
            <div className="font-bold mb-2">Our Mission</div>
            <div className="text-sm">Empower students to reach their full potential through personalized learning and expert guidance.</div>
          </div>
          <div className="bg-blue-100 rounded-xl p-6 shadow text-black flex flex-col">
            <div className="font-bold mb-2">Our Tutors</div>
            <div className="text-sm">Carefully vetted, experienced, and passionate about teaching. We support tutors with resources and training.</div>
          </div>
          <div className="bg-blue-100 rounded-xl p-6 shadow text-black flex flex-col">
            <div className="font-bold mb-2">Our Platform</div>
            <div className="text-sm">Safe, secure, and easy to use. We prioritize privacy and provide tools for effective online learning.</div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="flex flex-col items-center py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Get in Touch</h2>
        <p className="text-base text-gray-700 max-w-2xl text-center mb-8">
          Have questions or need support? Fill out the form below and our team will get back to you soon.
        </p>
        <form className="bg-black rounded-xl p-8 shadow-lg w-full max-w-lg mx-auto text-white">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="forType" className="block text-sm font-semibold mb-2">For</label>
            <select id="forType" name="forType" className="w-full px-4 py-2 rounded bg-gray-800 text-white" defaultValue="">
              <option value="" disabled>Select type</option>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
            <select id="subject" name="subject" className="w-full px-4 py-2 rounded bg-gray-800 text-white" defaultValue="">
              <option value="" disabled>Select a subject</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="french">French</option>
              <option value="computer-science">Computer Science</option>
              <option value="tutoring-methods">Tutoring Methods</option>
              <option value="lesson-planning">Lesson Planning</option>
              <option value="student-engagement">Student Engagement</option>
              <option value="assessment">Assessment & Feedback</option>
              <option value="technology">Technology in Tutoring</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded bg-gray-800 text-white" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded shadow">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 border-t border-blue-800 bg-blue-900 text-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 rounded-2xl bg-blue-800/80 shadow-xl">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-extrabold text-xl mb-3 text-yellow-400 tracking-wide">AYB Tutoring</h4>
            <p className="text-sm mb-5 text-gray-200 text-center md:text-left">Empowering students and tutors worldwide.</p>
            <div className="flex gap-4 mt-2">
              {/* Improved Social Media Icons */}
              <a href="https://www.instagram.com/aybtutoring?igsh=MTM1Y2hsZnVucDY0OQ==" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 shadow-lg hover:scale-105 transition" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7">
                  <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#ig-gradient)" />
                  <defs>
                    <radialGradient id="ig-gradient" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="60%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </radialGradient>
                  </defs>
                  <circle cx="16" cy="16" r="7" fill="#fff" />
                  <circle cx="16" cy="16" r="4.5" fill="#E1306C" />
                  <circle cx="22" cy="10" r="1.2" fill="#fff" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ayb-tutoring/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#0077B5] p-1 shadow-lg hover:scale-105 transition" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7">
                  <rect x="2" y="2" width="28" height="28" rx="8" fill="#0077B5" />
                  <rect x="9" y="13" width="3" height="8" fill="#fff" />
                  <circle cx="10.5" cy="10.5" r="1.5" fill="#fff" />
                  <rect x="15" y="13" width="8" height="8" fill="#fff" />
                </svg>
              </a>
              <a href="#" className="rounded-full bg-[#1877F3] p-1 shadow-lg hover:scale-105 transition" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7">
                  <rect x="2" y="2" width="28" height="28" rx="8" fill="#1877F3" />
                  <path d="M18 16h2v-3h-2v-1c0-.6.2-1 1-1h1v-3h-2c-2 0-3 1-3 3v2h-2v3h2v7h3v-7z" fill="#fff" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-extrabold text-xl mb-3 text-yellow-400 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#reviews" className="hover:text-yellow-400 transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-extrabold text-xl mb-3 text-yellow-400 tracking-wide">Newsletter</h4>
            <form className="flex flex-col gap-2 w-full max-w-xs">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg shadow transition">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-extrabold text-xl mb-3 text-yellow-400 tracking-wide">Contact Info</h4>
            <p className="text-sm text-gray-200">Email: <a href="mailto:info@aybtutoring.ca" className="underline hover:text-yellow-400">info@aybtutoring.ca</a></p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-4 border-t border-blue-700 mt-6 rounded-b-xl bg-blue-900/90">
          <span className="text-xs text-gray-300">© {new Date().getFullYear()} AYB Tutoring. All rights reserved.</span>
          <span className="text-xs text-gray-300">Made with <span className="text-pink-400">❤️</span> by AYB Team</span>
        </div>
      </footer>
    </div>
  );
}

<style jsx global>{`
@keyframes slide-in-left {
  0% { opacity: 0; transform: translateX(-60px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-slide-in-left {
  animation: slide-in-left 0.8s cubic-bezier(0.4,0,0.2,1) both;
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
}
`}</style>
