import Image from "next/image";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface Room {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

function RoomCard({
  room,
  height,
  className = "",
}: {
  room: Room;
  height: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden relative cursor-pointer group transition-all duration-500 hover:translate-y-[-4px] ${className}`}
    >
      <div className={`relative overflow-hidden ${height}`}>
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/65 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 p-7 z-[2] text-white">
          <h3 className="font-heading text-[28px] font-normal mb-1.5">
            {room.name}
          </h3>
          <p className="text-[13px] opacity-80 mb-3">{room.description}</p>
          <div className="flex gap-1.5 flex-wrap">
            {room.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-white/15 backdrop-blur-[10px] px-2.5 py-1 rounded-full text-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Rooms({ rooms }: { rooms: Room[] }) {
  return (
    <section
      id="rooms"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Accommodation
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Our Rooms
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Clean, cozy, and each with a view worth waking up for
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-[7fr_5fr] gap-6 max-w-[1100px] mx-auto w-full">
        <ScrollReveal>
          <RoomCard room={rooms[0]} height="h-[520px]" />
        </ScrollReveal>
        <div className="flex flex-col gap-6">
          {rooms.slice(1).map((room, i) => (
            <ScrollReveal key={room.name} delay={(i + 1) * 0.15}>
              <RoomCard room={room} height="h-[248px]" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
