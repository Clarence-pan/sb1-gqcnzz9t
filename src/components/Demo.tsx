import React, { useState } from 'react';
import { PlayCircle, BarChart2, PieChart, LineChart, Smartphone, Laptop, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Demo: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('trends');

  const tabs = [
    { id: 'trends', label: t.demo.tabs.trends.title, icon: <LineChart className="w-5 h-5" /> },
    { id: 'comparison', label: t.demo.tabs.comparison.title, icon: <BarChart2 className="w-5 h-5" /> },
    { id: 'distribution', label: t.demo.tabs.distribution.title, icon: <PieChart className="w-5 h-5" /> },
  ];

  return (
    <section id="demo" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.demo.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.demo.description}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 max-w-5xl mx-auto">
          <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <PlayCircle className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4 animate-pulse" />
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-md px-4">
                  {activeTab === 'trends' && t.demo.tabs.trends.description}
                  {activeTab === 'comparison' && t.demo.tabs.comparison.description}
                  {activeTab === 'distribution' && t.demo.tabs.distribution.description}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {activeTab === 'trends' && t.demo.tabs.trends.title}
                {activeTab === 'comparison' && t.demo.tabs.comparison.title}
                {activeTab === 'distribution' && t.demo.tabs.distribution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {activeTab === 'trends' && t.demo.tabs.trends.description}
                {activeTab === 'comparison' && t.demo.tabs.comparison.description}
                {activeTab === 'distribution' && t.demo.tabs.distribution.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span>{t.demo.features.mobile}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Laptop className="w-4 h-4 mr-2" />
                  <span>{t.demo.features.desktop}</span>
                </div>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <span>{t.demo.features.requestDemo}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;