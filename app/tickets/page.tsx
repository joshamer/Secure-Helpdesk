import { tickets } from "@/app/data/tickets";
import { StagePage } from "../components/stage-page";

export default function TicketsPage() {
  return (
    <StagePage
      eyebrow="Tickets"
      title="Tickets"
      description="This page will list employee support tickets."
    >
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-slate-100 text-sm text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Ticket</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Priority</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Created By</th>
              <th className="px-4 py-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-4 py-4">
                  <p className="font-semibold text-slate-950">
                    {ticket.title}
                  </p>
                  <p className="mt-1 max-w-md text-sm leading-6 text-slate-600">
                    {ticket.description}
                  </p>
                </td>
                <td className="px-4 py-4 text-sm text-slate-700">
                  {ticket.category}
                </td>
                <td className="px-4 py-4 text-sm text-slate-700">
                  {ticket.priority}
                </td>
                <td className="px-4 py-4 text-sm text-slate-700">
                  {ticket.status}
                </td>
                <td className="px-4 py-4 text-sm text-slate-700">
                  {ticket.createdBy}
                </td>
                <td className="px-4 py-4 text-sm text-slate-700">
                  {ticket.dateCreated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StagePage>
  );
}
