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
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Intelligent Analysis",
      description: "Our AI analyzes patterns and trends in your data that would take humans days to discover, providing immediate insights.",
      accentColor: "bg-blue-600 dark:bg-blue-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Predictive Forecasting",
      description: "Predict future trends with remarkable accuracy using our advanced machine learning models trained on diverse datasets.",
      accentColor: "bg-purple-600 dark:bg-purple-500"
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Real-time Dashboard",
      description: "Monitor your data in real-time with interactive dashboards that update automatically as new information arrives.",
      accentColor: "bg-indigo-600 dark:bg-indigo-500"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Custom Reporting",
      description: "Create beautiful, insightful reports tailored to your specific needs with our flexible reporting engine.",
      accentColor: "bg-green-600 dark:bg-green-500"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-white" />,
      title: "Anomaly Detection",
      description: "Automatically identify outliers and anomalies in your data to prevent issues before they become problems.",
      accentColor: "bg-amber-600 dark:bg-amber-500"
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Secure Processing",
      description: "Your data remains secure with enterprise-grade encryption and compliance with major privacy regulations.",
      accentColor: "bg-red-600 dark:bg-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced Analytics Made Simple
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Xxx combines powerful AI capabilities with an intuitive interface, making sophisticated data analysis accessible to everyone.
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
            See Xxx in action
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;