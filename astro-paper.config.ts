import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://lmpeixoto.com/",
    title: "Luís Peixoto",
    description:
      "Luís Peixoto — SRE writing about observability, reliability, Kubernetes, and building real systems with AI.",
    author: "Luís Peixoto",
    profile: "https://www.linkedin.com/in/lu%C3%ADs-peixoto-04b29041/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Lisbon",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/lmpeixoto/lmpeixoto.com/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/lmpeixoto" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/lu%C3%ADs-peixoto-04b29041/",
    },
  ],
  shareLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
