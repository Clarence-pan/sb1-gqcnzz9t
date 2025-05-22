import React from 'react';
import { 
  BarChart2, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  AlertCircle, 
  ArrowUpRight,
  Brain,
  Lock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, accentColor }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-[1.02] group`}>
    <div className={`w-12 h-12 rounded-lg ${accentColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-[-5deg]`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: t.features.cards.intelligentAnalysis.title,
      description: t.features.cards.intelligentAnalysis.description,
      accentColor: "bg-blue-600 dark:bg-blue-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: t.features.cards.predictiveForecasting.title,
      description: t.features.cards.predictiveForecasting.description,
      accentColor: "bg-purple-600 dark:bg-purple-500"
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: t.features.cards.realTimeDashboard.title,
      description: t.features.cards.realTimeDashboard.description,
      accentColor: "bg-indigo-600 dark:bg-indigo-500"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: t.features.cards.customReporting.title,
      description: t.features.cards.customReporting.description,
      accentColor: "bg-green-600 dark:bg-green-500"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-white" />,
      title: t.features.cards.anomalyDetection.title,
      description: t.features.cards.anomalyDetection.description,
      accentColor: "bg-amber-600 dark:bg-amber-500"
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: t.features.cards.secureProcessing.title,
      description: t.features.cards.secureProcessing.description,
      accentColor: "bg-red-600 dark:bg-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#demo" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {t.features.seeInAction}
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;