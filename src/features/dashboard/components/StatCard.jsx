import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

const StatCard = ({ title, value, change, isUp, icon: Icon, iconBgColor, iconColor }) => {
  return (
    <Card className="flex-1 min-w-[240px] border border-gray-300 shadow-sm p-6 bg-white rounded-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-600 text-lg font-semibold">{title}</h3>
        <div 
          className="p-3 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          {/* Apply the specific iconColor passed from Dashboard */}
          <Icon className="w-6 h-6" style={{ color: iconColor }} strokeWidth={2} />
        </div>
      </div>

      <div className="text-3xl font-bold text-[#150b3d] mb-6">{value}</div>

       {/* Horizontal Divider */}
      <div className="border-t border-gray-200 my-4 -mx-6"></div>

      <div className="flex items-center justify-between gap-3 whitespace-nowrap ">
        <Badge isUp={isUp}>{change}%</Badge>
        <span className="text-gray-700 text-xs">
          {isUp ? 'increased' : 'decreased'} from last month
        </span>
      </div>
    </Card>
  );
};

export default StatCard;