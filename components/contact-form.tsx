"use client";

import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#fff] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#212529] text-center mb-2">
          Contact With Us
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisi hendrerit commodo.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-[#F8F9FA] p-6 rounded-lg">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212529]">Support Email</h3>
                <p className="text-gray-400">Hello@yourdomain.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-[#F8F9FA] p-6 rounded-lg">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212529]">Phone Number</h3>
                <p className="text-gray-400">(039) 245 90238</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-[#F8F9FA] p-6 rounded-lg">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212529]">Working Hours</h3>
                <p className="text-gray-400">9AM to 5PM Sunday To Friday</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-[#F8F9FA] p-6 rounded-lg">
              <div className="bg-purple-600 p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212529]">Location</h3>
                <p className="text-gray-400">
                  132 Dartmouth Street Boston, Massachusetts 02156
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#F8F9FA] p-8 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Name"
                className="bg-transparent border-gray-700"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent border-gray-700"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-transparent border-gray-700"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
            <Textarea
              placeholder="Message"
              className="bg-transparent border-gray-700 min-h-[200px]"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>

      {/* Scroll to top */}
      <div className="fixed right-8 bottom-8 writing-mode-vertical-rl transform rotate-180">
        <span className="text-sm tracking-wider cursor-pointer hover:text-purple-500">
          SCROLL TOP
        </span>
      </div>
    </div>
  );
}
