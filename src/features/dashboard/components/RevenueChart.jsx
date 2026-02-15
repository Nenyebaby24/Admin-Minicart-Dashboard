import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../../components/ui/Card';

const data = [
  { name: 'Jan', revenue: 45 }, { name: 'Feb', revenue: 52 }, { name: 'Mar', revenue: 48 },
  { name: 'Apr', revenue: 61 }, { name: 'May', revenue: 55 }, { name: 'Jun', revenue: 67 },
  { name: 'Jul', revenue: 90.34 }, { name: 'Aug', revenue: 91.97 }, { name: 'Sep', revenue: 90.64 }
];

const RevenueChart = () => (
  <Card className="mt-8">
    <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue Overview</h3>
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
          <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
          <Bar dataKey="revenue" fill="#A594F9" radius={[6, 6, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
);
export default RevenueChart;