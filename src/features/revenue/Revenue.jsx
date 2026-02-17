import { Search, MoreVertical, ArrowUp, ArrowDown, DollarSign, Users, HandCoins } from "lucide-react";

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
      <div className="mb-8 px-1">
        <h1 className="text-2xl font-bold text-[#150b3d] mb-1">
          All Revenue
        </h1>

        <div className="flex items-center text-sm text-gray-700 font-semibold">
          <span>Home</span>
          <span className="mx-2 font-extrabold opacity-100 text-lg">›</span>
          <span className="text-red-700 font-medium">
            Revenue
          </span>
        </div>
      </div>
      
      <div className="space-y-8">
        {/* ================= TOP CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Total Subscriptions */}
          <div className="relative bg-white rounded-xl p-6 border border-gray-500">
            <div className="absolute top-6 right-6 bg-indigo-100 text-indigo-600 p-3 rounded-full">
              <Users size={20} />
            </div>

            <p className="text-gray-500 text-lg">Total Subscriptions</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
              5,424,326
            </h2>
            <div className="border-t border-gray-500 -mx-6 my-4"></div>

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
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800 ">
              5,424,326
            </h2>
            <div className="border-t border-gray-500 -mx-6 my-4"></div>

            <div className="flex items-center gap-2 mt-4 text-sm text-emerald-600">
              <ArrowUp size={16} />
              +5% Increased from last month
            </div>
          </div>

          {/* Referral Payout */}
          <div className="relative bg-white rounded-xl p-6 border border-gray-500 md:col-span-2 lg:col-span-1">
            <div className="absolute top-6 right-6 bg-pink-100 text-[#FF77FF] p-3 rounded-full">
              <HandCoins size={20} />
            </div>

            <p className="text-gray-500 text-lg">Referral Payout</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-800">
              5,424,326
            </h2>
            <div className="border-t border-gray-500 -mx-6 my-4"></div>

            <div className="flex items-center gap-2 mt-4 text-sm text-red-500">
              <ArrowDown size={16} />
              -5% Decreased from last month
            </div>
          </div>
        </div>

        {/* ================= TRANSACTIONS ================= */}
        <div className="bg-white rounded-2xl border border-gray-300 overflow-hidden p-4">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-lg font-semibold text-slate-800">
              Resent Transactions
            </h3>

            <div className="flex items-center gap-2 text-base text-gray-700">
              Show
              <select className="border border-gray-400 rounded-lg px-3 py-1.5 focus:outline-none bg-transparent">
                <option>8</option>
                <option>16</option>
                <option>32</option>
              </select>
              Entries
            </div>
          </div>

          {/* Filters */}
          <div className="py-4 pl-0 pr-0 sm:py-6 sm:pl-0 sm:pr-0 border-b border-gray-100 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="relative w-full lg:flex-1 max-w-md ml-0">
              <Search
                size={16}
                className="absolute left-3 top-3.5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search transaction..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
              />
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <select className="flex-1 sm:flex-none border border-gray-400 rounded-lg px-4 py-2.5 focus:outline-none bg-transparent">
                <option>All Status</option>
              </select>
              <select className="flex-1 sm:flex-none border border-gray-400 rounded-lg px-4 py-2.5 focus:outline-none bg-transparent">
                <option>All Types</option>
              </select>
            </div>
          </div>

          {/* Table Container with Horizontal Scroll */}
          {/* Table Container */}
        <div className="overflow-x-auto border border-gray-300 rounded-lg bg-white">

        <table className="w-full text-sm min-w-[800px] border-collapse">

           {/* Header */}
         <thead className="bg-gray-100 text-gray-700">
          <tr>
        <th className="border border-gray-300 p-4 w-12 text-center">
          <input type="checkbox" className="rounded" />
        </th>
        <th className="border border-gray-300 p-4 text-left">Type</th>
        <th className="border border-gray-300 p-4 text-left">Store</th>
        <th className="border border-gray-300 p-4 text-left">Country</th>
        <th className="border border-gray-300 p-4 text-left">Value</th>
        <th className="border border-gray-300 p-4 text-left">Status</th>
        <th className="border border-gray-300 p-4 text-left">Action</th>
      </tr>
    </thead>

    {/* Body */}
    <tbody>
      {transactions.map((item, index) => (
        <tr key={index} className="hover:bg-gray-50 transition-colors">
          <td className="border border-gray-300 p-4 text-center">
            <input type="checkbox" className="rounded" />
          </td>
          <td className="border border-gray-300 p-4">{item.type}</td>
          <td className="border border-gray-300 p-4">{item.store}</td>
          <td className="border border-gray-300 p-4 whitespace-nowrap">
            {item.country}
          </td>
          <td className="border border-gray-300 p-4 font-medium">
            {item.value}
          </td>
          <td className="border border-gray-300 p-4">
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${statusStyles[item.status]}`}
            >
              {item.status}
            </span>
          </td>
          <td className="border border-gray-300 p-4 text-center">
            <MoreVertical
              size={18}
              className="text-gray-500 cursor-pointer hover:text-gray-700"
            />
          </td>
        </tr>
      ))}
    </tbody>

  </table>

   {/* Pagination */}
          <div className="p-4 sm:p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 text-center">
            <p>Showing 1 to 8 of 32 entries</p>

            <div className="flex flex-wrap justify-center items-center gap-2">
              <button className="px-3 sm:px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg">
                1
              </button>
              <button className="px-3 sm:px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-3 sm:px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors">
                Next
              </button>
             </div>
           </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Revenue;
