import { Server, Cpu, ScanLine, Fingerprint, Lock, Blocks } from "lucide-react";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { mainSoftware, softwareModules, controllers, cardReaders, biometrics, locks } from "@/data/cem-systems";

const categories = [
  {
    href: "/cem-systems/main-software",
    label: "Main Software",
    desc: `AC2000 server bundles, licences & upgrades (${mainSoftware.length} parts).`,
    Icon: Server,
  },
  {
    href: "/cem-systems/software-modules",
    label: "Software Modules",
    desc: `Integration licences, hardware & professional services (${softwareModules.length} parts).`,
    Icon: Blocks,
  },
  {
    href: "/cem-systems/controllers",
    label: "Controllers",
    desc: `DCM, ECM, IO modules & door interface units (${controllers.length} parts).`,
    Icon: Cpu,
  },
  {
    href: "/cem-systems/card-readers",
    label: "Card Readers",
    desc: `emerald terminals, S700 series, STID & HID readers (${cardReaders.length} parts).`,
    Icon: ScanLine,
  },
  {
    href: "/cem-systems/biometrics",
    label: "Biometrics",
    desc: `Fingerprint, face and iris readers (${biometrics.length} parts).`,
    Icon: Fingerprint,
  },
  {
    href: "/cem-systems/locks",
    label: "Locks",
    desc: `Magnetic locks, shear locks, bolts & accessories (${locks.length} parts).`,
    Icon: Lock,
  },
];

export default function CemSystemsIndex() {
  return (
    <>
      <Hero title="CEM Systems — AC2000 Access Control" />

      <section className="mx-auto max-w-[1400px] px-6 py-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Pick a Category to Build Your Order
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Each category opens a part-number selector with dropdown filters.
        </p>

        <CategoryGrid categories={categories} />
      </section>
    </>
  );
}
