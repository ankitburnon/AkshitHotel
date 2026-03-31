import Image from "next/image";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

interface Experience {
  name: string;
  subtitle: string;
  image: string;
}

export function Experiences({ experiences, locationName }: { experiences: Experience[]; locationName: string }) {
  return (
    <section
      id="experiences"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Explore
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        Discover {locationName}
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Ask your hosts for the best routes and hidden gems
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto w-full">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.name} delay={i * 0.12}>
            <div className="rounded-xl overflow-hidden relative h-[280px] md:h-[340px] cursor-pointer group hover:translate-y-[-6px] transition-all duration-500">
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/70 to-transparent z-[1]" />
              <div className="relative z-[2] absolute bottom-0 left-0 right-0 p-7">
                <h4 className="font-heading text-2xl text-white font-normal mb-1">
                  {exp.name}
                </h4>
                <p className="text-xs text-white/70 font-light">{exp.subtitle}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
