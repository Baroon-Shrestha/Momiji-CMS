import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedServices = checked
        ? [...formData.services, value]
        : formData.services.filter((service) => service !== value);
      setFormData((prev) => ({ ...prev, services: updatedServices }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 flex items-center justify-center py-12">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl  overflow-hidden flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="hidden md:flex flex-col justify-center items-start p-8 w-full md:w-1/2 bg-gray-200 text-slate-800 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 capitalize text-center">
            Leave Your Contact Information and We Will reach out to you soon!!
          </h2>
          <p className="text-md md:text-lg leading-relaxed text-center font-extralight">
            We understand that choosing to study abroad is a big decision, and
            we're here to help guide you every step of the way. Whether you have
            questions about our services, the application process, or
            scholarships available for studying in Japan, our team is ready to
            assist. Simply leave your contact details, and one of our
            experienced consultants will get in touch with you as soon as
            possible to provide the support you need.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-b from-[#F05A22] via-[#F78C1F] to-[#FBC21B] px-8 py-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-2">Get In Touch</h1>
            <p className="text-white">
              We're here to help you achieve your goals
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <div className="w-2 h-6 bg-amber-500 rounded-full mr-3"></div>
                Personal Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                      placeholder="9818******"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Interest */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <div className="w-2 h-6 bg-amber-500 rounded-full mr-3"></div>
                Service Interest
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Reason for Contact{" "}
                  <span className="text-red-400">*</span>
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none"
                >
                  <option value="">Please select...</option>
                  <option value="counseling">Counseling Services</option>
                  <option value="classes">Class Information</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Additional Services of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: "individual",
                      label: "Individual Counseling",
                      value: "individual-counseling",
                    },
                    {
                      id: "group",
                      label: "Group Counseling",
                      value: "group-counseling",
                    },
                    { id: "workshops", label: "Workshops", value: "workshops" },
                    {
                      id: "online",
                      label: "Online Classes",
                      value: "online-classes",
                    },
                  ].map(({ id, label, value }) => (
                    <label
                      key={id}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 group"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={value}
                        checked={formData.services.includes(value)}
                        onChange={handleChange}
                        className="w-4 h-4 text-amber-600 border-gray-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F05A22] via-[#F78C1F] to-[#FBC21B] text-white py-4 rounded-xl text-base font-semibold shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
