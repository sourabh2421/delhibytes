import { useScrollReveal } from '../hooks/useScrollReveal';

const Features = () => {
  const reveal = useScrollReveal({ threshold: 0.1 });
  const features = [
    {
      id: 1,
      icon: "📹",
      title: "Video Lectures",
      description: "High-quality video lectures by expert educators",
      color: "#fb923c"
    },
    {
      id: 2,
      icon: "📝",
      title: "Mock Tests",
      description: "Comprehensive mock tests for exam preparation",
      color: "#fb923c"
    },
    {
      id: 3,
      icon: "👥",
      title: "One to One Interaction",
      description: "Personalized learning with individual attention",
      color: "#fb923c"
    },
    {
      id: 4,
      icon: "🎯",
      title: "Exam Focused Mocks",
      description: "Exam-centric mock tests for better results",
      color: "#fb923c"
    },
  ];

  return (
    <section
      ref={reveal.ref}
      className="py-12 relative transition-all duration-700 ease-out"
      style={{
        background: 'linear-gradient(250deg, #fb923c 0%, #ea580c 100%)',
        opacity: reveal.isVisible ? 1 : 0,
        transform: reveal.isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/90 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
