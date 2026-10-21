"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icons";
import { nav, profile } from "@/components/data";

export function Nav() {
  const [available, setAvailable] = useState(profile.available);
  const [selected, setSelected] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  // Close the contact card when clicking anywhere else or pressing Escape.
  useEffect(() => {
    if (!contactOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!contactRef.current?.contains(e.target as Node)) setContactOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setContactOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [contactOpen]);

  return (
    <header className="nav">
      <button
        type="button"
        className={`status ${available ? "is-on" : "is-off"}`}
        aria-pressed={available}
        onClick={() => setAvailable((a) => !a)}
      >
        <span className="dot" />
        {available ? "Available for New Project" : "Unavailable for Projects"}
      </button>

      <nav className="links">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`pill${selected === item.id ? " is-selected" : ""}`}
            aria-current={selected === item.id ? "true" : undefined}
            onClick={() => setSelected(item.id)}
          >
            {item.label}
            <span className="count">[{item.count}]</span>
          </a>
        ))}

        <div className="contact" ref={contactRef}>
          <button
            type="button"
            className={`pill${contactOpen || selected === "contact" ? " is-selected" : ""}`}
            aria-expanded={contactOpen}
            aria-controls="contact-card"
            onClick={() => {
              setSelected("contact");
              setContactOpen((o) => !o);
            }}
          >
            Contact
          </button>
          {contactOpen && (
            <div id="contact-card" className="contact-card">
              <a href={`tel:${profile.phone}`}>
                <Icon name="phone" /> {profile.phone}
              </a>
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" /> {profile.email}
              </a>
            </div>
          )}
        </div>
      </nav>

      <a className="btn" href={`tel:${profile.phone}`}>
        Let&apos;s Talk <Icon name="arrow" />
      </a>
    </header>
  );
}
