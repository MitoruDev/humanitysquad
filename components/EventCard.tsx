import Image from "next/image";
import type { Einsatz } from "@/content/einsaetze";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

interface EventCardProps {
  event: Einsatz;
  mediaPosition: "left" | "right";
}

function EventMedia({ event }: { event: Einsatz }) {
  if (!event.media) {
    return (
      <div
        className="aspect-video w-full min-h-[200px] rounded-xl border border-[var(--border-accent)] flex items-center justify-center text-[var(--foreground-muted)] text-sm"
        style={{ background: "var(--gradient-card)" }}
      >
        Kein Bild
      </div>
    );
  }
  if (event.media.type === "video") {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-[var(--border-accent)] bg-black">
        <video
          src={event.media.url}
          controls
          className="h-full w-full object-cover"
          playsInline
        >
          Dein Browser unterstützt das Video-Format nicht.
        </video>
      </div>
    );
  }
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border-accent)]">
      <Image
        src={event.media.url}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export function EventCard({ event, mediaPosition }: EventCardProps) {
  const mediaBlock = <EventMedia event={event} />;
  const contentBlock = (
    <div className="flex flex-col justify-center p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <time
          dateTime={event.date}
          className="text-sm font-semibold text-[var(--secondary)]"
        >
          {formatDate(event.date)}
        </time>
        {event.isPlanned && (
          <span
            className="rounded-full px-3 py-0.5 text-xs font-medium text-[var(--secondary)]"
            style={{ background: "rgba(196, 168, 217, 0.2)" }}
          >
            Geplant
          </span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
        {event.title}
      </h3>
      {event.location && (
        <p className="mt-1 text-[var(--foreground-muted)]">
          Ort: {event.location}
        </p>
      )}
      {event.description && (
        <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">
          {event.description}
        </p>
      )}
      {event.amountRaised != null && (
        <p className="mt-4 text-sm font-semibold text-[var(--secondary)]">
          {event.amountRaised} € eingenommen
        </p>
      )}
    </div>
  );

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border-accent)] transition hover:border-[var(--secondary)]/40 sm:flex-row"
      style={{ background: "var(--gradient-card)" }}
    >
      {mediaPosition === "left" ? (
        <>
          <div className="w-full shrink-0 sm:w-[45%] sm:max-w-md">
            {mediaBlock}
          </div>
          <div className="min-w-0 flex-1">{contentBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 min-w-0 flex-1 sm:order-1">{contentBlock}</div>
          <div className="order-1 w-full shrink-0 sm:order-2 sm:w-[45%] sm:max-w-md">
            {mediaBlock}
          </div>
        </>
      )}
    </article>
  );
}
