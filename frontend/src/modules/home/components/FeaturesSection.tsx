import { useState } from 'react';
import testVideo from "../../../assets/videoTest.mp4";

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
      title: "They Live Safely",
      subtitle: "You Stay Connected",
      description:
        "A discreet companion that respects their autonomy while keeping them safe. Voice-first technology they can actually use - no apps, no confusion.",
      cards: [
        {
          title: "Wellness Check-ins",
          description: "Daily voice conversations that monitor health and mood naturally",
          image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Emergency Response",
          description: "Instant family alerts when they need help most",
          image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Medication Reminders",
          description: "Gentle voice prompts in their native language",
          image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    you: {
      title: "You Stay Connected",
      subtitle: "They Live Safely",
      description:
        "The peace of mind of having them close and caring for their wellbeing, even when distance separates you. Created by a long-distance family, for all families.",
      cards: [
        {
          title: "Activity Insights",
          description: "Track daily patterns and wellness trends over time",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Smart Alerts",
          description: "Notifications only when something truly needs attention",
          image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Family Network",
          description: "Share updates with siblings, caregivers across time zones",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  };

  const currentContent = tabsContent[activeTab];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Featured Video */}
          <div className="relative rounded-2xl overflow-hidden h-[650px] group">
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
                  {activeTab === 'them' ? 'Their Experience' : 'Your Dashboard'}
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
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-medium text-sm mb-1 tracking-tight">{card.title}</h3>
                    <p className="text-[10px] font-light text-white/60 leading-relaxed">
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