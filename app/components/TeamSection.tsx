"use client";

import SidestreetLogo from "./SidestreetLogo";

const teamMembers = [
  { name: "Naomi Kim", role: "product", image: "https://picsum.photos/seed/team1/400/400" },
  { name: "Leanne Park", role: "product", image: "https://picsum.photos/seed/team2/400/400" },
  { name: "Nolan Ralls", role: "growth", image: "https://picsum.photos/seed/team3/400/400" },
  { name: "Elliot Cruz", role: "artistry", image: "https://picsum.photos/seed/team4/400/400" },
  { name: "Naomi Kim", role: "business", image: "https://picsum.photos/seed/team5/400/400" },
  { name: "Leanne Park", role: "product", image: "https://picsum.photos/seed/team6/400/400" },
  { name: "Nolan Ralls", role: "growth", image: "https://picsum.photos/seed/team7/400/400" },
  { name: "Elliot Cruz", role: "artistry", image: "https://picsum.photos/seed/team8/400/400" },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative min-h-screen bg-white px-8 py-24"
    >
      {/* Logo — always visible */}
      <div className="absolute top-8 left-8">
        <SidestreetLogo />
      </div>

      <div className="max-w-4xl mx-auto pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wider text-center mb-16">
          Who Are We?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-[160px] h-[160px] rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <p className="text-orange font-bold text-sm tracking-wide">
                {member.name}
              </p>
              <p className="text-black text-xs tracking-wide mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
