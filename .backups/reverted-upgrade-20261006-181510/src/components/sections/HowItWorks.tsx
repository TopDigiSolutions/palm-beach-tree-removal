import { processSteps } from "@/data/site";
export default function HowItWorks() {
  return <section id="process" className="process-section" aria-labelledby="process-heading"><div className="container-custom"><p className="eyebrow mb-4">A clear process. A carefully finished property.</p><h2 id="process-heading" className="font-serif text-4xl lg:text-5xl text-forest-dark">From first inspection to final cleanup.</h2><div className="process-grid">{processSteps.map((step, index) => <article key={step.title} className="reveal-item"><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>;
}
