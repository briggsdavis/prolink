import {
  Menu,
  X,
  Globe,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Search,
  Filter,
  ArrowRight,
  MessageSquare,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router"

// --- Types ---
export type Page = "home" | "about" | "products" | "news" | "contact"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
]

// --- Components ---

const languages = [
  { code: "EN", flag: "🇬🇧", name: "English" },
  { code: "CN", flag: "🇨🇳", name: "Chinese" },
  { code: "ES", flag: "🇪🇸", name: "Spanish" },
  { code: "FR", flag: "🇫🇷", name: "French" },
  { code: "DE", flag: "🇩🇪", name: "German" },
  { code: "JA", flag: "🇯🇵", name: "Japanese" },
  { code: "PT", flag: "🇵🇹", name: "Portuguese" },
  { code: "AR", flag: "🇸🇦", name: "Arabic" },
  { code: "RU", flag: "🇷🇺", name: "Russian" },
  { code: "KO", flag: "🇰🇷", name: "Korean" },
]

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])
  const [langOpen, setLangOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }
  const langRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white py-6 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center">
          <img
            src="/pro.png"
            alt="Prolink Logo"
            className="h-12 w-auto transition-transform group-hover:scale-110"
          />
        </Link>

        {/* Middle slot — self-stretch so height matches logo (h-12). Search button lives here so search bar can cover it. */}
        <div className="relative hidden flex-1 items-center self-stretch md:flex">
          {/* Nav — absolutely centered, fades out when search opens */}
          <nav
            className={`pointer-events-none absolute inset-0 flex items-center justify-center gap-8 transition-opacity duration-150 ${searchOpen ? "opacity-0" : "opacity-100"}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-primary-blue group pointer-events-auto relative text-sm font-bold tracking-widest uppercase transition-colors ${
                  location.pathname === link.path
                    ? "text-slate-900"
                    : "text-slate-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-slate-900 transition-all group-hover:w-full ${location.pathname === link.path ? "w-full" : ""}`}
                />
              </Link>
            ))}
          </nav>

          {/* Search toggle — in flow, pushed right, so search bar covers its space */}
          <button
            onClick={() => setSearchOpen(true)}
            className={`ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-opacity duration-150 hover:bg-slate-50 ${searchOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <Search size={16} />
          </button>

          {/* Search bar — absolute inset-0 covers nav + search button */}
          <form
            onSubmit={handleSearch}
            className={`border-primary-blue absolute inset-0 flex items-center gap-3 rounded-full border-2 bg-slate-50 px-5 transition-opacity duration-150 ${
              searchOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <Search size={18} className="text-primary-blue shrink-0" />
            <input
              tabIndex={searchOpen ? 0 : -1}
              ref={(el) => {
                if (searchOpen && el) setTimeout(() => el.focus(), 0)
              }}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                setSearchOpen(false)
                setSearchQuery("")
              }}
              className="text-slate-400 transition-colors hover:text-slate-600"
            >
              <X size={16} />
            </button>
          </form>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Language picker */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-900 transition-all hover:bg-slate-50"
            >
              <span>{lang.flag}</span>
              <span>{lang.code}</span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl"
                >
                  <div className="max-h-72 overflow-y-auto">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l)
                          setLangOpen(false)
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-left text-xs transition-colors ${
                          lang.code === l.code
                            ? "bg-primary-blue/5 text-primary-blue font-bold"
                            : "font-medium text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.name}</span>
                        <span className="ml-auto font-bold text-slate-400">
                          {l.code}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="bg-primary-red hover:bg-primary-blue hidden rounded-full px-8 py-2.5 text-sm font-bold text-white shadow-lg transition-all active:scale-95 md:block"
          >
            Contact
          </Link>
          <button
            className="text-slate-900 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} className="text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left text-lg font-medium ${location.pathname === link.path ? "text-primary-blue" : "text-slate-600"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary-blue rounded-full px-6 py-3 text-center font-bold text-white shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-light-grey border-t border-slate-100 pt-24 pb-12 text-slate-900">
      <div className="mx-auto mb-24 grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-8 flex items-center gap-2">
            <div className="bg-primary-blue flex h-12 w-12 items-center justify-center rounded-full text-2xl font-bold text-white">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-xl leading-none font-bold tracking-tight">
                PROLINK
              </span>
              <span className="text-[10px] tracking-widest uppercase opacity-60">
                Import & Export
              </span>
            </div>
          </div>
          <p className="mb-8 text-sm leading-relaxed text-slate-500">
            A leading index model enterprise founded in 2004, specializing in
            high-end caps, hats, and global trading solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:bg-primary-blue flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:bg-primary-blue flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:bg-primary-blue flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:text-white"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>
              <Link
                to="/"
                className="hover:text-primary-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary-blue transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary-blue transition-colors"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="hover:text-primary-blue transition-colors"
              >
                Latest News
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-blue transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-bold">Products</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>
              <Link
                to="/products"
                className="hover:text-primary-blue transition-colors"
              >
                Signature Caps
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary-blue transition-colors"
              >
                Winter Wear
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary-blue transition-colors"
              >
                Kitchenware & Aprons
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary-blue transition-colors"
              >
                Bags & Accessories
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary-blue transition-colors"
              >
                Rainwear
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary-blue shrink-0" />
              <span>Hebei, China</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary-blue shrink-0" />
              <span>+86 123 4567 890</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary-blue shrink-0" />
              <span>info@prolink-trading.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-10 text-xs text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Hebei Prolink Import and Export Trading
          Co., Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
