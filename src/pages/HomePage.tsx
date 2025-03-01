import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")'
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.imgur.com/Oa3kNRi.png" 
              alt="The Trading Dorm Logo" 
              className="h-24 w-auto opacity-80"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="block">The Trading Dorm</span>
            <span className="block text-gray-300">Crypto</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10">
            Unlock VIP Trading Signals & Strategies
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Join The Trading Dorm and gain access to exclusive crypto trading signals, market analysis, and expert strategies. Elevate your trading game with our VIP community.
          </p>
          <Link to="/vip">
            <Button className="text-lg px-8 py-4">
              Get VIP Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose The Trading Dorm?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We provide the tools and knowledge you need to succeed in crypto trading.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/20 border border-gray-800">
              <div className="h-12 w-12 rounded-md bg-gray-800 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Accurate Signals</h3>
              <p className="text-gray-400">
                Receive precise trading signals with entry, target, and stop-loss points to maximize your profits.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/20 border border-gray-800">
              <div className="h-12 w-12 rounded-md bg-gray-800 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Expert Analysis</h3>
              <p className="text-gray-400">
                Get in-depth market analysis from experienced traders who understand market trends and patterns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-800/20 border border-gray-800">
              <div className="h-12 w-12 rounded-md bg-gray-800 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">VIP Community</h3>
              <p className="text-gray-400">
                Join a community of like-minded traders to share insights, strategies, and success stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden rainbow-border">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to elevate your trading?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-300">
                  Join our VIP community today and start receiving exclusive trading signals and expert analysis.
                </p>
                <Link to="/vip" className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 rainbow-border">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;