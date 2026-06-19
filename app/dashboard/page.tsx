import { StagePage } from "../components/stage-page";

export default function DashboardPage() {
  return (
    <StagePage
      eyebrow="Dashboard"
      title="Dashboard"
      description="This page will become the main support and security overview."
    >
      <p className="leading-7 text-slate-600">
        Dashboard stats and summary cards will be added in Stage 5.
      </p>
    </StagePage>
  );
}
