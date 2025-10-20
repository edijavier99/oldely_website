import { useState, useEffect } from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Professional Athlete',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    text: 'This tracker has completely transformed how I approach my training. The recovery insights are incredibly accurate.'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    text: 'The sleep analysis alone is worth it. I can see exactly how my rest quality affects my performance.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CrossFit Coach',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    text: 'Finally, a fitness tracker that understands strain and recovery balance. My athletes love it.'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Triathlete',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=800',
    text: 'The precision of the biometric data is unmatched. It helps me optimize every training cycle.'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800',
    text: "More than just a tracker, it's a complete wellness companion for my clients."
  },
  {
    id: 6,
    name: 'David Park',
    role: 'Cyclist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    text: 'Game-changing insights into my recovery patterns. Best investment for my training.'
  },
  {
    id: 7,
    name: 'Nina Foster',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    text: 'Perfect for monitoring stress levels and recovery. Helps me maintain balance.'
  }
];

const ReviewCard: React.FC<{ review: Review; scale: number }> = ({ review, scale }) => {
  return (
    <div
      className="rounded-[40px] overflow-hidden transition-all duration-700 ease-out flex-shrink-0"
      style={{
        width: `${310 * scale}px`,
        height: '520px',
        opacity: scale < 0.6 ? 0.4 : scale < 0.8 ? 0.6 : 1
      }}
    >
      <div className="relative h-full">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-8 left-6 right-6">
          <h4 className="text-white font-medium text-base mb-1">{review.name}</h4>
          <p className="text-white/70 text-sm font-light">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };


  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + REVIEWS.length) % REVIEWS.length;
      let scale = 1;
      
      if (i === 0) scale = 1.4; // Center card
      else if (Math.abs(i) === 1) scale = 0.75; // Adjacent cards
      else scale = 0.5; // Outer cards
      
      cards.push({ review: REVIEWS[index], scale, position: i });
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-neutral-100 rounded-full mb-6 border border-neutral-200">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-neutral-500">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-4 tracking-tight">
            What Athletes Say
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light">
            Join thousands of athletes who trust our platform to optimize their performance
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex w-full items-center justify-center gap-4 overflow-hidden px-4">
            {getVisibleCards().map((card, idx) => (
              <ReviewCard key={idx} review={card.review} scale={card.scale} />
            ))}
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-neutral-800'
                  : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;