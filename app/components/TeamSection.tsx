"use client";

const teamMembers = [
  { name: "Naomi Kim", role: "growth", image: "/naomi.jpeg" },
  { name: "Leanne Park", role: "product", image: "/leanne.jpeg" },
  { name: "Nolan Ralls", role: "growth", image: "/nolan.jpeg" },
  { name: "Elliot Cruz", role: "artist relations", image: "/elliot.JPG" },
  { name: "Ashrit Anala", role: "engineering", image: "/ashrit.jpg" },
  { name: "Neil Ghosh", role: "engineering", image: "/neil.jpeg" },
  { name: "Aymen Bekri", role: "engineering", image: "/aymen.jpeg" },
  { name: "Adib Khandaker", role: "engineering", image: "/adib.jpeg" },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative min-h-[75vh] bg-white px-8 pb-24 pt-[4.5rem]"
    >
      <div className="mx-auto max-w-4xl pt-12">
        <h2 className="mb-12 text-center text-3xl uppercase tracking-wider text-black md:text-4xl">
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
              <p className="text-orange text-sm tracking-wide">
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
