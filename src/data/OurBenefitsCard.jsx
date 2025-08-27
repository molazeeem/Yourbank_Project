const storedBFCardData = localStorage.getItem('BFCardData');

let BFCardData = storedBFCardData ? JSON.parse(storedBFCardData) : [
     {
          icon: "assets/images/Icons/presentation-chart-bar.svg",
          title: "Competitive Compensation",
          paragraph: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."
     },
     {
          icon: "assets/images/Icons/careers-icons/lamp.svg",
          title: "Health and Wellness",
          paragraph: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
     },
     {
          icon: "assets/images/Icons/careers-icons/Subtract.svg",
          title: "Retirement Planning",
          paragraph: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."
     },
     {
          icon: "assets/images/Icons/careers-icons/workBalance.svg",
          title: "Work-Life Balance",
          paragraph: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."
     }
];

if (!storedBFCardData) {
     localStorage.setItem('BFCardData', JSON.stringify(BFCardData));
}
export const exportedBFCardData = BFCardData;
