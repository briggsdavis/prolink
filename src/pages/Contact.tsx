import {
  ArrowRight,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import { FadeIn } from "../components/Animations"

export const Contact = () => {
  return (
    <div className="bg-light-grey min-h-screen pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h3 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="group flex gap-8">
                    <div className="text-primary-blue group-hover:bg-primary-blue flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-all group-hover:text-white">
                      <Phone size={28} />
                    </div>
                    <div>
                      <span className="mb-2 block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Phone
                      </span>
                      <p className="text-lg font-bold text-slate-900">
                        +86 123 4567 890
                      </p>
                      <p className="text-sm text-slate-500">
                        Mon-Fri, 9am - 6pm CST
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-8">
                    <div className="text-primary-blue group-hover:bg-primary-blue flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-all group-hover:text-white">
                      <Mail size={28} />
                    </div>
                    <div>
                      <span className="mb-2 block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Email
                      </span>
                      <p className="text-lg font-bold text-slate-900">
                        info@prolink-trading.com
                      </p>
                      <p className="text-sm text-slate-500">
                        sales@prolink-trading.com
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-8">
                    <div className="text-primary-blue group-hover:bg-primary-blue flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-all group-hover:text-white">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <span className="mb-2 block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Address
                      </span>
                      <p className="text-lg font-bold text-slate-900">
                        Hebei Prolink Building
                      </p>
                      <p className="text-sm leading-relaxed text-slate-500">
                        No. 123 Trade Avenue, Shijiazhuang, Hebei Province,
                        China
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden border border-slate-100 bg-white p-12">
                <div className="bg-primary-blue/5 absolute top-0 right-0 h-32 w-32 rounded-full blur-3xl" />
                <Clock size={48} className="text-primary-blue mb-8" />
                <h4 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
                  Global Support
                </h4>
                <p className="mb-8 text-lg leading-relaxed text-slate-500">
                  Our digital office ensures we are responsive to global time
                  zones. Expect a response within 24 hours.
                </p>
                <div className="text-primary-blue flex items-center gap-3 font-bold">
                  <Globe size={20} />
                  Available Worldwide
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="border border-slate-100 bg-white p-10 shadow-2xl shadow-slate-200/50">
                  <h3 className="mb-8 text-3xl font-bold tracking-tight text-slate-900">
                    Inquiry Form
                  </h3>
                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="ml-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John"
                          className="focus:border-primary-blue w-full rounded-full border-2 border-slate-50 bg-slate-50 px-6 py-3 transition-all focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="ml-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="focus:border-primary-blue w-full rounded-full border-2 border-slate-50 bg-slate-50 px-6 py-3 transition-all focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="ml-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="focus:border-primary-blue w-full rounded-full border-2 border-slate-50 bg-slate-50 px-6 py-3 transition-all focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="ml-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          WhatsApp
                        </label>
                        <input
                          type="text"
                          placeholder="+1 234 567 890"
                          className="focus:border-primary-blue w-full rounded-full border-2 border-slate-50 bg-slate-50 px-6 py-3 transition-all focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="ml-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        className="focus:border-primary-blue w-full resize-none rounded-3xl border-2 border-slate-50 bg-slate-50 px-6 py-3 transition-all focus:bg-white focus:outline-none"
                      />
                    </div>

                    <button className="glass-button-primary hover:bg-primary-red flex w-full items-center justify-center gap-4 rounded-full py-4 text-lg font-bold text-white transition-all active:scale-[0.99]">
                      Send Inquiry
                      <Send size={24} />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-150 overflow-hidden bg-slate-100">
        <img
          src="https://picsum.photos/seed/map/1920/1080?grayscale"
          alt="Map Placeholder"
          className="h-full w-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex max-w-md flex-col items-center rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-2xl">
            <div className="bg-primary-blue shadow-primary-blue/30 mb-8 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg">
              <MapPin size={36} />
            </div>
            <h4 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
              Hebei Prolink HQ
            </h4>
            <p className="mb-8 text-lg text-slate-500">
              Shijiazhuang, Hebei Province, China
            </p>
            <button className="text-primary-blue border-primary-blue/10 hover:bg-primary-blue/5 flex items-center gap-3 rounded-full border px-8 py-3 text-lg font-bold transition-all hover:gap-5">
              Get Directions <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
