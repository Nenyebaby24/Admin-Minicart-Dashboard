import Card from '../../../components/ui/Card';

const RecentOrder = () => (
  <Card className="mt-8">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold text-slate-900">Recent Orders</h3>
      <button className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
    </div>
    <div className="text-center py-10 text-gray-400 text-sm italic">
      Order data table implementation goes here...
    </div>
  </Card>
);
export default RecentOrder;