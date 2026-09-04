/* eslint-disable @next/next/no-html-link-for-pages -- Vinext client navigation currently throws an RSC cache-busting error; full-page anchors are reliable here. */
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";

import { caseStudies, principles, professionalEvidence } from "@/app/portfolio-data";
import { SiteFooter, SiteHeader } from "@/app/site-shell";

export const metadata: Metadata = {
  title: "Selected Work | Landon Ray",
  description:
    "Selected curriculum, CTE, Physical Education, and technology work from California educator Landon Ray.",
};

const process = [
  {
    number: "01",
    title: "Notice the friction",
    text: "Find where students, educators, or a program are losing clarity, time, or momentum.",
    icon: Target,
  },
  {
    number: "02",
    title: "Design the system",
    text: "Connect the source of truth, workflow, evidence, and ownership—not just the visible symptom.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Make it usable",
    text: "Build clear directions, simple routines, and tools that other people can understand and repeat.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Improve from evidence",
    text: "Review what happened, correct the root cause, and carry the improvement through connected materials.",
    icon: Sparkles,
  },
] as const;

export default function WorkPage() {
  return (
    <>
      <SiteHeader page="work" />
      <main>
        <section className="work-hero">
          <div className="section-shell work-hero-inner">
            <a className="back-link" href="/"><ArrowLeft aria-hidden="true" /> Back to overview</a>
            <p className="eyebrow">Selected work & professional approach</p>
            <h1>Evidence behind the introduction.</h1>
            <p>
              These examples show how I connect curriculum, CTE, Physical Education, technology,
              and systems thinking. Each begins with a real need and moves toward a usable,
              repeatable solution.
            </p>
            <nav className="work-jump-links" aria-label="Project links">
              {caseStudies.map((project) => <a key={project.id} href={`#${project.id}`}>{project.index} {project.title}</a>)}
            </nav>
          </div>
        </section>

        <section className="case-study-list section-shell" aria-label="Case studies">
          {caseStudies.map((project) => (
            <article className="case-study" id={project.id} key={project.id}>
              <header className="case-study-header">
                <div>
                  <p className="case-kicker"><span>{project.index}</span>{project.label}</p>
                  <h2>{project.title}</h2>
                </div>
                <p>{project.summary}</p>
              </header>

              <div className="case-metrics" aria-label={`${project.title} highlights`}>
                {project.metrics.map(([value, label]) => (
                  <div key={label}><strong>{value}</strong><span>{label}</span></div>
                ))}
              </div>

              <div className="case-body">
                <section><h3>The challenge</h3><p>{project.challenge}</p></section>
                <section><h3>The solution</h3><p>{project.solution}</p></section>
                <section className="case-implementation">
                  <h3>Implementation</h3>
                  <ul>
                    {project.implementation.map((item) => (
                      <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
                    ))}
                  </ul>
                </section>
                <section><h3>Impact</h3><p>{project.impact}</p></section>
                <section className="case-next"><h3>Next step</h3><p>{project.next}</p></section>
              </div>
            </article>
          ))}
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-heading compact-heading light-heading">
              <div><p className="eyebrow">How I lead</p><h2 id="process-title">Make improvement repeatable.</h2></div>
              <p>
                Leadership is a pattern of action: understand the need, build something usable,
                and improve it with evidence.
              </p>
            </div>
            <div className="process-grid">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <span>{item.number}</span><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="approach-section section-shell" aria-labelledby="approach-title">
          <div className="approach-copy">
            <p className="eyebrow eyebrow-dark">Teaching approach</p>
            <h2 id="approach-title">Clear expectations create room for meaningful work.</h2>
            <p>
              Students should not have to guess what success looks like. I build structured
              learning without making it unnecessarily complicated, then use assessment,
              discussion, and observation to decide what should change next.
            </p>
          </div>
          <ol className="principle-list">
            {principles.map((principle, index) => (
              <li key={principle}><span>0{index + 1}</span><strong>{principle}</strong></li>
            ))}
          </ol>
        </section>

        <section className="evidence-section" id="evidence" aria-labelledby="evidence-title">
          <div className="section-shell">
            <div className="section-heading compact-heading">
              <div><p className="eyebrow eyebrow-dark">Professional evidence</p><h2 id="evidence-title">Four perspectives. One consistent picture.</h2></div>
              <p>
                Summarized from written recommendations by two administrators and two experienced
                CTE educators. Names, signatures, and private contact information are intentionally withheld.
              </p>
            </div>
            <div className="evidence-grid">
              {professionalEvidence.map((item, index) => (
                <article key={item.role}>
                  <span>0{index + 1}</span>
                  <div><h3>{item.role}</h3><p>{item.observation}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-contact section-shell">
          <div>
            <p className="eyebrow">Continue the conversation</p>
            <h2>See a useful point of connection?</h2>
          </div>
          <div>
            <a className="contact-email" href="mailto:landon.ray@sbcusd.k12.ca.us">
              <Mail aria-hidden="true" />
              <span><small>Professional email</small>landon.ray@sbcusd.k12.ca.us</span>
            </a>
            <a className="text-link light-link" href="/resume">View full résumé <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
