import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, AlertCircle, Upload, X } from 'lucide-react';

interface LocationState {
  productId?: number;
  productName?: string;
  quantity?: number;
}

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState || {};
  
  // Products data (in a real app, this would come from an API)
  const products = [
    { id: 1, name: 'Premium Package', price: '$299' },
    { id: 2, name: 'Standard Package', price: '$199' },
    { id: 3, name: 'Basic Package', price: '$99' },
    { id: 4, name: 'Custom Solution', price: 'Custom' },
    { id: 5, name: 'Enterprise Package', price: '$499' },
    { id: 6, name: 'Starter Kit', price: '$79' },
  ];
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    productId: state.productId || '',
    quantity: state.quantity || 1,
    additionalInfo: '',
    agreeToTerms: false
  });
  
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    productId: '',
    agreeToTerms: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');

  useEffect(() => {
    // Set product from URL params if available
    if (state.productId) {
      setFormData(prev => ({
        ...prev,
        productId: state.productId || '',
        quantity: state.quantity || 1
      }));
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    setFileError('');
    
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      
      // Validate file size (max 5MB per file)
      const oversizedFiles = filesArray.filter(file => file.size > 5 * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        setFileError('One or more files exceed the 5MB size limit');
        return;
      }
      
      // Validate file type (only images and PDFs)
      const invalidFiles = filesArray.filter(file => 
        !file.type.match('image.*') && file.type !== 'application/pdf'
      );
      if (invalidFiles.length > 0) {
        setFileError('Only images and PDF files are allowed');
        return;
      }
      
      setFiles(prev => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      productId: '',
      agreeToTerms: ''
    };
    
    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    // Phone validation
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }
    
    // Product validation
    if (!formData.productId) {
      newErrors.productId = 'Please select a product';
      valid = false;
    }
    
    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Processing your order...'
    });
    
    // In a real application, you would submit to a backend or use a form service
    // This is a simulation of form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your order has been submitted successfully! We will contact you shortly to confirm the details.'
      });
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        productId: '',
        quantity: 1,
        additionalInfo: '',
        agreeToTerms: false
      });
      setFiles([]);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4">Order Form</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Complete the form below to place your order. We'll get back to you promptly to confirm the details.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {formStatus.submitted ? (
              <div className={`p-6 rounded-md ${formStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-center mb-4">
                  {formStatus.success ? (
                    <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                      <Check className="h-6 w-6" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                  )}
                  <div className="ml-4">
                    <h3 className={`text-lg font-medium ${formStatus.success ? 'text-green-800' : 'text-red-800'}`}>
                      {formStatus.success ? 'Order Submitted' : 'Processing Error'}
                    </h3>
                    <p className={`text-sm ${formStatus.success ? 'text-green-700' : 'text-red-700'}`}>
                      {formStatus.message}
                    </p>
                  </div>
                </div>
                {formStatus.success && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => navigate('/')}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Return to Home
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 ${formErrors.firstName ? 'border-red-300' : ''}`}
                        />
                        {formErrors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 ${formErrors.lastName ? 'border-red-300' : ''}`}
                        />
                        {formErrors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 ${formErrors.email ? 'border-red-300' : ''}`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 ${formErrors.phone ? 'border-red-300' : ''}`}
                        />
                        {formErrors.phone && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Order Details */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="productId" className="block text-sm font-medium text-gray-700 mb-1">
                          Select Product *
                        </label>
                        <select
                          id="productId"
                          name="productId"
                          value={formData.productId}
                          onChange={handleChange}
                          className={`block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 ${formErrors.productId ? 'border-red-300' : ''}`}
                        >
                          <option value="">-- Select a Product --</option>
                          {products.map(product => (
                            <option key={product.id} value={product.id}>
                              {product.name} ({product.price})
                            </option>
                          ))}
                        </select>
                        {formErrors.productId && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.productId}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          rows={4}
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Please provide any specific requirements or questions you have about the product."
                          className="block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  {/* File Upload */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Attachments (Optional)</h2>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload files</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              multiple
                              onChange={handleFileChange}
                              accept="image/*,.pdf"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF, PDF up to 5MB each
                        </p>
                      </div>
                    </div>
                    
                    {fileError && (
                      <p className="mt-2 text-sm text-red-600">{fileError}</p>
                    )}
                    
                    {files.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-700">Uploaded files:</h3>
                        <ul className="mt-2 divide-y divide-gray-200">
                          {files.map((file, index) => (
                            <li key={index} className="py-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">{file.name}</span>
                                <span className="ml-2 text-sm text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                          I agree to the terms and conditions *
                        </label>
                        <p className="text-gray-500">
                          By checking this box, you agree to our{' '}
                          <a href="#" className="text-indigo-600 hover:text-indigo-500">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-indigo-600 hover:text-indigo-500">
                            Privacy Policy
                          </a>
                          .
                        </p>
                        {formErrors.agreeToTerms && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.agreeToTerms}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit Order
                    </button>
                    <p className="mt-2 text-sm text-gray-500 text-center">
                      * Required fields
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderForm;