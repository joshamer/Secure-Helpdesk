import { StagePage } from "../components/stage-page";

export default function SecurityReportPage() {
  return (
    <StagePage
      eyebrow="Security Report"
      title="Security Report"
      description="This page will document the security features built into the project."
    >
      <p className="leading-7 text-slate-600">
        Authentication, authorization, input validation, audit logging,
        environment variables, security headers, OWASP concepts, and future
        improvements will be documented in Stage 19.
      </p>
    </StagePage>
  );
}
