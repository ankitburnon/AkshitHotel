import { PROPERTIES } from "@/lib/constants";

const property = PROPERTIES.shimla;

export function ShimlaExtras() {
  return (
    <section
      id="extras"
      className="bg-cream py-[60px] md:py-[100px] px-6 md:px-[60px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="border-t border-[#1a1a18]/10 mb-10 md:mb-14" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {property.extras.map((extra) => (
            <div key={extra.title}>
              <h4 className="font-heading text-[22px] text-[#1a1a18] font-light mb-2">
                {extra.title}
              </h4>
              <p className="text-[14px] text-[#4a4540]/70 leading-[1.8] font-light">
                {extra.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
