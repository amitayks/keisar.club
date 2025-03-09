import { Link } from "react-router-dom";
import { Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "keisar_logo_black.png",
      bio: "Sarah founded Keisar Club with a vision to provide premium products that enhance everyday life.",
    },
    {
      name: "Michael Chen",
      role: "Chief Product Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Michael oversees product development and ensures all offerings meet our high quality standards.",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Emily leads our customer service team and is dedicated to ensuring exceptional client satisfaction.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
              About Keisar Club
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto'>
              Learn about our story, our mission, and the team behind our
              premium products.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='md:flex md:items-center md:space-x-12'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
              <img
                src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
                alt='Our Story'
                className='rounded-lg shadow-xl'
              />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Our Story
              </h2>
              <p className='text-lg text-gray-600 mb-6'>
                Keisar Club was founded in 2018 with a simple mission: to
                provide high-quality products that enhance everyday life. What
                started as a small operation has grown into a trusted brand
                serving customers worldwide.
              </p>
              <p className='text-lg text-gray-600 mb-6'>
                Our journey began when our founder, Sarah Johnson, identified a
                gap in the market for premium products that combine
                functionality, aesthetics, and durability. Drawing from her
                background in product design and business, she assembled a team
                of like-minded professionals who shared her vision.
              </p>
              <p className='text-lg text-gray-600'>
                Today, we continue to innovate and expand our product line while
                maintaining our commitment to quality, customer satisfaction,
                and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Mission & Vision
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We're driven by a clear purpose and ambitious goals for the
              future.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6'>
                <Target className='h-8 w-8' />
              </div>
              <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
              <p className='text-gray-600'>
                To provide exceptional products that enhance everyday life
                through innovative design, premium materials, and superior
                craftsmanship. We strive to exceed customer expectations while
                maintaining ethical business practices and environmental
                responsibility.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md'>
              <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-stone-600 mb-6'>
                <Award className='h-8 w-8' />
              </div>
              <h3 className='text-2xl font-semibold mb-4'>Our Vision</h3>
              <p className='text-gray-600'>
                To become the leading provider of premium lifestyle products
                globally, recognized for our unwavering commitment to quality,
                innovation, and customer satisfaction. We aim to build lasting
                relationships with our customers and make a positive impact on
                their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Meet Our Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              The passionate individuals behind Keisar Club who make it all
              possible.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-md overflow-hidden'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
                  <p className='text-indigo-600 font-medium mb-4'>
                    {member.role}
                  </p>
                  <p className='text-gray-600'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Get In Touch
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Have questions or want to learn more about our products? We'd love
              to hear from you.
            </p>
          </div>

          <div className='bg-white p-8 rounded-lg shadow-md'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-600 mb-2'>For general inquiries:</p>
                <p className='text-indigo-600 font-medium'>
                  info@keisarclub.com
                </p>
                <p className='text-gray-600 mt-2 mb-2'>For customer support:</p>
                <p className='text-indigo-600 font-medium'>
                  support@keisarclub.com
                </p>
              </div>

              <div className='text-center'>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-600 mb-2'>Customer Service:</p>
                <p className='text-indigo-600 font-medium'>+1 (555) 123-4567</p>
                <p className='text-gray-600 mt-2 mb-2'>Sales Department:</p>
                <p className='text-indigo-600 font-medium'>+1 (555) 987-6543</p>
              </div>

              <div className='text-center'>
                <h3 className='text-lg font-semibold mb-2'>Address</h3>
                <p className='text-gray-600 mb-2'>Headquarters:</p>
                <p className='text-indigo-600 font-medium'>
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className='text-center mt-8'>
              <Link
                to='/contact'
                className='bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors inline-flex items-center'
              >
                Contact Us
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
