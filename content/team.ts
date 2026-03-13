export interface TeamMember {
  id: string;
  name: string;
  fullName?: string;
  image: string;
  shortSentence: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Emilio",
    fullName: "Emilio Bernhardt",
    image: "/team/emilio.jpeg",
    shortSentence: "Gründer",
  },
  {
    id: "2",
    name: "Jermaine",
    image: "/team/jermaine.png",
    shortSentence: "Designer",
  },
  {
    id: "3",
    name: "Marie",
    image: "/team/marie.png",
    shortSentence: "Videograph.",
  },
  {
    id: "4",
    name: "Taha",
    fullName: "Taha Elmas",
    image: "/team/taha.png",
    shortSentence: "Organisator",
  },
  {
    id: "5",
    name: "Caner",
    fullName: "Caner Elmas",
    image: "/team/caner.png",
    shortSentence: "Entwickler",
  },
  {
    id: "6",
    name: "Kiki",
    image: "/team/kiki.png",
    shortSentence: "Organisator",
  },
  {
    id: "7",
    name: "Nasim",
    image: "/team/nasim.jpeg",
    shortSentence: "Organisator",
  },
  {
    id: "8",
    name: "Servet",
    image: "/team/placeholder.svg",
    shortSentence: "Organisator",
  },
];
