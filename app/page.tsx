import Link from "next/link";

const highlights = [
  "Google sign-in",
  "Admin and user roles",
  "Small project workspace",
  "Docker-ready for Hostinger VPS",
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CRM for small teams</p>
        <h1>Simple control panel for your projects</h1>
        <p className="lede">
          We will build a lightweight CRM with Google login, role-based access,
          and a clean admin area that is easy to host on your own VPS.
        </p>
        <div className="actions">
          <Link className="button primary" href="/api/auth/signin/google">
            Sign in
          </Link>
          <Link className="button secondary" href="/dashboard">
            Open dashboard
          </Link>
        </div>
      </section>

      <section className="panel">
        <h2>What is included</h2>
        <ul className="list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
