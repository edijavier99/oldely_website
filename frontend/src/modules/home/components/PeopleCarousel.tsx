import { MessageCircle, Globe, Heart, Activity } from 'lucide-react';
import iaabuelo from "../../../assets/gptAbuelo.png"
import WaitlistFlow from './WaitlistFlow';

const BenefitsSection = () => {


  const features = [
    {
      id: 1,
      icon: MessageCircle,
      title: "Voice-First Design",
      description: "Natural voice commands in their native language - no apps to learn, no screens to navigate, no technology confusion for your loved ones.",
      image: iaabuelo,
      hasImage: true,
    },
    {
      id: 2,
      icon: Globe,
      title: "Global Connectivity",
      description: "Built-in eSIM works in 150+ countries - reliable connection anywhere, no WiFi setup required, perfect for rural areas and international families.",
      hasImage: false,
    },
    {
      id: 3,
      icon: Heart,
      title: "Cultural Sensitivity",
      description: "Designed for international families with multi-language support, understanding of different family dynamics and communication styles across cultures.",
      hasImage: false,
    },
    {
      id: 4,
      icon: Activity,
      title: "Proactive Care",
      description: "AI-powered insights on activity, sleep patterns and wellness trends - helping you provide better care before issues become emergencies.",
      image: "https://images.unsplash.com/photo-1758612897617-88c9c45ed47a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232",
      hasImage: true,
    }
  ];

  return (
    <section id='product' className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="pt-20 pb-12 text-center px-4">
        <div className="inline-block px-4 py-1.5 bg-neutral-100 rounded-full mb-6 border border-neutral-200">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-neutral-600">
            Why Choose Oldely
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 mb-3 tracking-tight">
         Technology Should Bridge Gaps,
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-800 mb-10 tracking-tight">
            Not Create Them
        </h2>

        <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed font-light mb-12">
          The peace of mind of having them close and caring for their wellbeing, even when distance separates you. Created by a long-distance family, for all families.        </p>
           
      <WaitlistFlow buttonClassName="mx-auto flex items-center justify-center" buttonLabel="Join Waitlist" />
  
      </header>

   




      

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isFirstRow = index < 2;
              const isLargeCard = (isFirstRow && index === 0) || (!isFirstRow && index === 3);
              const colSpan = isLargeCard ? "md:col-span-2" : "md:col-span-1";
              
              return (
                <article 
                  key={feature.id}
                  className={`group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${colSpan}`}
                  style={{ 
                    backgroundColor: feature.hasImage ? 'transparent' : '#f8f8f8'
                  }}
                >
                  {/* Background Image */}
                  {feature.hasImage && (
                    <div className="absolute inset-0">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex">
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        feature.hasImage 
                          ? 'bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20' 
                          : 'bg-black group-hover:bg-neutral-800'
                      }`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className={`text-2xl md:text-3xl font-medium mb-3 tracking-tight transition-colors duration-300 ${
                      feature.hasImage 
                        ? 'text-white group-hover:text-white/80' 
                        : 'text-neutral-900 group-hover:text-neutral-700'
                    }`}>
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className={`text-base md:text-lg leading-relaxed font-light ${
                      feature.hasImage 
                        ? 'text-white/70' 
                        : 'text-neutral-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Number indicator */}
                  <div className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border ${
                    feature.hasImage 
                      ? 'bg-white/5 backdrop-blur-md border-white/10' 
                      : 'bg-white border-neutral-200'
                  }`}>
                    <span className={`font-medium text-lg ${
                      feature.hasImage 
                        ? 'text-white/70' 
                        : 'text-neutral-600'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </section>
  );
};

export default BenefitsSection;