"use client";
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    aos.init({
      // You can customize the options here
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);

  const profiles = [
    {
      imgSrc: "https://iili.io/dh6T9Wv.jpg",
      title: "Md Ashaduzzaman",
      position: "CEO & Founder",
      fb: "/fb/asad",
      twitter: "/twitter/asad",
      instagram: "/instagram/asad",
    },
    {
      imgSrc: "https://iili.io/dh6Tdfp.jpg",
      title: "Md Ariful-Islam",
      position: "Managing Director",
      fb: "/fb/arif",
      twitter: "/twitter/arif",
      instagram: "/instagram/arif",
    },
    {
      imgSrc: "https://iili.io/dh6T20N.jpg",
      title: "Md Masum Kamal",
      position: "Director",
      fb: "/fb/dulu",
      twitter: "/twitter/dulu",
      instagram: "/instagram/dulu",
    },
    {
      imgSrc: "https://iili.io/dh6T3gI.jpg",
      title: "Md Kabir Hossain",
      position: "Director",
      fb: "/fb/kabir",
      twitter: "/twitter/kabir",
      instagram: "/instagram/kabir",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <div className="text-white py-10 lg:py-16 text-center bg-about-top">
          <div className="container mx-auto px-5">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-6">
              Transforming Your Vision into Creative Results with Our
              Comprehensive Services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 p-5">
          <div className="md:w-[50%] relative border">
            <Image
              src="https://iili.io/dhrIA9s.jpg"
              alt="about-us"
              layout="fill"
              objectFit="cover"
              priority={true}
              className="rounded-md shadow-lg shadow-blue-gray-500 w-full"
            />
          </div>

          <div className="md:w-[50%]">
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="8 0 200 20"
              fill="none"
              className="w-full max-w-[280px] md:max-w-[280px] mb-8"
            >
              <path
                d="M10 10c20 5 40 2 60 0s40-10 60-5"
                stroke="#FFA500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                }}
              />
            </svg>
            <p className="text-lg leading-relaxed mb-12">
              We are a team of passionate professionals dedicated to providing
              top-notch services in Graphics Design, Photo Editing, Web Design &
              Development, Virtual Assistance, Video Editing, and Digital
              Marketing. Our mission is to empower businesses by delivering
              creative, effective, and innovative solutions that drive success.
            </p>
            <div className="">
              <Link href="/contact">
                <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="5 0 200 20"
              fill="none"
              className="w-full max-w-[260px] md:max-w-[260px] mb-6"
            >
              <path
                d="M10 10c20 5 40 2 60 0s40-10 60-5"
                stroke="#FFA500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                }}
              />
            </svg>
            <p className="text-lg leading-relaxed text-justify">
              Our mission is to provide exceptional services that help our
              clients achieve their goals. We strive to be a trusted partner in
              their success, offering innovative solutions and unparalleled
              expertise in every project we undertake.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="5 0 200 20"
              fill="none"
              className="w-full max-w-[240px] md:max-w-[240px] mb-6"
            >
              <path
                d="M10 10c20 5 40 2 60 0s40-10 60-5"
                stroke="#FFA500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                }}
              />
            </svg>
            <p className="text-lg leading-relaxed text-justify">
              We envision a world where businesses can effortlessly transform
              their ideas into reality through creative and cutting-edge
              solutions. Our goal is to be at the forefront of this
              transformation, delivering results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-5 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-30 0 200 20"
              fill="none"
              className="w-full max-w-[350px] md:max-w-[350px] mb-10"
            >
              <path
                d="M10 10c20 5 40 2 60 0s40-10 60-5"
                stroke="#FFA500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))",
                }}
              />
            </svg>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Team Member 1 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6T9Wv.jpg' alt="Team Member 1" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">John Doe</h3>
              <p className="text-orange-500">CEO & Founder</p>
            </div> */}
            {/* Team Member 2 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6Tdfp.jpg' alt="Team Member 2" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Jane Smith</h3>
              <p className="text-orange-500">Chief Designer</p>
            </div> */}
            {/* Team Member 3 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6T20N.jpg' alt="Team Member 3" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Alice Johnson</h3>
              <p className="text-orange-500">Marketing Head</p>
            </div> */}
            {/* Team Member 4 */}
            {/* <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src='https://iili.io/dh6T3gI.jpg' alt="Team Member 3" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Alice Johnson</h3>
              <p className="text-orange-500">Marketing Head</p>
            </div> */}
            {profiles.map((service, index) => (
              <TeamMember
                key={index}
                imgSrc={service.imgSrc}
                title={service.title}
                position={service.position}
                fb={service.fb}
                twitter={service.twitter}
                instagram={service.instagram}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        data-aos="fade-up"
        className=" text-center text-gray-100 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('https://iili.io/dhdK4wu.jpg')" }}
      >
        <div className="py-16 bg-cta">
          <div className="container mx-auto px-5 lg:px-20">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your project and see how we can help
              you achieve your goals.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-orange-500 text-gray-900 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                Get in Touch
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
