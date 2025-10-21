import { useState } from 'react';
import familyVideo from "../../../assets/familyVideo2.mp4"


const ElderlyCareHero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

   const handleChange = (e:any) => {
    setEmail(e.target.value);
  };



  return (
   <div className="min-h-[calc(100vh-80px)] bg-white grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Left Side - Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-0">

      

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-neutral-900 mb-6 tracking-tight leading-[1.1]">
            Stop Worrying About  
            <span className="block font-medium mt-2">Your Aging Parents On Your Own</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-light mb-10 max-w-xl">
            The 3 AM calls. The constant "what ifs". The guilt of being far away. 
            <strong> We've lived it too.</strong> Oldely gives you real-time peace of mind with a simple device they'll actually use.
          </p>
        {/* Email Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-neutral-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                Reserve Your Spot
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-5">
             <span className='text-xs text-amber-600'>⚡</span>  Early access available Q1 2026 • Limited launch price: $19/mo 
            </p>

          <div className="flex items-center  gap-3 mt-5">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-black/50 font-light">
              Only 100 Spots Available
            </span>
          </div>
        
          </form>
        ) : (
          <div className="w-full max-w-xl p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
            <div className="flex items-center gap-3 text-neutral-900 mb-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">You're on the list!</span>
            </div>
            <p className="text-sm text-neutral-600 ml-11">We'll notify you when we launch.</p>
          </div>
        )}
      </div>

      {/* Right Side - Video */}
      <div className="relative h-[50vh] lg:h-full p-5">
        {/* Overlay text on video */}
        <div className="absolute top-12 left-12 right-12 z-20">
          <div className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-neutral-200">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-700">
              Independence + Safety
            </span>
          </div>
        </div>

        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <video
            src={familyVideo}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support video.
          </video>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom text on video */}
        <div className="absolute bottom-12 left-12 right-12 z-20">
          <p className="text-white text-sm font-light drop-shadow-lg">
            “Our elders are the source of our wisdom. Caring for them is honoring humanity itself.”
          </p>
          <p className="text-white/70 text-xs mt-1 drop-shadow-lg">
            Dalai Lama
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElderlyCareHero;





"They cared for us, now it's our turn to care for them."





// import { useRef, useState } from 'react';
// import familyVideo from "../../../assets/familyVideo.mp4"

// const FitnessWaitlistHero: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);


//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubmitted(true);
//       // Aquí iría la lógica para enviar el email
//     }
//   };

//   const waitlistCount = 12847;

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//     const [isPlaying, setIsPlaying] = useState(false);
  
//     const handlePlayPause = () => {
//       if (!videoRef.current) return;
//       if (isPlaying) {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       } else {
//         videoRef.current.play();
//         setIsPlaying(true);
//       }
//     };
  

//   return (
//     <div className="min-h-screen bg-white grid grid-cols-2 p-6 relative overflow-hidden">

//       {/* Main content */}
//       <div className="relative z-10 max-w-2xl w-full text-center">
//         {/* Logo/Icon */}
//         <div className="flex justify-center mb-8">
//           <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
//             <svg 
//               className="w-10 h-10 text-white" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M13 10V3L4 14h7v7l9-11h-7z" 
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Badge */}
//         <div className="inline-block px-4 py-1.5 bg-black/5 backdrop-blur-md rounded-full mb-8 border border-black/10">
//           <span className="text-xs uppercase tracking-[0.25em] font-medium text-black/70">
//             Available in Early 2026
//           </span>
//         </div>

//         {/* Main heading */}
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 tracking-tight">
//           Get Early Access
//         </h1>

//         {/* Subheading */}
//         <p className="text-base md:text-lg text-black/50 max-w-lg mx-auto leading-relaxed font-light mb-12">
//           Be amongst the first to experience cutting-edge biometric tracking. 
//           Sign up to be notified when we launch.
//         </p>

//         {/* Email form */}
//         {!isSubmitted ? (
//           <form onSubmit={handleSubmit} className="mb-8">
//             <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//                 className="flex-1 px-6 py-4 bg-black/5 border border-black/10 rounded-full text-black placeholder-black/30 focus:outline-none focus:border-black/30 transition-all duration-300 backdrop-blur-md"
//               />
//               <button
//                 type="submit"
//                 className="px-8 py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide hover:bg-black/90 transition-all duration-300 whitespace-nowrap"
//               >
//                 Join Waitlist
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div className="mb-8 p-6 bg-black/5 border border-black/10 rounded-2xl max-w-md mx-auto backdrop-blur-md">
//             <div className="flex items-center justify-center gap-2 text-black mb-2">
//               <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span className="font-medium">You're on the list!</span>
//             </div>
//             <p className="text-sm text-black/50">We'll notify you when we launch.</p>
//           </div>
//         )}

//         {/* Social proof */}
//         <div className="flex items-center justify-center gap-3 mb-12">
//           <div className="flex -space-x-2">
//             {[1, 2, 3, 4].map((i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 border-2 border-white"
//               />
//             ))}
//           </div>
//           <span className="text-sm text-black/50 font-light">
//             Join {waitlistCount.toLocaleString()}+ others on the waitlist
//           </span>
//         </div>
//       </div>
//  {/* Left Side - Featured Video */}
//           <div className="relative rounded-2xl overflow-hidden h-[600px] group">
//             <video
//               ref={videoRef}
//               src={familyVideo}
//               muted
//               loop
//               className="w-full h-full object-cover"
//             >
//               Your browser does not support video.
//             </video>
            
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
//             <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
//               <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4">
//                 <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/90">
//                   Featured
//                 </span>
//               </div>
//               <h2 className="text-3xl font-light mb-2 tracking-tight">Performance Tracking</h2>
//               <p className="text-sm font-light text-white/70 max-w-md">
//                 Advanced biometric monitoring for athletes and fitness enthusiasts
//               </p>
//             </div>

//             {!isPlaying && (
//               <button
//                 onClick={handlePlayPause}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-transform duration-300"
//               >
//                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
//                   <svg
//                     className="w-6 h-6 text-white ml-0.5"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M6 4l12 6-12 6V4z" />
//                   </svg>
//                 </div>
//               </button>
//             )}
//           </div>
       

//     </div>
//   );
// };

// export default FitnessWaitlistHero;
