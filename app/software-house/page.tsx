import { Server, Cpu, ScanLine, Fingerprint, Lock, Blocks } from "lucide-react";
import { Hero } from "@/components/hero";

const categories = [
  ["Main Software", "CCURE 9000 software and upgrades", Server],
  ["Software Modules", "Integration licences and services", Blocks],
  ["Controllers", "Controllers and door interface units", Cpu],
  ["Card Readers", "Card readers and credentials", ScanLine],
  ["Biometrics", "Biometric readers and devices", Fingerprint],
  ["Locks", "Locks and accessories", Lock],
] as const;

export default function SoftwareHousePage() {
  return (
    <>
      <Hero title="Software House – CCURE 9000" />
      <section className="mx-auto max-w-[1400px] px-6 py-12">
        <h2 className="text-2xl font-semibold text-foreground">Pick a Category to Build Your Order</h2>
        <p className="mt-1 text-sm text-muted-foreground">Each category opens a part-number selector with dropdown filters.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([label, desc, Icon]) => (
            <button type="button" key={label} className="group relative w-full overflow-hidden rounded-xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-brand-accent opacity-80 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
