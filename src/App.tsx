import { MessageSquare } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"
import { Link, Route, Routes, useLocation } from "react-router"
import { Footer, Header } from "./components/Layout"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { News } from "./pages/News"
import { Products } from "./pages/Products"

const seo: Record<string, { title: string; description: string }> = {
  "/": {
    title:
      "Hebei Prolink Trading | Premium Caps, Hats & Export Goods from China",
    description:
      "Hebei Prolink Import and Export Trading Co., Ltd. — ISO-certified manufacturer and exporter of premium caps, hats, winter wear, kitchenware, bags and rainwear since 2004.",
  },
  "/about": {
    title: "About Us | Hebei Prolink Trading — 20+ Years of Export Excellence",
    description:
      "Founded in 2004, Hebei Prolink is an ISO9000-certified, AA-grade trading enterprise in Shijiazhuang, China. Learn about our history, mission, and core values.",
  },
  "/products": {
    title: "Products | Premium Caps, Hats, Winter Wear & More — Hebei Prolink",
    description:
      "Browse our catalog of premium caps, baseball hats, winter wear, kitchenware, bags, and rainwear. Custom manufacturing and bulk export solutions available.",
  },
  "/news": {
    title: "News & Insights | Hebei Prolink Trading",
    description:
      "Latest updates from Hebei Prolink — industry trends, product launches, company milestones, and global trade insights.",
  },
  "/contact": {
    title: "Contact Us | Hebei Prolink Trading — Get a Quote",
    description:
      "Contact Hebei Prolink for bulk orders, custom manufacturing, or export inquiries. Reach our team in Shijiazhuang, Hebei, China.",
  },
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const { title, description } = seo[location.pathname] ?? seo["/"]
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description)

    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="selection:bg-primary-blue flex min-h-screen flex-col font-sans selection:text-white">
      <Header />

      <main className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Persistent CTA */}
      <Link
        to="/contact"
        className="bg-primary-red group fixed right-8 bottom-8 z-40 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <MessageSquare
          size={28}
          className="transition-transform group-hover:rotate-12"
        />
        <span className="bg-primary-blue pointer-events-none absolute right-full mr-4 px-4 py-2 text-sm font-bold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
          Contact Us
        </span>
      </Link>
    </div>
  )
}
