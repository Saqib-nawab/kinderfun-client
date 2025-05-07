// import React, { useEffect, useState } from "react";
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaPinterest,
//     FaThreads,
//     FaTiktok,
//     FaXTwitter,
// } from "react-icons/fa6";

// const SocialModal: React.FC = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow(true);
//     }, 10000); // every 10 seconds (10000ms)

//     return () => clearInterval(interval);
//   }, []);

//   const handleClose = () => setShow(false);

//   if (!show) return null;

//   const socials = [
//     {
//       icon: <FaInstagram />,
//       url: "https://www.instagram.com/kinderfunnuresryrhymes/",
//       name: "Instagram",
//     },
//     {
//       icon: <FaFacebookF />,
//       url: "https://www.facebook.com/profile.php?id=61575706888022",
//       name: "Facebook",
//     },
//     {
//       icon: <FaTiktok />,
//       url: "https://www.tiktok.com/@kinderfunnurseryrhymes?lang=en",
//       name: "TikTok",
//     },
//     {
//       icon: <FaPinterest />,
//       url: "https://www.pinterest.com/kinderfun0083/",
//       name: "Pinterest",
//     },
//     {
//       icon: <FaThreads />,
//       url: "https://www.threads.com/@kinderfunnuresryrhymes",
//       name: "Threads",
//     },
//     {
//       icon: <FaXTwitter />,
//       url: "https://x.com/Kinderfun369",
//       name: "Twitter",
//     },
//   ];

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
//       <div className="bg-[#1A1A80] text-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative overflow-hidden">
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4  text-xl   rounded-full p-2 bg-[#FF5A24]"
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-semibold mb-4 text-center text-white">
//           Follow Us
//         </h2>
//         <p className="text-md text-center mb-6 text-white">
//           Stay connected with KinderFun on social media!
//         </p>
//         <div className="flex  justify-start gap-2">
//           {socials.map((item, index) => (
//             <a
//               key={index}
//               href={item.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 text-sm text-white"
//             >
//               <div className="p-2  rounded-full bg-[#FF5A24] text-[#1A1A80]]">
//                 {item.icon}
//               </div>
//               <span className="text-sm text-white">{item.name}</span>
//             </a>
//           ))}
//         </div>
//         {/* <div className="mt-6 flex justify-center">
//           <button
//             onClick={handleClose}
//             className="bg-pink-600 text-white px-4 py-2 rounded-full"
//           >
//             Close
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default SocialModal;
