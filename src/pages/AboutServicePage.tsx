import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, TrendingUp, Zap, Users } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const AboutServicePage: React.FC = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            What We Offer
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            At The Trading Dorm, we provide comprehensive tools and resources to help you succeed in the crypto market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <ServiceCard 
            title="Daily Crypto Signals" 
            description="Accurate and timely trading signals with precise entry, target, and stop-loss points."
            icon={TrendingUp}
          />
          <ServiceCard 
            title="Market Analysis" 
            description="In-depth insights into market trends, patterns, and potential opportunities."
            icon={BarChart2}
          />
          <ServiceCard 
            title="Expert Strategies" 
            description="Proven methods to maximize your profits and minimize risks in volatile markets."
            icon={Zap}
          />
          <ServiceCard 
            title="VIP Community" 
            description="Access to a private group of experienced traders sharing knowledge and insights."
            icon={Users}
          />
        </div>

        {/* Detailed Information */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-16 border border-gray-800">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Join Our VIP Group</h3>
                  <p className="mt-2 text-gray-400">
                    Sign up for VIP access through our secure Telegram bot and complete the payment process.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                    <span className="text-lg font-bold">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Receive Trading Signals</h3>
                  <p className="mt-2 text-gray-400">
                    Get instant access to our premium trading signals with detailed entry, target, and stop-loss points.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                    <span className="text-lg font-bold">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Learn and Grow</h3>
                  <p className="mt-2 text-gray-400">
                    Access educational resources and interact with experienced traders to improve your skills.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                    <span className="text-lg font-bold">4</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Trade with Confidence</h3>
                  <p className="mt-2 text-gray-400">
                    Execute trades with confidence knowing you have expert analysis and community support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">What Our Members Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-white font-medium">Alex K.</h3>
                  <p className="text-gray-400 text-sm">Member since 2022</p>
                </div>
              </div>
              <p className="text-gray-400">
                "The signals from The Trading Dorm have been incredibly accurate. I've seen a significant improvement in my trading results since joining."
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-white font-medium">Sarah M.</h3>
                  <p className="text-gray-400 text-sm">Member since 2021</p>
                </div>
              </div>
              <p className="text-gray-400">
                "The community aspect is what sets this apart. Being able to learn from experienced traders has accelerated my growth tremendously."
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-white font-medium">James T.</h3>
                  <p className="text-gray-400 text-sm">Member since 2023</p>
                </div>
              </div>
              <p className="text-gray-400">
                "The market analysis provided is top-notch. It's helped me understand the 'why' behind price movements, not just when to enter and exit."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Get access to our VIP community and start receiving premium trading signals today.
          </p>
          <Link to="/vip">
            <Button className="text-lg px-8 py-4">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutServicePage;