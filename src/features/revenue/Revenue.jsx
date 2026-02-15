import { Search, MoreVertical, ArrowUp, ArrowDown,DollarSign, Users, HandCoins} from "lucide-react";

const Revenue = () => {
    
  const transactions = [
    {
      type: "Subscription",
      store: "Luisa Via Roma",
      country: "Kuwait",
      value: "$16,500.00",
      status: "Completed",
    },
    {
      type: "Referral",
      store: "Revolve",
      country: "Kazakhstan",
      value: "$1,878.50",
      status: "Pending",
    },
    {
      type: "Subscription",
      store: "Marks and Spencer",
      country: "Korea, South",
      value: "$102.00",
      status: "Refunded",
    },
    {
      type: "Subscription",
      store: "MyTheresa",
      country: "Indonesia",
      value: "$15,000,000.00",
      status: "Canceled",
    },
    {
      type: "Referral",
      store: "Coggles",
      country: "Italy",
      value: "$96.00",
      status: "Completed",
    },
    {
      type: "Referral",
      store: "Amazon Fashion",
      country: "Japan",
      value: "$349.00",
      status: "Completed",
    },
    {
      type: "Subscription",
      store: "Boohoo",
      country: "Honduras",
      value: "$680.00",
      status: "Completed",
    },
    {
      type: "Subscription",
      store: "Rag and Bone",
      country: "Haiti",
      value: "$120,000.00",
      status: "Completed",
    },
  ];

  const statusStyles = {
    Completed: "bg-emerald-100 text-emerald-600",
    Pending: "bg-gray-100 text-gray-600",
    Refunded: "bg-yellow-100 text-yellow-600",
    Canceled: "bg-red-100 text-red-600",
  };

  return (
    <>
     <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#150b3d] mb-1">
          All Revenue
        </h1>

        <div className="flex items-center text-sm text-gray-700 font-semibold">
          <span>Home</span>
          <span className="mx-2 font-extrabold opacity-100">›</span>
          <span className="text-red-700 font-medium">
            Revenue
          </span>
        </div>
      </div>
    <div className="space-y-8">
      {/* ================= TOP CARDS ================= */}
      
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

       {/* Total Subscriptions */}
      <div className="relative bg-white rounded-xl p-6 border border-gray-500">
       <div className="absolute top-6 right-6 bg-indigo-100 text-indigo-600 p-3 rounded-full">
      <Users size={20} />
       </div>

        <p className="text-gray-500 text-lg">Total Subscriptions</p>
        <h2 className="text-3xl font-bold mt-2 text-slate-800">
          5,424,326
         </h2>
         <div className="border-t border-gray-500 -mx-6 my-4"></div> {/* Divider */}

         <div className="flex items-center gap-2 mt-4 text-sm text-emerald-600">
          <ArrowUp size={16} />
         +5% Increased from last month
         </div>
          </div>

          {/* Subscription Revenue */}
         <div className="relative bg-white rounded-xl p-6 border border-gray-500">
         <div className="absolute top-6 right-6 bg-orange-100 text-orange-600 p-3 rounded-full">
           <DollarSign size={20} />
          </div>

          <p className="text-gray-500 text-lg">Subscription Revenue</p>
         <h2 className="text-3xl font-bold mt-2 text-slate-800 ">
           5,424,326
          </h2>
          <div className="border-t border-gray-500 -mx-6 my-4"></div> {/* Divider */}

         <div className="flex items-center gap-2 mt-4 text-sm text-emerald-600">
           <ArrowUp size={16} />
           +5% Increased from last month
          </div>
        </div>

        {/* Referral Payout */}
         <div className="relative bg-white rounded-xl p-6 border border-gray-500">
        <div className="absolute top-6 right-6 bg-pink-100 text-pink-600 p-3 rounded-full">
          <HandCoins size={20} />
        </div>

        <p className="text-gray-500 text-lg">Referral Payout</p>
          <h2 className="text-3xl font-bold mt-2 text-slate-800">
           5,424,326
         </h2>
         <div className="border-t border-gray-500 -mx-6 my-4"></div> {/* Divider */}

         <div className="flex items-center gap-2 mt-4 text-sm text-red-500">
         <ArrowDown size={16} />
          -5% Decreased from last month
        </div>
       </div>

      </div>


      {/* ================= TRANSACTIONS ================= */}
      <div className="bg-white rounded-2xl border border-gray-500">
        {/* Header */}
        <div className="p-6 border-b border-gray-500 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">
            Resent Transactions
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            Show
            <select className="border border-gray-400 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>8</option>
              <option>16</option>
              <option>32</option>
            </select>
            Entries
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search
              size={16}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search transaction..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="flex gap-4">
            <select className="border border-gray-400 rounded-xl px-4 py-2.5 focus:outline-none">
              <option>All Status</option>
            </select>
            <select className="border border-gray-400 rounded-xl px-4 py-2.5 focus:outline-none">
              <option>All Types</option>
            </select>
          </div>
        </div>

        {/* Table */}
       <div className="overflow-x-auto">
  <table className="w-full text-sm border border-gray-200">
    <thead className="bg-slate-50 text-gray-600">
      <tr>
        <th className="p-4 border border-gray-200">
          <input type="checkbox" />
        </th>
        <th className="p-4 border border-gray-200 text-left">Type</th>
        <th className="p-4 border border-gray-200 text-left">Store</th>
        <th className="p-4 border border-gray-200 text-left">Country</th>
        <th className="p-4 border border-gray-200 text-left">Value</th>
        <th className="p-4 border border-gray-200 text-left">Status</th>
        <th className="p-4 border border-gray-200 text-left">Action</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map((item, index) => (
        <tr key={index} className="hover:bg-slate-50">
          <td className="p-4 border border-gray-200">
            <input type="checkbox" />
          </td>
          <td className="p-4 border border-gray-200">{item.type}</td>
          <td className="p-4 border border-gray-200">{item.store}</td>
          <td className="p-4 border border-gray-200">{item.country}</td>
          <td className="p-4 border border-gray-200 font-medium">
            {item.value}
          </td>
          <td className="p-4 border border-gray-200">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[item.status]}`}
            >
              {item.status}
            </span>
          </td>
          <td className="p-4 border border-gray-200">
            <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        {/* Pagination */}
        <div className="p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Showing 1 to 8 of 32 entries</p>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Revenue;
