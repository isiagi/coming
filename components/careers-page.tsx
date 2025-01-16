"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { JobListings } from "./job-listings";

export function CareersPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ name, email, message });
    toast({
      title: "Application Submitted",
      description:
        "Thank you for your interest. We'll be in touch if a suitable position becomes available.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>

      <section className="mb-16 bg-gray-50 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Current Openings
        </h2>
        <JobListings jobs={[]} />
      </section>

      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stay Connected
        </h2>
        <p className="mb-6 text-center text-gray-600 max-w-2xl mx-auto">
          If you're interested in future opportunities, please fill out the form
          below. We'll keep your information on file and contact you if a
          suitable position becomes available.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your skills and experience"
              required
              className="w-full h-32"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </section>
    </div>
  );
}
