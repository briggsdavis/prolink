import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Search,
  Filter,
  ChevronRight,
  X,
  ShoppingBag,
  ArrowRight,
} from "lucide-react"
import { FadeIn } from "../components/Animations"

type Category =
  | "All"
  | "Caps"
  | "Winter Wear"
  | "Kitchenware"
  | "Bags"
  | "Rainwear"

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const categories: Category[] = [
    "All",
    "Caps",
    "Winter Wear",
    "Kitchenware",
    "Bags",
    "Rainwear",
  ]

  // Mock products
  const products = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    name: `${i % 5 === 0 ? "Signature" : "Premium"} ${i % 3 === 0 ? "Baseball" : "Snapback"} Cap v${i + 1}`,
    category:
      i < 20
        ? "Caps"
        : i < 30
          ? "Winter Wear"
          : i < 40
            ? "Kitchenware"
            : i < 45
              ? "Bags"
              : "Rainwear",
    image: `https://picsum.photos/seed/prod${i}/600/600`,
    colors: ["#345eb3", "#b61011", "#608be1", "#f8f9fa"],
    description:
      "A high-fidelity prototype product showing the quality and craftsmanship of Hebei Prolink.",
    technical: "100% Cotton, Adjustable Strap, High-density Embroidery.",
  }))

  const filteredProducts = products.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="pt-24 min-h-screen bg-light-grey">
      {/* Header */}
      <section className="bg-white border-b py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                Our Catalog
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                Premium <br />
                Collection
              </h1>
            </div>
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-16 pr-8 py-5 border-2 border-slate-100 focus:outline-none focus:border-primary-blue transition-all bg-slate-50 focus:bg-white rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="sticky top-32">
            <div className="flex items-center gap-2 mb-8 text-slate-900 font-bold uppercase tracking-widest text-sm">
              <Filter size={18} />
              Categories
            </div>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-all flex items-center justify-between group rounded-full mb-2 ${
                    activeCategory === cat
                      ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/20"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${activeCategory === cat ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-12 p-10 bg-white border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-3xl" />
              <h4 className="text-xl font-bold mb-4 relative z-10 tracking-tight text-slate-900">
                Custom Orders?
              </h4>
              <p className="text-slate-500 text-sm mb-8 relative z-10 leading-relaxed">
                We provide tailored manufacturing solutions for your specific
                brand requirements.
              </p>
              <button className="glass-button-primary text-white px-6 py-3 font-bold text-sm flex items-center gap-2 group relative z-10 hover:bg-primary-red transition-all rounded-full">
                Inquire Now{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <main className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
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
                  <div className="aspect-square bg-white overflow-hidden mb-8 relative shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="glass-button text-slate-900 px-8 py-3 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all rounded-full">
                        Quick View
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-blue transition-colors tracking-tight">
                    {product.name}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <ShoppingBag size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
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
              className="relative bg-white w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 glass-button flex items-center justify-center text-slate-900 hover:bg-white transition-all shadow-sm rounded-full"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 bg-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-16 flex flex-col">
                <div className="flex-grow">
                  <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight">
                    {selectedProduct.name}
                  </h2>

                  <div className="mb-12">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">
                      Color Variants
                    </h4>
                    <div className="flex gap-4">
                      {selectedProduct.colors.map(
                        (color: string, i: number) => (
                          <button
                            key={i}
                            className="w-10 h-10 border-2 border-white ring-1 ring-slate-100 hover:ring-primary-blue transition-all rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">
                      Description
                    </h4>
                    <p className="text-slate-500 text-lg leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="bg-light-grey p-8 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-4">
                      Technical Details
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {selectedProduct.technical}
                    </p>
                  </div>
                </div>

                <div className="mt-16 flex gap-6">
                  <button className="flex-grow glass-button-primary text-white py-5 font-bold hover:bg-primary-red transition-all text-lg rounded-full">
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
