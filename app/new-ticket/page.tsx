import { StagePage } from "../components/stage-page";

export default function NewTicketPage() {
  return (
    <StagePage
      eyebrow="New Ticket"
      title="New Ticket"
      description="This page will let users submit a new help desk request."
    >
      <p className="leading-7 text-slate-600">
        The title, description, category, and priority form fields will be added
        in Stage 6.
      </p>
    </StagePage>
  );
}
