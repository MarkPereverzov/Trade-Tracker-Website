import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, Users, DollarSign, ChevronDown, ChevronUp, Zap, Shield, Award, Star, CheckCircle, Instagram as Telegram } from 'lucide-react';

// Animation components
const FloatingElement = ({ size, color, delay, duration }: { size: number, color: string, delay: number, duration: number }) => {
  return (
    <div 
      className="absolute rounded-full blur-3xl opacity-20 animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );
};

// Dynamic Background component
const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="dynamic-bg dynamic-bg-1 animate-pulse-slow"></div>
      <div className="dynamic-bg dynamic-bg-2 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="dynamic-bg dynamic-bg-3 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      <div className="dynamic-bg dynamic-bg-4 animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
      
      {/* Floating elements */}
      <FloatingElement size={300} color="#0891b2" delay={0} duration={20} />
      <FloatingElement size={400} color="#7e22ce" delay={5} duration={25} />
      <FloatingElement size={350} color="#ec4899" delay={10} duration={22} />
      <FloatingElement size={250} color="#3b82f6" delay={15} duration={18} />
    </div>
  );
};

// FAQ Item component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-800 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-400 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

// Pricing Card component
const PricingCard = ({ 
  title, 
  price, 
  features, 
  isPopular = false 
}: { 
  title: string, 
  price: string, 
  features: string[], 
  isPopular?: boolean 
}) => {
  return (
    <div className={`glass rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 ${isPopular ? 'border border-cyan-500 relative' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 text-xs font-bold py-1 px-3 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle size={16} className="text-cyan-400 mr-2" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://t.me/your_bot_username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
      >
        Get Started
      </a>
    </div>
  );
};

// Testimonial Card component
const TestimonialCard = ({ 
  text, 
  author, 
  avatarUrl,
  username
}: { 
  text: string, 
  author: string, 
  avatarUrl: string,
  username: string
}) => {
  return (
    <div className="glass p-6 rounded-xl h-full flex flex-col">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-4 flex-grow">{text}</p>
      <div className="flex items-center mt-auto">
        <img src={avatarUrl} alt={author} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <div className="font-medium">{username}</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  
  // Testimonials data
  const testimonials = [
    {
      text: "The analysts & talent give their heart & soul to provide value, and that alone to me makes The Trading Dorm one of the best educational trading communities",
      author: "Alex Johnson",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      username: "Etmost"
    },
    {
      text: "The quality of the traders is insane, and the thing is that everyone is rooting for you to win. Every analyst is a beast in his own",
      author: "Sarah Williams",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      username: "Utsider"
    },
    {
      text: "When it comes to trading crypto with like-minded individuals who are serious about their craft, The Trading Dorm is the place to be",
      author: "Michael Chen",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      username: "CryptoMaster"
    },
    {
      text: "The Trading Dorm has completely transformed my approach. The insights and strategies I've gained are invaluable. The community is supportive and the tools are top-notch.",
      author: "Emma Rodriguez",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      username: "TradingQueen"
    },
    {
      text: "I've tried several similar services, but none compare to The Trading Dorm. The value you get for the price is unmatched. The team is responsive and genuinely cares about your success.",
      author: "David Kim",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      username: "TradeWise"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
      
      // Reveal animations on scroll
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < window.innerHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Dynamic background */}
      <DynamicBackground />
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'glass border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Zap size={28} className="text-cyan-400 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">The Trading Dorm</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'faq', label: 'FAQ' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <a 
              href="https://t.me/your_bot_username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Telegram size={16} className="mr-2" />
              Join Telegram
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative pt-32">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient">Unlock VIP Access Today!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeIn animation-delay-200">
              Join our exclusive community and enjoy premium features with just one click.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeIn animation-delay-400">
              <a 
                href="https://t.me/your_bot_username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Telegram size={20} className="mr-2" />
                Get Started
              </a>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="py-3 px-8 border border-gray-700 rounded-lg text-lg font-medium hover:bg-gray-800/50 transition-colors flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white">
            <ChevronDown size={24} />
          </button>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal reveal-up">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              We are a team of experts dedicated to providing you with the best tools and services to enhance your experience. 
              Our mission is to create an exclusive community where members can access premium features and connect with like-minded individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 reveal reveal-left">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p className="text-gray-400">
                Your data and privacy are our top priorities. We use state-of-the-art encryption to keep your information safe.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 reveal reveal-up animation-delay-200">
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-400">
                Join a thriving community of users who share your interests and goals. Connect, collaborate, and grow together.
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 reveal reveal-right animation-delay-400">
              <div className="bg-gradient-to-r from-pink-500 to-pink-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">
                We're constantly improving and adding new features to enhance your experience and provide more value.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal reveal-up">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Getting started with VIP Access is quick and easy. Follow these simple steps to join our exclusive community.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105 reveal reveal-left">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Telegram size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Step 1: Join Telegram</h3>
                <p className="text-gray-400">
                  Click the "Get Started" button to join our Telegram bot. It only takes a few seconds.
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105 reveal reveal-up animation-delay-200">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Step 2: Choose Your Plan</h3>
                <p className="text-gray-400">
                  Select the plan that best fits your needs. We offer various options to ensure there's something for everyone.
                </p>
              </div>
              
              <div className="glass rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105 reveal reveal-right animation-delay-400">
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Step 3: Enjoy VIP Benefits</h3>
                <p className="text-gray-400">
                  Once your payment is processed, you'll instantly gain access to all VIP features and our exclusive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal reveal-up">
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Choose the plan that works best for you. All plans include access to our Telegram community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="reveal reveal-left">
              <PricingCard 
                title="Basic" 
                price="$10" 
                features={[
                  "Access to basic features",
                  "Community access",
                  "Standard support",
                  "Monthly updates"
                ]}
              />
            </div>
            
            <div className="reveal reveal-up animation-delay-200">
              <PricingCard 
                title="Pro" 
                price="$25" 
                features={[
                  "All Basic features",
                  "Advanced tools",
                  "Priority support",
                  "Weekly updates",
                  "Exclusive content"
                ]}
                isPopular={true}
              />
            </div>
            
            <div className="reveal reveal-right animation-delay-400">
              <PricingCard 
                title="VIP" 
                price="$50" 
                features={[
                  "All Pro features",
                  "Premium tools",
                  "24/7 support",
                  "Daily updates",
                  "Exclusive content",
                  "One-on-one sessions"
                ]}
              />
            </div>
          </div>
          
          <div className="mt-12 text-center reveal reveal-up animation-delay-600">
            <p className="text-gray-400 mb-4">Need a custom plan for your team?</p>
            <a 
              href="https://t.me/your_bot_username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center py-2 px-4 bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <MessageSquare size={16} className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal reveal-up">
            <h2 className="text-5xl font-bold mb-4">Don't take our word for it</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Hear it first hand from one of our hundreds of satisfied members.
            </p>
          </div>
          
          <div className="reveal reveal-up animation-delay-200">
            <div className="overflow-x-auto pb-4 testimonials-scroll">
              <div className="flex gap-6 min-w-max px-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-80 flex-shrink-0">
                    <TestimonialCard 
                      text={testimonial.text}
                      author={testimonial.author}
                      avatarUrl={testimonial.avatarUrl}
                      username={testimonial.username}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal reveal-up">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Got questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto reveal reveal-up animation-delay-200">
            <FAQItem 
              question="How do I get started?" 
              answer="Simply join our Telegram bot by clicking the 'Get Started' button and follow the instructions. The process takes less than a minute."
            />
            
            <FAQItem 
              question="Is there a free trial?" 
              answer="No, but we offer a 7-day money-back guarantee if you're not satisfied with our service."
            />
            
            <FAQItem 
              question="How do I cancel my subscription?" 
              answer="You can cancel your subscription at any time through our Telegram bot. Your access will remain active until the end of your billing period."
            />
            
            <FAQItem 
              question="What payment methods do you accept?" 
              answer="We accept all major credit cards, PayPal, and cryptocurrency payments."
            />
            
            <FAQItem 
              question="Can I upgrade my plan later?" 
              answer="Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing period."
            />
            
            <FAQItem 
              question="How can I contact support?" 
              answer="You can reach our support team through the Telegram bot or by sending an email to support@The Trading Dorm.com."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 animate-gradient">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 reveal reveal-up">Ready to Join?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto reveal reveal-up animation-delay-200">
            Don't miss out on exclusive features and our amazing community. Join VIP Access today!
          </p>
          <a 
            href="https://t.me/your_bot_username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 px-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity reveal reveal-up animation-delay-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Telegram size={20} className="mr-2" />
            Get VIP Access
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Zap size={24} className="text-cyan-400 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">The Trading Dorm</span>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://t.me/your_bot_username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Telegram size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Trading Dorm. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;