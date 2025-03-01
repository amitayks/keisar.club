export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image: string;
  additionalImages?: string[];
  price: string;
  stock: string;
  rating?: number;
  reviews?: number;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  productId: number | string;
  quantity: number;
  additionalInfo: string;
  agreeToTerms: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}