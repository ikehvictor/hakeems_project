import Image from "next/image";
import { Icon } from "@/components/Icons";
import { Nav } from "@/components/Nav";
import { profile, socials } from "@/components/data";

export default function Home() {
  return (
    <main className="hero">
      <Nav />

      <h1 className="name">
        <span className="outline">{profile.firstName}</span>{" "}
        <span className="solid">{profile.lastName}</span>
      </h1>

      <div className="stage">
        <Image
          className="photo"
          src="/hero.webp"
          alt={profile.fullName}
          width={978}
          height={760}
          priority
        />
      </div>

      <section className="intro">
        <h2>{profile.role}</h2>
        <p>{profile.tagline}</p>
        <a className="btn" href={`tel:${profile.phone}`}>
          Let&apos;s collaborate <Icon name="arrow" />
        </a>
      </section>

      <ul className="socials">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer">
              <Icon name={s.icon} /> {s.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
