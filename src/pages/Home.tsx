import {
  ArrowRight,
  Globe,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router"
import { CountUp, FadeIn } from "../components/Animations"

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[75vh] min-h-[500px] items-stretch overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            alt="Premium caps and hats manufacturing"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col items-end md:flex-row">
          <div className="bg-primary-blue flex min-h-[250px] w-full flex-col justify-center p-10 text-white md:w-[55%] md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-5 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
                Premium Caps & Hats
                <br />
                Manufactured & Exported
              </h1>
              <p className="max-w-md text-base leading-relaxed font-medium opacity-90 md:text-lg">
                ISO 9000 certified manufacturer since 2004. Bulk orders,
                custom designs, and reliable global shipping from China.
              </p>
            </motion.div>
          </div>
          <Link
            to="/contact"
            className="bg-primary-red group flex w-full cursor-pointer items-center justify-between rounded-l-full p-10 text-white shadow-2xl md:w-[35%] md:rounded-l-none md:rounded-r-full md:p-14"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              Request a Quote
            </span>
            <div className="text-primary-red flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-110">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="overflow-hidden border-b border-slate-100 bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-3">
            {[
              {
                label: "Years of manufacturing experience",
                value: 20,
                suffix: "+",
              },
              { label: "Units produced annually", value: 5, suffix: "M+" },
              { label: "Countries exported to", value: 30, suffix: "+" },
              { label: "Satisfied B2B clients", value: 500, suffix: "+" },
              { label: "Product styles available", value: 200, suffix: "+" },
              { label: "On-time delivery rate", value: 98, suffix: "%" },
            ].map((fig, i) => (
              <div key={i} className="relative">
                <div className="relative mb-8 h-1.5 w-full overflow-hidden bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="bg-primary-blue absolute top-0 left-0 h-full"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary-blue text-5xl font-bold tracking-tight">
                    <CountUp to={fig.value} duration={2.5} />
                    {fig.suffix}
                  </span>
                  <span className="max-w-[150px] text-sm leading-tight font-medium text-slate-500">
                    {fig.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-light-grey relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <FadeIn>
              <h2 className="mb-12 text-4xl leading-tight font-bold tracking-tight text-slate-900 md:text-6xl">
                Your Trusted Partner for <br />
                <span className="text-primary-blue">Quality Headwear</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <div className="bg-primary-blue group hover:bg-primary-red flex h-full cursor-pointer flex-col p-12 text-white transition-colors">
                <CheckCircle2 size={28} className="mb-6 opacity-60" />
                <h3 className="mb-3 text-2xl font-bold">Custom Manufacturing</h3>
                <p className="text-base opacity-80">
                  OEM and ODM production with your branding, materials, and specifications.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-secondary-blue group hover:bg-primary-red flex h-full cursor-pointer flex-col p-12 text-white transition-colors">
                <TrendingUp size={28} className="mb-6 opacity-60" />
                <h3 className="mb-3 text-2xl font-bold">Bulk Export</h3>
                <p className="text-base opacity-80">
                  Competitive pricing at scale with reliable shipping to 30+ countries.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-primary-red group hover:bg-secondary-red flex h-full cursor-pointer flex-col p-12 text-white transition-colors">
                <Globe size={28} className="mb-6 opacity-60" />
                <h3 className="mb-3 text-2xl font-bold">Quality Assurance</h3>
                <p className="text-base opacity-80">
                  ISO 9000 certified processes with rigorous inspection at every stage.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <span className="text-primary-blue mb-4 block text-sm font-bold tracking-widest uppercase">
                Our Collection
              </span>
              <h2 className="text-5xl font-bold tracking-tight text-slate-900">
                Signature Caps
              </h2>
            </div>
            <Link
              to="/products"
              className="glass-button-dark hover:border-primary-blue hover:text-primary-blue rounded-full px-10 py-4 font-bold shadow-sm transition-all hover:shadow-md"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&q=80&w=800",
                name: "Classic Baseball Cap",
                spec: "Embroidered Logo • 100% Cotton",
              },
              {
                img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=800",
                name: "Structured Snapback",
                spec: "Flat Brim • Adjustable Closure",
              },
              {
                img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800",
                name: "Knit Beanie",
                spec: "Acrylic Blend • Winter Collection",
              },
              {
                img: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&q=80&w=800",
                name: "Trucker Cap",
                spec: "Mesh Back • Breathable Design",
              },
            ].map((product, i) => (
              <div key={i}>
                <FadeIn delay={(i + 1) * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="relative mb-8 aspect-square overflow-hidden bg-slate-50 transition-all duration-500 group-hover:shadow-2xl">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="bg-primary-blue absolute top-0 right-0 px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase">
                        New Arrival
                      </div>
                    </div>
                    <h3 className="group-hover:text-primary-blue mb-2 text-xl font-bold text-slate-900 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">
                      {product.spec}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Newsletter Section */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div>
              <span className="text-primary-blue mb-6 block text-xs font-bold tracking-widest uppercase">
                Stay Updated
              </span>
              <h2 className="mb-10 text-4xl font-bold tracking-tight md:text-6xl">
                Latest Updates
              </h2>
              <div className="space-y-10">
                {[
                  { img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400" },
                  { img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&q=80&w=400" },
                ].map((news, i) => (
                  <div key={i} className="group flex cursor-pointer gap-6">
                    <div className="h-28 w-28 shrink-0 overflow-hidden">
                      <img
                        src={news.img}
                        alt="News"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-primary-blue mb-2 block text-[10px] font-bold tracking-widest uppercase">
                        Industry News • March {new Date().getFullYear()}
                      </span>
                      <h4 className="group-hover:text-primary-blue text-xl leading-tight font-bold transition-colors">
                        Hebei Prolink Expands to New European Markets
                      </h4>
                      <p className="mt-2 line-clamp-1 text-xs text-slate-500">
                        Our latest expansion brings high-quality headwear to the
                        Nordic region...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/news"
                className="hover:text-primary-blue mt-12 inline-flex items-center gap-2 text-base font-bold text-slate-900 transition-colors"
              >
                View All News <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-light-grey flex flex-col justify-center border border-slate-100 p-12">
              <TrendingUp size={48} className="text-primary-blue mb-6" />
              <h3 className="mb-4 text-3xl font-bold tracking-tight">
                Contact us directly
              </h3>
              <p className="mb-8 text-base leading-relaxed text-slate-500">
                Have specific requirements or need a tailored solution? Reach
                out to our team of experts for immediate assistance.
              </p>
              <Link
                to="/contact"
                className="glass-button-primary group flex items-center justify-center gap-3 rounded-full px-10 py-5 text-lg font-bold text-white transition-all hover:bg-slate-900"
              >
                Get in Touch
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
