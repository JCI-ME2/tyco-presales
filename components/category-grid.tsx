import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Category = {
  href: string;
  label: string;
  desc: string;
  Icon: LucideIcon;
};

type CategoryGridProps = {
  categories: Category[];
  columnsClassName?: string;
};

export function CategoryGrid({ categories, columnsClassName = "lg:grid-cols-3" }: CategoryGridProps) {
  return (
    <div className={`mt-8 grid gap-5 sm:grid-cols-2 ${columnsClassName}`}>
      {categories.map(({ href, label, desc, Icon }) => (
        <Link
          key={href}
          href={href}
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-foreground">{label}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-brand-accent opacity-80 transition-opacity group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}
