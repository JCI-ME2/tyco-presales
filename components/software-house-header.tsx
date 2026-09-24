"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { OurBrandsMenu } from "@/components/our-brands-menu";

const tabs = ["Main Software", "Software Modules", "Controllers", "Card Readers", "Biometrics", "Locks"];

export function SoftwareHouseHeader() {
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur"><div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-6"><Link href="/software-house" className="flex shrink-0"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/jci-logo-pages.png`} alt="Johnson Controls" className="h-9 w-auto object-contain" width={140} height={40} /></Link><OurBrandsMenu /><nav className="ml-4 hidden items-center gap-1 overflow-x-auto lg:flex">{tabs.map((tab, index) => <span key={tab} className="flex items-center"><button type="button" className="whitespace-nowrap px-4 py-2 text-[12px] font-normal text-[#333740] transition-colors hover:text-jci-blue">{tab}</button>{index < tabs.length - 1 && <span aria-hidden="true" className="px-1 text-jci-blue">|</span>}</span>)}</nav><div className="ml-auto flex shrink-0 items-center"><Link href="/" className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"><Home className="h-4 w-4" /> Home</Link></div></div><div className="h-[3px] w-full bg-jci-blue" /></header>;
}
