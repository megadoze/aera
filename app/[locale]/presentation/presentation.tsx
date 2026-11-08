/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const investorReasons = [
  "premium-дифференциация проекта",
  "PR- и контентный актив",
  "архитектурный образ без крупного объёма",
  "масштабируемость в линейку модулей",
];

const conceptCards = [
  {
    id: "01",
    title: "Узнаваемая форма",
    text: "Овальный объём работает как архитектурный знак и делает объект мгновенно узнаваемым.",
  },
  {
    id: "02",
    title: "Редкий опыт",
    text: "Гость получает не бытовой ночлег, а камерный эмоциональный сценарий проживания.",
  },
  {
    id: "03",
    title: "Ценность для проекта",
    text: "Одна капсула способна усилить интерес ко всей локации и стать флагманом коммуникации.",
  },
];

const specs = [
  ["Габариты", "≈ 6 × 3 м · полезная площадь 14–16 м²"],
  ["Каркас", "алюминиевая или стальная пространственная рама"],
  ["Оболочка", "композитные панели / формованный алюминий"],
  ["Изоляция", "многослойная энергоэффективная система"],
  ["Остекление", "панорамный стеклопакет + круглый обзорный иллюминатор"],
  ["Инженерия", "HVAC, электрика, вода / drainage по сценарию"],
];

const interiorPoints = [
  {
    title: "Спальное место",
    text: "Queen-size bed, интегрированные ниши, мягкий ambient light.",
  },
  {
    title: "Сервисный блок",
    text: "Компактная kitchenette, хранение, климат, технический контур.",
  },
  {
    title: "Санузел",
    text: "Shower / WC / раковина в компактном приватном объёме.",
  },
];

const useCases = [
  {
    title: "Flagship suite",
    text: "Флагманский модуль для resort-, retreat- или glamping-проекта.",
  },
  {
    title: "Retreat unit",
    text: "Камерный формат для тишины, перезагрузки и приватного сценария.",
  },
  {
    title: "PR / content asset",
    text: "Объект, который сам создаёт визуальную ценность и работает в медиа.",
  },
  {
    title: "Scalable system",
    text: "От одной капсулы — к линейке сценариев и маршрутов размещения.",
  },
];

export default function MarsCapsulePresentationPage() {
  const mainRef = React.useRef<HTMLElement | null>(null);
  const heroRef = React.useRef<HTMLElement | null>(null);
  const secondRef = React.useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [heroReady, setHeroReady] = React.useState(false);
  const [heroMouse, setHeroMouse] = React.useState({ x: 0, y: 0 });

  const isAutoScrollingRef = React.useRef(false);

  const touchStartYRef = React.useRef<number | null>(null);
  const touchCurrentYRef = React.useRef<number | null>(null);
  const touchIntentLockedRef = React.useRef(false);

  React.useEffect(() => {
    const t = window.setTimeout(() => setHeroReady(true), 90);
    return () => window.clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`,
      );
    };

    setAppHeight();

    window.addEventListener("resize", setAppHeight);
    window.addEventListener("orientationchange", setAppHeight);

    return () => {
      window.removeEventListener("resize", setAppHeight);
      window.removeEventListener("orientationchange", setAppHeight);
    };
  }, []);

  React.useEffect(() => {
    const node = mainRef.current;
    if (!node) return;

    const onScroll = () => {
      const max = node.scrollHeight - node.clientHeight;
      const progress = max > 0 ? node.scrollTop / max : 0;
      setScrollProgress(progress);
    };

    onScroll();
    node.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      node.removeEventListener("scroll", onScroll);
    };
  }, []);

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduce) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setHeroMouse({ x, y });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  React.useEffect(() => {
    const container = mainRef.current;
    const hero = heroRef.current;
    const second = secondRef.current;

    if (!container || !hero || !second) return;

    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resetTouch = () => {
      touchStartYRef.current = null;
      touchCurrentYRef.current = null;
      touchIntentLockedRef.current = false;
    };

    const goNext = () => {
      if (!isMobile() || prefersReduced()) return;
      if (isAutoScrollingRef.current) return;
      if (container.scrollTop > 16) return;

      isAutoScrollingRef.current = true;

      const targetTop = second.offsetTop;

      // жёстко ставим контейнер в начало, чтобы убрать конфликт
      // с частично начавшимся нативным touch-scroll
      container.scrollTo({ top: 0, behavior: "auto" });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          container.scrollTo({
            top: targetTop,
            behavior: "smooth",
          });
        });
      });

      window.setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 950);
    };

    const onWheel = (e: WheelEvent) => {
      if (!isMobile()) return;
      if (isAutoScrollingRef.current) {
        e.preventDefault();
        return;
      }
      if (container.scrollTop > 16) return;
      if (e.deltaY <= 14) return;

      e.preventDefault();
      goNext();
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!isMobile()) return;
      if (isAutoScrollingRef.current) return;

      const y = e.touches[0]?.clientY ?? null;
      touchStartYRef.current = y;
      touchCurrentYRef.current = y;
      touchIntentLockedRef.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isMobile()) return;

      if (isAutoScrollingRef.current) {
        e.preventDefault();
        return;
      }

      if (container.scrollTop > 16) return;
      if (touchStartYRef.current == null) return;

      const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
      touchCurrentYRef.current = currentY;

      const delta = touchStartYRef.current - currentY;

      // как только видим явный свайп вверх на первом экране —
      // блокируем нативный скролл, чтобы он не успел "утащить" контейнер
      if (delta > 10) {
        touchIntentLockedRef.current = true;
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      if (!isMobile()) {
        resetTouch();
        return;
      }

      if (isAutoScrollingRef.current) {
        resetTouch();
        return;
      }

      if (container.scrollTop > 16) {
        resetTouch();
        return;
      }

      const startY = touchStartYRef.current;
      const endY = touchCurrentYRef.current;

      if (startY == null || endY == null) {
        resetTouch();
        return;
      }

      const delta = startY - endY;

      if (delta > 36) {
        goNext();
      }

      resetTouch();
    };

    hero.addEventListener("wheel", onWheel, { passive: false });
    hero.addEventListener("touchstart", onTouchStart, { passive: true });
    hero.addEventListener("touchmove", onTouchMove, { passive: false });
    hero.addEventListener("touchend", onTouchEnd, { passive: true });
    hero.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      hero.removeEventListener("wheel", onWheel);
      hero.removeEventListener("touchstart", onTouchStart);
      hero.removeEventListener("touchmove", onTouchMove);
      hero.removeEventListener("touchend", onTouchEnd);
      hero.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  const heroImageStyle: React.CSSProperties = {
    transform: `translate3d(${heroMouse.x * 8}px, ${heroMouse.y * 6}px, 0) scale(1.03)`,
  };

  const heroGlowOneStyle: React.CSSProperties = {
    transform: `translate3d(${heroMouse.x * -24}px, ${heroMouse.y * -18}px, 0)`,
  };

  const heroGlowTwoStyle: React.CSSProperties = {
    transform: `translate3d(${heroMouse.x * 20}px, ${heroMouse.y * 15}px, 0)`,
  };

  return (
    <main
      ref={mainRef}
      className="h-[var(--app-height)] overflow-y-auto overflow-x-hidden overscroll-y-contain bg-[var(--mars-base)] text-[#fff4ea] scroll-smooth touch-pan-y md:snap-y md:snap-mandatory selection:bg-[#ffd6b3] selection:text-[#2b1209] [--mars-soft:#ebb685] [--mars-glow:#be7746] [--mars-mid:#974819] [--mars-base:#722b05] [--mars-deep:#460f02] [--mars-dark:#210301] [--ease-luxury:cubic-bezier(0.22,1,0.36,1)]"
    >
      <GlobalBackdrop />
      <ScrollProgress progress={scrollProgress} />

      <section
        ref={heroRef}
        className="relative min-h-[var(--app-height)] overflow-hidden md:snap-start"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              ...heroImageStyle,
              backgroundImage: "url('/img/aeracapsule.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,3,2,0.08),rgba(7,4,2,0.26)_30%,rgba(9,4,2,0.62)_72%,rgba(10,4,2,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_16%,rgba(235,182,133,0.10),transparent_62%),radial-gradient(720px_420px_at_84%_26%,rgba(190,119,70,0.08),transparent_64%),radial-gradient(1400px_800px_at_50%_100%,rgba(33,3,1,0.66),transparent_74%)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div
            className="absolute left-[-12%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.16)_0%,rgba(190,119,70,0.08)_46%,transparent_70%)] blur-3xl transition-transform duration-300 ease-out"
            style={heroGlowOneStyle}
          />
          <div
            className="absolute right-[-10%] top-[16%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(190,119,70,0.14)_0%,rgba(151,72,25,0.08)_44%,transparent_72%)] blur-3xl transition-transform duration-300 ease-out"
            style={heroGlowTwoStyle}
          />
        </div>

        <div className="relative z-20 mx-auto flex min-h-[var(--app-height)] w-full max-w-[1600px] px-5 py-5 md:px-8 md:py-8 xl:px-14 xl:py-10">
          <div className="flex h-full w-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col justify-center leading-none">
                <div className="text-[15px] font-semibold uppercase tracking-[0.36em] text-[#fff0de]/90 md:text-[16px]">
                  AERA
                </div>
                <div className="mt-1.5 text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/62 md:text-[13px]">
                  Capsule Mars
                </div>
              </div>

              <div className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-2 text-[8.5px] uppercase tracking-[0.22em] text-[#ffe0c8]/76 shadow-[0_10px_30px_rgba(20,6,2,0.14)] backdrop-blur-xl md:px-4 md:text-[10px]">
                investor edition
              </div>
            </div>

            <div className="mt-auto flex min-h-[78svh] items-end pb-[8vh] md:min-h-[82vh] md:pb-[7vh] xl:pb-[7vh]">
              <div
                className={[
                  "max-w-[980px] transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                  heroReady
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-5 opacity-0 blur-[8px]",
                ].join(" ")}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-[#ffe0c8]/82 shadow-[0_0_30px_rgba(255,214,183,0.08)] backdrop-blur-xl sm:px-3.5 sm:text-[10px] md:px-4 md:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#ffd0ac] shadow-[0_0_20px_rgba(255,214,183,0.8)]" />
                  архитектурный концепт
                </div>

                <h1 className="mt-4 max-w-[980px] text-[clamp(2.7rem,7.8vw,5rem)] font-semibold leading-[0.86] tracking-[-0.02em] text-[#fff7f0] drop-shadow-[0_24px_70px_rgba(18,6,2,0.5)] sm:mt-5">
                  Земля
                  <span className="block">заканчивается</span>
                  <span className="block text-[#ffe7d1]/82">здесь.</span>
                </h1>

                <p className="mt-5 max-w-[600px] text-[14px] font-extralight leading-[1.72] text-[#fff0df]/80 sm:text-[15px] md:mt-6 md:text-[18px] md:leading-[1.78] xl:text-[18px]">
                  Архитектурный концепт автономной премиальной капсулы для
                  hospitality- и retreat-проектов.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ScrollCue />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-[linear-gradient(to_bottom,transparent_0%,rgba(33,3,1,0.24)_44%,rgba(33,3,1,0.78)_100%)]" />
      </section>

      <SlideSection
        refProp={secondRef}
        image="/img/backside.avif"
        imagePosition="center 38%"
        darken="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.52))]"
      >
        <div className="grid h-full gap-5 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-5">
              <div>
                <SectionLabel>Концепция</SectionLabel>
                <h2 className="mt-5 max-w-[14ch] font-medium text-3xl md:text-5xl leading-[0.9] tracking-[-0.02em] text-[#fff7f0]">
                  Не концепт.
                  <span className="block">Точка притяжения.</span>
                </h2>
                <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.68] text-[#fff0df]/74 sm:text-[15px] md:text-[16px] xl:text-[18px]">
                  Mars Capsule — это не просто размещение, а архитектурный опыт,
                  ради которого выбирают саму поездку.
                </p>
              </div>

              <PremiumGlass className="max-w-[520px] p-4 lg:p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#ffe0c8]/60 lg:text-[11px]">
                  Почему это интересно инвестору
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {investorReasons.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/8 bg-white/[0.035] px-4 py-3 text-[14px] leading-[1.5] text-[#fff0df]/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:text-[15px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </PremiumGlass>
            </div>
          </Reveal>

          <div className="grid h-full content-center gap-4 lg:gap-5">
            {conceptCards.map((card, index) => (
              <Reveal key={card.id} delay={index * 45}>
                <PremiumGlass className="p-5 lg:p-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#ffd9bc]/52 lg:text-[12px]">
                    {card.id}
                  </div>
                  <div className="mt-3 text-[19px] font-semibold leading-tight tracking-[-0.03em] text-[#fff5ec] sm:text-[20px] lg:text-[23px] xl:text-[25px]">
                    {card.title}
                  </div>
                  <div className="mt-3 max-w-[34ch] text-[15px] leading-[1.58] text-[#fff0e2]/68 xl:text-[16px]">
                    {card.text}
                  </div>
                </PremiumGlass>
              </Reveal>
            ))}
          </div>
        </div>
      </SlideSection>

      <PlainSlide>
        <div className="grid h-full gap-5 md:gap-6 lg:grid-cols-[0.76fr_1fr] lg:gap-8 xl:gap-10">
          <Reveal>
            <div className="flex h-full flex-col">
              <SectionLabel>Продукт и параметры</SectionLabel>

              <h2 className="mt-5 font-medium text-3xl md:text-5xl leading-[0.9] tracking-[-0.02em] text-[#fff7f0]">
                Базовая конфигурация
                <span className="block">модуля.</span>
              </h2>

              <p className="mt-4 max-w-[30ch] text-[15px] leading-[1.58] text-[#fff0df]/74 md:text-[16px] xl:text-[18px]">
                Автономный или полуавтономный формат для premium-размещения.
              </p>

              <PremiumGlass className="mt-4 p-4 lg:p-5">
                <div className="space-y-2.5">
                  {specs.map(([k, v], index) => (
                    <Reveal key={k} delay={index * 18}>
                      <div className="grid grid-cols-[90px_minmax(0,1fr)] gap-3 rounded-[18px] border border-white/8 bg-white/[0.035] px-4 py-2.5 sm:grid-cols-[108px_minmax(0,1fr)] lg:grid-cols-[118px_minmax(0,1fr)]">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-[#ffd9bc]/52 md:text-[12px]">
                          {k}
                        </div>
                        <div className="text-[13px] leading-[1.45] text-[#fff4ea]/78 sm:text-[14px]">
                          {v}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </PremiumGlass>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <div className="flex h-full flex-col">
              <PlanCardCompact />
            </div>
          </Reveal>
        </div>
      </PlainSlide>

      <SlideSection
        image="/img/inside.avif"
        imagePosition="center center"
        darken="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.26),rgba(0,0,0,0.72))]"
      >
        <div className="flex h-full flex-col justify-between">
          <Reveal>
            <div>
              <SectionLabel>Интерьер</SectionLabel>
              <h2 className="mt-5 max-w-[16ch] font-medium text-3xl md:text-5xl leading-[0.9] tracking-[-0.02em] text-[#fff7f0]">
                Внутри — тихая
                <span className="block">другая реальность.</span>
              </h2>
              <p className="mt-4 max-w-[38ch] text-[15px] leading-[1.65] text-[#fff0df]/78 md:text-[16px] xl:text-[18px]">
                Не жильё в привычном смысле, а компактная среда с сильной
                эмоциональной атмосферой.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {interiorPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 35}>
                <PremiumGlass className="p-5 lg:p-6">
                  <div className="text-[18px] font-semibold tracking-[-0.02em] text-[#fff5ec] lg:text-[21px]">
                    {item.title}
                  </div>
                  <div className="mt-3 text-[15px] leading-[1.58] text-[#fff0df]/70 xl:text-[16px]">
                    {item.text}
                  </div>
                </PremiumGlass>
              </Reveal>
            ))}
          </div>
        </div>
      </SlideSection>

      <SlideSection
        image="/img/leftview-001.avif"
        imagePosition="center center"
        darken="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.78))]"
      >
        <div className="grid h-full grid-rows-[auto_1fr] gap-6 lg:gap-8 xl:gap-10">
          <Reveal>
            <div>
              <SectionLabel>Где капсула особенно сильна</SectionLabel>
              <h2 className="mt-5 max-w-[18ch] text-3xl font-medium md:text-5xl leading-[0.9] tracking-[-0.02em] text-[#fff7f0]">
                Архитектурный модуль
                <span className="block">с сильным визуальным эффектом.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-auto mb-[9vh] grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {useCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 30}>
                <PremiumGlass className="flex min-h-[180px] flex-col p-5 lg:min-h-[215px] lg:p-6">
                  <div className="text-[16px] font-semibold tracking-[-0.02em] text-[#fff5ec] lg:text-[18px] xl:text-[20px]">
                    {item.title}
                  </div>
                  <div className="mt-3 text-[15px] leading-[1.58] text-[#fff0df]/70 xl:text-[16px]">
                    {item.text}
                  </div>
                </PremiumGlass>
              </Reveal>
            ))}
          </div>
        </div>
      </SlideSection>

      <SlideSection
        image="/img/aeracapsule.jpg"
        imagePosition="center center"
        darken="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32),rgba(0,0,0,0.78))]"
        bottomFade={false}
        fitViewport
      >
        <div className="flex h-full w-full flex-col justify-end">
          <div className="pb-[calc(env(safe-area-inset-bottom)+28px)] sm:pb-6 md:pb-[4.5vh] xl:pb-[5vh]">
            <PremiumGlass className="max-w-[560px] p-5 sm:p-6 md:p-8 xl:p-9">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#ffe0c8]/62 sm:text-[11px]">
                Заключение
              </div>

              <h2 className="mt-4 max-w-[18ch] font-medium text-3xl md:text-5xl leading-[0.93] tracking-[-0.02em] text-[#fff7f0]">
                Mars Capsule — архитектура,
                <span className="block">которая может стать брендом.</span>
              </h2>

              <p className="mt-4 max-w-[42ch] text-[13px] leading-[1.55] text-[#fff0df]/76 sm:text-[14px] lg:text-[15px] xl:text-[16px]">
                Один объект способен стать главным образом проекта, поднять
                ценность размещения и сформировать новый уровень гостевого
                опыта.
              </p>
            </PremiumGlass>
          </div>
        </div>
      </SlideSection>

      <style jsx global>{`
        :root {
          --app-height: 100vh;
        }

        html,
        body {
          height: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow: hidden;
        }

        @supports (height: 100dvh) {
          :root {
            --app-height: 100dvh;
          }
        }

        @keyframes revealUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.992);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        .reveal-shell {
          opacity: 1;
        }

        .reveal-shell > .reveal-inner {
          opacity: 0;
          transform: translate3d(0, 18px, 0) scale(0.992);
          filter: blur(6px);
        }

        .reveal-shell.in-view > .reveal-inner {
          animation: revealUp 520ms var(--ease-luxury) forwards;
          animation-delay: var(--reveal-delay, 0ms);
        }

        @keyframes scrollCueDot {
          0% {
            transform: translateY(0);
            opacity: 0.18;
          }
          20% {
            opacity: 0.95;
          }
          65% {
            transform: translateY(18px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0);
            opacity: 0.18;
          }
        }

        .scroll-cue-dot {
          animation: scrollCueDot 1.55s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (max-width: 1023px) {
          section {
            min-height: var(--app-height);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-shell > .reveal-inner {
            opacity: 1;
            transform: none;
            filter: none;
          }

          .reveal-shell.in-view > .reveal-inner {
            animation: none;
          }

          .scroll-cue-dot {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

function GlobalBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 18% 12%, rgba(235,182,133,0.18), transparent 52%), radial-gradient(900px 620px at 82% 16%, rgba(190,119,70,0.16), transparent 55%), radial-gradient(1000px 760px at 50% 58%, rgba(114,43,5,0.22), transparent 58%), radial-gradient(1200px 900px at 50% 100%, rgba(33,3,1,0.46), transparent 65%), linear-gradient(180deg, #9b4b20 0%, #722b05 22%, #5c1d04 46%, #460f02 68%, #2e0701 84%, #210301 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(24,5,2,0.2)_58%,rgba(12,2,1,0.5)_100%)]" />
    </div>
  );
}

function SlideSection({
  children,
  image,
  imagePosition,
  darken,
  bottomFade = true,
  fitViewport = false,
  refProp,
}: {
  children: React.ReactNode;
  image: string;
  imagePosition: string;
  darken: string;
  bottomFade?: boolean;
  fitViewport?: boolean;
  refProp?: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={refProp}
      className={[
        "relative overflow-hidden md:snap-start",
        fitViewport
          ? "h-[var(--app-height)] md:h-screen"
          : "min-h-[var(--app-height)] md:min-h-screen",
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className={`absolute inset-0 ${darken}`} />
      </div>

      <div
        className={[
          "relative z-10 mx-auto flex w-full max-w-[1600px] px-5 py-6 md:px-8 md:py-8 xl:px-14 xl:py-10",
          fitViewport
            ? "h-[var(--app-height)] md:h-screen"
            : "min-h-[var(--app-height)] md:min-h-screen",
        ].join(" ")}
      >
        <div className="h-full w-full">{children}</div>
      </div>

      {bottomFade && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-[linear-gradient(to_bottom,transparent_0%,rgba(33,3,1,0.2)_44%,rgba(33,3,1,0.72)_100%)]" />
      )}
    </section>
  );
}

function PlainSlide({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-[var(--app-height)] overflow-hidden bg-[radial-gradient(1200px_800px_at_18%_12%,rgba(235,182,133,0.08),transparent_52%),radial-gradient(900px_620px_at_82%_16%,rgba(190,119,70,0.07),transparent_55%),radial-gradient(1000px_760px_at_50%_58%,rgba(114,43,5,0.14),transparent_58%),linear-gradient(180deg,#7a3512_0%,#5b1c06_20%,#431004_42%,#2f0802_66%,#1d0401_84%,#140201_100%)] md:min-h-screen md:snap-start">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.56),rgba(0,0,0,0.24)_28%,transparent_58%)]" />

      <div className="relative z-10 mx-auto flex min-h-[var(--app-height)] w-full max-w-[1600px] px-5 py-6 md:min-h-screen md:px-8 md:py-8 xl:px-14 xl:py-10">
        <div className="h-full w-full">{children}</div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-[linear-gradient(to_bottom,transparent_0%,rgba(33,3,1,0.2)_44%,rgba(33,3,1,0.72)_100%)]" />
    </section>
  );
}

function PremiumGlass({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,242,0.1),rgba(255,244,236,0.045))] shadow-[0_24px_90px_rgba(20,6,2,0.24)] backdrop-blur-2xl transition duration-200 hover:-translate-y-px hover:border-white/16 hover:shadow-[0_28px_90px_rgba(20,6,2,0.28)] sm:rounded-[32px]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-[-18%] h-24 rounded-full bg-[radial-gradient(circle,rgba(255,224,202,0.12)_0%,transparent_72%)] blur-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-fit rounded-full border border-white/14 bg-white/[0.07] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#ffe0c8]/74 backdrop-blur-xl xl:text-[11px]">
      {children}
    </div>
  );
}

function PlanCardCompact() {
  return (
    <PremiumGlass className="h-full p-4 sm:p-5 xl:p-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-[#ffe0c8]/60 sm:text-[11px] xl:text-[12px]">
        Планировочная схема
      </div>

      <div className="mt-3 overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(235,182,133,0.1),transparent_55%),linear-gradient(180deg,rgba(12,4,2,0.96),rgba(24,8,4,0.98))] p-3 sm:rounded-[26px] sm:p-4 xl:p-5">
        <img
          src="/img/plan.avif"
          alt="Планировка капсулы"
          className="mx-auto w-full max-w-[500px] object-contain mix-blend-screen opacity-90 grayscale contrast-125 invert-[0.92] sepia-[0.12] hue-rotate-[330deg]"
        />
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[18px] border border-white/8 bg-white/[0.035] px-4 py-3 text-[14px] leading-[1.45] text-[#fff0df]/76">
          1. Спальная зона
          <br />
          2. Мини-кухня / storage
        </div>

        <div className="rounded-[18px] border border-white/8 bg-white/[0.035] px-4 py-3 text-[14px] leading-[1.45] text-[#fff0df]/76">
          3. Санузел
          <br />
          4. Центральный входной портал
        </div>
      </div>

      <p className="mt-3 text-[14px] leading-[1.5] text-[#fff0df]/70">
        Формат легко адаптируется под разные сценарии: retreat, private stay,
        resort suite, experience unit.
      </p>
    </PremiumGlass>
  );
}

function ScrollCue() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[max(14px,env(safe-area-inset-bottom))] z-30 flex justify-center sm:bottom-6 md:bottom-7">
      <div className="flex flex-col items-center gap-2 text-[#ffe0c8]/62 sm:gap-3">
        <span className="text-[9px] uppercase tracking-[0.24em] sm:text-[10px] sm:tracking-[0.28em]">
          scroll
        </span>

        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/14 bg-white/6 p-1.5 shadow-[0_10px_30px_rgba(20,6,2,0.16)] backdrop-blur-md sm:h-14 sm:w-8">
          <span className="scroll-cue-dot h-2.5 w-1.5 rounded-full bg-[#ffe0c8]/85" />
        </span>
      </div>
    </div>
  );
}

function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-40 hidden h-[34vh] -translate-y-1/2 md:flex lg:right-5">
      <div className="relative w-[2px] rounded-full bg-white/10">
        <div
          className="absolute inset-x-0 top-0 rounded-full bg-[linear-gradient(180deg,rgba(255,233,214,0.95),rgba(235,182,133,0.7))] shadow-[0_0_18px_rgba(255,214,183,0.35)]"
          style={{ height: `${Math.max(progress * 100, 8)}%` }}
        />
      </div>
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal-shell", visible ? "in-view" : "", className].join(
        " ",
      )}
      style={
        {
          ["--reveal-delay" as string]: `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <div className="reveal-inner">{children}</div>
    </div>
  );
}
