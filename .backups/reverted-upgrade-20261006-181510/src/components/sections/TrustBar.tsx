import { ShieldCheck, TreePine, Truck, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function TrustBar() {
  return <section className="credibility-strip" aria-label="Company credentials"><div className="container-custom credibility-grid">
    <div><TreePine size={28} /><span><strong>Since {siteConfig.established}</strong><small>Serving Palm Beach County</small></span></div>
    <div><ShieldCheck size={28} /><span><strong>$5M insured</strong><small>Liability &amp; workers’ compensation</small></span></div>
    <div><Truck size={28} /><span><strong>100-ton capability</strong><small>Specialized crane operations</small></span></div>
    <div><Clock size={28} /><span><strong>24/7 response</strong><small>Emergency storm services</small></span></div>
  </div></section>;
}
