import { Link } from "react-router-dom";
import { Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  // Team members data
  const teamMembers = [
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
      <section className=' dark:bg-zinc-900 dark:text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
              About Keisar Club
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className=''>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='md:flex md:items-center md:space-x-12'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
              <img
                src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
                alt='Our Story'
                className='rounded-lg shadow-xl'
              />
            </div>
            <div className='md:w-1/2 text-lg text-white'>
              <h2 className='text-3xl font-bold text-white mb-4'>Our Story</h2>
              <p className=' mb-6'>
                Keisar Club was founded in 2018 with a simple mission: to
                provide high-quality products that enhance everyday life. What
                started as a small operation has grown into a trusted brand
                serving customers worldwide.
              </p>
              <p className=' mb-6'>
                Our journey began when our founder, Sarah Johnson, identified a
                gap in the market for premium products that combine
                functionality, aesthetics, and durability. Drawing from her
                background in product design and business, she assembled a team
                of like-minded professionals who shared her vision.
              </p>
              <p>
                Today, we continue to innovate and expand our product line while
                maintaining our commitment to quality, customer satisfaction,
                and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16 dark:bg-zinc-900 dark:text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold  mb-4'>Our Mission & Vision</h2>
            <p className='text-xl 600 max-w-3xl mx-auto'>
              We're driven by a clear purpose and ambitious goals for the
              future.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='bg-white text-black dark:text-white dark:bg-zinc-800 p-8 rounded-lg shadow-md'>
              <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-zinc-600 mb-6'>
                <Target className='h-8 w-8' />
              </div>
              <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
              <p className=''>
                To provide exceptional products that enhance everyday life
                through innovative design, premium materials, and superior
                craftsmanship. We strive to exceed customer expectations while
                maintaining ethical business practices and environmental
                responsibility.
              </p>
            </div>

            <div className='bg-white text-black dark:bg-zinc-800 dark:text-white p-8 rounded-lg shadow-md'>
              <div className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-stone-600 mb-6'>
                <Award className='h-8 w-8' />
              </div>
              <h3 className='text-2xl font-semibold mb-4'>Our Vision</h3>
              <p className=''>
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
            <h2 className='text-3xl font-bold text-black dark:text-white mb-4'>
              Meet Our Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              The passionate individuals behind Keisar Club who make it all
              possible.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-[40rem] object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
                  <p className='text-indigo-600 font-medium mb-4'>
                    {member.role}
                  </p>
                  <p className='text-black dark:text-white'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className='py-10 bg-stone-100 dark:bg-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Get In Touch
            </h2>
            <p className='text-xl text-black dark:text-white max-w-3xl mx-auto'>
              Have questions or want to learn more about our products? We'd love
              to hear from you.
            </p>
          </div>

          <div className='bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center text-gray-300 '>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='mb-2'>For general inquiries:</p>
                <p className='text-indigo-600 font-medium'>
                  keisarclub@gmail.com
                </p>
              </div>

              <div className='text-center'>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className=' mb-2'>Customer Service:</p>
                <p className='text-indigo-600 font-medium'>+972-526-471-797</p>
              </div>

              <div className='text-center'>
                <h3 className='text-lg font-semibold mb-2'>Address</h3>
                <p className='text-indigo-600 font-medium'>
                  Hatikva
                  <br />
                  Karney Shomron
                  <br />
                  Israel
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
