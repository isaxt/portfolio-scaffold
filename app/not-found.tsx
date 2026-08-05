import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="label-caps mb-4">404</p>
      <h1 className="font-display text-display-lg italic text-signal">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-prose text-body-lg text-ink-60">
        Whatever you were looking for isn&rsquo;t here. It may have moved, or
        the link might be out of date.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-ink px-6 py-3 font-mono text-label uppercase tracking-[0.1em] transition-colors duration-400 ease-signature hover:bg-ink hover:text-cream"
      >
        Back to home
      </Link>
    </Container>
  );
}
