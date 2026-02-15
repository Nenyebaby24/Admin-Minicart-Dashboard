import React from 'react';
import StatCard from './components/StatCard';
import ConversionFunnel from './components/ConversionFunnel';
import { DollarSign, Store, ScrollText, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#150b3d] mb-1">
          Dashboard
        </h1>

        <div className="flex items-center text-sm text-gray-700 font-semibold">
          <span>Home</span>
          <span className="mx-2 font-extrabold opacity-100 text-lg">›</span>
          <span className="text-red-400 font-medium">
            Dashboard
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full ">

        <StatCard 
          title="Total Revenue" 
          value="5,424,326" 
          change="5" 
          isUp={true} 
          icon={DollarSign} 
          iconBgColor="#edf2ff" 
          iconColor="#748ffc"
          border="border border-gray-700"
        />

        <StatCard 
          title="Total Stores" 
          value="5,424,326" 
          change="5" 
          isUp={true} 
          icon={Store} 
          iconBgColor="#fff4e6" 
          iconColor="#fdad5f"
           border="border border-gray-700"
        />

        <StatCard 
          title="Total Referrals" 
          value="5,424,326" 
          change="5" 
          isUp={true} 
          icon={ScrollText} 
          iconBgColor="#fff0f6" 
          iconColor="#d633ce"
        />

        <StatCard 
          title="Total Users" 
          value="5,424,326" 
          change="5" 
          isUp={false} 
          icon={Users} 
          iconBgColor="#f3f0ff" 
          iconColor="#150b3d"
           border="border border-gray-700"
        />

      </div>

      <div className="w-full">
        <ConversionFunnel />
      </div>
    </>
  );
};

export default Dashboard;

