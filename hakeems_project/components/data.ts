// Edit this file to update the content of the page.
export const profile = {
  firstName: "HAKEEM",
  lastName: "HASSAN",
  fullName: "Hakeem H. Hassan",
  role: "Software Engineer / Frontend Developer",
  tagline:
    "Building fast, clean, and reliable web apps and offering modern solutions to software problems.",
  // Set to false to show the red "Unavailable" status by default.
  available: true,
  phone: "07035342929",
  email: "hakeembibinga@gmail.com",
};

export const nav = [
  { id: "work", label: "Work", count: "15" },
  { id: "service", label: "Service", count: "3" },
  { id: "experience", label: "Experience", count: "2yrs+" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/Hakeem216", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hakeem-hassan-b96644359", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
] as const;
