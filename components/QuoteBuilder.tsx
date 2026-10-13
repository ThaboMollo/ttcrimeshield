"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, MessageCircle } from "lucide-react";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { categories, fieldsFor, services } from "@/lib/services";
import { buildRequestMessage, waLink } from "@/lib/whatsapp";
import { REQUEST_EVENT } from "@/lib/quote-bus";
import { site } from "@/lib/site";

const STEPS = ["Choose services", "Add details", "Send on WhatsApp"] as const;

export function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  // A service card elsewhere on the page can drop its service straight into the builder.
  useEffect(() => {
    const onRequest = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      setSelected((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setStep(0);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener(REQUEST_EVENT, onRequest);
    return () => window.removeEventListener(REQUEST_EVENT, onRequest);
  }, []);

  const toggle = useCallback((id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }, []);

  const fields = useMemo(() => fieldsFor(selected), [selected]);
  const message = useMemo(
    () => buildRequestMessage({ serviceIds: selected, answers, name, notes }),
    [selected, answers, name, notes],
  );

  const canAdvance = step === 0 ? selected.length > 0 : true;
  const canSend = selected.length > 0 && name.trim().length > 0;

  return (
    <section
      ref={sectionRef}
      id="request"
      className="scroll-mt-24 border-y border-hairline bg-ink-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label="Request a service"
          title="Tell us what you need."
          accent="We reply on WhatsApp."
          lead="Pick your services, add the details, and we will open WhatsApp with your request already written out. No forms, no waiting."
          className="text-center [&_h2]:mx-auto [&_p]:mx-auto"
        />

        <ol className="mt-12 flex items-center justify-center gap-2 sm:gap-4">
          {STEPS.map((label, index) => {
            const state = index === step ? "current" : index < step ? "done" : "todo";
            return (
              <li key={label} className="flex items-center gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={() => index < step && setStep(index)}
                  disabled={index > step}
                  aria-current={state === "current" ? "step" : undefined}
                  className={`flex items-center gap-2 font-display text-xs tracking-[0.12em] uppercase transition-colors sm:text-sm ${
                    state === "todo" ? "text-white/30" : "text-gold"
                  } ${index < step ? "hover:text-gold-light" : ""}`}
                >
                  <span
                    className={`grid size-7 place-items-center rounded-full border text-[0.7rem] ${
                      state === "current"
                        ? "border-gold bg-gold text-ink"
                        : state === "done"
                          ? "border-gold/60 text-gold"
                          : "border-white/15 text-white/30"
                    }`}
                  >
                    {state === "done" ? <Check className="size-3.5" aria-hidden /> : index + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
                {index < STEPS.length - 1 ? (
                  <span className="h-px w-5 bg-white/15 sm:w-10" aria-hidden />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="card-edge mt-10 rounded-xl p-5 sm:p-8">
          {step === 0 ? (
            <div className="space-y-8">
              {categories.map((category) => {
                const items = services.filter((s) => s.category === category.id);
                if (!items.length) return null;
                return (
                  <fieldset key={category.id}>
                    <legend className="font-display text-xs tracking-[0.2em] text-gold uppercase">
                      {category.label}
                    </legend>
                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {items.map((service) => {
                        const on = selected.includes(service.id);
                        return (
                          <label
                            key={service.id}
                            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors ${
                              on
                                ? "border-gold bg-gold/10"
                                : "border-white/10 bg-white/[0.02] hover:border-gold/40"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={on}
                              onChange={() => toggle(service.id)}
                              className="sr-only"
                            />
                            <span
                              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded border ${
                                on ? "border-gold bg-gold text-ink" : "border-white/25"
                              }`}
                              aria-hidden
                            >
                              {on ? <Check className="size-3.5" /> : null}
                            </span>
                            <span className="min-w-0">
                              <span className="flex items-center gap-2">
                                <Icon name={service.icon} className="size-4 shrink-0 text-gold" />
                                <span className="font-display text-sm font-500 text-white">
                                  {service.name}
                                </span>
                              </span>
                              <span className="mt-0.5 block text-xs text-white/50">
                                {service.price ?? service.tagline}
                              </span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <p className="text-sm text-white/55">
                Only what we need to quote you accurately. Leave anything blank if you are not sure
                yet.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.id} className="block min-w-0">
                    <span className="font-display text-xs tracking-[0.12em] text-white/60 uppercase">
                      {field.label}
                    </span>
                    {field.type === "select" ? (
                      <span className="relative mt-1.5 block">
                        <select
                          value={answers[field.id] ?? ""}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, [field.id]: e.target.value }))
                          }
                          className={`w-full appearance-none rounded-lg border border-white/12 bg-black/50 py-2.5 pr-10 pl-3.5 text-sm focus:border-gold focus:outline-none ${
                            answers[field.id] ? "text-white" : "text-white/25"
                          }`}
                        >
                          <option value="">Select…</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-white/40"
                          aria-hidden
                        />
                      </span>
                    ) : (
                      <input
                        type={field.type === "number" ? "number" : field.type}
                        inputMode={field.type === "number" ? "numeric" : undefined}
                        min={field.type === "number" ? 1 : undefined}
                        placeholder={field.placeholder}
                        value={answers[field.id] ?? ""}
                        onChange={(e) =>
                          setAnswers((prev) => ({ ...prev, [field.id]: e.target.value }))
                        }
                        className="mt-1.5 w-full rounded-lg border border-white/12 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-gold focus:outline-none"
                      />
                    )}
                  </label>
                ))}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <label className="block">
                  <span className="font-display text-xs tracking-[0.12em] text-white/60 uppercase">
                    Your name <span className="text-gold">*</span>
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Who are we speaking to?"
                    className="mt-1.5 w-full rounded-lg border border-white/12 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-gold focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="font-display text-xs tracking-[0.12em] text-white/60 uppercase">
                    Anything else we should know?
                  </span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={5}
                    placeholder="Flight numbers, threat context, special requirements…"
                    className="mt-1.5 w-full resize-y rounded-lg border border-white/12 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-gold focus:outline-none"
                  />
                </label>
              </div>
              <div>
                <span className="font-display text-xs tracking-[0.12em] text-white/60 uppercase">
                  This is what we will receive
                </span>
                <pre className="mt-1.5 max-h-72 overflow-auto rounded-lg border border-white/12 bg-black/60 p-4 font-sans text-xs leading-relaxed whitespace-pre-wrap text-white/70">
                  {message}
                </pre>
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-6">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 font-display text-xs tracking-[0.14em] text-white/55 uppercase transition-colors hover:text-white disabled:invisible"
            >
              <ArrowLeft className="size-4" aria-hidden /> Back
            </button>

            {step < 2 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(2, s + 1))}
                disabled={!canAdvance}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-3 font-display text-xs font-600 tracking-[0.16em] text-ink uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
              >
                {step === 0 && selected.length
                  ? `Continue with ${selected.length}`
                  : "Continue"}
                <ArrowRight className="size-4" aria-hidden />
              </button>
            ) : (
              <a
                href={canSend ? waLink(message) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!canSend}
                onClick={(e) => {
                  if (!canSend) e.preventDefault();
                }}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-xs font-600 tracking-[0.16em] uppercase transition-opacity ${
                  canSend
                    ? "bg-[#25D366] text-black hover:opacity-90"
                    : "cursor-not-allowed bg-white/10 text-white/35"
                }`}
              >
                <MessageCircle className="size-4" aria-hidden />
                Send on WhatsApp
              </a>
            )}
          </div>

          {step === 2 && !canSend ? (
            <p className="mt-3 text-right text-xs text-gold/80">
              Add your name so we know who to call back.
            </p>
          ) : null}
        </div>

        <p className="mt-5 text-center text-xs text-white/35">
          Prefer to talk? Call{" "}
          <a href={site.phone.href} className="text-gold hover:underline">
            {site.phone.display}
          </a>{" "}
          — available 24/7.
        </p>
      </div>
    </section>
  );
}
