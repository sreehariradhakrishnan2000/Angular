/**
 * Environment configuration for development.
 */
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
    serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID (create template with {{question}} param)
  }
};
