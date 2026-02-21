import { Search, MoreVertical, Plus } from "lucide-react";
import { useState } from "react";

const Locations = () => {
  const [countries, setCountries] = useState([
    { code: "NIG", name: "Nigeria", phone: "+234", date: "8 Sep, 2020", active: true },
    { code: "IND", name: "India", phone: "+91", date: "17 Oct, 2020", active: false },
    { code: "UK", name: "United Kingdom", phone: "+44", date: "21 Sep, 2020", active: false },
    { code: "RU", name: "Russia", phone: "+7", date: "22 Oct, 2020", active: true },
    { code: "CHN", name: "China", phone: "+86", date: "17 Oct, 2020", active: true },
    { code: "FR", name: "France", phone: "+33", date: "1 Feb, 2020", active: true },
    { code: "USA", name: "United States", phone: "+1", date: "1 Feb, 2020", active: false },
    { code: "KR", name: "South Korea", phone: "+82", date: "1 Feb, 2020", active: true },
  ]);

  const toggleStatus = (index) => {
    const updated = [...countries];
    updated[index].active = !updated[index].active;
    setCountries(updated);
  };

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">

      {/* ================= PAGE HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
            All Locations
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Home <span className="mx-2 font-bold">›</span>
            <span className="text-red-700">Locations</span>
          </p>
        </div>

        <div className="flex">
          <button className="w-auto flex items-center justify-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-xl shadow hover:bg-red-600 transition">
            <Plus size={18} />
            Add Location
          </button>
        </div>
      </div>

      {/* ================= COUNTRIES CARD ================= */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h3 className="text-base sm:text-lg font-semibold text-slate-800">
            Countries
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            Show
            <select className="border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-200">
              <option>8</option>
              <option>16</option>
              <option>32</option>
            </select>
            Entries
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          <div className="relative w-full md:max-w-sm">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search country..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          <select className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-200">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* ================= TABLE ================= */}
        <div className="w-full">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="hidden md:table-header-group bg-slate-50 text-gray-600 border-b">
              <tr>
                <th className="p-4 font-semibold">Country Code</th>
                <th className="p-4 font-semibold">Country</th>
                <th className="p-4 font-semibold">Phone Code</th>
                <th className="p-4 font-semibold">Sync Date</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>

                     <tbody>
              {countries.map((country, index) => (
               <tr
                key={index}
               className="border-b border-gray-200 md:table-row block mb-4 md:mb-0"
               >
              <td className="p-4 font-medium text-slate-700 md:table-cell block">
             <span className="md:hidden font-semibold">Country Code: </span>
               {country.code}
             </td>

             <td className="p-4 text-slate-700 md:table-cell block">
             <span className="md:hidden font-semibold">Country: </span>
             {country.name}
           </td>

          <td className="p-4 text-slate-700 md:table-cell block">
           <span className="md:hidden font-semibold">Phone Code: </span>
           {country.phone}
          </td>

          <td className="p-4 text-slate-700 md:table-cell block">
           <span className="md:hidden font-semibold">Sync Date: </span>
            {country.date}
           </td>

           {/* Status Toggle */}
           <td className="p-4 md:table-cell block">
            <span className="md:hidden font-semibold">Status: </span>
            <button
              onClick={() => toggleStatus(index)}
             className={`w-11 h-6 flex items-center rounded-full p-1 transition mt-2 md:mt-0 ${
            country.active ? "bg-emerald-500" : "bg-gray-300"
             }`}
             >
            <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
              country.active ? "translate-x-5" : ""
            }`}
           />
           </button>
          </td>

             {/* Action */}
            <td className="p-4 md:table-cell block">
           <span className="md:hidden font-semibold">Action: </span>
           <MoreVertical
          size={18}
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition mt-2 md:mt-0"
          />
         </td>
         </tr>
          ))}
        </tbody> 
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-gray-500 text-center md:text-left">
          <p>Showing 1 to 8 of 32 entries</p>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Locations;

