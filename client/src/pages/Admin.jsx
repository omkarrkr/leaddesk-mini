import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Users,
  UserPlus,
  PhoneCall,
  CheckCircle2,
  LogOut,
} from "lucide-react";

import { getLeads } from "../services/api";
import LeadTable from "../components/LeadTable";

function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const fetchLeads = async () => {
    try {
      const res = await getLeads();
      setLeads(res.data.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) =>
      `${lead.company} ${lead.name} ${lead.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, leads]);

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "New").length,
    contacted: leads.filter((l) => l.status === "Contacted").length,
    closed: leads.filter((l) => l.status === "Closed").length,
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-3xl font-bold text-blue-600 animate-pulse">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

          <div>
            <h1 className="text-5xl font-bold text-slate-900">
              LeadDesk Admin
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Manage incoming leads and track their progress.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 md:mt-0 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-default">
            <Users size={34} className="mb-5" />
            <p className="text-blue-100 font-medium">
              Total Leads
            </p>
            <h2 className="text-4xl font-bold mt-2">
              {stats.total}
            </h2>
          </div>

          <div className="bg-yellow-50 rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 border border-yellow-100 cursor-default">
            <UserPlus
              size={34}
              className="text-yellow-500 mb-5"
            />
            <p className="text-yellow-700 font-medium">
              New Leads
            </p>
            <h2 className="text-4xl font-bold">
              {stats.new}
            </h2>
          </div>

          <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 border border-purple-100 cursor-default">
            <PhoneCall
              size={34}
              className="text-purple-600 mb-5"
            />
            <p className="text-purple-700 font-medium">
              Contacted
            </p>
            <h2 className="text-4xl font-bold">
              {stats.contacted}
            </h2>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 border border-green-100 cursor-default">
            <CheckCircle2
              size={34}
              className="text-green-600 mb-5"
            />
            <p className="text-green-700 font-medium">
              Closed
            </p>
            <h2 className="text-4xl font-bold">
              {stats.closed}
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 mb-10 flex items-center gap-4">

          <Search
            size={22}
            className="text-blue-600"
          />

          <input
            type="text"
            placeholder="Search by company, name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-lg placeholder:text-gray-400"
          />

        </div>

        {/* Lead Table */}

        <LeadTable
          leads={filteredLeads}
          refresh={fetchLeads}
        />

      </div>
    </div>
  );
}

export default Admin;