import { updateStatus } from "../services/api";
import { Inbox } from "lucide-react";

function LeadTable({ leads, refresh }) {
  const handleStatus = async (id, status) => {
    await updateStatus(id, status);
    refresh();
  };

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-20 text-center">
        <Inbox
          size={55}
          className="mx-auto text-gray-300 mb-5"
        />

        <h2 className="text-2xl font-bold text-slate-700">
          No Leads Found
        </h2>

        <p className="text-gray-500 mt-2">
          New submissions will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-900 text-white">

          <tr>

            <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
              Company
            </th>

            <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
              Name
            </th>

            <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
              Email
            </th>

            <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
              Budget
            </th>

            <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
              Date
            </th>

            <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr
              key={lead._id}
              className="border-b last:border-none hover:bg-slate-50 transition-all duration-200"
            >

              <td className="px-6 py-6">

                <h3 className="font-bold text-slate-800">
                  {lead.company}
                </h3>

              </td>

              <td className="px-6 py-6 font-medium">
                {lead.name}
              </td>

              <td className="px-6 py-6">

                <a
                  href={`mailto:${lead.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition"
                >
                  {lead.email}
                </a>

              </td>

              <td className="px-6 py-6">
                {lead.budget}
              </td>

              <td className="px-6 py-6 text-gray-600">
                {new Date(lead.createdAt).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </td>

              <td className="px-6 py-6">

                <select
                  value={lead.status}
                  onChange={(e) =>
                    handleStatus(
                      lead._id,
                      e.target.value
                    )
                  }
                  className={`

                  rounded-xl
                  px-4
                  py-2
                  font-semibold
                  border
                  cursor-pointer
                  shadow-sm
                  hover:shadow-md
                  transition

                  ${
                    lead.status === "New"
                      ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                      : lead.status === "Contacted"
                      ? "bg-blue-100 text-blue-700 border-blue-300"
                      : "bg-green-100 text-green-700 border-green-300"
                  }

                  `}
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Closed</option>
                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default LeadTable;