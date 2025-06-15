import emailjs from "emailjs-com";
import { AlertCircle, Clock, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import SocialLinksComponent from "../components/SocialLinksComponent";
import {
  EMAILJS_CONFIG,
  PERSONAL_INFO,
  SOCIAL_LINKS,
} from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: "", label: "Select project type..." },
    { value: "woodworking", label: "Custom Woodworking" },
    { value: "web-development", label: "Web Development" },
    { value: "consultation", label: "Consultation" },
    { value: "collaboration", label: "Collaboration" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({
      submitted: true,
      success: false,
      message: "Sending your message...",
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject:
          formData.subject ||
          `New ${formData.projectType || "contact"} inquiry`,
        message: formData.message,
        project_type: formData.projectType,
        to_email: PERSONAL_INFO.email,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.USER_ID
      );

      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Thank you for your message! I'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                Let's Start a Conversation
              </h2>
              <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8'>
                Whether you're looking for custom woodworking, web development
                services, or just want to discuss an idea, I'm here to help.
                Every great project starts with a conversation.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                  <Mail className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                    Email
                  </h3>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium'
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center'>
                  <Phone className='w-6 h-6 text-green-600 dark:text-green-400' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                    Phone
                  </h3>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className='text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium'
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center'>
                  <Clock className='w-6 h-6 text-orange-600 dark:text-orange-400' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                    Response Time
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Typically 1 to 4 hours
                  </p>
                </div>
              </div>
            </div>

            <SocialLinksComponent
              socialLinks={SOCIAL_LINKS}
              variant='filled'
              size='lg'
              className='flex items-center md:justify-normal justify-center'
            />
          </div>

          <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-8'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Send a Message
            </h2>

            {formStatus.submitted && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.success
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                }`}
              >
                <p className='flex items-center'>
                  {formStatus.success ? (
                    <svg
                      className='h-5 w-5 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <AlertCircle className='h-5 w-5 mr-2' />
                  )}
                  {formStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 pl-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                      formErrors.name
                        ? "border-red-300 dark:border-red-600"
                        : ""
                    }`}
                    placeholder='Your full name'
                  />
                  {formErrors.name && (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400'>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 pl-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                      formErrors.email
                        ? "border-red-300 dark:border-red-600"
                        : ""
                    }`}
                    placeholder='your.email@example.com'
                  />
                  {formErrors.email && (
                    <p className='mt-1 text-sm text-red-600 dark:text-red-400'>
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='projectType'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    Project Type
                  </label>
                  <select
                    id='projectType'
                    name='projectType'
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className='block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 pl-2 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className='block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 pl-2 disabled:opacity-50 disabled:cursor-not-allowed'
                    placeholder='Brief project description'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 pl-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                    formErrors.message
                      ? "border-red-300 dark:border-red-600"
                      : ""
                  }`}
                  placeholder='Tell me about your project, timeline, budget, and any specific requirements...'
                />
                {formErrors.message && (
                  <p className='mt-1 text-sm text-red-600 dark:text-red-400'>
                    {formErrors.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                >
                  <Send className='h-5 w-5 mr-2' />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400 text-center'>
                  * Required fields
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
