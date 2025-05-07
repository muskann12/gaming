import Link from 'next/link';
import Image from 'next/image';
import { FaCcVisa, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">CUSTOMER SERVICES</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Help Home</Link></li>
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Delivery & Collection</Link></li>
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Returns Policy</Link></li>
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">My Account</Link></li>
              
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT</h3>
            <ul className="space-y-2">
              
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Promotional Terms</Link></li>
              <li><Link href="/support" className="hover:text-pink-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <div>
              <h3 className="font-bold text-lg mb-4">WAYS TO PAY</h3>
              <div className="flex items-center space-x-4">
                <FaCcVisa size={32} className="text-blue-800" />
                <span className="text-sm">VISA</span>
              </div>
              <div className="mt-2">
                <Link href="/support" className="text-sm hover:text-pink-400 transition-colors">Pay</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <Image 
                  src="/images/logo.png" 
                  alt="GAME Logo" 
                  width={100} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </Link>
              
            </div>

            <div className="text-sm text-center md:text-left mb-4 md:mb-0">
              © 2025 Game Retail Limited
              <div className="flex space-x-4 mt-2">
                <Link href="/privacy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link>
                
              </div>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="hover:text-pink-400 transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-600">
            <p>
              Elite Hits UK LTD (Company Registration No: 16427807), trading as 'GAME CAFE | Consoles & Games', is authorised and regulated by the Financial Conduct Authority (FCA) as a credit broker and not a lender. Credit services, including Frasers Plus, are provided by Frasers Group Financial Services Ltd (FRN: 955608), also authorised and regulated by the FCA. Please note that missed payments may impact your credit rating. For regulated payment processing, Frasers Group Financial Services Ltd operates as a payment agent of Transact Payments Limited, which is authorised and regulated by the Gibraltar Financial Services Commission as an electronic money institution.
            </p>
            <p className="mt-2">
              Registered Office: 203 West Street, Fareham, Hampshire, England, PO16 0EN
              VAT Number: NB265995276
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;