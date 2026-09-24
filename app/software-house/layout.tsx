import { InsidePageFooter } from "@/components/inside-page-footer";
import { SoftwareHouseHeader } from "@/components/software-house-header";

export default function SoftwareHouseLayout({ children }: { children: React.ReactNode }) {
  return <div id="top" className="flex min-h-screen flex-col bg-background"><SoftwareHouseHeader /><main className="flex-1">{children}</main><InsidePageFooter /></div>;
}
