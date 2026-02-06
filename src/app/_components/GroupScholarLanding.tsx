"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

type SessionFormat = {
  title: string;
  desc: string;
  duration: string;
  intensity: string;
  seats: string;
};

type BulletinItem = {
  label: string;
  detail: string;
  tag: string;
};

type SnapshotTile = {
  label: string;
  value: string;
  detail: string;
};

type ForecastSlot = {
  label: string;
  title: string;
  desc: string;
  time: string;
  room: string;
  signal: string;
};

type ForecastNote = {
  title: string;
  desc: string;
};

type ForecastRadar = {
  day: string;
  window: string;
  host: string;
  signal: string;
  seats: string;
};

type ContinuityBeat = {
  badge: string;
  title: string;
  desc: string;
  signal: string;
  timing: string;
};

type WayfindingBeat = {
  tag: string;
  title: string;
  desc: string;
  cue: string;
};

type RoomZone = {
  name: string;
  desc: string;
  etiquette: string;
  light: string;
};

type RoomTransfer = {
  step: string;
  detail: string;
};

type RoomLegendItem = {
  label: string;
  detail: string;
  color: string;
};

type SignalBoardItem = {
  label: string;
  detail: string;
  cadence: string;
};

type CalibrationProfile = {
  level: number;
  label: string;
  desc: string;
  track: string;
  signal: string;
  hostMove: string;
  duration: string;
};

type ResetStep = {
  badge: string;
  title: string;
  desc: string;
  cue: string;
};

type ResetTool = {
  title: string;
  desc: string;
};

type LedgerMetric = {
  label: string;
  value: string;
  detail: string;
};

type LedgerProtocol = {
  title: string;
  desc: string;
};

type OutcomeMetric = {
  tag: string;
  value: string;
  label: string;
  desc: string;
};

type OutcomeNote = {
  title: string;
  desc: string;
};

type RelayCheckpoint = {
  label: string;
  title: string;
  desc: string;
  cue: string;
  signal: string;
};

type PulseHighlight = {
  tag: string;
  title: string;
  desc: string;
  timing: string;
};

type VibeTrack = {
  name: string;
  tone: string;
  capacity: string;
  rule: string;
  signal: string;
};

type TrackPulse = {
  window: string;
  host: string;
  seats: string;
  cue: string;
};

type ApplicationStep = {
  badge: string;
  title: string;
  desc: string;
  timing: string;
};

type InvitePacketItem = {
  badge: string;
  title: string;
  desc: string;
  meta: string;
};

type InviteMemo = {
  title: string;
  desc: string;
  timing: string;
};

type ReadinessModule = {
  badge: string;
  title: string;
  desc: string;
  cue: string;
};

type ReadinessBrief = {
  title: string;
  desc: string;
  timing: string;
};

type Ritual = {
  badge: string;
  title: string;
  desc: string;
  cue: string;
};

type StudioKitItem = {
  title: string;
  desc: string;
};

type LibraryItem = {
  title: string;
  desc: string;
  format: string;
  shelf: string;
};

type StudioHour = {
  day: string;
  time: string;
  note: string;
};

type Host = {
  name: string;
  title: string;
  focus: string;
  availability: string;
  note: string;
};

type FieldNote = {
  badge: string;
  title: string;
  desc: string;
  session: string;
  artifact: string;
};

type ArchiveItem = {
  title: string;
  desc: string;
};

type DebriefPrompt = {
  title: string;
  desc: string;
  cue: string;
};

type DebriefFollowUp = {
  title: string;
  detail: string;
  timeframe: string;
};

type SignalProfile = {
  code: string;
  headline: string;
  desc: string;
  hostMove: string;
  response: string;
};

type StudioCue = {
  tag: string;
  title: string;
  desc: string;
  timing: string;
};

type StudioScript = {
  title: string;
  line: string;
  note: string;
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
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 shadow-[0_18px_60px_-42px_rgba(28,38,40,0.85)]"
      aria-label="Group Scholar departments and highlights"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-3">
        {items.map((t, idx) => (
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
  const helperId = useId();
  const statusId = useId();
  const preferenceId = useId();
  const focusId = useId();
  const sectionIndex = useMemo(
    () => [
      { id: "forecast", label: "Forecast", tag: "Board" },
      { id: "wayfinding", label: "Wayfinding", tag: "Path" },
      { id: "principles", label: "Principles", tag: "Mission" },
      { id: "programs", label: "Programs", tag: "Catalog" },
      { id: "library", label: "Library", tag: "Archive" },
      { id: "outcomes", label: "Outcomes", tag: "Map" },
      { id: "relay", label: "Relay", tag: "Cue" },
      { id: "pulse", label: "Pulse", tag: "Bridge" },
      { id: "rituals", label: "Rituals", tag: "Flow" },
      { id: "sessions", label: "Sessions", tag: "Rhythm" },
      { id: "rooms", label: "Rooms", tag: "Zones" },
      { id: "matching", label: "Matching", tag: "Fit" },
      { id: "decoder", label: "Decoder", tag: "Signals" },
      { id: "studio", label: "Studio", tag: "Signals" },
      { id: "admissions", label: "Admissions", tag: "Intake" },
      { id: "apply", label: "Apply", tag: "Seat" },
    ],
    [],
  );
  const quickIndex = useMemo(() => sectionIndex.slice(0, 8), [sectionIndex]);
  const signalCueMap = useMemo(
    () => ({
      forecast: "Check the board, adjust the tone.",
      wayfinding: "Follow the path to the next cue.",
      principles: "Anchor the pact before you move.",
      programs: "Choose the track and mark it.",
      library: "Pull the right stack for the room.",
      outcomes: "Measure the drift and name it.",
      relay: "Pass the cue to the next chapter.",
      pulse: "Read the room pulse together.",
      rituals: "Follow the ritual loop.",
      sessions: "Set the session rhythm.",
      rooms: "Pick a zone that fits.",
      matching: "Lock the pairing with care.",
      decoder: "Decode the signals fast.",
      studio: "Run the studio cue.",
      admissions: "Open the gate, set the tone.",
      apply: "Reserve the seat while it holds.",
    }),
    [],
  );
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState("Any track");
  const [focusNote, setFocusNote] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "error" | "sent">("idle");
  const [activeSignal, setActiveSignal] = useState("Silent");
  const [calibrationLevel, setCalibrationLevel] = useState(3);
  const [automationMode, setAutomationMode] = useState(false);
  const [activeSection, setActiveSection] = useState(
    sectionIndex[0]?.id ?? "forecast",
  );
  const [localTime, setLocalTime] = useState<Date | null>(null);
  const maxFocusLength = 160;
  const formattedTrack = track === "Any track" ? "any track" : track;
  const focusCount = focusNote.length;
  const focusPercent = Math.min(
    100,
    Math.round((focusCount / maxFocusLength) * 100),
  );
  const focusWarning = focusCount >= maxFocusLength - 20;
  const helperMessage =
    "We only use this to match you with a room. No mailing lists.";
  const statusMessage =
    formStatus === "sent"
      ? `Intent logged for ${formattedTrack}. Expect a response within 48 hours.`
      : formStatus === "error"
        ? "Please enter a valid email to reserve a seat."
        : "Ready when you are — share an email to start.";
  const statusTone =
    formStatus === "error"
      ? "text-[color:var(--gs-accent)]"
      : formStatus === "sent"
      ? "text-[color:var(--gs-ink)]"
      : "text-[color:var(--gs-muted)]";
  const trackPreviewId = useId();
  const focusCountId = useId();
  const calibrationHelpId = useId();
  const calibrationValueId = useId();
  const activeIndex = Math.max(
    0,
    sectionIndex.findIndex((item) => item.id === activeSection),
  );
  const activeLabel = sectionIndex[activeIndex]?.label ?? "Forecast";
  const activeTag = sectionIndex[activeIndex]?.tag ?? "Board";
  const progressPercent = sectionIndex.length
    ? Math.round(((activeIndex + 1) / sectionIndex.length) * 100)
    : 0;
  const activeCue =
    signalCueMap[activeSection as keyof typeof signalCueMap] ??
    "Hold the thread.";
  const timeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    [],
  );
  const dayFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }),
    [],
  );
  const resetFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
      }),
    [],
  );
  const resolvedTime = localTime ?? new Date(0);
  const localTimeLabel = localTime
    ? timeFormatter.format(localTime)
    : "—";
  const localDayLabel = localTime ? dayFormatter.format(localTime) : "—";
  const nextReset = useMemo(() => {
    const next = new Date(resolvedTime);
    next.setHours(9, 0, 0, 0);
    const day = resolvedTime.getDay();
    const daysToMonday = (1 - day + 7) % 7;
    const useSameDay = daysToMonday === 0 && resolvedTime < next;
    if (!useSameDay) {
      next.setDate(
        resolvedTime.getDate() + (daysToMonday === 0 ? 7 : daysToMonday),
      );
    }
    return next;
  }, [resolvedTime]);
  const nextResetLabel = localTime
    ? resetFormatter.format(nextReset)
    : "—";

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

  const outcomeMetrics: OutcomeMetric[] = useMemo(
    () => [
      {
        tag: "Retention",
        value: "92%",
        label: "Intent kept",
        desc: "Participants who report staying on-task for the majority of the session.",
      },
      {
        tag: "Cadence",
        value: "3.4",
        label: "Signal resets",
        desc: "Median boundary resets per session, logged by the host.",
      },
      {
        tag: "Debrief",
        value: "48 hrs",
        label: "Follow-up window",
        desc: "Average time to schedule a debrief after shared work.",
      },
      {
        tag: "Care",
        value: "11 min",
        label: "Warm exits",
        desc: "Average time hosts spend guiding soft exits and quick check-ins.",
      },
    ],
    [],
  );

  const outcomeNotes: OutcomeNote[] = useMemo(
    () => [
      {
        title: "We count the room, not the people.",
        desc: "Only aggregate data is kept. No names, no screenshots, no replay.",
      },
      {
        title: "Every metric has a host response.",
        desc: "If the room spikes, the host pauses, resets, and re-reads the board.",
      },
      {
        title: "Weekly reviews keep it honest.",
        desc: "Hosts share a Monday recap with adjustments for the next cycle.",
      },
    ],
    [],
  );

  const relayCheckpoints: RelayCheckpoint[] = useMemo(
    () => [
      {
        label: "Next up",
        title: "Ritual loop",
        desc: "Restate the arrival, drift, and exit beats before anyone opens a notebook.",
        cue: "2 minutes",
        signal: "Check-in",
      },
      {
        label: "Then",
        title: "Session rhythm",
        desc: "Pick a cadence that matches the room, not the calendar invite.",
        cue: "Before seating",
        signal: "Silent",
      },
      {
        label: "After",
        title: "Room zones",
        desc: "Match your badge to the lighting and choose an exit lane early.",
        cue: "On entry",
        signal: "Open",
      },
    ],
    [],
  );

  const pulseHighlights: PulseHighlight[] = useMemo(
    () => [
      {
        tag: "Next up",
        title: "Rituals briefing",
        desc: "Refresh the arrival, drift, and exit cues before you enter the room.",
        timing: "2 minutes",
      },
      {
        tag: "On deck",
        title: "Room tone scan",
        desc: "Map zones by noise level, then choose the boundary badge that matches.",
        timing: "Quick glance",
      },
      {
        tag: "After",
        title: "Matching desk",
        desc: "Share your track and focus note so hosts can align the room.",
        timing: "Before check-in",
      },
    ],
    [],
  );

  // Field notes capture real-ish moments from recent sessions.
  const fieldNotes: FieldNote[] = useMemo(
    () => [
      {
        badge: "Log 01",
        title: "The shared silence experiment",
        desc: "Two people asked for “Silent” badges. The room followed suit. Nobody spoke for 23 minutes.",
        session: "Whisper Lab",
        artifact: "Soft timer imprint",
      },
      {
        badge: "Log 02",
        title: "The note relay success",
        desc: "We rotated the scribe role three times. Everyone left with identical notes and different memories.",
        session: "Studio Critique",
        artifact: "Relay ledger",
      },
      {
        badge: "Log 03",
        title: "The graceful exit",
        desc: "A guest changed tracks mid-session. The host paused, reset the room, and the vibe held.",
        session: "After Hours Salon",
        artifact: "Exit slip",
      },
    ],
    [],
  );

  const archiveItems: ArchiveItem[] = useMemo(
    () => [
      {
        title: "Boundary badge roll call",
        desc: "Every badge is counted and logged before the room opens.",
      },
      {
        title: "Minute-by-minute notes",
        desc: "Hosts keep a gentle ledger so no one has to remember everything.",
      },
      {
        title: "Exit acknowledgements",
        desc: "Quiet confirmations that someone left on their own terms.",
      },
      {
        title: "Consent reset stamp",
        desc: "Applied whenever the track or noise level shifts.",
      },
    ],
    [],
  );

  // Rituals define the cadence of a typical session flow.
  const rituals: Ritual[] = useMemo(
    () => [
      {
        badge: "Step 01",
        title: "Arrival check-in",
        desc: "Name your focus for the night, then immediately betray it with charm.",
        cue: "5 minutes",
      },
      {
        badge: "Step 02",
        title: "Collaborative drift",
        desc: "Work in loose clusters, swap notes, and decide who gets to be “the scribe.”",
        cue: "45–90 minutes",
      },
      {
        badge: "Step 03",
        title: "Exit ritual",
        desc: "Confirm boundaries, close the loop, and commit to at least one task tomorrow.",
        cue: "10 minutes",
      },
    ],
    [],
  );

  // Studio kit items highlight what we provide to keep sessions intentional.
  const studioKit: StudioKitItem[] = useMemo(
    () => [
      {
        title: "Syllabus cards",
        desc: "Prompt decks that turn “study” into structured flirtation with focus.",
      },
      {
        title: "Boundary badges",
        desc: "Wearable cues for “chat,” “quiet,” or “please don’t interrupt.”",
      },
      {
        title: "Note relay",
        desc: "Shared notebooks so everyone leaves with receipts, not just vibes.",
      },
      {
        title: "Soft timer",
        desc: "Non-judgmental bells that nudge without killing the mood.",
      },
    ],
    [],
  );

  // Library items are the faux-archived resources referenced across the site.
  const libraryItems: LibraryItem[] = useMemo(
    () => [
      {
        title: "Peer Review Field Manual",
        desc: "A pocket guide to giving feedback without puncturing the vibe.",
        format: "Pocket booklet",
        shelf: "STACK B-2",
      },
      {
        title: "Distraction Engineering Lab Notes",
        desc: "Annotated notes from the capstone sessions, redacted for decency.",
        format: "Spiral notebook",
        shelf: "STACK C-7",
      },
      {
        title: "Boundary Badge Legend",
        desc: "The cheat sheet that keeps signals consistent across rooms.",
        format: "Laminated card",
        shelf: "STACK A-1",
      },
      {
        title: "Consent Reset Templates",
        desc: "Reusable scripts for recalibrating the room in under 30 seconds.",
        format: "Index set",
        shelf: "STACK D-4",
      },
    ],
    [],
  );

  const sessionFormats: SessionFormat[] = useMemo(
    () => [
      {
        title: "Whisper Lab",
        desc: "Low volume, high tension. Ideal for micro-deadlines and macro daydreaming.",
        duration: "45 min",
        intensity: "Soft focus",
        seats: "6 seats",
      },
      {
        title: "Studio Critique",
        desc: "Your work, their feedback, everyone’s eyebrow expressions.",
        duration: "90 min",
        intensity: "Peer pressure",
        seats: "8 seats",
      },
      {
        title: "After Hours Salon",
        desc: "Late-night co-working with a permissive attitude toward tangents.",
        duration: "2 hours",
        intensity: "Suggestive",
        seats: "10 seats",
      },
    ],
    [],
  );

  const bulletinItems: BulletinItem[] = useMemo(
    () => [
      {
        label: "Open desk",
        detail: "Lab B, 8:30 PM check-in",
        tag: "Quiet Focus",
      },
      {
        label: "Signal up",
        detail: "Silent badge active for first 20 minutes",
        tag: "Low chatter",
      },
      {
        label: "Host shift",
        detail: "Mira + Jun on duty",
        tag: "Reset window open",
      },
    ],
    [],
  );

  const forecastSlots: ForecastSlot[] = useMemo(
    () => [
      {
        label: "Tonight",
        title: "Open desk: quiet focus",
        desc: "Deep work, low chatter, and a host keeping signals clear.",
        time: "8:30 PM check-in",
        room: "Lab B",
        signal: "Silent",
      },
      {
        label: "Weekend",
        title: "Shared draft studio",
        desc: "Bring a draft, trade margins, and keep feedback soft.",
        time: "Saturday 4:00 PM",
        room: "Studio C",
        signal: "Check-in",
      },
      {
        label: "After hours",
        title: "Chemistry lab",
        desc: "Loose collaboration with clear exits and a calm reset kit.",
        time: "Friday 10:30 PM",
        room: "Annex 2",
        signal: "Open",
      },
    ],
    [],
  );

  const forecastNotes: ForecastNote[] = useMemo(
    () => [
      {
        title: "Signals updated",
        desc: "Hosts restate the active badge every 20 minutes.",
      },
      {
        title: "Tone checks",
        desc: "Tracks can shift mid-session if the room spikes.",
      },
      {
        title: "Weekly reset",
        desc: "Forecast board clears Monday at 9:00 AM, local time.",
      },
    ],
    [],
  );

  const forecastRadar: ForecastRadar[] = useMemo(
    () => [
      {
        day: "Mon",
        window: "9:00 PM",
        host: "Mira",
        signal: "Silent",
        seats: "2 seats",
      },
      {
        day: "Wed",
        window: "7:30 PM",
        host: "Alex",
        signal: "Check-in",
        seats: "3 seats",
      },
      {
        day: "Fri",
        window: "10:30 PM",
        host: "Jun",
        signal: "Open",
        seats: "4 seats",
      },
      {
        day: "Sat",
        window: "4:00 PM",
        host: "Mira + Alex",
        signal: "Check-in",
        seats: "2 seats",
      },
    ],
    [],
  );

  const continuityBeats: ContinuityBeat[] = useMemo(
    () => [
      {
        badge: "Thread 01",
        title: "Arrival pulse",
        desc: "A quick sync to name focus, boundaries, and the first active signal.",
        signal: "Check-in",
        timing: "2 minutes",
      },
      {
        badge: "Thread 02",
        title: "Mid-session drift",
        desc: "Scribes rotate, notes circulate, and the room resets without breaking flow.",
        signal: "Silent",
        timing: "Every 20 minutes",
      },
      {
        badge: "Thread 03",
        title: "Soft exit",
        desc: "Departures stay calm and acknowledged; the room keeps the tone intact.",
        signal: "Exit",
        timing: "Final 10 minutes",
      },
    ],
    [],
  );

  const wayfindingBeats: WayfindingBeat[] = useMemo(
    () => [
      {
        tag: "Arrival",
        title: "Front desk",
        desc: "Check in with one sentence and pick your first signal badge.",
        cue: "2-minute sync",
      },
      {
        tag: "Midpoint",
        title: "Signal board",
        desc: "Confirm the active cue, rotate notes, and reset the room tone.",
        cue: "Every 20 minutes",
      },
      {
        tag: "Exit",
        title: "Soft off-ramp",
        desc: "Leave a brief receipt so the next room stays aligned.",
        cue: "Final 10 minutes",
      },
    ],
    [],
  );

  const roomZones: RoomZone[] = useMemo(
    () => [
      {
        name: "Quiet alcove",
        desc: "Low conversation, deep focus, plenty of side-eye-free space.",
        etiquette: "Headphones allowed. Requests handled via notes.",
        light: "Soft amber lamps",
      },
      {
        name: "Shared table",
        desc: "Collaborative zone for live edits, quick questions, and gentle critique.",
        etiquette: "Ask before you interrupt. Keep voices at room level.",
        light: "Warm overhead glow",
      },
      {
        name: "Window bench",
        desc: "Casual decompression for micro breaks and low-stakes chats.",
        etiquette: "Short stays only. Keep exits clear.",
        light: "Natural spill + candles",
      },
      {
        name: "Host desk",
        desc: "Check-ins, signal resets, and boundary reminders.",
        etiquette: "Flag a host with a badge, not a shout.",
        light: "Desk lamp + signal board",
      },
    ],
    [],
  );

  const roomLegend: RoomLegendItem[] = useMemo(
    () => [
      {
        label: "Quiet Focus",
        detail: "Low noise, long stretches, minimal interruptions.",
        color: "rgba(14,116,144,0.16)",
      },
      {
        label: "Shared Draft",
        detail: "Light critique, collaborative edits, clear consent cues.",
        color: "rgba(201,81,49,0.18)",
      },
      {
        label: "Reset Window",
        detail: "Host-led pause when the room needs a breath.",
        color: "rgba(28,38,40,0.12)",
      },
    ],
    [],
  );

  const roomTransfers: RoomTransfer[] = useMemo(
    () => [
      {
        step: "Badge first",
        detail: "Tap your boundary badge so the room sees you moving.",
      },
      {
        step: "Host nod",
        detail: "Make eye contact with a host before switching zones.",
      },
      {
        step: "Soft handoff",
        detail: "Leave one note behind so your partner knows you shifted.",
      },
    ],
    [],
  );

  const signalBoardItems: SignalBoardItem[] = useMemo(
    () => [
      {
        label: "Arrival window",
        detail: "Hosts confirm names, track badges, and focus goals.",
        cadence: "First 10 minutes",
      },
      {
        label: "Signal scan",
        detail: "Room checks the active badge and confirms consent.",
        cadence: "Every 20 minutes",
      },
      {
        label: "Note relay",
        detail: "Scribe rotates, notes migrate, attention resets.",
        cadence: "Mid-session",
      },
      {
        label: "Exit sweep",
        detail: "Quiet nods, boundary reminders, graceful departures.",
        cadence: "Final 10 minutes",
      },
    ],
    [],
  );

  // Matching tracks describe how we place applicants into rooms with clear tone cues.
  const vibeTracks: VibeTrack[] = useMemo(
    () => [
      {
        name: "Quiet Focus",
        tone: "Low noise, high boundaries.",
        capacity: "6 seats",
        rule: "Whispers only. Notes stay private.",
        signal: "Boundary badge: " + "Silent",
      },
      {
        name: "Shared Draft",
        tone: "Mid-volume, collaborative critique.",
        capacity: "8 seats",
        rule: "Ask before interrupting the flow.",
        signal: "Boundary badge: " + "Check-in",
      },
      {
        name: "After Hours",
        tone: "Playful, permissive, consent-forward.",
        capacity: "10 seats",
        rule: "Exit early if the vibe shifts.",
        signal: "Boundary badge: " + "Open",
      },
    ],
    [],
  );
  const trackPreview =
    track === "Any track"
      ? {
          name: "Any track",
          tone: "We will match you to the first opening across all rooms.",
          capacity: "Next open seat",
          rule: "Boundaries are confirmed when we send your invite.",
          signal: "Signal badge assigned after intake.",
        }
      : vibeTracks.find((entry) => entry.name === track);
  const trackPulseMap: Record<string, TrackPulse> = useMemo(
    () => ({
      "Any track": {
        window: "Rolling intake",
        host: "Lead host on call",
        seats: "2–4 seats opening",
        cue: "We place you in the first open room.",
      },
      "Quiet Focus": {
        window: "Tonight 8:30 PM",
        host: "Mira + Jun",
        seats: "2 seats left",
        cue: "Silent badge confirmed at check-in.",
      },
      "Shared Draft": {
        window: "Saturday 4:00 PM",
        host: "Alex",
        seats: "3 seats left",
        cue: "Bring one draft + one question.",
      },
      "After Hours": {
        window: "Friday 10:30 PM",
        host: "Jun",
        seats: "4 seats left",
        cue: "Open badge if everyone opts in.",
      },
    }),
    [],
  );
  const activeTrackPulse =
    trackPulseMap[track] ?? trackPulseMap["Any track"]!;

  // Signal codes make the room expectations explicit before anyone arrives.
  const signalCodes = useMemo(
    () => ["Silent", "Check-in", "Open", "Pause", "Exit"],
    [],
  );

  const signalProfiles: SignalProfile[] = useMemo(
    () => [
      {
        code: "Silent",
        headline: "Keep it quiet and focused.",
        desc: "Minimal chatter, minimal eye contact. Think library rules with softer lighting.",
        hostMove: "Host lowers the room volume and tags a scribe.",
        response: "Everyone agrees to whisper-only mode for 20 minutes.",
      },
      {
        code: "Check-in",
        headline: "Light collaboration allowed.",
        desc: "Questions are welcome, but you ask before you interrupt.",
        hostMove: "Host opens a two-minute sync and resets the task list.",
        response: "Pairs do quick status swaps, then return to work.",
      },
      {
        code: "Open",
        headline: "Playful, permissive energy.",
        desc: "Conversation can roam as long as boundaries stay explicit.",
        hostMove: "Host confirms exit options and re-states the consent rules.",
        response: "The room relaxes; jokes stay respectful.",
      },
      {
        code: "Pause",
        headline: "We need to recalibrate.",
        desc: "Someone needs space, silence, or a vibe check.",
        hostMove: "Host stops the flow and asks for a reset signal.",
        response: "All devices down. One-minute quiet reset.",
      },
      {
        code: "Exit",
        headline: "Step out with zero friction.",
        desc: "Leaving is never a disruption; it is part of the protocol.",
        hostMove: "Host offers a quick nod and clears the path.",
        response: "No questions asked. The room continues calmly.",
      },
    ],
    [],
  );

  const signalStudioCues: StudioCue[] = useMemo(
    () => [
      {
        tag: "Warm open",
        title: "Badge sync",
        desc: "Hosts restate the signal, then pass a single sentence around the table.",
        timing: "First 4 minutes",
      },
      {
        tag: "Mid-session",
        title: "Quiet reset",
        desc: "Devices face down, breaths reset, and the active cue is confirmed.",
        timing: "Every 20 minutes",
      },
      {
        tag: "Late glide",
        title: "Soft exit",
        desc: "The host keeps a clear lane for exits without breaking the focus mood.",
        timing: "Final 10 minutes",
      },
    ],
    [],
  );

  const signalStudioScripts: StudioScript[] = useMemo(
    () => [
      {
        title: "Host opener",
        line: "“Signal check: we’re in Silent. Tap in with one word, then we work.”",
        note: "Keeps tone aligned without dragging the room into a meeting.",
      },
      {
        title: "Reset call",
        line: "“Pause badge is up. We reset for 60 seconds, then resume.”",
        note: "Announces consent and time-boxes the reset to reduce friction.",
      },
      {
        title: "Exit lane",
        line: "“If you need to step out, take the west lane. No questions.”",
        note: "Normalizes exits without spotlighting the person leaving.",
      },
    ],
    [],
  );

  const calibrationProfiles: CalibrationProfile[] = useMemo(
    () => [
      {
        level: 1,
        label: "Low",
        desc: "You want quiet accountability, minimal chatter, and a soft reset.",
        track: "Quiet Focus",
        signal: "Silent",
        hostMove: "Host checks in via note card only.",
        duration: "45–60 minutes",
      },
      {
        level: 2,
        label: "Measured",
        desc: "You want a few check-ins without losing the flow.",
        track: "Quiet Focus",
        signal: "Check-in",
        hostMove: "Host schedules two-minute status swaps.",
        duration: "60–75 minutes",
      },
      {
        level: 3,
        label: "Balanced",
        desc: "You want a mix of solo focus and short bursts of critique.",
        track: "Shared Draft",
        signal: "Check-in",
        hostMove: "Host rotates the scribe every 20 minutes.",
        duration: "75–90 minutes",
      },
      {
        level: 4,
        label: "Playful",
        desc: "You want loose collaboration and a permissive energy.",
        track: "After Hours",
        signal: "Open",
        hostMove: "Host opens a consent refresh before breaks.",
        duration: "90–110 minutes",
      },
      {
        level: 5,
        label: "Open",
        desc: "You want full flexibility, social momentum, and easy exits.",
        track: "After Hours",
        signal: "Open",
        hostMove: "Host keeps exits visible and invites resets.",
        duration: "110–120 minutes",
      },
    ],
    [],
  );

  const resetSteps: ResetStep[] = useMemo(
    () => [
      {
        badge: "Reset 01",
        title: "Raise the Pause badge",
        desc: "Anyone can trigger a reset. The host pauses the room and gets every screen face-down.",
        cue: "30 seconds",
      },
      {
        badge: "Reset 02",
        title: "Re-state the boundary",
        desc: "We name the active signal, the noise level, and any new limits. Opt-in only.",
        cue: "2 minutes",
      },
      {
        badge: "Reset 03",
        title: "Commit or exit",
        desc: "Each person chooses: rejoin, shift tracks, or take a graceful exit.",
        cue: "5 minutes",
      },
      {
        badge: "Reset 04",
        title: "Log the shift",
        desc: "Hosts mark the reset so the next session learns from the moment.",
        cue: "1 minute",
      },
    ],
    [],
  );

  const resetTools: ResetTool[] = useMemo(
    () => [
      {
        title: "Signal script cards",
        desc: "Short phrases the host reads so nobody has to improvise consent language.",
      },
      {
        title: "Seat shuffle tokens",
        desc: "Move to a new table without explanation when the energy changes.",
      },
      {
        title: "Exit slips",
        desc: "A quiet way to leave without interrupting the room.",
      },
    ],
    [],
  );

  const ledgerMetrics: LedgerMetric[] = useMemo(
    () => [
      {
        label: "Average focus stretch",
        value: "38 minutes",
        detail: "Tracked with soft timers, never with names.",
      },
      {
        label: "Signal confirmations",
        value: "Every 20 minutes",
        detail: "Hosts re-state the active badge out loud.",
      },
      {
        label: "Note relay swaps",
        value: "3 per session",
        detail: "Shared notes move, not the attention.",
      },
      {
        label: "Consent resets",
        value: "2 per night",
        detail: "A quick pause whenever the vibe drifts.",
      },
    ],
    [],
  );

  const ledgerProtocols: LedgerProtocol[] = useMemo(
    () => [
      {
        title: "Pre-session calibration",
        desc: "Confirm boundaries before any work begins.",
      },
      {
        title: "Mid-session pulse check",
        desc: "Hosts call for a reset if the tone shifts.",
      },
      {
        title: "Exit acknowledgements",
        desc: "Departures logged without interrogation.",
      },
    ],
    [],
  );

  const ledgerPulse = useMemo(
    () => [
      "Sunday reset: notes sealed by 10 PM.",
      "Wednesday audit: signal logs reviewed at 5 PM.",
      "Friday recap: hosts close the ledger by midnight.",
    ],
    [],
  );

  const fallbackCalibration: CalibrationProfile =
    calibrationProfiles[2] ??
    calibrationProfiles[0] ?? {
      level: 3,
      label: "Balanced",
      desc: "You want a mix of solo focus and short bursts of critique.",
      track: "Shared Draft",
      signal: "Check-in",
      hostMove: "Host rotates the scribe every 20 minutes.",
      duration: "75–90 minutes",
    };

  const activeSignalProfile =
    signalProfiles.find((profile) => profile.code === activeSignal) ??
    signalProfiles[0]!;
  const activeCalibration =
    calibrationProfiles.find((profile) => profile.level === calibrationLevel) ??
    fallbackCalibration;
  const snapshotHighlights = useMemo(
    () => [
      {
        key: "forecast",
        label: "Forecast",
        title: "Board reset window",
        desc: `Next reset ${nextResetLabel}.`,
        meta: `${localDayLabel} • ${localTimeLabel}`,
      },
      {
        key: "signal",
        label: "Active signal",
        title: activeSignal,
        desc: activeSignalProfile.headline,
        meta: activeSignalProfile.hostMove,
      },
      {
        key: "programs",
        label: "Programs",
        title: "Catalog picks",
        desc: programs
          .slice(0, 2)
          .map((program) => program.title)
          .join(" • "),
        meta: programs
          .slice(0, 2)
          .map((program) => program.code)
          .join(" · "),
      },
      {
        key: "outcomes",
        label: "Outcomes",
        title: "Room rhythm",
        desc: outcomeMetrics
          .slice(0, 2)
          .map((metric) => `${metric.value} ${metric.label}`)
          .join(" • "),
        meta: "Measured per session, not per person.",
      },
      {
        key: "matching",
        label: "Matching",
        title: activeTrackPulse.window,
        desc: activeTrackPulse.cue,
        meta: `${activeTrackPulse.host} • ${activeTrackPulse.seats}`,
      },
      {
        key: "apply",
        label: "Intake",
        title: "Reserve with intent",
        desc: "Short intake, fast response, clear boundaries.",
        meta: "Typical confirmation within 48 hours.",
      },
    ],
    [
      activeSignal,
      activeSignalProfile.headline,
      activeSignalProfile.hostMove,
      activeTrackPulse.cue,
      activeTrackPulse.host,
      activeTrackPulse.seats,
      activeTrackPulse.window,
      localDayLabel,
      localTimeLabel,
      nextResetLabel,
      outcomeMetrics,
      programs,
    ],
  );
  const snapshotCompact = snapshotHighlights.slice(0, 3);
  const snapshotBriefTiles: SnapshotTile[] = useMemo(
    () => [
      {
        label: "Focus mix",
        value: outcomeMetrics
          .slice(0, 2)
          .map((metric) => `${metric.value} ${metric.label}`)
          .join(" • "),
        detail: "Measured per session, not per person.",
      },
      {
        label: "Room match",
        value: activeTrackPulse.window,
        detail: activeTrackPulse.cue,
      },
      {
        label: "Intake",
        value: "Reserve with intent",
        detail: "Short intake, reply within 48 hours.",
      },
    ],
    [
      activeTrackPulse.cue,
      activeTrackPulse.window,
      outcomeMetrics,
    ],
  );
  const snapshotRunway: SnapshotTile[] = useMemo(
    () => [
      {
        label: "Host cue",
        value: activeSignalProfile.headline,
        detail: activeSignalProfile.hostMove,
      },
      {
        label: "Next module",
        value: programs[0]?.title ?? "Group Dynamics",
        detail: programs[0]?.code ?? "GS-101",
      },
      {
        label: "Archive sync",
        value: "Summary compiled",
        detail: "Within 12 hours",
      },
    ],
    [
      activeSignalProfile.headline,
      activeSignalProfile.hostMove,
      programs,
    ],
  );
  const snapshotRail = useMemo(
    () => [...snapshotBriefTiles, ...snapshotRunway],
    [snapshotBriefTiles, snapshotRunway],
  );
  const snapshotPulse = useMemo(
    () => [
      {
        label: "Room tone",
        value: activeSignal,
        detail: activeSignalProfile.headline,
        meta: "Now",
      },
      {
        label: "Open seats",
        value: activeTrackPulse.seats,
        detail: activeTrackPulse.cue,
        meta: activeTrackPulse.window,
      },
      {
        label: "Focus ratio",
        value: outcomeMetrics
          .slice(0, 1)
          .map((metric) => `${metric.value} ${metric.label}`)
          .join(" "),
        detail: "Rolling 6-session readout.",
        meta: "Updated today",
      },
      {
        label: "Next ritual",
        value: "Signal reset",
        detail: `Reset cue ${nextResetLabel}.`,
        meta: "Board update",
      },
      {
        label: "Next module",
        value: programs[0]?.title ?? "Group Dynamics",
        detail: "Preview track before the next room opens.",
        meta: programs[0]?.code ?? "GS-101",
      },
      {
        label: "Archive sync",
        value: "Summary compiled",
        detail: "Scribe update within 12 hours.",
        meta: "Post-session",
      },
    ],
    [
      activeSignal,
      activeSignalProfile.headline,
      activeTrackPulse.cue,
      activeTrackPulse.seats,
      activeTrackPulse.window,
      nextResetLabel,
      outcomeMetrics,
      programs,
    ],
  );
  const snapshotStrip = useMemo(
    () => [
      {
        label: "Room tone",
        value: activeSignal,
        detail: activeSignalProfile.headline,
      },
      {
        label: "Open seats",
        value: activeTrackPulse.seats,
        detail: activeTrackPulse.window,
      },
      {
        label: "Next ritual",
        value: "Signal reset",
        detail: nextResetLabel,
      },
    ],
    [
      activeSignal,
      activeSignalProfile.headline,
      activeTrackPulse.seats,
      activeTrackPulse.window,
      nextResetLabel,
    ],
  );
  const snapshotCadence: SnapshotTile[] = useMemo(
    () => [
      {
        label: "Cadence",
        value: `Live ${localDayLabel}`,
        detail: `Next reset ${nextResetLabel}`,
      },
      {
        label: "Session",
        value: activeCalibration.duration,
        detail: activeCalibration.signal,
      },
      {
        label: "Response",
        value: "48h loop",
        detail: "Hosts reply within 48 hours.",
      },
    ],
    [activeCalibration.duration, activeCalibration.signal, localDayLabel, nextResetLabel],
  );

  // Admissions steps clarify the application journey without breaking the satire.
  const applicationSteps: ApplicationStep[] = useMemo(
    () => [
      {
        badge: "Step 01",
        title: "Signal intent",
        desc: "Share your email and preferred session vibe. No long essays.",
        timing: "Same day",
      },
      {
        badge: "Step 02",
        title: "Boundary fit",
        desc: "We match you with a room that respects your focus tolerance.",
        timing: "24–48 hours",
      },
      {
        badge: "Step 03",
        title: "Confirmation",
        desc: "You get a code, a host, and a reminder to bring a notebook.",
        timing: "By Friday",
      },
    ],
    [],
  );

  const invitePacketItems: InvitePacketItem[] = useMemo(
    () => [
      {
        badge: "Item 01",
        title: "Seat confirmation",
        desc: "A short note with your host, room zone, and the first active signal.",
        meta: "Delivered within 48 hours",
      },
      {
        badge: "Item 02",
        title: "Signal badge",
        desc: "A visible cue for your track so the room reads your boundaries instantly.",
        meta: "Collected at check-in",
      },
      {
        badge: "Item 03",
        title: "Note relay kit",
        desc: "Shared notebook and soft timer for respectful collaboration.",
        meta: "Issued on arrival",
      },
    ],
    [],
  );

  const inviteMemos: InviteMemo[] = useMemo(
    () => [
      {
        title: "Pre-session prep",
        desc: "Pick one focus goal and one flexible task. We’ll help you keep both honest.",
        timing: "Before doors open",
      },
      {
        title: "Arrival briefing",
        desc: "Hosts restate the active signal and confirm consent expectations.",
        timing: "First 5 minutes",
      },
      {
        title: "Exit receipt",
        desc: "Leave with a calm summary so your next session starts aligned.",
        timing: "Within 12 hours",
      },
    ],
    [],
  );

  const readinessModules: ReadinessModule[] = useMemo(
    () => [
      {
        badge: "Module 01",
        title: "Focus primer",
        desc: "Bring one specific task and one playful stretch goal so the room can pace you.",
        cue: "2-minute share",
      },
      {
        badge: "Module 02",
        title: "Boundary card",
        desc: "Choose a color band (green/yellow/red) so partners read your comfort instantly.",
        cue: "Visible all session",
      },
      {
        badge: "Module 03",
        title: "Signal rehearsal",
        desc: "Practice the pause and pivot signals before the room warms up.",
        cue: "30-second drill",
      },
    ],
    [],
  );

  const readinessBriefs: ReadinessBrief[] = useMemo(
    () => [
      {
        title: "Host walkthrough",
        desc: "The host restates the active signal and checks for consent alignment.",
        timing: "At check-in",
      },
      {
        title: "Desk reset",
        desc: "Hydrate, stretch, and swap notebooks to keep energy honest.",
        timing: "Mid-session",
      },
      {
        title: "Exit handoff",
        desc: "Leave a short note for the next room so expectations stay clear.",
        timing: "Post-session",
      },
    ],
    [],
  );

  const studioHours: StudioHour[] = useMemo(
    () => [
      {
        day: "Monday",
        time: "7:00–9:00 PM",
        note: "Warm-up circle + soft critique.",
      },
      {
        day: "Wednesday",
        time: "6:30–8:00 PM",
        note: "Focus optional. Boundaries enforced.",
      },
      {
        day: "Friday",
        time: "8:00–10:30 PM",
        note: "Distraction engineering practicum.",
      },
    ],
    [],
  );

  // Hosts anchor the tone and keep each room aligned with the Honor Code.
  const hosts: Host[] = useMemo(
    () => [
      {
        name: "Dr. Mira Patel",
        title: "Lead Moderator",
        focus: "Boundary-setting + gentle accountability.",
        availability: "Mon + Wed",
        note: "Known for the “two-minute debrief” rule.",
      },
      {
        name: "Alex Ruiz",
        title: "Studio Wrangler",
        focus: "Group flow + note relay.",
        availability: "Wed + Fri",
        note: "Brings the soft timers and the hard questions.",
      },
      {
        name: "Jun Park",
        title: "After Hours Host",
        focus: "Late-night focus rituals.",
        availability: "Fri",
        note: "Keeps the vibe playful, the exits clear.",
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

  // Debrief prompts help teams close sessions with clarity and care.
  const debriefPrompts: DebriefPrompt[] = useMemo(
    () => [
      {
        title: "Boundary recap",
        desc: "Name one moment you felt supported and one moment you want adjusted.",
        cue: "2 minutes",
      },
      {
        title: "Focus receipt",
        desc: "List the work that moved forward, even if it was tiny.",
        cue: "3 minutes",
      },
      {
        title: "Future signal",
        desc: "Decide which badge you want to start with next time.",
        cue: "1 minute",
      },
    ],
    [],
  );

  const debriefFollowUps: DebriefFollowUp[] = useMemo(
    () => [
      {
        title: "Next-day check-in",
        detail: "Hosts send a short pulse asking how the focus held overnight.",
        timeframe: "Next morning",
      },
      {
        title: "Note relay summary",
        detail: "Scribes compile a clean summary so no one has to remember everything.",
        timeframe: "Within 12 hours",
      },
      {
        title: "Boundary refresh",
        detail: "Room-level adjustments are logged before the next session opens.",
        timeframe: "Before doors open",
      },
    ],
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    setLocalTime(new Date());
    const timer = window.setInterval(() => {
      setLocalTime(new Date());
    }, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const snapshotParam = params.has("snapshot") || params.has("automation");
    const ua = navigator.userAgent;
    const uaAutomation =
      navigator.webdriver === true ||
      /HeadlessChrome|Playwright/i.test(ua) ||
      /Chrome\/\d+\.0\.0\.0/.test(ua);
    const flagged = document.documentElement.dataset.automation === "true";
    setAutomationMode(snapshotParam || uaAutomation || flagged);
  }, []);

  const shouldBypassMotion = reduced || automationMode;
  const shouldEnableAutomationLayout = automationMode;
  const snapshotRailView = shouldEnableAutomationLayout
    ? snapshotRail.slice(0, 4)
    : snapshotRail;
  const snapshotPulseView = shouldEnableAutomationLayout
    ? snapshotPulse.slice(0, 4)
    : snapshotPulse;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = sectionIndex
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sectionIndex]);

  useLayoutEffect(() => {
    if (!shouldEnableAutomationLayout || typeof document === "undefined") return;
    document.documentElement.dataset.automation = "true";
    return () => {
      if (document.documentElement.dataset.automation === "true") {
        delete document.documentElement.dataset.automation;
      }
    };
  }, [shouldEnableAutomationLayout]);

  useLayoutEffect(() => {
    if (!shouldBypassMotion || !rootRef.current) return;
    const nodes = rootRef.current.querySelectorAll<HTMLElement>(
      "[data-animate='section'], [data-animate='stagger'], [data-hero-line], [data-hero-nav], [data-hero-surface]",
    );
    nodes.forEach((node) => {
      node.style.opacity = "1";
      node.style.transform = "none";
      node.style.willChange = "auto";
    });
  }, [shouldBypassMotion]);

  useLayoutEffect(() => {
    if (shouldBypassMotion) return;
    if (!rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(
          q("[data-hero-nav]"),
          { y: -10 },
          { y: 0, duration: 0.5 },
        )
        .fromTo(
          q("[data-hero-surface]"),
          { y: 26, scale: 0.985 },
          { y: 0, scale: 1, duration: 0.85 },
          0.1,
        )
        .fromTo(
          q("[data-hero-line]"),
          { y: 14 },
          { y: 0, duration: 0.65, stagger: 0.08 },
          0.18,
        );

      gsap.utils.toArray<HTMLElement>(q("[data-animate='section']")).forEach(
        (el) => {
          gsap.fromTo(
            el,
            { y: 18, immediateRender: false },
            {
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                once: true,
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
            { y: 12, immediateRender: false },
            {
              y: 0,
              duration: 0.62,
              stagger: 0.07,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                once: true,
              },
            },
          );
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [shouldBypassMotion]);

  return (
    <div
      ref={rootRef}
      className={`relative min-h-screen overflow-x-clip bg-[radial-gradient(1200px_500px_at_0%_0%,rgba(243,117,78,0.15),transparent_62%),radial-gradient(900px_420px_at_90%_8%,rgba(14,116,144,0.14),transparent_58%),linear-gradient(180deg,#f8f2e8_0%,#fbf8f2_46%,#f4efe3_100%)] text-[color:var(--gs-ink)] ${
        shouldBypassMotion ? "gs-bypass-motion" : ""
      }`}
    >
      <div className="gs-snapshot-fixed pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(28,38,40,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,38,40,0.14)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(255,255,255,0.45),transparent_38%)]" />

      <aside
        data-automation-hide
        className="gs-snapshot-fixed pointer-events-none fixed bottom-6 right-6 z-20 hidden xl:block"
      >
        <div className="pointer-events-auto w-64 rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-4 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)] backdrop-blur">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
            <span>Field guide</span>
            <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2 py-1 text-[10px] tracking-[0.2em] text-[color:var(--gs-ink)]">
              {activeIndex + 1}/{sectionIndex.length}
            </span>
          </div>
          <div className="mt-3 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-3 py-2 text-xs font-semibold text-[color:var(--gs-ink)]">
            Active: {activeLabel}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
            <span>Progress</span>
            <span className="font-mono text-[color:var(--gs-ink)]">{progressPercent}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-[color:var(--gs-ink-soft)]/40">
            <div
              className="h-full rounded-full bg-[color:var(--gs-accent)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="mt-4 grid gap-2">
            {sectionIndex.map((section) => {
              const isActive = section.id === activeSection;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center justify-between rounded-full border px-3 py-2 text-xs font-semibold transition ${
                    isActive
                      ? "border-[color:var(--gs-accent)] bg-[color:var(--gs-accent)]/15 text-[color:var(--gs-ink)]"
                      : "border-transparent text-[color:var(--gs-muted)] hover:border-[color:var(--gs-ink-soft)] hover:bg-white"
                  }`}
                >
                  <span>{section.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                    {section.tag}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      <a
        href="#main-content"
        className="absolute left-6 top-4 z-30 rounded-full bg-[color:var(--gs-ink)] px-4 py-2 text-xs font-bold text-white shadow-sm opacity-0 transition focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
      >
        Skip to content
      </a>

      <header className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-6 md:px-8 md:pt-8">
        <nav
          data-hero-nav
          className="gs-snapshot-sticky sticky top-4 z-20 flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/85 px-4 py-3 backdrop-blur md:px-5"
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

          <div
            data-automation-hide
            className="hidden items-center gap-5 text-sm font-bold text-[color:var(--gs-muted)] md:flex"
          >
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#wayfinding">
              Wayfinding
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#principles">
              Principles
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#programs">
              Programs
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#library">
              Library
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#rituals">
              Rituals
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#testimonials"
            >
              Citations
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#outcomes">
              Outcomes
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#sessions"
            >
              Sessions
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#rooms">
              Rooms
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#matching"
            >
              Matching
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#calibration"
            >
              Calibration
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#reset">
              Reset
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#ledger">
              Ledger
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#decoder">
              Decoder
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#studio">
              Studio
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#admissions"
            >
              Admissions
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#packet">
              Invite packet
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#readiness"
            >
              Readiness
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#hosts">
              Hosts
            </a>
            <a className="transition hover:text-[color:var(--gs-ink)]" href="#faq">
              Conduct
            </a>
            <a
              className="transition hover:text-[color:var(--gs-ink)]"
              href="#debrief"
            >
              Debrief
            </a>
          </div>

          <details className="relative md:hidden">
            <summary className="flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gs-muted)] shadow-sm transition hover:text-[color:var(--gs-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/30">
              Menu
              <span className="text-[color:var(--gs-accent)]">+</span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/95 p-3 text-sm font-semibold text-[color:var(--gs-ink)] shadow-[0_18px_50px_-32px_rgba(28,38,40,0.9)] backdrop-blur">
              <div className="grid grid-cols-2 gap-2">
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#principles">
                  Principles
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#programs">
                  Programs
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#library">
                  Library
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#rituals">
                  Rituals
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#outcomes">
                  Outcomes
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#sessions">
                  Sessions
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#rooms">
                  Rooms
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#matching">
                  Matching
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#calibration">
                  Calibration
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#reset">
                  Reset
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#ledger">
                  Ledger
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#decoder">
                  Decoder
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#studio">
                  Studio
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#admissions">
                  Admissions
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#packet">
                  Invite packet
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#readiness">
                  Readiness
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#hosts">
                  Hosts
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#faq">
                  Conduct
                </a>
                <a className="rounded-lg px-2 py-1 transition hover:bg-white" href="#debrief">
                  Debrief
                </a>
              </div>
            </div>
          </details>

          <Link
            href="#apply"
            className="rounded-full bg-[color:var(--gs-ink)] px-4 py-2 text-sm font-bold text-white shadow-[0_16px_30px_-20px_rgba(28,38,40,0.9)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
          >
            Reserve a seat
          </Link>
        </nav>

        <section
          aria-label="Snapshot brief"
          data-automation-show="block"
          className="gs-automation-brief mt-4 hidden"
        >
          <div className="rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[linear-gradient(140deg,rgba(255,255,255,0.92),rgba(249,241,227,0.86))] p-3 shadow-[0_26px_70px_-52px_rgba(28,38,40,0.9)] md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--gs-muted)]">
              <span>Snapshot brief</span>
              <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-[10px] font-bold tracking-[0.24em] text-[color:var(--gs-ink)]">
                Automation view
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gs-muted)]">
              <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                Live {localDayLabel} • {localTimeLabel}
              </span>
              <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                Next reset {nextResetLabel}
              </span>
            </div>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {snapshotStrip.map((item) => (
                <div
                  key={`snapshot-strip-${item.label}`}
                  className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-3 py-2 shadow-[0_12px_30px_-26px_rgba(28,38,40,0.7)]"
                >
                  <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-[color:var(--gs-ink)]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[9px] leading-relaxed text-[color:var(--gs-muted)]">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-1 grid gap-2.5 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Group Scholar
                </div>
                <h1 className="mt-1.5 font-[family-name:var(--font-gs-display)] text-2xl font-semibold leading-tight text-[color:var(--gs-ink)] md:text-3xl">
                  A focused view of the room.
                </h1>
                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Compact signals, outcomes, and openings in a single frame for
                  snapshots.
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--gs-muted)]">
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                    6 principles
                  </span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                    4 programs
                  </span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                    Consent-forward
                  </span>
                </div>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-3">
                {snapshotCompact.map((item) => (
                  <div
                    key={`snapshot-${item.key}`}
                    className="gs-automation-card rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-2 shadow-[0_16px_40px_-30px_rgba(28,38,40,0.8)]"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[color:var(--gs-ink)]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-[11px] leading-relaxed text-[color:var(--gs-muted)]">
                      {item.desc}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--gs-muted)]">
                      {item.meta}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-1.5 grid gap-2 lg:grid-cols-[0.44fr_0.56fr]">
              <div className="gs-automation-rail grid gap-2 sm:grid-cols-3 lg:grid-cols-3">
                {snapshotRailView.map((tile) => (
                  <div
                    key={`snapshot-brief-${tile.label}`}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-3 py-1.5 shadow-[0_12px_30px_-26px_rgba(28,38,40,0.7)]"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                      {tile.label}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold text-[color:var(--gs-ink)]">
                      {tile.value}
                    </div>
                    <div className="mt-1 text-[9px] leading-relaxed text-[color:var(--gs-muted)]">
                      {tile.detail}
                    </div>
                  </div>
                ))}
              </div>
              <div className="gs-automation-pulse rounded-[22px] border border-[color:var(--gs-ink-soft)] bg-white/85 p-2 shadow-[0_18px_46px_-34px_rgba(28,38,40,0.72)]">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[color:var(--gs-muted)]">
                  <span>Live pulse</span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2.5 py-1 text-[9px] font-bold tracking-[0.22em] text-[color:var(--gs-ink)]">
                    Snapshot rails
                  </span>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {snapshotPulseView.map((pulse) => (
                    <div
                      key={`snapshot-pulse-${pulse.label}`}
                      className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/95 px-2 py-1"
                    >
                      <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                        {pulse.label}
                      </div>
                      <div className="mt-1 text-[11px] font-semibold text-[color:var(--gs-ink)]">
                        {pulse.value}
                      </div>
                      <div className="mt-1 text-[9px] leading-relaxed text-[color:var(--gs-muted)]">
                        {pulse.detail}
                      </div>
                      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--gs-muted)]">
                        {pulse.meta}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gs-automation-cadence mt-2 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/80 px-3 py-2 shadow-[0_14px_36px_-30px_rgba(28,38,40,0.7)]">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
                <span>Snapshot cadence</span>
                <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2 py-1 text-[9px] font-bold tracking-[0.22em] text-[color:var(--gs-ink)]">
                  Intake loop
                </span>
              </div>
              <div className="gs-automation-cadence-grid mt-2 grid gap-2 sm:grid-cols-3">
                {snapshotCadence.map((cadence) => (
                  <div
                    key={`snapshot-cadence-${cadence.label}`}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/95 px-2 py-1.5"
                  >
                    <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-[color:var(--gs-muted)]">
                      {cadence.label}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold text-[color:var(--gs-ink)]">
                      {cadence.value}
                    </div>
                    <div className="mt-1 text-[9px] leading-relaxed text-[color:var(--gs-muted)]">
                      {cadence.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          data-hero-surface
          data-automation-hide
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

              <div className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-5 shadow-[0_20px_46px_-32px_rgba(28,38,40,0.82)]">
                <div className="flex items-center justify-between gap-3 text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                  <span>STUDIO BULLETIN</span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-[11px] font-bold tracking-normal text-[color:var(--gs-muted)]">
                    Updated weekly
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  {bulletinItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-4"
                    >
                      <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                        <span className="tracking-[0.24em]">{item.label.toUpperCase()}</span>
                        <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2.5 py-1 text-[11px] font-bold text-[color:var(--gs-ink)]">
                          {item.tag}
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gs-muted)]">
                  Board resets Monday 9:00 AM
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

        <section
          aria-label="Syllabus quick index"
          data-automation-hide
          className="mt-6 md:mt-8"
        >
          <div className="rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-white/80 p-5 shadow-[0_24px_70px_-54px_rgba(28,38,40,0.85)] md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--gs-muted)]">
              <span>Quick index</span>
              <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-[10px] font-bold tracking-[0.24em] text-[color:var(--gs-ink)]">
                {sectionIndex.length} checkpoints
              </span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--gs-muted)]">
              A visible map of the next stops, designed to keep the syllabus
              readable even without scrolling.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {quickIndex.map((section) => (
                <a
                  key={`quick-${section.id}`}
                  href={`#${section.id}`}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-3 py-2 text-xs font-semibold text-[color:var(--gs-ink)] shadow-[0_12px_30px_-24px_rgba(28,38,40,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,38,40,0.75)]"
                >
                  <span>{section.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--gs-muted)]">
                    {section.tag}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[color:var(--gs-muted)]">
              <a
                href="#main-content"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-ink)] transition hover:bg-[color:var(--gs-paper)]"
              >
                Open full syllabus
              </a>
              <span>Keep this strip visible for quick jumps.</span>
            </div>
          </div>
        </section>

        <section data-automation-hide className="mt-6 md:mt-8">
          <Marquee
            items={[
              "Department of Applied Distraction",
              "Journal of Questionable Focus (JQF)",
              "Office Hours: Open",
              "Attendance: Mandatory",
              "Focus: Optional",
              "Chemistry: Off-Syllabus",
              "Peer Review: Personal",
              "Session Rituals",
              "Room Map",
              "Boundaries: Clear",
              "Library Stacks",
              "Outcome Map",
              "Signal Decoder",
              "Signal Studio",
              "Calibration Studio",
              "Reset Protocol",
              "Focus Ledger",
              "Debrief Lab",
              "Invite Packet",
              "Readiness Lab",
            ]}
          />
        </section>

        <section
          aria-label="Snapshot digest"
          data-automation-hide
          className="mt-6 md:mt-8"
        >
          <div className="rounded-[32px] border border-[color:var(--gs-ink-soft)] bg-[linear-gradient(140deg,rgba(255,255,255,0.94),rgba(249,241,227,0.86))] p-6 shadow-[0_26px_70px_-52px_rgba(28,38,40,0.9)] md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--gs-muted)]">
              <span>Snapshot digest</span>
              <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-[10px] font-bold tracking-[0.24em] text-[color:var(--gs-ink)]">
                Live report
              </span>
            </div>
            <div className="mt-4 text-pretty text-sm font-semibold text-[color:var(--gs-muted)]">
              A compact readout of the board, signals, and outcomes before you
              scroll the full syllabus.
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {snapshotHighlights.map((item) => (
                <article
                  key={item.key}
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-5 shadow-[0_18px_48px_-36px_rgba(28,38,40,0.86)]"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.26em] text-[color:var(--gs-muted)]">
                    {item.label}
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-2xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {item.desc}
                  </p>
                  <div className="mt-4 rounded-full border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                    {item.meta}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main
        id="main-content"
        data-automation-hide
        className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-10 md:px-8 md:pt-14"
      >
        <div className="gs-snapshot-sticky sticky top-24 z-20 mb-10 md:hidden">
          <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/95 px-4 py-3 shadow-[0_18px_45px_-30px_rgba(28,38,40,0.85)] backdrop-blur">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
              <span>Field guide</span>
              <span className="font-mono text-[color:var(--gs-ink)]">
                {activeIndex + 1}/{sectionIndex.length}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
              {sectionIndex.map((section) => {
                const isActive = section.id === activeSection;
                return (
                  <a
                    key={`mobile-${section.id}`}
                    href={`#${section.id}`}
                    className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold transition ${
                      isActive
                        ? "border-[color:var(--gs-accent)] bg-[color:var(--gs-accent)]/15 text-[color:var(--gs-ink)]"
                        : "border-transparent bg-white/80 text-[color:var(--gs-muted)]"
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <section id="forecast" data-animate="section" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Studio forecast"
            title="The week in soft focus."
            subtitle="A live-ish read on energy, signals, and room tone before you arrive."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
            <div
              data-animate="stagger"
              className="grid gap-4 md:grid-cols-3"
            >
              {forecastSlots.map((slot) => (
                <article
                  key={slot.label}
                  data-stagger-item
                  className="group relative overflow-hidden rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="absolute -right-10 -top-12 size-44 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(243,117,78,0.22),transparent_62%)] blur-2xl transition duration-500 group-hover:scale-105" />
                  <div className="absolute -bottom-14 -left-14 size-44 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(14,116,144,0.2),transparent_60%)] blur-2xl transition duration-500 group-hover:scale-105" />
                  <div className="relative flex items-center justify-between text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    <span>{slot.label.toUpperCase()}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2.5 py-1 text-[11px] font-bold tracking-normal text-[color:var(--gs-ink)]">
                      {slot.signal}
                    </span>
                  </div>
                  <h3 className="relative mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                    {slot.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {slot.desc}
                  </p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                      {slot.time}
                    </span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                      {slot.room}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]">
              <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                STUDIO MEMO
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                Board rules & tone
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                Forecasts keep expectations soft and exits clear. Hosts can
                shift tracks if the room asks for it.
              </p>
              <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--gs-muted)]">
                  Local time
                </div>
                <div className="mt-2 flex items-center justify-between text-sm font-semibold text-[color:var(--gs-ink)]">
                  <span>{localDayLabel}</span>
                  <span>{localTimeLabel}</span>
                </div>
                <div className="mt-2 text-xs font-bold text-[color:var(--gs-muted)]">
                  Next reset: {nextResetLabel}
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {forecastNotes.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-4"
                  >
                    <div className="text-xs font-bold tracking-[0.22em] text-[color:var(--gs-muted)]">
                      {note.title.toUpperCase()}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                      {note.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-[0.26em] text-[color:var(--gs-muted)]">
                  SIGNAL RADAR
                </div>
                <div className="mt-3 grid gap-2">
                  {forecastRadar.map((entry) => (
                    <div
                      key={`${entry.day}-${entry.window}`}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-2 text-xs font-bold text-[color:var(--gs-muted)]"
                    >
                      <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-2.5 py-1 text-[11px] text-[color:var(--gs-ink)]">
                        {entry.day}
                      </span>
                      <span>{entry.window}</span>
                      <span>{entry.host}</span>
                      <span>{entry.signal}</span>
                      <span>{entry.seats}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Board status: steady. Next recalibration on Monday at 9:00 AM.
              </div>
            </aside>
          </div>
        </section>

        <section
          data-animate="section"
          aria-label="Continuity ribbon"
          className="mt-12 md:mt-16"
        >
          <div className="rounded-[32px] border border-[color:var(--gs-ink-soft)] bg-[linear-gradient(120deg,rgba(255,255,255,0.94),rgba(249,241,227,0.86))] p-6 shadow-[0_28px_70px_-52px_rgba(28,38,40,0.85)] md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.1fr_1.9fr] md:items-start">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Continuity ribbon
                </div>
                <h3 className="font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                  A single thread from arrival to debrief.
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We keep the tone consistent even as the room shifts. These three
                  beats show how focus, consent, and exits stay aligned.
                </p>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                  Cue status: steady. Hosts announce each transition out loud.
                </div>
              </div>
              <div data-animate="stagger" className="grid gap-4 md:grid-cols-3">
                {continuityBeats.map((beat) => (
                  <article
                    key={beat.badge}
                    data-stagger-item
                    className="group relative overflow-hidden rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-5 shadow-[0_18px_48px_-36px_rgba(28,38,40,0.85)]"
                  >
                    <div className="absolute -right-10 -top-12 size-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(243,117,78,0.22),transparent_62%)] blur-2xl transition duration-500 group-hover:scale-105" />
                    <div className="relative text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                      {beat.badge}
                    </div>
                    <h4 className="relative mt-3 font-[family-name:var(--font-gs-display)] text-2xl font-semibold">
                      {beat.title}
                    </h4>
                    <p className="relative mt-2 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                      {beat.desc}
                    </p>
                    <div className="relative mt-4 flex flex-wrap gap-2 text-xs font-bold text-[color:var(--gs-muted)]">
                      <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                        {beat.signal}
                      </span>
                      <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                        {beat.timing}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="wayfinding"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Wayfinding strip"
            title="A clear path through the soft chaos."
            subtitle="Use this checkpoint to keep the room moving together, with no one guessing what comes next."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_1.9fr]">
            <div className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]">
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
                Route memo
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                Keep the next cue visible.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                Hosts call out the next waypoint so the room can settle into the
                right rhythm without breaking flow.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  {
                    label: "You are here",
                    detail: "Forecast board",
                    cue: "Check the active signal",
                  },
                  {
                    label: "Next up",
                    detail: "Mission hall",
                    cue: "Anchor the shared pact",
                  },
                  {
                    label: "Exit lane",
                    detail: "Debrief lab",
                    cue: "Leave a short receipt",
                  },
                ].map((stop) => (
                  <div
                    key={stop.label}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/70 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]"
                  >
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2.5 py-1 text-[11px] text-[color:var(--gs-ink)]">
                      {stop.label.toUpperCase()}
                    </span>
                    <span>{stop.detail}</span>
                    <span>{stop.cue}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/80 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Path status: steady. Hosts announce the next cue every 20 minutes.
              </div>
            </div>

            <div data-animate="stagger" className="grid gap-4 md:grid-cols-3">
              {wayfindingBeats.map((beat) => (
                <article
                  key={beat.tag}
                  data-stagger-item
                  className="group relative overflow-hidden rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-5 shadow-[0_18px_48px_-36px_rgba(28,38,40,0.85)]"
                >
                  <div className="absolute -right-10 -top-12 size-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(243,117,78,0.22),transparent_62%)] blur-2xl transition duration-500 group-hover:scale-105" />
                  <div className="relative text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                    {beat.tag}
                  </div>
                  <h4 className="relative mt-3 font-[family-name:var(--font-gs-display)] text-2xl font-semibold">
                    {beat.title}
                  </h4>
                  <p className="relative mt-2 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {beat.desc}
                  </p>
                  <div className="relative mt-4 rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                    {beat.cue}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="principles"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
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
          id="library"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Library stacks"
            title="Artifacts from the archive, checked out nightly."
            subtitle="Pull a resource, skim the footnotes, and return it with the vibe intact."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="grid gap-4">
              {libraryItems.map((item) => (
                <article
                  key={item.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">CATALOG</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {item.shelf}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {item.desc}
                  </p>
                  <div className="mt-4 text-xs font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                    Format:{" "}
                    <span className="normal-case text-[color:var(--gs-ink)]">
                      {item.format}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Checkout desk
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Borrow with boundaries.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Each artifact ships with a reminder: keep the notes gentle, keep the
                  signals visible, and return anything that feels too charged.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Loan window: one session only.",
                  "No copies, no screenshots, no gossip.",
                  "Return items in the tone they arrived.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Archive status: supervised access only.
              </div>
            </aside>
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

        <section
          id="outcomes"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Outcome map"
            title="Proof of play, not promises."
            subtitle="We track group rhythm and follow-up care so the room feels safer every week."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomeMetrics.map((metric) => (
                <article
                  key={metric.label}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    {metric.tag}
                  </div>
                  <div className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-[color:var(--gs-ink)]">
                    {metric.label}
                  </div>
                  <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/85 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    {metric.desc}
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Outcome brief
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  What we report back to the room.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Metrics are used to tune sessions, not to score participants.
                  Hosts read the pulse, then adjust the next ritual.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {outcomeNotes.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {note.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {note.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Next review: Monday at 9:00 AM, local time.
              </div>
            </aside>
          </div>
        </section>

        <section
          id="relay"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Signal relay"
            title="Pass the cue forward."
            subtitle="A short handoff so the next chapters land without jolting the room."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid gap-4 md:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {relayCheckpoints.map((checkpoint) => (
                <article
                  key={checkpoint.title}
                  data-stagger-item
                  className="relative overflow-hidden rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="absolute -right-10 -top-12 size-36 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(243,117,78,0.18),transparent_62%)] blur-2xl" />
                  <div className="absolute -bottom-12 -left-12 size-36 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(14,116,144,0.18),transparent_62%)] blur-2xl" />
                  <div className="relative flex items-center justify-between text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    <span>{checkpoint.label.toUpperCase()}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2.5 py-1 text-[11px] font-bold tracking-normal text-[color:var(--gs-ink)]">
                      {checkpoint.signal}
                    </span>
                  </div>
                  <h3 className="relative mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                    {checkpoint.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {checkpoint.desc}
                  </p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                      {checkpoint.cue}
                    </span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                      Cue: {checkpoint.signal}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/92 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div className="absolute -right-12 -top-14 size-60 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(243,117,78,0.16),transparent_66%)] blur-2xl" />
              <div className="absolute -bottom-16 -left-12 size-60 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(14,116,144,0.18),transparent_64%)] blur-2xl" />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Relay memo
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Keep the chapter handoff gentle.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We restate the cue, confirm the badge, and move forward with one
                  shared sentence.
                </p>
              </div>

              <div className="relative mt-6 grid gap-3">
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4">
                  <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    Active cue
                  </div>
                  <div className="mt-2 text-sm font-bold text-[color:var(--gs-ink)]">
                    {activeCue}
                  </div>
                  <div className="mt-2 text-xs font-bold text-[color:var(--gs-muted)]">
                    Signal badge: {activeSignal}
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4">
                  <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    Local check
                  </div>
                  <div className="mt-2 text-sm font-bold text-[color:var(--gs-ink)]">
                    {localDayLabel}, {localTimeLabel}
                  </div>
                  <div className="mt-2 text-xs font-bold text-[color:var(--gs-muted)]">
                    Hosts re-state the cue every 20 minutes.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="pulse"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Studio pulse"
            title="A mid-scroll alignment check."
            subtitle="When the story gets long, we restate the cues so the room stays kind."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid gap-4 md:grid-cols-[1.05fr_0.95fr]"
          >
            <aside
              data-stagger-item
              className="relative overflow-hidden rounded-[32px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/92 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div className="absolute -right-10 -top-12 size-56 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(243,117,78,0.18),transparent_65%)] blur-2xl" />
              <div className="absolute -bottom-16 -left-12 size-56 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(14,116,144,0.18),transparent_62%)] blur-2xl" />
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Signal window
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Read the room before you enter it.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Hosts re-state the active signal every 20 minutes. This checkpoint
                  keeps the scroll grounded in the live room tone.
                </p>
              </div>

              <div className="relative mt-6 grid gap-3">
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4">
                  <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    Active signals
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Silent", "Check-in", "Open", "Pause", "Exit"].map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                    <span>Calibration</span>
                    <span className="font-mono text-[color:var(--gs-ink)]">
                      {calibrationLevel}/5
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-[color:var(--gs-ink-soft)]/40">
                    <div
                      className="h-full rounded-full bg-[color:var(--gs-accent)]"
                      style={{ width: `${calibrationLevel * 20}%` }}
                    />
                  </div>
                  <div className="mt-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    Pulse check resets at the top of every hour.
                  </div>
                </div>
              </div>
            </aside>

            <div className="grid gap-4">
              {pulseHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{highlight.tag.toUpperCase()}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {highlight.timing}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {highlight.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Field notes showcase highlights and artifacts from recent sessions. */}
        <section
          id="field-notes"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Field notes"
            title="We log the moments between the minutes."
            subtitle="Hosts keep a soft record of what worked, what shifted, and what stayed respectful."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {fieldNotes.map((note) => (
                <article
                  key={note.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{note.badge}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {note.session}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {note.desc}
                  </p>
                  <div className="mt-4 text-xs font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                    Artifact:{" "}
                    <span className="normal-case text-[color:var(--gs-ink)]">
                      {note.artifact}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Archive shelf
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Receipts, not rumors.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We document outcomes so the room feels safe, not surveilled.
                  Notes are anonymized and reset weekly.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {archiveItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Archive refresh: every Sunday at 10 PM, local time.
              </div>
            </aside>
          </div>
        </section>

        <section
          id="rituals"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Session flow"
            title="Rituals that keep the chemistry kind."
            subtitle="Every session follows a shared cadence so the vibe stays playful and the boundaries stay crisp."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-4">
              {rituals.map((ritual) => (
                <article
                  key={ritual.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{ritual.badge}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {ritual.cue}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {ritual.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {ritual.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Studio kit
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Everything you need to keep it respectful.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We supply the prompts, signals, and gentle structure that keep
                  the room collaborative instead of chaotic.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {studioKit.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section
          id="sessions"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Studio hours"
            title="Sessions that look like study and feel like chemistry."
            subtitle="Choose a format that matches your focus tolerance, then pick a night to test it."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {sessionFormats.map((session) => (
              <article
                key={session.title}
                data-stagger-item
                className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
              >
                <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                  Format
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  {session.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  {session.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-[color:var(--gs-muted)]">
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                    {session.duration}
                  </span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                    {session.intensity}
                  </span>
                  <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                    {session.seats}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div
            data-animate="stagger"
            className="mt-8 grid grid-cols-1 gap-4 rounded-[32px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_18px_60px_-40px_rgba(28,38,40,0.75)] md:grid-cols-[1.1fr_0.9fr]"
          >
            <div data-stagger-item className="space-y-4">
              <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                Weekly roster
              </div>
              <h3 className="font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                Studio hours (local time)
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--gs-muted)]">
                Sessions are capped, lightly moderated, and closed to spectators.
                Bring a notebook; leave your assumptions.
              </p>
            </div>
            <div
              data-stagger-item
              className="grid gap-3 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-4"
            >
              {studioHours.map((slot) => (
                <div
                  key={slot.day}
                  className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex items-center justify-between text-sm font-bold text-[color:var(--gs-ink)]">
                    <span>{slot.day}</span>
                    <span className="text-xs text-[color:var(--gs-muted)]">
                      {slot.time}
                    </span>
                  </div>
                  <div className="mt-2 text-xs font-bold tracking-wide text-[color:var(--gs-muted)]">
                    {slot.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="rooms"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Room map"
            title="Every zone has a mood and a rule."
            subtitle="We design the space so you can move between quiet focus, shared drafting, and soft exits without confusion."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {roomZones.map((zone) => (
                <article
                  key={zone.name}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">ZONE</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {zone.light}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {zone.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {zone.desc}
                  </p>
                  <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    {zone.etiquette}
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Signal board
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  The cadence that keeps the room aligned.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  The board is visible from every table so nobody misses a reset.
                  We use it to announce shifts before they happen.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {signalBoardItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {item.detail}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                      {item.cadence}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-4">
                <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                  Zone handoff
                </div>
                <div className="mt-3 space-y-3">
                  {roomTransfers.map((transfer) => (
                    <div
                      key={transfer.step}
                      className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-3 py-2"
                    >
                      <div className="text-xs font-bold text-[color:var(--gs-ink)]">
                        {transfer.step}
                      </div>
                      <div className="mt-1 text-[11px] leading-relaxed text-[color:var(--gs-muted)]">
                        {transfer.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-4">
                <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                  Room legend
                </div>
                <div className="mt-3 space-y-3">
                  {roomLegend.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white px-3 py-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-[color:var(--gs-ink)]">
                        <span
                          className="inline-flex size-2.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        {item.label}
                      </div>
                      <div className="mt-2 text-[11px] leading-relaxed text-[color:var(--gs-muted)]">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Hosts update the board in ink, not in whispers.
              </div>
            </aside>
          </div>
        </section>

        {/* Matching section clarifies how we place applicants into rooms with clear tone cues. */}
        <section
          id="matching"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Vibe matching"
            title="We match you to a room, not a ranking."
            subtitle="Choose your tolerance, and we place you in a track with clear signals and consent-forward rules."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {vibeTracks.map((track) => (
                <article
                  key={track.name}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                        Track
                      </div>
                      <h3 className="mt-2 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                        {track.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                      {track.capacity}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {track.tone}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)] px-3 py-1">
                      {track.rule}
                    </span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {track.signal}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Signal codes
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Boundary cues you can read at a glance.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Every room runs on visible signals so nobody has to guess.
                  We adjust the room before asking you to adjust yourself.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {signalCodes.map((code) => (
                  <span
                    key={code}
                    className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]"
                  >
                    {code}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4 text-xs font-bold text-[color:var(--gs-muted)]">
                Hosts confirm signal changes every 20 minutes so the room stays
                consensual and on tone.
              </div>
            </aside>
          </div>
        </section>

        <section
          id="calibration"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Calibration studio"
            title="Tune the room before you arrive."
            subtitle="Slide to set your collaboration tolerance. We translate it into a track, signal, and host plan."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.05fr_0.95fr]"
          >
            <div
              data-stagger-item
              className="rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                Focus dial
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                Choose your collaboration tolerance.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                Low stays quiet. High invites more conversation. Every level keeps
                boundaries explicit.
              </p>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-5">
                <div className="flex items-center justify-between text-xs font-bold text-[color:var(--gs-muted)]">
                  <span>Silent-first</span>
                  <span>Open flow</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={calibrationLevel}
                  aria-describedby={`${calibrationHelpId} ${calibrationValueId}`}
                  onChange={(event) =>
                    setCalibrationLevel(Number(event.target.value))
                  }
                  className="mt-4 w-full accent-[color:var(--gs-accent)]"
                />
                <div className="mt-4 grid grid-cols-5 gap-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gs-muted)]">
                  {calibrationProfiles.map((profile) => (
                    <span key={profile.level}>{profile.level}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {calibrationProfiles.map((profile) => (
                  <div
                    key={profile.level}
                    className={`rounded-2xl border px-4 py-3 text-xs font-bold ${
                      profile.level === calibrationLevel
                        ? "border-[color:var(--gs-ink)] bg-white text-[color:var(--gs-ink)] shadow-sm"
                        : "border-[color:var(--gs-ink-soft)] bg-white/80 text-[color:var(--gs-muted)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="tracking-[0.24em]">LEVEL {profile.level}</span>
                      <span className="uppercase tracking-[0.2em]">
                        {profile.label}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p
                id={calibrationHelpId}
                className="mt-4 text-xs font-bold tracking-wide text-[color:var(--gs-muted)]"
              >
                Your calibration sets the host plan and recommended track.
              </p>
            </div>

            <article
              data-stagger-item
              className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                <span className="tracking-[0.24em]">CALIBRATION</span>
                <span
                  id={calibrationValueId}
                  className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1"
                >
                  Level {activeCalibration.level}: {activeCalibration.label}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                {activeCalibration.track} track recommended.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                {activeCalibration.desc}
              </p>
              <div className="mt-5 grid gap-3 text-xs font-bold text-[color:var(--gs-muted)] sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.28em]">
                    Signal
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                    {activeCalibration.signal}
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.28em]">
                    Session length
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                    {activeCalibration.duration}
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-4 text-xs font-bold text-[color:var(--gs-muted)]">
                Host move:{" "}
                <span className="text-[color:var(--gs-ink)]">
                  {activeCalibration.hostMove}
                </span>
              </div>
              <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                If you change your mind mid-session, signal “Pause” and we
                recalibrate in under two minutes.
              </div>
            </article>
          </div>
        </section>

        <section
          id="reset"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Reset protocol"
            title="When focus slips, we reset the room."
            subtitle="A shared script that keeps consent clear, energy calm, and exits gentle."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {resetSteps.map((step) => (
                <article
                  key={step.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{step.badge}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {step.cue}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Reset kit
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Tools that keep the moment kind.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Resets are gentle, fast, and opt-in. The goal is clarity, not
                  control.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {resetTools.map((tool) => (
                  <div
                    key={tool.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 p-4"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {tool.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {tool.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-4 text-xs font-bold text-[color:var(--gs-muted)]">
                Host line: &quot;Pause badge is up. We reset now. Opt in when
                you&apos;re ready.&quot;
              </div>
            </aside>
          </div>
        </section>

        <section
          id="ledger"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Focus ledger"
            title="We track the room, not the people."
            subtitle="A light-touch log of cadence, resets, and rituals so the energy stays safe."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {ledgerMetrics.map((metric) => (
                <article
                  key={metric.label}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                    Metric
                  </div>
                  <div className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-[color:var(--gs-ink)]">
                    {metric.label}
                  </div>
                  <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/85 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    {metric.detail}
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Ledger protocol
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Gentle accountability, zero surveillance.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We log the room’s rhythm so hosts can keep the tone steady and the
                  consent clear.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {ledgerProtocols.map((protocol) => (
                  <div
                    key={protocol.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {protocol.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {protocol.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-4">
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Weekly pulse
                </div>
                <div className="mt-3 space-y-2 text-xs font-bold text-[color:var(--gs-muted)]">
                  {ledgerPulse.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white px-3 py-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="decoder"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Signal decoder"
            title="Read the room. Respond with care."
            subtitle="Every signal has a shared meaning so no one has to improvise boundaries."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div
              data-stagger-item
              className="rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                Signals
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                Tap a badge to decode it.
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {signalProfiles.map((profile) => {
                  const isActive = profile.code === activeSignal;
                  return (
                    <button
                      key={profile.code}
                      type="button"
                      onClick={() => setActiveSignal(profile.code)}
                      aria-pressed={isActive}
                      className={`rounded-2xl border px-4 py-3 text-xs font-bold uppercase tracking-[0.26em] transition ${
                        isActive
                          ? "border-[color:var(--gs-ink)] bg-white text-[color:var(--gs-ink)] shadow-sm"
                          : "border-[color:var(--gs-ink-soft)] bg-white/80 text-[color:var(--gs-muted)] hover:text-[color:var(--gs-ink)]"
                      }`}
                    >
                      {profile.code}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Hosts surface the active signal every 20 minutes so the room stays in sync.
              </div>
            </div>

            <article
              data-stagger-item
              className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                <span className="tracking-[0.24em]">ACTIVE SIGNAL</span>
                <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                  {activeSignalProfile?.code ?? "Silent"}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                {activeSignalProfile?.headline ?? "Keep it quiet and focused."}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                {activeSignalProfile?.desc ??
                  "Minimal chatter, minimal eye contact. Think library rules with softer lighting."}
              </p>
              <div className="mt-5 grid gap-3 text-xs font-bold text-[color:var(--gs-muted)] sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.28em]">Host move</div>
                  <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                    {activeSignalProfile?.hostMove ??
                      "Host lowers the room volume and tags a scribe."}
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.28em]">Room response</div>
                  <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                    {activeSignalProfile?.response ??
                      "Everyone agrees to whisper-only mode for 20 minutes."}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="studio"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Signal studio"
            title="Rehearse the cues before the room heats up."
            subtitle="A short interlude that keeps the room aligned, the exits clear, and the signals consistent."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {signalStudioCues.map((cue) => (
                <article
                  key={cue.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{cue.tag}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {cue.timing}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {cue.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {cue.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Host script
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Lines that keep it kind.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  The host uses short, repeatable prompts so nobody has to
                  improvise consent language mid-session.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {signalStudioScripts.map((script) => (
                  <div
                    key={script.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--gs-muted)]">
                      {script.title}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                      {script.line}
                    </div>
                    <div className="mt-2 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {script.note}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Studio rule: say the signal out loud before you change it.
              </div>
            </aside>
          </div>
        </section>

        {/* Admissions section maps the application timeline to a clear three-step flow. */}
        <section
          id="admissions"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Admissions"
            title="Apply once. We calibrate the room."
            subtitle="A short, respectful intake keeps the vibe aligned and the boundaries explicit."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="space-y-4">
              {applicationSteps.map((step) => (
                <article
                  key={step.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{step.badge}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {step.timing}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Readiness checklist
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Know your boundaries before you arrive.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We only accept guests who are comfortable naming limits, respecting
                  silence, and asking before they interrupt the flow.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Bring one focus goal and one flexible task.",
                  "Decide your preferred noise level ahead of time.",
                  "Plan a graceful exit if the vibe shifts.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--gs-ink)] px-5 py-2 text-sm font-bold text-white shadow-[0_16px_30px_-20px_rgba(28,38,40,0.9)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
                  href="#apply"
                >
                  Start the intake
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="packet"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Invite packet"
            title="Everything you receive before the door opens."
            subtitle="A tight, respectful bundle of details so the room feels intentional from the first minute."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {invitePacketItems.map((item) => (
                <article
                  key={item.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{item.badge}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {item.meta}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Arrival memo
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Know the rhythm before you step in.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  The packet is meant to remove guesswork and keep consent
                  visible. You’ll know the pace, the signals, and how to exit.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {inviteMemos.map((memo) => (
                  <div
                    key={memo.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {memo.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {memo.desc}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                      {memo.timing}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                The packet refreshes weekly to keep signals consistent.
              </div>
            </aside>
          </div>
        </section>

        <section
          id="readiness"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Readiness lab"
            title="Arrive aligned before the first joke lands."
            subtitle="A quick briefing keeps consent clear, focus honest, and transitions smooth."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {readinessModules.map((module) => (
                <article
                  key={module.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">{module.badge}</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {module.cue}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {module.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Readiness briefing
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  A steady hand before the room warms up.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  We reset desks, re-state signals, and get everyone aligned on
                  the exit plan.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {readinessBriefs.map((brief) => (
                  <div
                    key={brief.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {brief.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {brief.desc}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                      {brief.timing}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Readiness notes are archived after 24 hours.
              </div>
            </aside>
          </div>
        </section>

        <section
          id="hosts"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Session hosts"
            title="Meet the moderators who keep it kind."
            subtitle="Every room has a host to calibrate the energy, track notes, and intervene when boundaries blur."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="grid gap-4">
              {hosts.map((host) => (
                <article
                  key={host.name}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold tracking-[0.24em] text-[color:var(--gs-muted)]">
                        {host.title.toUpperCase()}
                      </div>
                      <h3 className="mt-2 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                        {host.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-bold text-[color:var(--gs-muted)]">
                      {host.availability}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {host.focus}
                  </p>
                  <div className="mt-4 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/80 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    {host.note}
                  </div>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Hosting standards
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  A calm hand on the room’s pulse.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Hosts are trained to encourage consent-forward play, document
                  the work, and shut down any moment that feels off.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Check-in circle at the 5-minute mark.",
                  "Rotate note-taking every 20 minutes.",
                  "Use boundary badges to pause the room.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </aside>
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

        <section
          id="debrief"
          data-animate="section"
          className="mt-16 scroll-mt-28 md:mt-24"
        >
          <SectionHeading
            eyebrow="Debrief lab"
            title="Close the loop without killing the vibe."
            subtitle="A short, respectful debrief keeps the work documented and the boundaries clear."
          />

          <div
            data-animate="stagger"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-4">
              {debriefPrompts.map((prompt) => (
                <article
                  key={prompt.title}
                  data-stagger-item
                  className="rounded-3xl border border-[color:var(--gs-ink-soft)] bg-white/85 p-6 shadow-[0_22px_58px_-40px_rgba(28,38,40,0.86)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[color:var(--gs-muted)]">
                    <span className="tracking-[0.24em]">PROMPT</span>
                    <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1">
                      {prompt.cue}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight text-[color:var(--gs-ink)]">
                    {prompt.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                    {prompt.desc}
                  </p>
                </article>
              ))}
            </div>

            <aside
              data-stagger-item
              className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/90 p-6 shadow-[0_22px_58px_-44px_rgba(28,38,40,0.78)]"
            >
              <div>
                <div className="text-xs font-bold tracking-[0.28em] text-[color:var(--gs-muted)]">
                  Follow-up cadence
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-gs-display)] text-3xl font-semibold tracking-tight">
                  Notes that travel with you.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--gs-muted)]">
                  Debrief notes are shared back to the room so no one has to guess
                  what mattered.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {debriefFollowUps.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3"
                  >
                    <div className="text-sm font-bold text-[color:var(--gs-ink)]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-[color:var(--gs-muted)]">
                      {item.detail}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-[color:var(--gs-muted)]">
                      {item.timeframe}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/90 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]">
                Debrief logs are anonymized and cleared every two weeks.
              </div>
            </aside>
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

              <div className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
                {[
                  "Consent is explicit, not assumed.",
                  "Boundaries are honored without debate.",
                  "Exit any moment without explanation.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white/85 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)]"
                  >
                    {line}
                  </div>
                ))}
              </div>

              <form
                className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const normalizedEmail = email.trim();
                  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    normalizedEmail,
                  );
                  if (!normalizedEmail || !isValidEmail) {
                    setFormStatus("error");
                    return;
                  }
                  setFormStatus("sent");
                  setEmail("");
                  setFocusNote("");
                  setTrack("Any track");
                }}
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
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (formStatus !== "idle") {
                      setFormStatus("idle");
                    }
                  }}
                  aria-invalid={formStatus === "error"}
                  aria-describedby={`${helperId} ${statusId}`}
                  className="h-12 w-full rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-5 text-sm font-bold text-[color:var(--gs-ink)] shadow-sm outline-none placeholder:text-[color:var(--gs-muted)]/60 focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40 sm:col-span-2"
                />
                <label className="sr-only" htmlFor="track">
                  Preferred track
                </label>
                <select
                  id="track"
                  value={track}
                  aria-describedby={`${preferenceId} ${trackPreviewId}`}
                  onChange={(event) => {
                    setTrack(event.target.value);
                    if (formStatus !== "idle") {
                      setFormStatus("idle");
                    }
                  }}
                  className="h-12 w-full rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-5 text-sm font-bold text-[color:var(--gs-ink)] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40"
                >
                  {["Any track", "Quiet Focus", "Shared Draft", "After Hours"].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ),
                  )}
                </select>
                <div
                  id={trackPreviewId}
                  className="rounded-2xl border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/85 px-4 py-3 text-xs font-bold text-[color:var(--gs-muted)] sm:col-span-2"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--gs-muted)]">
                    {trackPreview?.name ?? "Any track"}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[color:var(--gs-ink)]">
                    {trackPreview?.tone ??
                      "We will match you with the first opening."}
                  </div>
                  <div className="mt-2 grid gap-1 text-[color:var(--gs-muted)] sm:grid-cols-2">
                    <span>
                      Capacity: {trackPreview?.capacity ?? "Next open seat"}
                    </span>
                    <span>
                      Signal: {trackPreview?.signal ?? "Assigned after intake"}
                    </span>
                    <span className="sm:col-span-2">
                      Rule: {trackPreview?.rule ?? "Boundaries confirmed on invite."}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--gs-muted)] sm:grid-cols-2">
                    <span>Window: {activeTrackPulse.window}</span>
                    <span>Host: {activeTrackPulse.host}</span>
                    <span className="sm:col-span-2">
                      Seats: {activeTrackPulse.seats}
                    </span>
                    <span className="sm:col-span-2">Cue: {activeTrackPulse.cue}</span>
                  </div>
                </div>
                <label className="sr-only" htmlFor="focus-note">
                  Focus note
                </label>
                <textarea
                  id="focus-note"
                  rows={3}
                  value={focusNote}
                  maxLength={maxFocusLength}
                  aria-describedby={`${focusId} ${focusCountId}`}
                  placeholder="Optional: name one focus goal or boundary for tonight."
                  onChange={(event) => {
                    setFocusNote(event.target.value);
                    if (formStatus !== "idle") {
                      setFormStatus("idle");
                    }
                  }}
                  className="w-full rounded-2xl border border-[color:var(--gs-ink-soft)] bg-white px-5 py-3 text-sm font-bold text-[color:var(--gs-ink)] shadow-sm outline-none placeholder:text-[color:var(--gs-muted)]/60 focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40 sm:col-span-2"
                />
                <p
                  id={preferenceId}
                  className="text-xs font-bold tracking-wide text-[color:var(--gs-muted)] sm:col-span-2"
                >
                  Track preference helps us match you faster. Any track keeps you
                  open to all rooms.
                </p>
                <p
                  id={focusId}
                  className="text-xs font-bold tracking-wide text-[color:var(--gs-muted)] sm:col-span-2"
                >
                  Focus notes are optional and only shared with your host.
                </p>
                <p
                  id={focusCountId}
                  className="text-xs font-bold tracking-wide text-[color:var(--gs-muted)] sm:col-span-2"
                >
                  {focusCount}/{maxFocusLength} characters used.
                </p>
                <div className="sm:col-span-2">
                  <div className="h-2 w-full rounded-full bg-[color:var(--gs-ink-soft)]/60">
                    <div
                      className={`h-full rounded-full transition ${
                        focusWarning
                          ? "bg-[color:var(--gs-accent)]"
                          : "bg-[color:var(--gs-ink)]/70"
                      }`}
                      style={{ width: `${focusPercent}%` }}
                    />
                  </div>
                  <p
                    className={`mt-2 text-[11px] font-bold uppercase tracking-[0.28em] ${
                      focusWarning
                        ? "text-[color:var(--gs-accent)]"
                        : "text-[color:var(--gs-muted)]"
                    }`}
                  >
                    {focusWarning
                      ? "Keep it under 160 for a fast read."
                      : "Short notes help hosts respond fast."}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sent"}
                  className="h-12 rounded-full bg-[color:var(--gs-ink)] px-6 text-sm font-bold text-white shadow-[0_16px_30px_-20px_rgba(28,38,40,0.9)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-ink)]/40 sm:col-span-2"
                >
                  {formStatus === "sent" ? "Intent logged" : "Apply"}
                </button>
              </form>

              <div className="mt-4 space-y-2 text-left text-xs font-bold tracking-wide">
                <p id={helperId} className="text-[color:var(--gs-muted)]">
                  {helperMessage}
                </p>
                <p
                  id={statusId}
                  role={formStatus === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={statusTone}
                >
                  {statusMessage}
                </p>
                {formStatus === "sent" ? (
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus("idle");
                      setEmail("");
                      setFocusNote("");
                      setTrack("Any track");
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--gs-muted)] transition hover:text-[color:var(--gs-ink)]"
                  >
                    Log another intent
                  </button>
                ) : null}
              </div>

              <p className="mt-4 text-xs font-bold tracking-wide text-[color:var(--gs-muted)]">
                By applying, you agree to the Honor Code: respect first, jokes
                second.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div
        data-automation-hide
        className="gs-snapshot-fixed pointer-events-none fixed bottom-6 left-1/2 z-30 hidden -translate-x-1/2 xl:block"
      >
        <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/95 px-5 py-3 shadow-[0_20px_50px_-30px_rgba(28,38,40,0.85)] backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[color:var(--gs-muted)]">
              Live section
            </span>
            <span className="rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--gs-ink)]">
              {activeLabel}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--gs-muted)]">
              {activeTag}
            </span>
          </div>
          <div className="h-5 w-px bg-[color:var(--gs-ink-soft)]" />
          <div className="text-xs font-semibold text-[color:var(--gs-ink)]">
            {activeCue}
          </div>
          <div className="ml-1 rounded-full border border-[color:var(--gs-ink-soft)] bg-white px-2 py-1 text-[11px] font-bold text-[color:var(--gs-muted)]">
            {progressPercent}% complete
          </div>
          <Link
            href="#apply"
            className="ml-1 rounded-full bg-[color:var(--gs-accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_24px_-16px_rgba(201,81,49,0.9)] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gs-accent)]/40"
          >
            Reserve
          </Link>
        </div>
      </div>

      <footer
        data-automation-hide
        className="relative z-10 border-t border-[color:var(--gs-ink-soft)] bg-[color:var(--gs-paper)]/60"
      >
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
