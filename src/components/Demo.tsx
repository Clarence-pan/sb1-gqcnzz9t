import React, { useState } from 'react';
import { PlayCircle, BarChart2, PieChart, LineChart, Smartphone, Laptop, ChevronRight } from 'lucide-react';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const tabs = [
    { id: 'trends', label: 'Trend Analysis', icon: <LineChart className="w-5 h-5" /> },
    { id: 'comparison', label: 'Data Comparison', icon: <BarChart2 className="w-5 h-5" /> },
    { id: 'distribution', label: 'Distribution View', icon: <PieChart className="w-5 h-5" /> },
  ];

  return (
    <section id="demo" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See Xxx in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Experience how Xxx transforms complex data into clear, actionable insights through our interactive demo.
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
              {/* This would be a real demo video or interactive component in production */}
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <PlayCircle className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4 animate-pulse" />
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-md px-4">
                  {activeTab === 'trends' && "Watch how Xxx identifies trends and patterns in your time-series data."}
                  {activeTab === 'comparison' && "See how Xxx compares different data sets to highlight key differences."}
                  {activeTab === 'distribution' && "Explore how Xxx breaks down data distributions for better understanding."}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {activeTab === 'trends' && "Uncover Hidden Trends"}
                {activeTab === 'comparison' && "Compare Data Sets Effortlessly"}
                {activeTab === 'distribution' && "Understand Data Distribution"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {activeTab === 'trends' && "Xxx automatically identifies trends in your time-series data, helping you spot opportunities and challenges before they become obvious."}
                {activeTab === 'comparison' && "Compare multiple data sets side by side with intelligent highlighting of statistically significant differences."}
                {activeTab === 'distribution' && "Visualize how your data is distributed with intuitive charts that make complex statistics easy to understand."}
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span>Works on mobile</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Laptop className="w-4 h-4 mr-2" />
                  <span>Desktop dashboard</span>
                </div>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <span>Request full demo</span>
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