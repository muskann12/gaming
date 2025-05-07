'use client'
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface HelpTopic {
  title: string;
  content: React.ReactNode;
}

const ContactPage = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const helpTopics: HelpTopic[] = [
    {
      title: 'Delivery & Collection',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-pink-600">Next Day Delivery by Evri</h4>
            <p>Order by 9pm for Next Day Delivery</p>
            <p className="font-bold">$14.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-pink-600">Next Day Delivery by DPD</h4>
            <p>Order by 9pm (excludes Public holidays)</p>
            <p className="font-bold">$17.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-pink-600">Express Delivery - 48 Hours</h4>
            <p>Order before 9pm (excludes Public holidays)</p>
            <p className="font-bold">$11.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-pink-600">Standard Delivery</h4>
            <p>Delivered within 3 - 7 days (excludes Public holidays)</p>
            <p className="font-bold">$7.49</p>
          </div>
        </div>
      )
    },
    {
      title: 'Returns & Refunds',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-bold text-pink-600">Returns Policy</h4>
          <p>You can now return your online order in a few easy steps:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Select your preferred tracked returns service</li>
            <li>We have print at home, paperless and collection options available</li>
            <li>You have 28 days for all standard products to return your order from the date it's delivered</li>
            <li>Consoles have 1 year warranty as standard so returns can fall outside of the 28 days for these products</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Orders & Payments',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>For any questions about your order status or payment methods, please contact our customer service team.</p>
        </div>
      )
    },
    {
      title: 'Stores & Services',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Find information about our physical stores and additional services we offer.</p>
        </div>
      )
    },
    {
      title: 'Product Support & Aftercare',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Get help with your products and information about warranty services.</p>
        </div>
      )
    },
    {
      title: 'Financial Services',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Information about credit options and payment plans available.</p>
        </div>
      )
    },
    {
      title: 'My Account',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Help with account management, login issues, and profile settings.</p>
        </div>
      )
    },
    {
      title: 'Site Policies',
      content: (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>View our terms of service, privacy policy, and other legal information.</p>
        </div>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us </title>
        <meta name="description" content="Get help with your orders, deliveries, returns and more" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">How can we help you?</h1>
            <p className="text-lg text-gray-600">Our team is ready to assist you with any questions</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Contact info */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
                <h2 className="text-2xl font-bold text-pink-600 mb-4">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Direct Support</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +44 344 822 6455
                      </p>
                      <p className="text-gray-600 flex items-center">

                        
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Instant Help</h3>
                    <button className="w-full bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      we are here to help
                    </button>
                    <p className="text-sm text-gray-500 mt-1 text-center">Available now</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Connect With Us</h3>
                    <div className="flex space-x-4 justify-center">
                      <Link href="#" className="text-pink-600 hover:text-pink-800 p-2 rounded-full bg-pink-50">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link href="#" className="text-pink-600 hover:text-pink-800 p-2 rounded-full bg-pink-50">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                      <Link href="#" className="text-pink-600 hover:text-pink-800 p-2 rounded-full bg-pink-50">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Help topics dropdowns */}
            <div className="lg:w-2/3">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pink-600 mb-4">Quick Help Topics</h2>
                
                {helpTopics.map((topic, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
                    <button
                      className={`w-full flex justify-between items-center p-4 text-left ${activeDropdown === index ? 'bg-pink-600 text-white' : 'bg-white text-gray-800 hover:bg-pink-50'}`}
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="font-medium">{topic.title}</span>
                      <svg
                        className={`h-5 w-5 transform transition-transform ${activeDropdown === index ? 'rotate-180 text-white' : 'text-pink-600'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="p-4 bg-gray-50 animate-fadeIn">
                        {topic.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;