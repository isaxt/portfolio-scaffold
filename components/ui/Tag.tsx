import clsx from "clsx";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-label uppercase tracking-[0.08em] text-ink-60",
        className
      )}
    >
      {children}
    </span>
  );
}
