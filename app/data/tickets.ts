export type TicketPriority = "Low" | "Medium" | "High" | "Critical";
export type TicketStatus = "Open" | "In Progress" | "Resolved";
export type TicketCategory = "Network" | "Account" | "Security" | "Software";

export type Ticket = {
  id: number;
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  createdBy: string;
  dateCreated: string;
};

export const tickets: Ticket[] = [
  {
    id: 1001,
    title: "Wi-Fi not working",
    description:
      "User cannot connect to the office Wi-Fi after restarting their laptop.",
    category: "Network",
    priority: "High",
    status: "Open",
    createdBy: "Jordan Lee",
    dateCreated: "2026-06-18",
  },
  {
    id: 1002,
    title: "Password reset needed",
    description:
      "User is locked out after multiple failed login attempts and needs a password reset.",
    category: "Account",
    priority: "Medium",
    status: "In Progress",
    createdBy: "Morgan Smith",
    dateCreated: "2026-06-18",
  },
  {
    id: 1003,
    title: "Suspicious email received",
    description:
      "User reported a possible phishing email with an unknown sender and urgent payment request.",
    category: "Security",
    priority: "Critical",
    status: "Open",
    createdBy: "Avery Johnson",
    dateCreated: "2026-06-18",
  },
  {
    id: 1004,
    title: "Software not opening",
    description:
      "Accounting software closes immediately after launch on the user's workstation.",
    category: "Software",
    priority: "Low",
    status: "Resolved",
    createdBy: "Taylor Brown",
    dateCreated: "2026-06-18",
  },
];
