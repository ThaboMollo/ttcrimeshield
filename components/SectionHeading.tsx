export function SectionHeading({
  label,
  title,
  accent,
  lead,
  className = "",
}: {
  label: string;
  title: string;
  accent?: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="tab-clip inline-block bg-gradient-to-r from-gold-light to-gold-deep py-1.5 pr-7 pl-4 font-display text-xs font-600 tracking-[0.2em] text-ink uppercase">
        {label}
      </span>
      <h2 className="mt-5 font-display text-3xl leading-[1.05] font-600 tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
        {title}
        {accent ? <span className="gold-text block">{accent}</span> : null}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">{lead}</p>
      ) : null}
    </div>
  );
}
