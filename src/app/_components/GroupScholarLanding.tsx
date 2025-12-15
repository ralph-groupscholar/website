"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Principle = {
  title: string;
  body: string;
  tag: string;
};

type Program = {
  code: string;
  title: string;
  desc: string;
  units: string;
};

type Testimonial = {
  quote: string;
  name: string;
  affiliation: string;
  citation: string;
};

type FaqItem = {
  q: string;
  a: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

function SealMark() {
  return (
    <div className="relative grid size-24 place-items-center rounded-full border border-[color:var(--gs-ink-soft)] bg-gradient-to-b from-[color:var(--gs-paper)] to-[#efe4d0] shadow-[0_16px_42px_-20px_rgba(28,38,40,0.75)] md:size-28">
      <div className="absolute inset-[10px] rounded-full border border-[color:var(--gs-ink-soft)]" />
      <div className="absolute inset-[18px] rounded-full border border-[color:var(--gs-ink-soft)]" />
      <div className="text-center leading-none">
        <div className="text-[10px] font-bold tracking-[0.24em] text-[color:var(--gs-ink)]">
          GROUP
        </div>
        <div className="-mt-0.5 text-2xl font-black tracking-tight text-[color:var(--gs-ink)]">
          GS
        </div>
        <div className="-mt-1 text-[10px] font-bold tracking-[0.24em] text-[color:var(--gs-ink)]">
          SCHOLAR
        </div>
      </div>
    </div>
  );
}

function SectionHeading(props: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
        {props.eyebrow.toUpperCase()}
      </div>
      <h2 className="mt-4 font-[family-name:var(--font-gs-display)] text-balance text-4xl font-semibold tracking-tight text-[color:var(--gs-ink)] md:text-5xl">
        {props.title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--gs-muted)] md:text-lg">
        {props.subtitle}
      </p>
    </header>
  );
}

function Marquee({ items }: { items: string[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced) return;
    if (!rootRef.current || !innerRef.current) return;

    const onResize = () => ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      const inner = innerRef.current!;
      const distance = inner.scrollWidth / 2;

      gsap.set(inner, { x: 0 });
      gsap.to(inner, {
        x: -distance,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    }, rootRef);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [reduced]);

  const doubled = useMemo(() => [...items, ...items], [items]);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 shadow-[0_18px_60px_-42px_rgba(28,38,40,0.85)]"
      aria-label="Group Scholar departments and highlights"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[color:var(--gs-paper)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[color:var(--gs-paper)] to-transparent" />
      <div ref={innerRef} className="flex w-max gap-3 px-4 py-3">
        {doubled.map((t, idx) => (
          <span
            key={`${t}-${idx}`}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold tracking-wide text-[color:var(--gs-ink)]"
          >
            <span className="size-1.5 rounded-full bg-[color:var(--gs-accent)]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function GroupScholarLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  const principles: Principle[] = useMemo(
    () => [
      {
        tag: "Principle I",
        title: "Pleasure in groups.",
        body: "We believe people should find intense pleasure in working with groups. Study sessions should be pleasure sessions.",
      },
      {
        tag: "Principle II",
        title: "Chemistry is extracurricular.",
        body: "Group Scholar believes chemistry should exist outside the syllabus. The syllabus is a suggestion, not a boundary.",
      },
      {
        tag: "Principle III",
        title: "Come smart. Leave distracted.",
        body: "Arrive prepared. Depart pleasantly compromised. Your focus may wander; your standards shouldn’t.",
      },
      {
        tag: "Principle IV",
        title: "Peer review gets personal.",
        body: "We practice active listening, active note-taking, and occasionally… active eye contact.",
      },
      {
        tag: "Principle V",
        title: "Attendance required. Focus optional.",
        body: "Collaboration is sacred. So is plausible deniability. We’ll handle the minutes; you handle the moment.",
      },
      {
        tag: "Principle VI",
        title: "Office hours, open.",
        body: "Office hours are open. Boundaries are clearer. Consent is always implied by enthusiasm and explicit in practice.",
      },
    ],
    [],
  );

  const programs: Program[] = useMemo(
    () => [
      {
        code: "GS-101",
        title: "Introduction to Group Dynamics",
        units: "3 units",
        desc: "Foundational skills in taking turns, sharing materials, and pretending you’re not enjoying it.",
      },
      {
        code: "GS-214",
        title: "Advanced Peer Review (Close Reading)",
        units: "4 units",
        desc: "Rigorous critique delivered softly. Feedback loops encouraged. Red ink optional.",
      },
      {
        code: "GS-303",
        title: "Chemistry Lab (After Class)",
        units: "2 units",
        desc: "Hands-on collaboration beyond prescribed outcomes. Safety goggles suggested; good judgment required.",
      },
      {
        code: "GS-401",
        title: "Capstone: Distraction Engineering",
        units: "5 units",
        desc: "Design environments where productivity is theoretically possible and practically negotiable.",
      },
    ],
    [],
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          "I came for the accountability. I stayed because the syllabus kept blushing.",
        name: "A. Participant",
        affiliation: "Department of Applied Distraction",
        citation: "doi:10.0000/gs.jqf.2025.011",
      },
      {
        quote:
          "My notes improved. My boundaries improved more. The eye contact was… peer-reviewed.",
        name: "K. Reviewer",
        affiliation: "Journal of Questionable Focus (JQF)",
        citation: "doi:10.0000/gs.jqf.2025.019",
      },
      {
        quote:
          "Come smart. Leave distracted is not a tagline. It’s a measurable outcome.",
        name: "R. Chair",
        affiliation: "Office of Institutional Mischief",
        citation: "doi:10.0000/gs.oim.2025.004",
      },
    ],
    [],
  );

  const faq: FaqItem[] = useMemo(
    () => [
      {
        q: "Is this an actual academic service?",
        a: "No. It’s a joke site that cosplays as academia. The vibes are scholarly. The outcomes are… distractingly human.",
      },
      {
        q: "What’s the Honor Code?",
        a: "Show up prepared. Be kind. Don’t pressure anyone. If someone isn’t into the bit, drop it immediately.",
      },
      {
        q: "What does “chemistry outside the syllabus” mean?",
        a: "It means you can flirt with the metaphor, not violate the moment. Keep it consensual and non-explicit.",
      },
      {
        q: "Do you store my data?",
        a: "Not on this page. This is a landing page; the “apply” box is a placeholder unless you want backend wiring later.",
      },
    ],
    [],
  );

  useLayoutEffect(() => {
    if (reduced) return;
    if (!rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(
          q("[data-hero-nav]"),
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
        )
        .fromTo(
          q("[data-hero-surface]"),
          { y: 26, opacity: 0, scale: 0.985 },
          { y: 0, opacity: 1, scale: 1, duration: 0.85 },
          0.1,
        )
        .fromTo(
          q("[data-hero-line]"),
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.08 },
          0.18,
        );

      gsap.utils.toArray<HTMLElement>(q("[data-animate='section']")).forEach(
        (el) => {
          gsap.fromTo(
            el,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
              },
            },
          );
        },
      );

      gsap.utils.toArray<HTMLElement>(q("[data-animate='stagger']")).forEach(
        (el) => {
          const kids = el.querySelectorAll("[data-stagger-item]");
          gsap.fromTo(
            kids,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.62,
              stagger: 0.07,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
              },
            },
          );
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-clip bg-[radial-gradient(1200px_500px_at_0%_0%,rgba(243,117,78,0.15),transparent_62%),radial-gradient(900px_420px_at_90%_8%,rgba(14,116,144,0.14),transparent_58%),linear-gradient(180deg,#f8f2e8_0%,#fbf8f2_46%,#f4efe3_100%)] text-[color:var(--gs-ink)]"
    >
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(28,38,40,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,38,40,0.14)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(255,255,255,0.45),transparent_38%)]" />

      <header className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-6 md:px-8 md:pt-8">
        <nav
          data-hero-nav
          className="sticky top-4 z-20 flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/85 px-4 py-3 backdrop-blur md:px-5"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-[color:var(--gs-ink-soft)] bg-white shadow-sm">
              <span className="text-sm font-black tracking-tight">GS</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-tight">Group Scholar</div>
              <div className="text-xs font-bold tracking-wide text-[color:var(--gs-muted)]">
                Institute of Collaborative Distraction
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-sm font-bold text-[color:var(--gs-muted)] md:flex">
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#principles">
              Principles
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#programs">
              Programs
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#testimonials"
            >
              Citations
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#faq">
              Conduct
            </a>
          </div>

          <Link
            href="#apply"
            className="rounded-full bg-[color:var(--gs-ink)] px-4 py-2 text-sm font-bold text-white shadow-[0_16px_30px_-20px_rgba(28,38,40,0.9)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
          >
            Reserve a seat
          </Link>
        </nav>

        <section
          data-hero-surface
          className="relative mt-8 overflow-hidden rounded-[32px] border border-[color:var(--gs-ink-soft)] bg-[linear-gradient(150deg,rgba(255,255,255,0.9),rgba(249,241,227,0.82))] p-6 shadow-[0_34px_85px_-56px_rgba(28,38,40,0.95)] md:mt-10 md:p-10"
        >
          <div className="absolute -right-14 -top-12 size-60 rounded-full bg-[radial-gradient(circle_at_30%_35%,rgba(243,117,78,0.3),transparent_62%)] blur-2xl" />
          <div className="absolute -bottom-10 -left-14 size-64 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(14,116,144,0.26),transparent_62%)] blur-2xl" />

          <div className="relative grid gap-8 md:grid-cols-[1.18fr_0.82fr] md:items-start">
            <div>
              <div
                data-hero-line
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold tracking-wide text-[color:var(--gs-muted)]"
              >
                <span className="size-2 rounded-full bg-[color:var(--gs-accent)]" />
                Accredited in Chemistry (Off-Syllabus)
                <span className="text-[color:var(--gs-muted)]/60">•</span>
                Since 2025
              </div>

              <h1
                data-hero-line
                className="mt-5 max-w-2xl font-[family-name:var(--font-gs-display)] text-balance text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl"
              >
                Study like it’s serious.
                <span className="mt-1 block text-[color:var(--gs-accent)]">
                  Enjoy it like it’s not.
                </span>
              </h1>

              <p
                data-hero-line
                className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[color:var(--gs-muted)] md:text-lg"
              >
                Group Scholar is a perfectly respectable institution for group
                study—until you read the fine print. Come smart. Leave distracted.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-nowrap sm:items-center">
                <a
                  data-hero-line
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--gs-accent)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-25px_rgba(201,81,49,0.95)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-accent)]/40"
                >
                  Join a session
                </a>
                <a
                  data-hero-line
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--gs-ink-soft)] bg-white/85 px-6 py-3 text-sm font-bold text-[color:var(--gs-ink)] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
                >
                  Read syllabus
                </a>
                <span
                  data-hero-line
                  className="text-xs font-bold tracking-wide text-[color:var(--gs-muted)] sm:whitespace-nowrap"
                >
                  Peer-reviewed distractions. Results vary.
                </span>
              </div>
            </div>

            <aside className="grid gap-4 md:pt-4">
              <div className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-5 shadow-[0_20px_46px_-32px_rgba(28,38,40,0.82)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    OFFICIAL SEAL
                  </div>
                  <div className="text-xs font-bold text-[color:var(--gs-muted)]">
                    JQF-indexed
                  </div>
                </div>
                <div className="mt-4 grid place-items-center">
                  <SealMark />
                </div>
                <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[color:var(--gs-muted)]">
                    <span>Session ID</span>
                    <span className="font-mono text-[color:var(--gs-ink)]">GS-Δ-2025</span>
                  </div>
                  <div className="mt-3 text-sm font-bold text-[color:var(--gs-ink)]">
                    “Your GPA isn’t the only thing that can rise.”
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                    Syllabus: suggestive, not descriptive. Lab partner matching:
                    no guarantees.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 rounded-3xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/92 p-4">
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-3 text-center">
                  <div className="font-[family-name:var(--font-gs-display)] text-2xl font-semibold">
                    6
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                    Principles
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-3 text-center">
                  <div className="font-[family-name:var(--font-gs-display)] text-2xl font-semibold">
                    4
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                    Programs
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-3 text-center">
                  <div className="font-[family-name:var(--font-gs-display)] text-2xl font-semibold">
                    1
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                    Honor Code
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-6 md:mt-8">
          <Marquee
            items={[
              "Department of Applied Distraction",
              "Journal of Questionable Focus (JQF)",
              "Office Hours: Open",
              "Attendance: Mandatory",
              "Focus: Optional",
              "Chemistry: Off-Syllabus",
              "Peer Review: Personal",
              "Boundaries: Clear",
            ]}
          />
        </section>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-10 md:px-8 md:pt-14">
        <section id="principles" data-animate="section" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Mission statement"
            title="A serious place for unserious productivity."
            subtitle="We look academic so your calendar approves. We feel suggestive so your attention doesn’t."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12"
          >
            {principles.map((p, idx) => (
              <article
                key={p.tag}
                data-stagger-item
                className={`rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)] ${
                  idx % 3 === 0 || idx === principles.length - 2
                    ? "md:col-span-7"
                    : "md:col-span-5"
                }`}
              >
                <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                  {p.tag.toUpperCase()}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="programs"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Course catalog"
            title="Programs designed to distract responsibly."
            subtitle="A curriculum that reads like an institution—until you realize the institution is flirting with your focus."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {programs.map((c) => (
              <article
                key={c.code}
                data-stagger-item
                className="group relative overflow-hidden rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
              >
                <div className="absolute -right-12 -top-12 size-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(14,116,144,0.25),transparent_60%)] blur-2xl transition duration-500 group-hover:scale-105" />
                <div className="absolute -bottom-16 -left-16 size-52 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(243,117,78,0.22),transparent_60%)] blur-2xl transition duration-500 group-hover:scale-105" />
                <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                      {c.code}
                    </div>
                    <h3 className="mt-2 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                      {c.title}
                    </h3>
                  </div>
                  <div className="shrink-0 self-start whitespace-nowrap rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                    {c.units}
                  </div>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  {c.desc}
                </p>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                    Prereqs: curiosity
                  </span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                    Lab: optional
                  </span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                    Outcomes: negotiable
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Citations"
            title="Documented outcomes. Questionable journals."
            subtitle="Testimonials formatted like academic references, because credibility is a vibe."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <figure
                key={t.citation}
                data-stagger-item
                className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
              >
                <blockquote className="text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-[color:var(--gs-ink-soft)] pt-4">
                  <div className="text-sm font-bold text-[color:var(--gs-ink)]">{t.name}</div>
                  <div className="mt-1 text-xs font-bold tracking-wide text-[color:var(--gs-muted)]">
                    {t.affiliation}
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-[color:var(--gs-muted)]">
                    {t.citation}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="faq" data-animate="section" className="mt-16 scroll-mt-28 md:mt-24">
          <SectionHeading
            eyebrow="Code of conduct"
            title="Suggestive copy. Serious boundaries."
            subtitle="We keep it playful, not messy. Enthusiasm is great; respect is required."
          />

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-5 shadow-sm open:bg-white"
              >
                <summary className="cursor-pointer list-none font-bold text-[color:var(--gs-ink)] outline-none">
                  <span className="flex items-center justify-between gap-3">
                    <span>{item.q}</span>
                    <span className="text-[color:var(--gs-muted)] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section id="apply" data-animate="section" className="mt-16 scroll-mt-28 md:mt-24">
          <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--gs-ink-soft)] bg-[linear-gradient(140deg,rgba(255,255,255,0.92),rgba(247,237,221,0.86))] p-8 shadow-[0_30px_90px_-58px_rgba(28,38,40,0.92)] md:p-12">
            <div className="absolute -left-10 -top-10 size-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(243,117,78,0.25),transparent_60%)] blur-3xl" />
            <div className="absolute -bottom-12 -right-12 size-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(14,116,144,0.24),transparent_60%)] blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                FINAL CALL
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-gs-display)] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Reserve a study slot. Or a distraction slot.
              </h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-[color:var(--gs-muted)] md:text-lg">
                We’ll never promise productivity. We will promise a room full of
                smart people pretending to focus together.
              </p>

              <form
                className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@university.edu"
                  className="h-12 w-full rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-5 text-sm font-bold text-[color:var(--gs-ink)] shadow-sm outline-none placeholder:text-[color:var(--gs-muted)]/60 focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-[color:var(--gs-ink)] px-6 text-sm font-bold text-white shadow-[0_16px_30px_-20px_rgba(28,38,40,0.9)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
                >
                  Apply
                </button>
              </form>

              <p className="mt-4 text-xs font-bold tracking-wide text-[color:var(--gs-muted)]">
                By applying, you agree to the Honor Code: respect first, jokes
                second.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-8 md:text-left">
          <div className="text-sm font-bold text-[color:var(--gs-muted)]">
            © {new Date().getFullYear()} Group Scholar. All jokes reserved.
          </div>
          <div className="text-xs font-bold tracking-wide text-[color:var(--gs-muted)]">
            This is satire. No grades were harmed in the making of this website.
          </div>
        </div>
      </footer>
    </div>
  );
}
