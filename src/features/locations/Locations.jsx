import { Search, MoreVertical, Plus } from "lucide-react";
import { useState } from "react";

const Locations = () => {
  const [countries, setCountries] = useState([
    {
      code: "NIG",
      name: "Nigeria",
      phone: "+234",
      date: "8 Sep, 2020",
      active: true,
    },
    {
      code: "IND",
      name: "India",
      phone: "+91",
      date: "17 Oct, 2020",
      active: false,
    },
    {
      code: "UK",
      name: "United Kingdom",
      phone: "+44",
      date: "21 Sep, 2020",
      active: false,
    },

    {
        code: "RU",
        name: "Russia",
        phone: "+7",
        date: "22 Oct, 2020",
        active:  true,
    },
    {
        code: "CHN",
        name: "China",
        phone: "+86",
        date: "17 Oct, 2020",
        active: true,
    },
    {
        code: "FR",
        name: "France",
        phone: "+33",
        date: "1 Feb, 2020",
        active: true,
    },

    {
        code: "USA",
        name: "United States",
        phone: "+1",
        date: "1 Feb, 2020",
        active: false,
    },

    {
        code: "KR",
        name: "South Korea",
        phone: "+82",
        date: "1 Feb, 2020",
        active: true,
    },
  ]);

  const toggleStatus = (index) => {
    const updated = [...countries];
    updated[index].active = !updated[index].active;
    setCountries(updated);
  };

  return (
    <div className="space-y-8">
      {/* ================= PAGE HEADER ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            All Locations
          </h1>
          <p className="text-sm text-gray-700 mt-1">
            Home <span className="mx-2 font-extrabold opacity-100 text-lg">›</span>{" "}
            <span className="text-red-700">Locations</span>
          </p>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-700 text-white px-5 py-3 rounded-xl shadow hover:bg-red-600 transition">
          <Plus size={18} />
          Add Location
        </button>
      </div>

      {/* ================= COUNTRIES CARD ================= */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-bold text-slate-800">
            Countries
          </h3>

          <div className="flex items-center gap-2 text-base text-gray-700">
            Show
            <select className="border border-gray-400 text-gray-700 text-base rounded-lg px-3 py-1.5 focus:outline-none">
              <option>8</option>
              <option>16</option>
              <option>32</option>
            </select>
            Entries
          </div>
        </div>

        {/* Filters */}
        <div className="py-4 pl-0 pr-0 sm:py-6 sm:pl-0 sm:pr-0 border-b border-gray-100 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:w-96 lg:flex-1 max-w-md ml-0">
            <Search
              size={16}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search country..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>

          <select className="w-full md:w-auto border border-gray-400 rounded-lg px-4 pr-8 py-2.5 focus:outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* ================= TABLE ================= */}
        <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
          <table className="w-full min-w-[700px] table-auto text-sm border-collapse">
            
            {/* ===== TABLE HEADER ===== */}
            <thead className="bg-slate-50 text-gray-600 border-b border-gray-300 font-bold">
              <tr>
                <th className="p-4 border-b border-r border-gray-200 text-left font-bold">
                  Country Code
                </th>
                <th className="p-4 border-b border-r border-gray-200 text-left font-bold">
                  Country
                </th>
                <th className="p-4 border-b border-r border-gray-200 text-left font-bold">
                  Phone Code
                </th>
                <th className="p-4 border-b border-r border-gray-200 text-left font-bold">
                  Sync Date
                </th>
                <th className="p-4 border-b border-r border-gray-200 text-left font-bold">
                  Status
                </th>
                <th className="p-4 border-b border-gray-200 text-left font-bold">
                  Action
                </th>
              </tr>
            </thead>

            {/* ===== TABLE BODY ===== */}
            <tbody className="divide-y divide-gray-200">
              {countries.map((country, index) => (
                <tr key={index} className="hover:bg-slate-50 transition">
                  
                  <td className="p-4 border-r border-gray-300 font-medium text-slate-700">
                    {country.code}
                  </td>

                  <td className="p-4 border-r border-gray-300 text-slate-700">
                    {country.name}
                  </td>

                  <td className="p-4 border-r border-gray-300 text-slate-700">
                    {country.phone}
                  </td>

                  <td className="p-4 border-r border-gray-300 text-slate-700 whitespace-nowrap">
                    {country.date}
                  </td>

                  {/* ===== STATUS TOGGLE ===== */}
                  <td className="p-4 border-r border-gray-200">
                    <button
                      onClick={() => toggleStatus(index)}
                      className={`w-11 h-6 flex items-center rounded-full p-1 transition duration-300 ${
                        country.active ? "bg-emerald-500" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                          country.active ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </td>

                  {/* ===== ACTION ===== */}
                  <td className="p-4">
                    <MoreVertical
                      size={18}
                      className="text-gray-400 cursor-pointer hover:text-gray-600 transition"
                    />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 sm:p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 text-center">
          <p>Showing 1 to 8 of 32 entries</p>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              2
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
