import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const GetStarted: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="get-started" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.getStarted.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.getStarted.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.getStarted.steps.signUp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.getStarted.steps.signUp.description}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.getStarted.steps.connect.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.getStarted.steps.connect.description}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.getStarted.steps.insights.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.getStarted.steps.insights.description}</p>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{t.getStarted.trial.title}</h3>
            <p className="mb-6">{t.getStarted.trial.description}</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <input
                type="email"
                placeholder={t.getStarted.trial.emailPlaceholder}
                className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 w-full sm:w-auto"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 flex items-center justify-center w-full sm:w-auto">
                {t.getStarted.trial.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-blue-100">{t.getStarted.trial.features.noCard}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-blue-100">{t.getStarted.trial.features.cancel}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-blue-100">{t.getStarted.trial.features.fullAccess}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;