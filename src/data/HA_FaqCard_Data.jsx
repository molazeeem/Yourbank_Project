import { useEffect } from "react";

export const HA_FaqCard_Data = [
  {
    title: "How do I open an account with YourBank?",
    des: `Opening an account with YourBank is easy.
      Simply visit our website and click on the "Open an Account" button. 
      Follow the prompts, provide the required information, and complete the application process. 
      If you have any questions or need assistance, our customer support team is available to help.`,
    id: "0"
  },
  {
    title: "What documents do I need to provide to apply for a loan?",
    des: `The documents required for a loan application may vary depending on the type of loan you are applying for. 
    Generally, you will need to provide identification documents (such as a passport or driver's license), 
    proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). 
    Our loan officers will guide you through the specific requirements during the application process.`,
    id: "1"
  },
  {
    title: "How can I access my accounts online?",
    des: `Accessing your accounts online is simple and secure. 
    Visit our website and click on the "Login" button. Enter your username and password to access your accounts. 
    If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. 
    If you need assistance, our customer support team is available to guide you.`,
    id: "2"
  },
  {
    title: "Are my transactions and personal information secure?",
    des: `At YourBank, we prioritize the security of your transactions and personal information. 
    We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. 
    Additionally, we regularly update our security measures to stay ahead of emerging threats. 
    You can bank with confidence knowing that we have robust security systems in place.`,
    id: "3"
  },
  {
    title: "How can I access my accounts online?",
    des: `Accessing your accounts online is simple and secure. 
    Visit our website and click on the "Login" button. Enter your username and password to access your accounts. 
    If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. 
    If you need assistance, our customer support team is available to guide you.`,
    id: "4"
  },
  {
    title: "Are my transactions and personal information secure?",
    des: `At YourBank, we prioritize the security of your transactions and personal information. 
    We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. 
    Additionally, we regularly update our security measures to stay ahead of emerging threats. 
    You can bank with confidence knowing that we have robust security systems in place.`,
    id: "5"
  },
];
function faq_Data() {
  useEffect(() => {
    const data = JSON.stringify(HA_FaqCard_Data)
    localStorage.setItem('faqData', data)
  }, [])
}