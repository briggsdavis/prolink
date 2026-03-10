import React from "react"
import { motion } from "motion/react"
import { FadeIn } from "../components/Animations"
import {
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Heart,
  Lightbulb,
} from "lucide-react"
import { Link } from "react-router"

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
      <section className="relative h-[45vh] min-h-[350px] flex items-center overflow-hidden bg-primary-blue">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="About Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <FadeIn>
            <span className="text-secondary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
              Our Legacy
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
              About <br />
              <span className="text-secondary-blue">Hebei Prolink</span>
            </h1>
            <Link
              to="/contact"
              className="glass-button text-white px-10 py-4 font-bold rounded-full hover:bg-white hover:text-primary-blue transition-all"
            >
              Work with us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                A Role Model Enterprise <br />
                <span className="text-primary-blue">Since 2004</span>
              </h2>
              <div className="w-24 h-1 bg-primary-blue mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2004, Hebei Prolink Import and Export Trading Co.,
                Ltd. has established itself as a leading index model enterprise
                in Shijiazhuang, Hebei Province.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
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
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-blue text-white p-10 shadow-xl">
                <span className="text-5xl font-black block mb-1">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Years of Excellence
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              Milestones of Success
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, i) => (
                <div key={i}>
                  <FadeIn delay={i * 0.1}>
                    <div
                      className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="w-full md:w-1/2 flex justify-center md:justify-start px-10">
                        <div
                          className={`max-w-sm p-8 bg-white shadow-sm border border-slate-100 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                        >
                          <span className="text-primary-blue font-black text-2xl mb-2 block">
                            {item.year}
                          </span>
                          <h4 className="text-xl font-bold text-slate-900 mb-3">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 w-12 h-12 bg-white border-4 border-primary-blue flex items-center justify-center shrink-0">
                        <div className="w-3 h-3 bg-primary-blue" />
                      </div>

                      <div className="hidden md:block w-1/2" />
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="text-primary-blue font-bold uppercase tracking-widest text-xs mb-6 block">
                Our Foundation
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Core Values
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                Our success is built on four pillars that guide every decision
                and interaction.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="p-10 bg-white border border-slate-100 hover:shadow-xl transition-all group text-center h-full flex flex-col">
                    <div className="w-20 h-20 bg-light-grey shadow-sm flex items-center justify-center text-primary-blue mb-8 mx-auto group-hover:bg-primary-blue group-hover:text-white transition-all">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-base flex-grow">
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
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <FadeIn>
            <div className="p-12 bg-light-grey border border-slate-100 h-full">
              <Target size={48} className="text-primary-blue mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide the global market with high-quality, reliable export
                products while maintaining the highest standards of credibility
                and efficiency through digital innovation.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-12 bg-light-grey border border-slate-100 h-full">
              <Eye size={48} className="text-primary-blue mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                Our Vision
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
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
