import { StagePage } from "../components/stage-page";

export default function TicketsPage() {
  return (
    <StagePage
      eyebrow="Tickets"
      title="Tickets"
      description="This page will list employee support tickets."
    >
      <p className="leading-7 text-slate-600">
        Fake ticket data will be added in Stage 3, followed by ticket cards in
        Stage 4.
      </p>
    </StagePage>
  );
}
