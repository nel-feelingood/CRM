import Link from "next/link";

const projects = [
  { name: "Project Alpha", status: "Active" },
  { name: "Project Beta", status: "Waiting" },
];

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="panel">
        <p className="eyebrow">Admin area</p>
        <h1>Dashboard</h1>
        <p className="lede">
          This will become the protected workspace for admins and invited users.
        </p>
        <div className="table">
          {projects.map((project) => (
            <div className="row" key={project.name}>
              <strong>{project.name}</strong>
              <span>{project.status}</span>
            </div>
          ))}
        </div>
        <Link className="button secondary" href="/">
          Home
        </Link>
      </section>
    </main>
  );
}
