import React from 'react';
import { Check, Instagram as Telegram } from 'lucide-react';
import Button from '../components/Button';

const VIPAccessPage: React.FC = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get VIP Access
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Become a VIP member and unlock exclusive benefits to elevate your trading experience.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-16 border border-gray-800">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white mb-8">VIP Membership Benefits</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Premium Signals</h3>
                  <p className="mt-2 text-gray-400">
                    Priority access to all trading signals with detailed entry, target, and stop-loss points.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Private Chat</h3>
                  <p className="mt-2 text-gray-400">
                    Direct communication with our experts to get personalized advice and answers to your questions.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Educational Resources</h3>
                  <p className="mt-2 text-gray-400">
                    Access to exclusive educational content to learn advanced trading strategies and market analysis techniques.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">24/7 Support</h3>
                  <p className="mt-2 text-gray-400">
                    Dedicated assistance whenever you need it, ensuring you never miss an opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Membership Plans</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Monthly Plan */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-800">
              <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-800 text-white">
                    Monthly
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                  $99
                  <span className="ml-1 text-2xl font-medium text-gray-400">/month</span>
                </div>
                <p className="mt-5 text-lg text-gray-400">
                  Perfect for traders who want to test our services.
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-900 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">All VIP trading signals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Access to private chat</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Basic educational resources</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href="https://t.me/TradingDormBot" className="w-full">
                    <Telegram className="mr-2 h-5 w-5" /> Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* Quarterly Plan */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-800 rainbow-border">
              <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-800 text-white">
                    Quarterly
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                  $249
                  <span className="ml-1 text-2xl font-medium text-gray-400">/quarter</span>
                </div>
                <p className="mt-5 text-lg text-gray-400">
                  Our most popular plan with the best value.
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-900 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">All VIP trading signals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Priority access to private chat</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Full educational resources</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Weekly market analysis</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href="https://t.me/TradingDormBot" className="w-full">
                    <Telegram className="mr-2 h-5 w-5" /> Get Started
                  </Button>
                </div>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-gray-800">
              <div className="px-6 py-8 bg-gray-900 sm:p-10 sm:pb-6">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-800 text-white">
                    Annual
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                  $799
                  <span className="ml-1 text-2xl font-medium text-gray-400">/year</span>
                </div>
                <p className="mt-5 text-lg text-gray-400">
                  Best savings for committed traders.
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-900 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">All VIP trading signals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">VIP private chat access</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Complete educational library</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">1-on-1 strategy session</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="ml-3 text-base text-gray-400">Early access to new features</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href="https://t.me/TradingDormBot" className="w-full">
                    <Telegram className="mr-2 h-5 w-5" /> Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Join */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-16 border border-gray-800">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white mb-6">How to Join</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Click the Button Below</h3>
                  <p className="mt-2 text-gray-400">
                    Click the "Get VIP on Telegram" button to be directed to our Telegram bot.
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
                  <h3 className="text-lg font-medium text-white">Select Your Plan</h3>
                  <p className="mt-2 text-gray-400">
                    Choose the membership plan that best suits your needs and trading goals.
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
                  <h3 className="text-lg font-medium text-white">Complete Payment</h3>
                  <p className="mt-2 text-gray-400">
                    Follow the instructions in our Telegram bot to complete your payment securely.
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
                  <h3 className="text-lg font-medium text-white">Get Instant Access</h3>
                  <p className="mt-2 text-gray-400">
                    Once payment is confirmed, you'll receive immediate access to our VIP group and all its benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            To get started, click the button below and follow the instructions in our Telegram bot to complete your payment.
          </p>
          <Button href="https://t.me/TradingDormBot" className="text-lg px-8 py-4">
            <Telegram className="mr-2 h-6 w-6" /> Get VIP on Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VIPAccessPage;