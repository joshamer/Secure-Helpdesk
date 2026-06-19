import { StagePage } from "../components/stage-page";

export default function AdminPage() {
  return (
    <StagePage
      eyebrow="Admin"
      title="Admin"
      description="This page will become the protected administrator area."
    >
      <p className="leading-7 text-slate-600">
        Admin ticket controls, assignment tools, and recent activity will be
        added in Stage 15.
      </p>
    </StagePage>
  );
}
