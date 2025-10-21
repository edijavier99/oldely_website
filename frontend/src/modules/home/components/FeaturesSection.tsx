import { useState } from 'react';
import testVideo from "../../../assets/videoTest2.mp4";
import sosimage from "../../../assets/sos.jpg"

type Card = {
  title: string;
  description: string;
  image: string;
};

type TabKey = 'them' | 'you';

type TabContent = {
  title: string;
  subtitle: string;
  description: string;
  cards: Card[];
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('them');

  const tabsContent: Record<TabKey, TabContent> = {
  them: {
    title: "Designed for Real Life",
    subtitle: "Not Tech Geniuses",
    description: "We watched our grandma struggle with smartphones. So we built something she could use with zero learning.",
     cards: [
    {
      title: "Emergency Response",
      description: "One-touch SOS button and automatic fall detection that instantly alerts family members",
      image: sosimage,
    },
    {
      title: "Voice Command Center", 
      description: "Call family or listen to messages using simple voice commands - no buttons or complicated screen to remember",
      image: "https://images.unsplash.com/photo-1635357558257-11a5394b9b7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNtYXJ0JTIwYmFuZCUyMG9uJTIwd3Jpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    },
    {
      title: "Always-On Protection",
      description: "Continuous monitoring that works discreetly in the background, respecting their privacy",
      image: "https://images.unsplash.com/photo-1648560041861-85c6fd3fe2fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
    },
  ],
  },
    you: {
     title: "Peace of Mind",
    subtitle: "Delivered Daily",
    description: "Wake up knowing they're safe. Go to bed without that knot in your stomach. Connected even when you’re miles apart.",
    cards: [
     {
        title: "Comprehensive Health Monitoring",
        description: "Track vital signs, activity levels, and sleep patterns to detect changes early and prevent risks before they escalate",
        image: "https://images.unsplash.com/photo-1634089916298-9fa27180526c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      },
      {
        title: "Daily Connection Hub",
        description: "Send voice messages and receive smart reminders to maintain regular contact across time zones",
        image: "https://images.unsplash.com/photo-1658909913848-1680f5d1af61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      },
      {
        title: "AI Health Reports", 
        description: "Receive clear insights about their wellbeing with personalized recommendations and alerts",
        image: "https://images.unsplash.com/photo-1663661759279-5edbf3d58e0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      },
    ],
  },
  };

  const currentContent = tabsContent[activeTab];

  return (
    <div id='how-it-works' className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Featured Video */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[650px] group">
            <video
              src={testVideo}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support video.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/90">
                  {activeTab === 'them' ? 'Their Independence' : 'Your Peace of Mind'}
                </span>
              </div>
              <h2 className="text-3xl font-light mb-2 tracking-tight">{currentContent.title}</h2>
              <p className="text-sm font-light text-white/70 max-w-md">
                {currentContent.description}
              </p>
            </div>
          </div>

          {/* Right Side - Content & Collections */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <div className="text-left mb-8">
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveTab('them')}
                    className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                      activeTab === 'them'
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    FOR THEM
                  </button>
                  <button
                    onClick={() => setActiveTab('you')}
                    className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                      activeTab === 'you'
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    FOR YOU
                  </button>
                </div>
              </div>

              <h1 className="text-5xl  font-light tracking-tight leading-[1.1]">
                {currentContent.title}
                <br />
                <span className="font-medium">{currentContent.subtitle}</span>
              </h1>
              <p className="text-base font-light text-white/60 leading-relaxed max-w-lg">
                {currentContent.description}
              </p>
              <button className="group inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300">
                LEARN MORE
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {currentContent.cards.map((card, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square sm:aspect-[3/4]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-medium text-sm mb-1 tracking-tight">{card.title}</h3>
                    <p className="sm:text-[10px] font-light text-white/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;





// // import { useState, useRef } from 'react';
// import testVideo  from  "../../../assets/videoTest.mp4"


// const FeaturesSection = () => {


//    const collections = [
//     {
//       title: "Recovery Metrics",
//       description: "Track your body's readiness",
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Sleep Analysis",
//       description: "Optimize your rest quality",
//       image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Strain Coach",
//       description: "Balance training intensity",
//       image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
//     }
//   ];


//   return (
//      <div className="min-h-screen bg-black text-white p-6 md:p-12">
//       <div className="max-w-7xl mx-auto">    
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side - Featured Video */}
//           <div className="relative rounded-2xl overflow-hidden h-[600px] group">
//             <video
//               src={testVideo}
//               muted
//               autoPlay
//               loop
//               playsInline
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

       
//           </div>

//           {/* Right Side - Content & Collections */}
//           <div className="flex flex-col justify-center space-y-12">
            
//             {/* Header Content */}
//             <div className="space-y-6">
//               <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1]">
//                 They Live Safely
//                 <br />
//                 <span className="font-medium">You Stay Connected</span>
//               </h1>
//               <p className="text-base font-light text-white/60 leading-relaxed max-w-lg">
//                 Gain deeper insights into your recovery, sleep, and strain with advanced 
//                 biometric tracking designed for those who demand more from their body.
//               </p>
//               <button className="group inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300">
//                 EXPLORE FEATURES
//                 <svg 
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Collections Grid */}
//             <div className="grid grid-cols-3 gap-3">
//               {collections.map((collection, index) => (
//                 <div
//                   key={index}
//                   className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4]"
//                 >
//                   <img
//                     src={collection.image}
//                     alt={collection.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                   />
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <h3 className="font-medium text-sm mb-1 tracking-tight">{collection.title}</h3>
//                     <p className="text-[10px] font-light text-white/60 leading-relaxed">
//                       {collection.description}
//                     </p>
//                   </div>

//                   <div className="absolute top-3 right-3 w-7 h-7 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <svg
//                       className="w-3 h-3 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;




  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlayPause = () => {
  //   if (!videoRef.current) return;
  //   if (isPlaying) {
  //     videoRef.current.pause();
  //     setIsPlaying(false);
  //   } else {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };


       {/* {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </div>
              </button>
            )} */}