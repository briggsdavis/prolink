import {
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  X,
  ShoppingBag,
  ArrowRight,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import React, { useState } from "react"

const catalog = [
  {
    name: "Caps & Hats",
    subcategories: [
      "Promotional Caps",
      "Baseball Caps",
      "Trucker Caps",
      "Visors",
      "Military Style Caps",
      "Back Cap",
      "Kitchen Hat",
      "Bucket Hat",
      "Eco-Friendly Caps",
      "Beanies",
      "Polar Fleece Hat",
      "Winter Cap",
      "Kids Cap",
      "Fashion Cap",
      "Jean Cap",
      "Work Cap",
    ],
  },
  {
    name: "Beanie, Scarf & Blanket",
    subcategories: [
      "Scarf",
      "Glove",
      "Blanket",
      "Headband",
      "Wristband Set",
      "Bandana",
      "Apron",
      "Bread Basket",
      "Others",
    ],
  },
  {
    name: "Gloves Apron Shopping Bag",
    subcategories: ["Shopping Bag", "Drawstring Bag", "Handbag", "Others"],
  },
  {
    name: "Raincoat & Poncho",
    subcategories: ["Economic Poncho", "Poncho", "Sleeves", "Apron"],
  },
]

const products = catalog.flatMap((cat) =>
  cat.subcategories.flatMap((sub, si) =>
    [0, 1].map((j) => ({
      id: `${cat.name}-${si}-${j}`,
      name: j === 0 ? `Classic ${sub}` : `Premium ${sub}`,
      category: cat.name,
      subcategory: sub,
      image: `https://picsum.photos/seed/${cat.name.replace(/\W/g, "")}${si}${j}/600/600`,
      colors: ["#345eb3", "#b61011", "#608be1", "#f8f9fa"],
      description: `High-quality ${sub.toLowerCase()} crafted to Prolink's export standards. Ideal for bulk wholesale and custom branding.`,
      technical:
        "100% quality-certified materials. Customizable dimensions, colors, and branding options available.",
    })),
  ),
)

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSubcategories, setActiveSubcategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null)

  const handleCategoryClick = (name: string) => {
    if (activeCategory === name) {
      setActiveCategory(null)
      setActiveSubcategories([])
    } else {
      setActiveCategory(name)
      setActiveSubcategories([])
    }
  }

  const handleSubcategoryClick = (sub: string) => {
    setActiveSubcategories((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub],
    )
  }

  const filtered = products.filter((p) => {
    const matchesCat = !activeCategory || p.category === activeCategory
    const matchesSub =
      activeSubcategories.length === 0 ||
      activeSubcategories.includes(p.subcategory)
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCat && matchesSub && matchesSearch
  })

  return (
    <div className="bg-light-grey min-h-screen pt-24">
      {/* Header */}
      <section className="border-b bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <span className="text-primary-blue mb-4 block text-sm font-bold tracking-[0.3em] uppercase">
                Our Catalog
              </span>
              <h1 className="text-5xl leading-tight font-bold tracking-tight text-slate-900 md:text-6xl">
                Premium <br />
                Collection
              </h1>
            </div>
            <div className="relative w-full md:w-96">
              <Search
                className="absolute top-1/2 left-6 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="focus:border-primary-blue w-full rounded-full border-2 border-slate-100 bg-slate-50 py-5 pr-8 pl-16 transition-all focus:bg-white focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-12 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-32">
            <div className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-slate-900 uppercase">
              <Filter size={18} />
              Categories
            </div>

            {/* All */}
            <button
              onClick={() => {
                setActiveCategory(null)
                setActiveSubcategories([])
              }}
              className={`group mb-2 flex w-full items-center justify-between rounded-full px-6 py-3 text-left text-sm font-medium transition-all ${
                !activeCategory
                  ? "bg-primary-blue shadow-primary-blue/20 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              All Products
              <ChevronRight
                size={16}
                className={`transition-transform ${!activeCategory ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`}
              />
            </button>

            <div className="space-y-1">
              {catalog.map((cat) => {
                const isOpen = activeCategory === cat.name
                return (
                  <div key={cat.name}>
                    <button
                      onClick={() => handleCategoryClick(cat.name)}
                      className={`group flex w-full items-center justify-between rounded-full px-6 py-3 text-left text-sm font-medium transition-all ${
                        isOpen
                          ? "bg-primary-blue shadow-primary-blue/20 text-white shadow-lg"
                          : "bg-white text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {cat.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 pt-1 pb-2 pl-4">
                            {cat.subcategories.map((sub) => (
                              <button
                                key={sub}
                                onClick={() => handleSubcategoryClick(sub)}
                                className={`group flex w-full items-center justify-between rounded-full px-5 py-2 text-left text-xs font-medium transition-all ${
                                  activeSubcategories.includes(sub)
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                }`}
                              >
                                {sub}
                                <ChevronRight
                                  size={12}
                                  className={`transition-transform ${activeSubcategories.includes(sub) ? "translate-x-0.5" : "opacity-0 group-hover:opacity-100"}`}
                                />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            <div className="relative mt-10 overflow-hidden border border-slate-100 bg-white p-10">
              <div className="bg-primary-blue/5 absolute top-0 right-0 h-32 w-32 rounded-full blur-3xl" />
              <h4 className="relative z-10 mb-4 text-xl font-bold tracking-tight text-slate-900">
                Custom Orders?
              </h4>
              <p className="relative z-10 mb-8 text-sm leading-relaxed text-slate-500">
                We provide tailored manufacturing solutions for your specific
                brand requirements.
              </p>
              <button className="glass-button-primary group hover:bg-primary-red relative z-10 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all">
                Inquire Now
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <main className="flex-grow">
          {activeSubcategories.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Filtered by:
              </span>
              {activeSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => handleSubcategoryClick(sub)}
                  className="hover:bg-primary-blue flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-all"
                >
                  {sub}
                  <X size={12} />
                </button>
              ))}
              <button
                onClick={() => setActiveSubcategories([])}
                className="text-xs font-bold text-slate-400 underline transition-colors hover:text-slate-600"
              >
                Clear all
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative mb-4 aspect-square overflow-hidden bg-white shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="bg-primary-blue/10 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="glass-button translate-y-4 transform rounded-full px-8 py-3 text-sm font-bold text-slate-900 transition-all group-hover:translate-y-0">
                        Quick View
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-blue mb-1 block text-[10px] font-bold tracking-[0.2em] uppercase">
                    {product.subcategory}
                  </span>
                  <h3 className="group-hover:text-primary-blue text-lg font-bold tracking-tight text-slate-900 transition-colors">
                    {product.name}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <ShoppingBag size={48} className="mx-auto mb-4 text-slate-200" />
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                No products found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative flex w-full max-w-5xl flex-col overflow-hidden bg-white shadow-2xl md:flex-row"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="glass-button absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full text-slate-900 shadow-sm transition-all hover:bg-white"
              >
                <X size={20} />
              </button>

              <div className="w-full bg-slate-100 md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex w-full flex-col p-16 md:w-1/2">
                <div className="flex-grow">
                  <span className="text-primary-blue mb-2 block text-xs font-bold tracking-[0.3em] uppercase">
                    {selectedProduct.category}
                  </span>
                  <span className="mb-6 block text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {selectedProduct.subcategory}
                  </span>
                  <h2 className="mb-10 text-4xl font-bold tracking-tight text-slate-900">
                    {selectedProduct.name}
                  </h2>

                  <div className="mb-12">
                    <h4 className="mb-6 text-xs font-bold tracking-[0.2em] text-slate-900 uppercase">
                      Color Variants
                    </h4>
                    <div className="flex gap-4">
                      {selectedProduct.colors.map((color, i) => (
                        <button
                          key={i}
                          className="hover:ring-primary-blue h-10 w-10 rounded-full border-2 border-white ring-1 ring-slate-100 transition-all"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-900 uppercase">
                      Description
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-500">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="bg-light-grey border border-slate-100 p-8">
                    <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-900 uppercase">
                      Technical Details
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {selectedProduct.technical}
                    </p>
                  </div>
                </div>

                <div className="mt-16 flex gap-6">
                  <button className="glass-button-primary hover:bg-primary-red flex-grow rounded-full py-5 text-lg font-bold text-white transition-all">
                    Inquire for Bulk Order
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
