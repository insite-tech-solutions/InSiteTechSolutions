import { FAQContent } from '@/page-templates/service-page/types';

const homepageFAQContent: FAQContent = {
  title: "Frequently Asked Questions",
  description: "Quick answers to common questions about InSite Tech Solutions, our services, and how we work.",
  items: [
    {
      icon: "Info",
      question: "What services does InSite Tech Solutions offer?",
      answer: "We provide a wide range of services including web and app development, custom software solutions, AI and automation, data analysis, SEO and online marketing, graphic design and branding, and consulting and training.",
    },
    {
      icon: "UserCheck",
      question: "Who are your typical clients?",
      answer: "Our clients range from startups and small businesses to established enterprises across various industries seeking innovative technology solutions.",
    },
    {
      icon: "Calendar",
      question: "How do I get started with a project?",
      answer: "Simply contact us through our website or email. We'll schedule a free consultation to discuss your needs and recommend the best solutions.",
    },
    {
      icon: "ShieldCheck",
      question: "Do you offer ongoing support after project delivery?",
      answer: "Yes, we offer maintenance and support plans to ensure your solution remains secure, up-to-date, and effective.",
    },
  ],
  moreLink: {
    text: "View all frequently asked questions",
    url: "/faq",
  },
};

export default homepageFAQContent; 