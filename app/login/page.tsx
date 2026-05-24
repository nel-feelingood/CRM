"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="shell narrow">
      <section className="panel">
        <p className="eyebrow">Step 1</p>
        <h1>Continue with Google</h1>
        <p className="lede">
          Use your Google account to enter the CRM. We will keep access simple
          and assign roles after the first sign-in.
        </p>
        <div className="actions">
          <button
            className="button primary"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            type="button"
          >
            Continue with Google
          </button>
          <Link className="button secondary" href="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
