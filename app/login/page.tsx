import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="shell narrow">
      <section className="panel">
        <p className="eyebrow">Step 1</p>
        <h1>Google login will go here</h1>
        <p className="lede">
          This page is a placeholder for the Auth.js sign-in flow. Next we will
          connect the provider and wire sessions to the dashboard.
        </p>
        <div className="actions">
          <Link className="button primary" href="/api/auth/signin/google">
            Continue with Google
          </Link>
          <Link className="button secondary" href="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
