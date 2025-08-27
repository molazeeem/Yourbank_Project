const storedOTSlideData = localStorage.getItem('OTSlideData');

let OTSlideData = storedOTSlideData ? JSON.parse(storedOTSlideData) : [
     {
          paragraph: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
          name: "Sara T"
     },

     {
          paragraph: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
          name: "John"
     },

     {
          paragraph: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
          name: "Emily G"
     },
     {
          paragraph: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
          name: "Sara T"
     },

     {
          paragraph: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
          name: "John"
     },

     {
          paragraph: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
          name: "Emily G"
     }

];

if (!storedOTSlideData) {
     localStorage.setItem('OTSlideData', JSON.stringify(OTSlideData));
}
export const exportedOTSlideData = OTSlideData;
