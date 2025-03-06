import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] py-12 px-4 md:px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About DST Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#212529]">About DST</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about/mission"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners-developers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/about/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/trust-center"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Trust Center
                </Link>
              </li>
              <li>
                <Link
                  href="/about/careers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Compliance & Integrity
                </Link>
              </li>
              <li>
                <Link
                  href="/public-policy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Public Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about/news-events"
                  className="text-gray-600 hover:text-gray-900"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#212529]">
              Products & Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products-services/managed-services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services/cybersecurity"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services/data-analytics"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services/software-solutions"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services/cloud-computing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Developers Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#212529]">
              Partners & Developers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/partners-developers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Partner Program
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/developer-resources"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Developer Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-portal"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Partner Portal
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="//support"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Technical Support
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/documentation"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Training
                </Link>
              </li> */}
              {/* <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} DST. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://linkedin.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
