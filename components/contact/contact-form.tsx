"use client";

import type React from "react";

import { startTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendEmail } from "./actions/sendEmail";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const res = await sendEmail(formData);
      if (res.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      }
    });
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium">
            Send Us a Message
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-nmb-blue">
              Let's Discuss Your Project
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
              Fill out the form below and our team will get back to you as soon
              as possible to discuss your steel fabrication needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div className="md:col-span-3 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="border-gray-200 focus-visible:ring-nmb-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="border-gray-200 focus-visible:ring-nmb-blue"
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+974 XXXX XXXX"
                    className="border-gray-200 focus-visible:ring-nmb-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    Subject <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is your inquiry about?"
                    className="border-gray-200 focus-visible:ring-nmb-blue"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 flex items-center"
                >
                  Message <span className="text-red-500 ml-1">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your project or inquiry..."
                  className="min-h-[150px] border-gray-200 focus-visible:ring-nmb-blue"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-nmb-blue hover:bg-nmb-darkblue text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </span>
                  )}
                </Button>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-md bg-green-50 border border-green-100 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-green-700 text-sm mt-1">
                      Thank you for your message. Our team will get back to you
                      soon.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="p-4 rounded-md bg-red-50 border border-red-100 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">
                      Message Could Not Be Sent
                    </h4>
                    <p className="text-red-700 text-sm mt-1">
                      There was an error sending your message. Please try again
                      later.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right side - Additional Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-nmb-blue/5 to-nmb-gold/5 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-nmb-blue mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nmb-blue text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Get expert consultation on your steel fabrication project
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nmb-blue text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Request a detailed quote for your specific requirements
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nmb-blue text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Learn more about our services and capabilities
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nmb-blue text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Schedule a visit to our facility or a meeting with our team
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-nmb-blue rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">
                Fast Response Guarantee
              </h3>
              <p className="text-white/80 text-sm mb-4">
                We understand the importance of timely communication. Our team
                is committed to responding to all inquiries within 24 hours
                during business days.
              </p>
              <div className="flex items-center justify-between text-white/80 text-sm border-t border-white/20 pt-4">
                <span>Average Response Time:</span>
                <span className="font-medium text-white">4-6 Hours</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-nmb-blue mb-4">
                Connect With Us
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Follow us on social media for the latest updates, project
                showcases, and industry insights.
              </p>
              <div className="flex space-x-4 justify-center">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-nmb-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-nmb-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-nmb-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-nmb-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
