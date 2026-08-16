import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-32 text-center">
      <h1 className="font-heading text-4xl text-brand mb-4">Page not found</h1>
      <p className="text-neutral-600 mb-8">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" className="text-brand underline hover:text-brand-dark">
        Back to home
      </Link>
    </div>
  );
}
