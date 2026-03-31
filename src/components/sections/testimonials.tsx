import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/constants";
import { ScrollReveal, SplitHeading } from "@/components/ui/scroll-reveal";

const REVIEWS = [
  {
    avatar: BRAND_IMAGES.avatarGuest1,
    quote:
      "We came for a weekend trip and left feeling like we'd been hosted by family. Akshit personally took us to a viewpoint we'd never have found on our own. The food, the warmth, the mountains — nothing else comes close.",
    author: "Priya & Rahul",
    location: "Delhi",
  },
  {
    avatar: BRAND_IMAGES.avatarGuest2,
    quote:
      "I've stayed at five-star resorts across India. This was different. It wasn't about luxury — it was about feeling something. The sunrise from our balcony, the home-cooked rajma, the stories around the bonfire. We're already planning our next visit.",
    author: "Sneha M.",
    location: "Mumbai",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-[120px] px-8 md:px-[60px] bg-white text-center flex flex-col items-center"
    >
      <ScrollReveal>
        <p className="text-[11px] tracking-[4px] uppercase text-accent font-semibold mb-4">
          Reviews
        </p>
      </ScrollReveal>
      <SplitHeading className="font-heading text-[48px] font-light text-primary mb-4 leading-[1.15]">
        What Our Guests Say
      </SplitHeading>
      <ScrollReveal>
        <p className="text-base text-[#999] max-w-[480px] leading-[1.8] mb-14 font-light">
          Real reviews from real families
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-7 max-w-[900px] mx-auto">
        {REVIEWS.map((review, i) => (
          <ScrollReveal key={review.author} delay={i * 0.15}>
            <div className="bg-white border border-primary/6 rounded-xl p-9 text-left">
              <div className="w-10 h-10 rounded-full overflow-hidden mb-4">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-highlight text-[13px] tracking-[2px] mb-4">
                ★ ★ ★ ★ ★
              </div>
              <blockquote className="font-heading text-lg text-[#555] leading-[1.7] italic font-light mb-5">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="text-xs text-highlight font-semibold tracking-wider uppercase">
                {review.author} · {review.location}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
