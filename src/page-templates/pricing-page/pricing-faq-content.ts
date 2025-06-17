import { FAQContent } from '@/page-templates/service-page/types';

const pricingFAQContent: FAQContent = {
  title: "Pricing & Payment FAQs",
  description: "Answers to common questions about our pricing models, payment options, and how we ensure transparency and value.",
  items: [
    {
      icon: "DollarSign",
      question: "What pricing models do you offer?",
      answer: "We offer hourly billing ($40-100/hour), fixed-price projects, hybrid pricing (10-25% down + hourly billing), and monthly retainers. We'll help you choose the best fit during your consultation based on your project needs and budget.",
    },
    {
      icon: "CreditCard", 
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, digital wallets, and bank transfers via Stripe, plus Venmo Business, Wise for international payments, and escrow services (Escrow.com, Upwork, Fiverr) when additional security is desired.",
    },
    {
      icon: "FileText",
      question: "How are estimates determined?", 
      answer: "Project estimates are based on project scope, complexity, timeline, and client needs. Given the complexity of software development, we can only prvide predetermined quotes for specific projects, but we do our best to provide accurate, detailed, and transparent estimates so you know exactly what to expect. All estimates are made in good-faith that may adjust as project requirements evolve.",
    },
    {
      icon: "Calendar",
      question: "What are your payment terms?",
      answer: "Our most common payment terms are a 10-25% down payment to secure your project, with the remainder billed hourly at regular check-ins or upon milestone completion. The down payment is credited toward your project's total cost and deducted from subsequent invoices. We typically follow a Net 30 payment term, requiring invoices to be paid in full within 30 days of receipt.",
    },
    {
      icon: "Clock",
      question: "How are project hours tracked?",
      answer: "We use a time tracking software to track project hours. You will receive a detailed report of the hours worked on your project with each invoice.",
    },
    {
      icon: "HelpCircle", 
      question: "Can I get a custom payment plan?",
      answer: "Absolutely! We work with clients of all sizes and budget situations—from individuals and nonprofits to growing businesses and enterprises. We're happy to discuss custom payment schedules and arrangements that work for your specific situation.",
    },
    {
      icon: "Package",
      question: "Can I bundle multiple services?",
      answer: "Yes! We offer discounts when you bundle multiple services together. As your one-stop shop for all your tech needs, you can save money and get a cohesive, professional result for your business.",
    },
  ],
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  },
};

export default pricingFAQContent; 