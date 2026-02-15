import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../../../components/ui/Card';

const data = [
  { name: 'Jan', revenue: 220 }, { name: 'Feb', revenue: 395 }, { name: 'Mar', revenue: 280 },
  { name: 'Apr', revenue: 340 }, { name: 'May', revenue: 85 }, { name: 'Jun', revenue: 170 },
  { name: 'Jul', revenue: 295 }, { name: 'Aug', revenue: 220 }, { name: 'Sep', revenue: 370 },
  { name: 'Oct', revenue: 280 }, { name: 'Nov', revenue: 220 }, { name: 'Dec', revenue: 320 }
];

const ConversionFunnel = () => (
  <Card className="mt-8 w-full p-8 border border-gray-300 shadow-sm">
    {/* Top Header Row */}
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold text-[#150b3d]">Conversion Funnel</h1>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical size={20} />
      </button>
    </div>

    {/* Exact Legend from Pic B */}
    <div className="flex items-center gap-x-32 mb-16 ml-4">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#cc2d4a]"></span>
        <span className="text-lg font-semibold text-[#150b3d]">Revenue</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#fff1f2]"></span>
        <span className="text-lg font-medium text-[#150b3d]">Stores</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#fff1f2]"></span>
        <span className="text-lg font-medium text-[#150b3d]">Referrals</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#fff1f2]"></span>
        <span className="text-lg font-medium text-[#150b3d]">Users</span>
      </div>
    </div>

    {/* Chart Area */}
    <div className="h-[450px] w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#94a3b8" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#150b3d', fontSize: 14, fontWeight: 500}} 
            dy={20} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#64748b', fontSize: 14, fontWeight: 700}} 
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
          />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar 
            dataKey="revenue" 
            fill="#cc2d4a" 
            radius={[20, 20, 20, 20]} // Fully rounded pill shape
            barSize={16} 
          />
        </BarChart>
      </ResponsiveContainer>

      
    </div>
  </Card>
);

export default ConversionFunnel;