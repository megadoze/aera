/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const pillars = [
  {
    id: "01",
    title: "Узнаваемая форма",
    desc: "Выразительная овальная форма делает капсулу узнаваемой с первого взгляда и превращает её в архитектурный символ локации.",
  },
  {
    id: "02",
    title: "Редкий опыт проживания",
    desc: "Это не бытовой ночлег, а короткий и эмоционально насыщенный пространственный опыт, ради которого выбирают саму поездку.",
  },
  {
    id: "03",
    title: "Ценность для проекта",
    desc: "Один объект способен усилить интерес ко всей территории, повысить ценность размещения и стать визуальным центром коммуникации.",
  },
  {
    id: "04",
    title: "Масштабируемая система",
    desc: "Идея развивается от одной флагманской капсулы до целой линейки сценариев проживания, маршрутов и форматов размещения.",
  },
];

const leftPillars = [pillars[0], pillars[2]];
const rightPillars = [pillars[1], pillars[3]];

const scenarios = [
  {
    title: "Точка назначения",
    text: "Гость едет не просто в глэмпинг или отель, а именно в эту капсулу — как в самостоятельную точку притяжения и редкий формат проживания.",
  },
  {
    title: "Флагманский объект",
    text: "Капсула может стать главным элементом проекта: формировать первое впечатление о месте, собирать внимание и задавать тон всей территории.",
  },
  {
    title: "Формат уединения",
    text: "Подходит для камерных сценариев: романтическая поездка, личная перезагрузка, короткий retreat или эмоциональный выход из городской среды.",
  },
  {
    title: "Контентный актив",
    text: "Форма и атмосфера капсулы изначально сильны визуально, поэтому объект естественно работает в фото, видео, социальных сетях и PR-коммуникации проекта.",
  },
];

const strategicRole = [
  ["Категория", "Архитектурный hospitality-концепт"],
  ["Формат", "Премиальный формат короткого проживания"],
  ["Функция", "Флагманский гостевой опыт"],
  ["Потенциал", "Актив для бренда, PR и монетизации"],
];

export default function MarsCapsuleLanding() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const [heroReady, setHeroReady] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const allowMotion = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;

    const onMove = (e: MouseEvent) => {
      if (!media.matches || !allowMotion) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMouse({ x, y });
    };

    const t = window.setTimeout(() => setHeroReady(true), 220);

    if (media.matches && allowMotion) {
      window.addEventListener("mousemove", onMove);
    }

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const heroImageStyle: React.CSSProperties = {
    transform: `translate3d(${mouse.x * 4}px, ${mouse.y * 3}px, 0) scale(1.01)`,
  };

  const glowOneStyle: React.CSSProperties = {
    transform: `translate3d(${mouse.x * -30}px, ${mouse.y * -22}px, 0)`,
  };

  const glowTwoStyle: React.CSSProperties = {
    transform: `translate3d(${mouse.x * 24}px, ${mouse.y * 18}px, 0)`,
  };

  const titleStyle: React.CSSProperties = {
    transform: `translate3d(${mouse.x * 6}px, ${mouse.y * 5}px, 0)`,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--mars-base)] text-[#fff4ea] selection:bg-[#ffd5b1] selection:text-[#2b1209] [--mars-soft:#ebb685] [--mars-glow:#be7746] [--mars-mid:#974819] [--mars-base:#722b05] [--mars-deep:#460f02] [--mars-dark:#210301] [--ease-luxury:cubic-bezier(0.22,1,0.36,1)]">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 800px at 18% 12%, rgba(235,182,133,0.18), transparent 52%), radial-gradient(900px 620px at 82% 16%, rgba(190,119,70,0.16), transparent 55%), radial-gradient(1000px 760px at 50% 58%, rgba(114,43,5,0.22), transparent 58%), radial-gradient(1200px 900px at 50% 100%, rgba(33,3,1,0.46), transparent 65%), linear-gradient(180deg, #9b4b20 0%, #722b05 22%, #5c1d04 46%, #460f02 68%, #2e0701 84%, #210301 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div
          className="absolute left-[-12%] top-[6%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.22)_0%,rgba(190,119,70,0.1)_44%,transparent_70%)] blur-3xl transition-transform duration-500 ease-out"
          style={glowOneStyle}
        />
        <div
          className="absolute right-[-10%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(190,119,70,0.18)_0%,rgba(151,72,25,0.1)_42%,transparent_72%)] blur-3xl transition-transform duration-500 ease-out"
          style={glowTwoStyle}
        />
        <div className="absolute bottom-[12%] left-[18%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.12)_0%,transparent_70%)] blur-3xl animate-pulse motion-reduce:animate-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(24,5,2,0.2)_58%,rgba(12,2,1,0.5)_100%)]" />
      </div>

      <main className="relative z-10">
        <section className="relative isolate min-h-screen overflow-hidden pt-6 md:pt-8">
          <Container>
            <div className="relative z-40 flex items-center justify-between gap-4 pb-6 md:pb-10">
              <div className="flex flex-col justify-center leading-none">
                <div className="text-[15px] font-semibold uppercase tracking-[0.36em] text-[#fff0de]/90 md:text-[16px]">
                  AERA
                </div>
                <div className="mt-1.5 text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/62 md:text-[13px]">
                  Capsule Mars
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 text-[10px] uppercase tracking-[0.18em] text-[#fff0e2] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 hover:shadow-[0_14px_40px_rgba(255,214,183,0.08)] md:text-[12px]"
              >
                Запросить концепт
              </a>
            </div>
          </Container>

          <div className="absolute inset-0 z-10 overflow-hidden">
            {/* <img
              src="/img/mars-pod.avif"
              alt="Mars Capsule"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out will-change-transform"
              style={heroImageStyle}
            /> */}
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                ...heroImageStyle,
                backgroundImage: "url('/img/mars-pod.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center 35%",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.03)_24%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-[linear-gradient(to_bottom,rgba(70,15,2,0)_0%,rgba(70,15,2,0.1)_24%,rgba(46,7,1,0.36)_68%,rgba(33,3,1,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-[-2px] h-[220px] bg-[radial-gradient(ellipse_at_center,rgba(151,72,25,0.18)_0%,rgba(70,15,2,0.08)_42%,transparent_72%)] blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            <div
              className="absolute left-[-12%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.18)_0%,rgba(190,119,70,0.08)_44%,transparent_70%)] blur-3xl transition-transform duration-500 ease-out"
              style={glowOneStyle}
            />
            <div
              className="absolute right-[-8%] top-[16%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(190,119,70,0.14)_0%,rgba(151,72,25,0.08)_42%,transparent_72%)] blur-3xl transition-transform duration-500 ease-out"
              style={glowTwoStyle}
            />
            <div className="absolute bottom-[8%] left-[20%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.1)_0%,transparent_70%)] blur-3xl animate-pulse motion-reduce:animate-none" />

            <div className="absolute inset-0 opacity-[0.14] mix-blend-screen">
              <div className="absolute left-[8%] top-[18%] h-[2px] w-[22%] bg-[linear-gradient(to_right,transparent,rgba(255,233,214,0.28),transparent)] blur-[1px]" />
              <div className="absolute right-[10%] top-[26%] h-[2px] w-[18%] bg-[linear-gradient(to_right,transparent,rgba(255,214,179,0.22),transparent)] blur-[1px]" />
            </div>

            <div className="absolute inset-0 opacity-[0.1] mix-blend-screen motion-reduce:hidden">
              <div className="absolute left-[-10%] top-[54%] h-[22rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(255,228,206,0.14)_0%,rgba(255,210,175,0.05)_42%,transparent_74%)] blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]" />
              <div className="absolute right-[-8%] bottom-[10%] h-[20rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,194,148,0.1)_0%,rgba(255,172,125,0.04)_44%,transparent_76%)] blur-3xl animate-[floatSlow_14s_ease-in-out_infinite_reverse]" />
            </div>

            <div className="absolute inset-0 opacity-[0.08] mix-blend-screen [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)] motion-reduce:hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,240,225,0.16)_0_1px,transparent_1.5px),radial-gradient(circle_at_72%_24%,rgba(255,230,214,0.1)_0_1px,transparent_1.5px),radial-gradient(circle_at_48%_68%,rgba(255,216,189,0.1)_0_1px,transparent_1.5px),radial-gradient(circle_at_86%_58%,rgba(255,223,205,0.08)_0_1px,transparent_1.5px)] [background-size:220px_220px,260px_260px,240px_240px,280px_280px] animate-[dustDrift_20s_linear_infinite]" />
            </div>
          </div>

          <div className="relative z-30 flex min-h-[calc(100vh-88px)] items-center justify-center px-5 pb-16 pt-6 md:px-8 md:pb-20 md:pt-8">
            <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center text-center">
              <div
                className={[
                  "transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                  heroReady
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-8 opacity-0 blur-[6px]",
                ].join(" ")}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#ffe0c8]/84 backdrop-blur-xl shadow-[0_0_30px_rgba(255,214,183,0.08)] md:px-4 md:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#ffd0ac] shadow-[0_0_20px_rgba(255,214,183,0.8)]" />
                  архитектурный концепт
                </div>
              </div>

              <div
                className={[
                  "relative mt-5 transition-all duration-[1700ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                  heroReady
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-8 opacity-0 blur-[10px]",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(32,6,2,0.3)_0%,rgba(32,6,2,0.14)_44%,transparent_74%)] blur-3xl" />
                <h1
                  className="relative max-w-[1180px] text-[clamp(3rem,8vw,9.4rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-[#fff7f0]/88 drop-shadow-[0_20px_48px_rgba(28,8,3,0.42)] transition-transform duration-700 ease-out motion-reduce:transition-none"
                  style={titleStyle}
                >
                  Земля
                  <span className="block">заканчивается</span>
                  <span className="block text-[#ffe7d1]/82">здесь.</span>
                </h1>
              </div>

              <div
                className={[
                  "transition-all duration-[1400ms] delay-[260ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                  heroReady
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-8 opacity-0 blur-[6px]",
                ].join(" ")}
              >
                <p className="mt-5 max-w-[340px] text-[16px] leading-7 text-[#fff0df]/82 md:mt-6 md:max-w-[820px] md:text-[1.18rem] md:leading-8 font-extralight">
                  Премиальная капсула для hospitality- и retreat-проектов —
                  объект притяжения всей локации.
                </p>
              </div>

              {/* <div
                className={[
                  "transition-all duration-[1500ms] delay-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                  heroReady
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-8 opacity-0 blur-[8px]",
                ].join(" ")}
              >
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[#fff1e3] px-6 text-[13px] font-medium uppercase tracking-[0.16em] text-[#4a1f11] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,214,183,0.14)] md:h-11 md:text-sm"
                  >
                    Запросить концепт
                  </a>

                  <a
                    href="#design-language"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 text-[13px] uppercase tracking-[0.16em] text-[#fff4ea] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-[0_12px_30px_rgba(255,214,183,0.06)] md:h-11 md:text-sm"
                  >
                    Посмотреть идею
                  </a>
                </div>
              </div> */}
              <div
                className={[
                  "transition-all duration-[1500ms] delay-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                  heroReady
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-8 opacity-0 blur-[8px]",
                ].join(" ")}
              >
                <a
                  href="#design-language"
                  aria-label="Прокрутить ниже"
                  className="group mt-8 inline-flex flex-col items-center gap-3 text-[#ffe0c8]/62 transition duration-300 hover:text-[#fff0de] md:mt-10"
                >
                  <span className="text-[10px] uppercase tracking-[0.28em]">
                    scroll
                  </span>

                  <span className="flex h-14 w-8 items-start justify-center rounded-full border border-white/14 bg-white/6 p-1.5 backdrop-blur-md">
                    <span className="h-2.5 w-1.5 rounded-full bg-[#ffe0c8]/80 animate-[scrollCue_1.8s_ease-in-out_infinite] group-hover:bg-[#fff0de]" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-[linear-gradient(to_bottom,transparent_0%,rgba(33,3,1,0.7)_55%,rgba(33,3,1,1)_100%)]" />
        </section>

        <section
          id="design-language"
          className="relative pt-8 pb-20 md:pt-12 md:pb-28"
        >
          <Container>
            <div className="grid gap-7 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <Reveal>
                <div className="lg:sticky lg:top-24">
                  <div className="text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/66">
                    Идея
                  </div>
                  <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.03] tracking-[-0.02em] text-[#fff5ec] md:text-5xl">
                    Не концепт.
                    <span className="block">Точка притяжения.</span>
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-7 text-[#fff0e2]/68 md:text-lg">
                    Выразительная форма, редкий пользовательский опыт и сильная
                    визуальная ценность делают капсулу флагманским элементом
                    локации.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2 md:items-start">
                <div className="flex flex-col gap-5">
                  {leftPillars.map((item, index) => (
                    <Reveal key={item.id} delay={index * 90}>
                      <PremiumPanel>
                        <div className="text-[11px] uppercase tracking-[0.22em] text-[#ffd9bc]/54">
                          {item.id}
                        </div>
                        <div className="mt-5 text-[1.55rem] font-semibold leading-tight tracking-[-0.02em] text-[#fff5ec]">
                          {item.title}
                        </div>
                        <div className="mt-4 leading-7 text-[#fff0e2]/68">
                          {item.desc}
                        </div>
                      </PremiumPanel>
                    </Reveal>
                  ))}
                </div>

                <div className="flex flex-col gap-5 md:translate-y-10">
                  {rightPillars.map((item, index) => (
                    <Reveal key={item.id} delay={index * 90 + 90}>
                      <PremiumPanel>
                        <div className="text-[11px] uppercase tracking-[0.22em] text-[#ffd9bc]/54">
                          {item.id}
                        </div>
                        <div className="mt-5 text-[1.55rem] font-semibold leading-tight tracking-[-0.02em] text-[#fff5ec]">
                          {item.title}
                        </div>
                        <div className="mt-4 leading-7 text-[#fff0e2]/68">
                          {item.desc}
                        </div>
                      </PremiumPanel>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative py-8 md:py-16">
          <Container>
            <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
              <Reveal>
                <OrbitalFrame className="overflow-hidden p-0">
                  <div className="grid xl:grid-cols-[1.04fr_0.96fr]">
                    <div className="relative min-h-[380px] overflow-hidden md:min-h-[620px]">
                      <img
                        src="/img/leftview-001.avif"
                        alt="Mars Capsule"
                        className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(33,3,1,0.68),rgba(43,17,10,0.08))]" />
                      <div className="absolute bottom-6 left-6 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#ffe0c8]/76 backdrop-blur-xl">
                        атмосфера проекта / сцена 01
                      </div>
                    </div>

                    <div className="relative p-6 md:p-10">
                      <div className="pointer-events-none absolute right-[-40px] top-[14%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.14)_0%,rgba(190,119,70,0.06)_48%,transparent_72%)] blur-2xl" />
                      <div className="text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/66">
                        Сценарий опыта
                      </div>
                      <h3 className="mt-4 max-w-md text-3xl font-semibold leading-[1.03] tracking-[-0.02em] text-[#fff5ec] md:text-[2.1rem]">
                        {/* Не жильё —<span className="block">а сценарий.</span> */}
                        Архитектура другой реальности
                      </h3>
                      <p className="mt-5 max-w-md text-base leading-7 text-[#fff0e2]/68">
                        Камерный, эмоциональный и визуально сильный формат,
                        который хочется прожить.
                      </p>

                      <div className="mt-8 grid gap-4">
                        {scenarios.map((item, index) => (
                          <Reveal key={item.title} delay={index * 70}>
                            <SoftTrack>
                              <div className="text-lg font-semibold tracking-[-0.02em] text-[#fff5ec]">
                                {item.title}
                              </div>
                              <div className="mt-2 text-sm leading-6 text-[#fff0e2]/68">
                                {item.text}
                              </div>
                            </SoftTrack>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </div>
                </OrbitalFrame>
              </Reveal>

              <div className="grid gap-6">
                <Reveal delay={80}>
                  <OrbitalFrame className="p-7 md:p-8">
                    <div className="text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/66">
                      Стратегическая роль
                    </div>

                    <div className="mt-6 space-y-4">
                      {strategicRole.map(([k, v], index) => (
                        <div
                          key={k}
                          className={[
                            "group grid min-h-[92px] grid-cols-[92px_minmax(0,1fr)] items-center gap-4 rounded-[28px] border border-white/10 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/16 hover:shadow-[0_14px_40px_rgba(20,6,2,0.12)]",
                            index % 2 === 0
                              ? "bg-white/[0.035]"
                              : "bg-white/[0.05]",
                          ].join(" ")}
                        >
                          <div className="text-[13px] uppercase tracking-[0.18em] text-[#ffd9bc]/50 transition duration-300 group-hover:text-[#ffe0c8]/76">
                            {k}
                          </div>
                          <div className="max-w-55 justify-self-end text-right text-sm font-light leading-6 tracking-wide text-[#fff3e7]/78 md:text-base">
                            {v}
                          </div>
                        </div>
                      ))}
                    </div>
                  </OrbitalFrame>
                </Reveal>

                <Reveal delay={160}>
                  <OrbitalFrame className="relative overflow-hidden p-7 md:p-8">
                    <div className="absolute right-[-24px] top-[-24px] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.24)_0%,rgba(190,119,70,0.12)_48%,transparent_72%)] blur-xl" />
                    <div className="relative z-10 text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/66">
                      Контакт
                    </div>
                    <h3 className="relative z-10 mt-4 max-w-[18ch] text-2xl font-semibold leading-[1.04] tracking-[-0.02em] text-[#fff5ec] md:max-w-md md:text-3xl">
                      Концепт можно адаптировать под конкретную локацию, бренд и
                      формат проекта.
                    </h3>
                    <p className="relative z-10 mt-4 max-w-md leading-7 text-[#fff0e2]/68">
                      Mars Capsule адаптируется под формат проекта и может стать
                      не просто объектом размещения, а флагманской точкой
                      притяжения с архитектурной, эмоциональной и
                      коммуникационной ценностью.
                    </p>

                    <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <a
                        href="https://t.me/Parmegano"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#fff0e0] px-6 text-sm font-semibold text-[#4a1f11] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,214,183,0.12)]"
                      >
                        Написать в Telegram
                      </a>
                      <a
                        href="mailto:megadoze33@gmail.com"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 text-sm text-[#fff4ea] transition duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                      >
                        hello@aeracapsule.com
                      </a>
                    </div>
                  </OrbitalFrame>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden pb-10 pt-10 md:pt-20"
        >
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src="/img/capsule-bg.avif"
              alt="Mars Capsule"
              className="h-full w-400 object-cover object-[center_35%] opacity-40"
            />

            {/* лёгкое вливание в фон */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(33,3,1,0.6))]" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <Container>
              <Reveal>
                <div className="rounded-[42px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.045))] px-6 py-10 shadow-[0_30px_80px_rgba(20,6,2,0.4)] backdrop-blur-2xl md:px-10 md:py-14">
                  <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.22em] text-[#ffe0c8]/66">
                        Финальный акцент
                      </div>

                      <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#fff5ec] md:text-5xl">
                        Mars Capsule — архитектура,
                        <span className="block">
                          которая может стать брендом.
                        </span>
                      </h2>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row md:justify-self-end">
                      <a
                        href="https://t.me/Parmegano"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#fff0e0] px-6 text-sm font-semibold text-[#4a1f11] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,214,183,0.12)] w-full sm:w-auto"
                      >
                        Обсудить интеграцию
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </Container>
            <div className="mt-8 px-5 text-center md:mt-10 md:px-8">
              <div className="mx-auto  pt-5 text-[11px] uppercase tracking-[0.18em] text-[#ffe0c8]/42 md:text-[12px]">
                © 2026 AERA. All rights reserved.
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          @keyframes dustDrift {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              transform: translate3d(1.5%, -2%, 0) scale(1.03);
            }
            100% {
              transform: translate3d(3%, -4%, 0) scale(1.06);
            }
          }

          @keyframes floatSlow {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -18px, 0);
            }
          }

          @keyframes revealUp {
            0% {
              opacity: 0;
              transform: translate3d(0, 24px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          .reveal-shell {
            opacity: 1;
          }

          .reveal-shell > .reveal-inner {
            opacity: 0;
            transform: translate3d(0, 24px, 0);
          }

          .reveal-shell.in-view > .reveal-inner {
            animation: revealUp 850ms var(--ease-luxury) forwards;
            animation-delay: var(--reveal-delay, 0ms);
          }

          @media (prefers-reduced-motion: reduce) {
            .reveal-shell > .reveal-inner {
              opacity: 1;
              transform: none;
            }

            .reveal-shell.in-view > .reveal-inner {
              animation: none;
            }
          }

          @keyframes scrollCue {
            0% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }
            20% {
              opacity: 0.95;
            }
            60% {
              transform: translate3d(0, 18px, 0);
              opacity: 0.35;
            }
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }
          }
        `}</style>
      </main>
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-5 md:px-8">{children}</div>
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
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
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

function PremiumPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[48px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,248,242,0.12),rgba(255,244,236,0.06))] p-7 shadow-[0_20px_80px_rgba(20,6,2,0.2)] transition duration-300 hover:-translate-y-px hover:border-white/16 hover:shadow-[0_26px_84px_rgba(20,6,2,0.22)] md:min-h-[285px] md:backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-[18%] top-[-18%] h-24 rounded-full bg-[radial-gradient(circle,rgba(255,224,202,0.14)_0%,transparent_72%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-[12%] bottom-[-34%] h-24 rounded-full bg-[radial-gradient(circle,rgba(235,182,133,0.1)_0%,transparent_72%)] blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute right-[-8%] top-[12%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,230,204,0.08)_0%,transparent_72%)] blur-2xl" />
      </div>
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}

function OrbitalFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[42px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,248,242,0.12),rgba(255,244,236,0.06))] shadow-[0_24px_90px_rgba(20,6,2,0.24)] transition duration-300 hover:-translate-y-px hover:border-white/16 hover:shadow-[0_26px_84px_rgba(20,6,2,0.22)] md:backdrop-blur-2xl before:absolute before:inset-x-[16%] before:top-[-8%] before:h-24 before:rounded-full before:bg-[radial-gradient(circle,rgba(255,221,195,0.11)_0%,transparent_72%)] before:blur-2xl",
        className,
      ].join(" ")}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function SoftTrack({ children }: { children: React.ReactNode }) {
  return (
    <div className="group rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,242,0.14),rgba(255,244,236,0.08))] px-5 py-5 shadow-[0_12px_40px_rgba(20,6,2,0.10)] transition duration-300 hover:-translate-y-0.5 hover:border-white/16 md:backdrop-blur-xl">
      {children}
    </div>
  );
}
