import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "20 godina iskustva",
    description: "Odgovoran pristup pri radu na domaćem i stranom tržištu.",
    icon: CircleDot,
  },
  {
    title: "Pouzdano",
    description:
      "Dobra i pouzdana marketing agencija postaje sve traženija usluga na svim tržištima.",
    icon: Blend,
  },
  {
    title: "Pristupačno",
    description:
      "Gondor Produkcija - najbolji odnos cijene i kvaliteta na domaćem tržištu.",
    icon: Diamond,
  },
  {
    title: "Stalni rast",
    description: "Budite u krugu najboljih i radite sa najboljima.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-4xl tracking-normal md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Gondor Produkcija
            <span className="hidden sm:inline">
              {" "}
              <br /> Kompletna Marketing Usluga
            </span>
          </h1>

          <p className="text-foreground mt-5 !text-xl/6 tracking-tight md:text-2xl">
            Povjerite svoje poslovanje agenciji sa 20 godina iskustva u polju
            marketinga, dizajna i web razvoja za vaš biznis.
          </p>

          <div className="font-display mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild className="text-base sm:text-lg">
              <a
                href="https://github.com/shadcnblocks/mainline-nextjs-template"
                className="group inline-flex items-center gap-2"
              >
                Kontaktirajte nas
                <ArrowUpRight className="transition-transform duration-300 ease-out group-hover:-translate-y-1" />
              </a>
            </Button>

            <Button
              className="text-base"
              variant="outline"
              // className="from-background h-auto gap-2 bg-linear-to-r to-transparent text-sm sm:text-lg"
              asChild
            >
              <a
                href="https://gondorcg.me/o-nama"
                className="group max-w-56 truncate md:max-w-none"
              >
                Pogledajte više o nama
                <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="foreground font-display text-lg font-semibold">
                    {feature.title}
                  </h2>
                  <p className="leading/snug max-w-76 leading-snug text-gray-600 sm:!text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
