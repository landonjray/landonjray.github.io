import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  Dumbbell,
  ExternalLink,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";

import { caseStudies, expertise } from "@/app/portfolio-data";
import { SiteFooter, SiteHeader } from "@/app/site-shell";

const credibility = [
  "California Business + PE credential",
  "M.Ed. with distinction",
  "Licensed real-estate agent",
  "2× CIF wrestling champion",
] as const;

const selectedWork = caseStudies.slice(0, 3);

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="card-hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">California educator · Business/CTE + Physical Education</p>
              <h1 id="hero-title">Landon Ray</h1>
              <p className="hero-headline">Real-world experience. Clear learning systems.</p>
              <p className="hero-lede">
                I’m an educator and curriculum builder who connects business, Physical Education,
                technology, and systems thinking. Experience in management, real estate, and
                athletics helps me make learning practical, organized, and relevant.
              </p>
              <p className="current-role">Business & Physical Education Teacher · San Andreas High School</p>
              <div className="hero-actions">
                <a className="button button-light" href="mailto:landon.ray@sbcusd.k12.ca.us">
                  <Mail aria-hidden="true" /> Email Landon
                </a>
                <a className="button button-outline" href="/work">
                  View selected work <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <a className="hero-email" href="mailto:landon.ray@sbcusd.k12.ca.us">
                landon.ray@sbcusd.k12.ca.us
              </a>
            </div>

            <div className="portrait-card">
              <div className="portrait-ring" aria-hidden="true" />
              {/* The local WebP is already optimized and served directly. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landon-ray.webp"
                alt="Landon Ray wearing a blue suit and red tie"
                width="1366"
                height="2048"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-label">
                <span>Professional focus</span>
                <strong>Education · Programs · Technology</strong>
              </div>
            </div>
          </div>

          <div className="credibility-bar" aria-label="Professional highlights">
            {credibility.map((item) => (
              <div key={item}><CheckCircle2 aria-hidden="true" /><span>{item}</span></div>
            ))}
          </div>
        </section>

        <section className="expertise-section section-shell" id="about">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow eyebrow-dark">What I bring</p>
              <h2>One educator. Four connected strengths.</h2>
            </div>
            <p>
              My work sits where instruction, real-world relevance, and thoughtful systems meet.
              The goal is always the same: make success clearer for students and implementation
              more useful for educators.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article key={item.title}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-preview" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="section-heading compact-heading light-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="work-title">Proof behind the introduction.</h2>
              </div>
              <p>
                A few examples of how I turn instructional and program needs into clear,
                repeatable solutions.
              </p>
            </div>

            <div className="preview-grid">
              {selectedWork.map((project) => (
                <article key={project.id}>
                  <div className="preview-meta">
                    <span>{project.index}</span>
                    <p>{project.label}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong>{project.previewMetric}</strong>
                  <a href={`/work#${project.id}`}>
                    View project <ArrowRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            <a className="text-link light-link" href="/work">
              Explore all selected work and professional approach <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="proof-section section-shell" aria-labelledby="proof-title">
          <div className="proof-mark" aria-hidden="true">4</div>
          <div>
            <p className="eyebrow eyebrow-dark">Observed in practice</p>
            <h2 id="proof-title">A consistent professional reputation.</h2>
            <p>
              Four written recommendations—from two school administrators and two experienced
              CTE educators—independently emphasize the same qualities: trusted relationships,
              calm structure, high expectations, collaboration, and relevant instruction.
            </p>
            <a className="text-link" href="/work#evidence">
              See the evidence summary <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="background-section" id="background" aria-labelledby="background-title">
          <div className="section-shell background-shell">
            <div className="background-intro">
              <p className="eyebrow">Professional background</p>
              <h2 id="background-title">Classroom credibility. Real-world perspective.</h2>
              <p>
                I currently teach Business and Physical Education in a continuation-school
                setting. Earlier work across alternative learning, coaching, retail management,
                and real estate gives me a practical lens on communication, leadership,
                operations, and career readiness.
              </p>
              <a className="button button-light" href="/resume">
                View full résumé <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <div className="background-cards">
              <article>
                <BookOpenCheck aria-hidden="true" />
                <span>Current</span>
                <h3>Business & Physical Education Teacher</h3>
                <p>San Andreas High School · San Bernardino City Unified School District</p>
              </article>
              <article>
                <BriefcaseBusiness aria-hidden="true" />
                <span>Business practice</span>
                <h3>Management & licensed real estate</h3>
                <p>Team operations, sales, negotiation, contracts, and client relationships.</p>
              </article>
              <article>
                <Dumbbell aria-hidden="true" />
                <span>Athletic foundation</span>
                <h3>2× CIF Wrestling Champion</h3>
                <p>Nearly 20 years around wrestling, plus coaching and broad multi-sport experience.</p>
              </article>
              <article>
                <Sparkles aria-hidden="true" />
                <span>Systems lens</span>
                <h3>Curriculum, programs & technology</h3>
                <p>Connected materials, digital workflows, assessment, and teacher-led AI integration.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="credentials-section section-shell" aria-labelledby="credentials-title">
          <div className="credentials-title">
            <p className="eyebrow eyebrow-dark">Credentials & education</p>
            <h2 id="credentials-title">Prepared across disciplines.</h2>
          </div>
          <div className="credential-list">
            <article><GraduationCap aria-hidden="true" /><div><h3>California Single Subject Credential</h3><p>Business + Physical Education · valid through September 2029</p></div></article>
            <article><BookOpenCheck aria-hidden="true" /><div><h3>Master of Education, with distinction</h3><p>National University · 2024 · 3.93 GPA</p></div></article>
            <article><BriefcaseBusiness aria-hidden="true" /><div><h3>B.A., Business Administration</h3><p>Entrepreneurship · Cal State Fullerton · 2019</p></div></article>
            <article><Award aria-hidden="true" /><div><h3>English Learner Authorization</h3><p>Plus graduate study in athletic safety and safe sport</p></div></article>
          </div>
        </section>

        <section className="personal-section section-shell" aria-labelledby="personal-title">
          <div className="personal-copy">
            <p className="eyebrow eyebrow-dark">Beyond the classroom</p>
            <h2 id="personal-title">Get to know the educator behind the work.</h2>
            <p>
              Competition, movement, entrepreneurship, and technology have always been part of
              my life. Nearly 20 years around wrestling—and experience across a wide range of
              sports—shaped my discipline and persistence. Real estate and a constant interest
              in better tools keep me curious, practical, and always learning.
            </p>
            <div className="personal-tags" aria-label="Personal interests">
              <span>Wrestling</span><span>Sports & fitness</span><span>Entrepreneurship</span><span>Technology</span>
            </div>
          </div>
          <a
            className="instagram-card"
            href="https://www.instagram.com/landonjray/"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Landon Ray on Instagram at landonjray"
          >
            <Camera aria-hidden="true" />
            <div>
              <small>Instagram</small>
              <strong>@landonjray</strong>
              <p>A more personal look at the interests and experiences behind my professional work.</p>
            </div>
            <ExternalLink className="instagram-arrow" aria-hidden="true" />
          </a>
        </section>

        <section className="contact-card" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Professional contact</p>
            <h2 id="contact-title">Let’s stay connected.</h2>
            <p>
              For conversations about education, CTE, curriculum, programs, technology, or
              professional collaboration, email is the best way to reach me.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:landon.ray@sbcusd.k12.ca.us">
              <Mail aria-hidden="true" />
              <span><small>Professional email</small>landon.ray@sbcusd.k12.ca.us</span>
            </a>
            <a className="business-link" href="https://www.landonrayrealtor.com/" target="_blank" rel="noreferrer">
              Public real-estate practice <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
