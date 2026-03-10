import {
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Heart,
  Lightbulb,
} from "lucide-react"
import { motion } from "motion/react"
import React from "react"
import { Link } from "react-router"
import { FadeIn } from "../components/Animations"

export const About = () => {
  const timeline = [
    {
      year: "2004",
      title: "Foundation",
      desc: "Hebei Prolink Import and Export Trading Co., Ltd. was established in Hebei, China.",
    },
    {
      year: "2010",
      title: "ISO Certification",
      desc: "Achieved ISO9000 certification, marking a milestone in quality management.",
    },
    {
      year: "2015",
      title: "Customs Recognition",
      desc: 'Recognized as a "Leading Index Model Enterprise" by China Customs.',
    },
    {
      year: "2018",
      title: "Digital Transformation",
      desc: "Implemented advanced digital office systems to enhance global trading efficiency.",
    },
    {
      year: "2024",
      title: "20 Years of Excellence",
      desc: "Celebrating two decades of credibility, reliability, and high-quality service.",
    },
  ]

  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Credibility",
      desc: "Building long-term trust through transparent and honest business practices.",
    },
    {
      icon: <Heart size={32} />,
      title: "Reliability",
      desc: "Consistency in delivery and service that our global partners can depend on.",
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Quality",
      desc: "Uncompromising standards in every product we export, from caps to aprons.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      desc: "Continuously evolving our digital processes and product range for the modern market.",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] min-h-[550px] items-end overflow-hidden bg-black pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="About Background"
            className="h-full w-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <FadeIn>
            <img
              src="/pro.png"
              alt="Prolink Logo"
              className="mb-8 h-36 w-auto"
            />
            <span className="text-secondary-blue mb-6 block text-xs font-bold tracking-[0.3em] uppercase">
              Our Legacy
            </span>
            <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl">
              About <br />
              <span className="text-secondary-blue">Hebei Prolink</span>
            </h1>
            <Link
              to="/contact"
              className="glass-button hover:text-primary-blue rounded-full px-10 py-4 font-bold text-white transition-all hover:bg-white"
            >
              Work with us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Company Profile */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-slate-900">
                A Role Model Enterprise <br />
                <span className="text-primary-blue">Since 2004</span>
              </h2>
              <div className="bg-primary-blue mb-8 h-1 w-24" />
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Founded in 2004, Hebei Prolink Import and Export Trading Co.,
                Ltd. has established itself as a leading index model enterprise
                in Shijiazhuang, Hebei Province.
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                With nearly 20 years of experience, we specialize in high-end
                caps, hats, and a wide range of premium export goods. Our
                commitment to credibility, reliability, and quality has earned
                us an AA-grade customer status by China Export Credit Insurance.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-video overflow-hidden shadow-xl">
                <img
                  src="https://picsum.photos/seed/office/1200/800"
                  alt="Our Digital Office"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-primary-blue absolute -bottom-6 -left-6 p-10 text-white shadow-xl">
                <span className="mb-1 block text-5xl font-black">20+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">
                  Years of Excellence
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="text-primary-blue mb-4 block text-sm font-bold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              Milestones of Success
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 hidden w-px bg-slate-200 md:block" />

            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, i) => (
                <div key={i}>
                  <FadeIn delay={i * 0.1}>
                    <div
                      className={`flex flex-col items-center gap-8 md:flex-row md:gap-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex w-full justify-center px-10 md:w-1/2 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                      >
                        <div
                          className={`max-w-sm border border-slate-100 bg-white p-8 shadow-sm ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                        >
                          <span className="text-primary-blue mb-2 block text-2xl font-black">
                            {item.year}
                          </span>
                          <h4 className="mb-3 text-xl font-bold text-slate-900">
                            {item.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-slate-500">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="border-primary-blue relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-4 bg-white">
                        <div className="bg-primary-blue h-3 w-3" />
                      </div>

                      <div className="hidden w-1/2 md:block" />
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-light-grey py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <FadeIn>
              <span className="text-primary-blue mb-6 block text-xs font-bold tracking-widest uppercase">
                Our Foundation
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
                Core Values
              </h2>
              <p className="text-base leading-relaxed text-slate-500">
                Our success is built on four pillars that guide every decision
                and interaction.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div key={i} className="h-full">
                <FadeIn delay={i * 0.1} className="h-full">
                  <div className="group flex h-full flex-col border border-slate-100 bg-white p-10 text-center transition-all hover:shadow-xl">
                    <div className="bg-light-grey text-primary-blue group-hover:bg-primary-blue mx-auto mb-8 flex h-20 w-20 items-center justify-center shadow-sm transition-all group-hover:text-white">
                      {value.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                      {value.title}
                    </h3>
                    <p className="flex-grow text-base leading-relaxed text-slate-500">
                      {value.desc}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-white py-24 text-slate-900">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
          <FadeIn>
            <div className="bg-light-grey h-full border border-slate-100 p-12">
              <Target size={48} className="text-primary-blue mb-8" />
              <h3 className="mb-6 text-3xl font-bold tracking-tight">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                To provide the global market with high-quality, reliable export
                products while maintaining the highest standards of credibility
                and efficiency through digital innovation.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-light-grey h-full border border-slate-100 p-12">
              <Eye size={48} className="text-primary-blue mb-8" />
              <h3 className="mb-6 text-3xl font-bold tracking-tight">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                To be the world's most trusted partner in international trade,
                setting the benchmark for "Role Model Enterprises" through
                excellence in quality and service.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
