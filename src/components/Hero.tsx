import React from 'react';
import { ArrowRight, ChevronDown, BarChart2, PieChart, LineChart, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <span>{t.hero.subtitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                {t.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#get-started" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center"
                >
                  {t.hero.getStarted}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#demo" 
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-md flex items-center justify-center"
                >
                  {t.hero.seeDemo}
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-20 dark:opacity-10 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.02]">
                <div className="p-5 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Xxx Dashboard</div>
                  <div></div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <PieChart className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Revenue Analysis</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+24% from last month</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <LineChart className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">User Growth</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1,245 new users</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <BarChart2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Product Usage</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">87% engagement</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Conversion Rate</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">12.3% increase</p>
                    </div>
                  </div>
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Interactive data visualization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
          <a 
            href="#features" 
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-2">{t.hero.discoverFeatures}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;