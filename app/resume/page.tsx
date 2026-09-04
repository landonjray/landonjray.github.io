/* eslint-disable @next/next/no-html-link-for-pages -- Vinext client navigation currently throws an RSC cache-busting error; full-page anchors are reliable here. */
"use client";

import { ArrowLeft, Mail, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar no-print">
        <Button asChild variant="ghost"><a href="/"><ArrowLeft aria-hidden="true" /> Back to overview</a></Button>
        <Button onClick={() => window.print()}><Printer aria-hidden="true" /> Print / Save as PDF</Button>
      </div>

      <article className="resume-document">
        <header className="resume-header">
          <div>
            <p>California Business/CTE & Physical Education Educator</p>
            <h1>Landon Ray</h1>
            <p className="resume-summary">Educator and curriculum builder who combines continuation-school teaching, CTE, athletics, technology, management, and licensed real-estate practice to make learning clear, relevant, and usable.</p>
          </div>
          <a href="mailto:landon.ray@sbcusd.k12.ca.us"><Mail aria-hidden="true" /> landon.ray@sbcusd.k12.ca.us</a>
        </header>

        <div className="resume-columns">
          <div className="resume-main">
            <section>
              <h2>Professional experience</h2>
              <div className="resume-entry">
                <p>2025–Present</p><h3>Business & Physical Education Teacher</h3><h4>San Andreas High School · San Bernardino City Unified School District</h4>
                <ul><li>Teach diverse learners in a structured, supportive continuation-school setting.</li><li>Build standards-aligned curriculum maps, teacher presentations, student workbooks, rubrics, digital assessments, and Google Classroom systems.</li><li>Use Learning Intentions, Success Criteria, purposeful Kagan structures, checks for understanding, and revision to support participation and accountability.</li></ul>
              </div>
              <div className="resume-entry">
                <p>2024–2025</p><h3>Teacher of Record, Summer Boost & Alternative Classroom Placement Teacher</h3><h4>Corona-Norco Unified School District · Santiago, Auburndale, Rosa Parks & Reagan</h4>
                <ul><li>Adapted across campuses and instructional settings while maintaining a calm, structured environment and keeping students engaged with assigned coursework.</li><li>Collaborated with teachers, counselors, administrators, and support staff to meet varied academic and personal needs.</li></ul>
              </div>
              <div className="resume-entry">
                <p>2024</p><h3>Business/CTE Student Teacher</h3><h4>Centennial High School · Introduction to Business & Money Management</h4>
                <ul><li>Designed varied instruction and assessment for general education, honors, English learner, and special education students.</li><li>Supported FBLA preparation, PLC collaboration, IEP participation, and family communication.</li></ul>
              </div>
              <div className="resume-entry">
                <p>2022–Present</p><h3>Substitute Teacher & Assistant Wrestling Coach</h3><h4>Santiago High School · Corona-Norco Unified School District</h4>
                <ul><li>Built classroom-management, communication, and coaching experience with diverse students and student-athletes.</li></ul>
              </div>
              <div className="resume-entry">
                <p>2013–Present</p><h3>Retail Management & Licensed Real Estate</h3><h4>Sam’s Club (2013–2021) · Active Realty (2021–Present)</h4>
                <ul><li>Developed practical experience in team operations, sales, marketing, negotiation, contracts, customer service, and complex client transactions.</li></ul>
              </div>
            </section>

            <section>
              <h2>Selected program work</h2>
              <div className="resume-project"><h3>Intro to Business A & B Curriculum System</h3><p>Built a two-course digital architecture with 25 core lessons per course, a Day 25 finish line, weekly workbooks and checks, and 41 of 46 Business Management substandards mapped into the core.</p></div>
              <div className="resume-project"><h3>Business Pathway Skills & Certification Pilot</h3><p>Designed a no-script Google Forms and Sheets workflow with one shared assessment, formula-driven teacher views, evidence verification, a common skills framework, and program reporting.</p></div>
              <div className="resume-project"><h3>Effort-Based Physical Education</h3><p>Use heart-rate feedback, student choice, clear participation expectations, and varied lifetime activities to make effort visible and success more accessible.</p></div>
            </section>
          </div>

          <aside className="resume-sidebar">
            <section><h2>Education</h2><div><strong>Master of Education</strong><span>Inspired Teaching and Learning · Emphasis in Inspired Teaching Practices · National University · 2024 · With distinction · 3.93 GPA</span></div><div><strong>B.A., Business Administration</strong><span>Entrepreneurship · California State University, Fullerton · 2019</span></div></section>
            <section><h2>Credentials</h2><div><strong>California Preliminary Single Subject</strong><span>Business + Physical Education · Valid through September 2029</span></div><div><strong>English Learner Authorization</strong><span>Content-area ELD and specially designed instruction in English</span></div><div><strong>California real-estate license</strong><span>Active professional practice</span></div></section>
            <section><h2>Professional learning</h2><div><strong>9 graduate credits · Idaho State University · 2026</strong><span>Athletic-injury prevention; Safe Sport and Physical Activity Experiences, Parts I & II</span></div></section>
            <section><h2>Core capabilities</h2><ul className="capability-list">{["CTE curriculum", "Business education", "Curriculum mapping", "Digital assessment", "Google Workspace", "AI-assisted workflows", "Program systems", "Career readiness", "Physical Education", "Heart-rate technology", "Professional communication", "Team leadership"].map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section><h2>Athletic background</h2><div><strong>2× CIF Wrestling Champion</strong><span>Nearly 20 years of wrestling experience</span></div><p>Multi-sport experience spanning traditional, recreational, fitness, and lifetime activities.</p></section>
          </aside>
        </div>
      </article>
    </main>
  );
}
