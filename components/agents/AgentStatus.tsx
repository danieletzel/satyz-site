"use client";

interface Props {
  status: string;
  updatedAt: string;
}

export default function AgentStatus({ status, updatedAt }: Props) {
  return (
    <div className="absolute top-24 right-6 z-30 rounded-full bg-primary text-white px-4 py-1.5 text-sm shadow-lg hidden md:inline-block">
      🟢 {status} — {updatedAt}
    </div>
  );
}