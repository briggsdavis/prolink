import {
  ArrowRight,
  Calendar,
  User,
  Search,
  Filter,
  LayoutGrid,
  List,
  ChevronLeft,
  X,
  Clock,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import React, { useState } from "react"
import { FadeIn } from "../components/Animations"

type Category = "All" | "Industry" | "Product" | "Company"
type ViewMode = "grid" | "list"

export const News = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  const year = new Date().getFullYear()

  const articles = [
    {
      id: 1,
      title: "Hebei Prolink Expands to New European Markets",
      excerpt:
        "Our latest expansion brings high-quality headwear to the Nordic region, focusing on sustainable materials and digital supply chain integration.",
      content: `Hebei Prolink is proud to announce its strategic expansion into the Nordic markets, including Sweden, Norway, and Denmark. This move is part of our broader ${year} global strategy to establish a stronger presence in regions that value high-quality, sustainable manufacturing. Our digital supply chain integration allows us to provide real-time updates to our European partners, ensuring transparency and efficiency from factory floor to final delivery.`,
      date: `March 15, ${year}`,
      author: "Marketing Team",
      category: "Company",
      image: "https://picsum.photos/seed/news1/800/600",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: `Sustainable Materials in Headwear: The ${year} Trend`,
      excerpt:
        "Exploring how recycled polyester and organic cotton are reshaping the global cap industry and our commitment to eco-friendly manufacturing.",
      content:
        "The global headwear industry is undergoing a massive shift towards sustainability. At Hebei Prolink, we are leading this change by incorporating GRS-certified recycled polyester and organic cotton into our core collections. This article explores the technical challenges of maintaining premium quality while using eco-friendly materials and how our R&D team has overcome them to deliver products that are both stylish and responsible.",
      date: `March 10, ${year}`,
      author: "Product Design",
      category: "Product",
      image: "https://picsum.photos/seed/news2/800/600",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: `Global Trade Logistics: Navigating ${year} Challenges`,
      excerpt:
        "An in-depth look at the current state of international shipping and how digital office solutions are mitigating delays.",
      content: `International shipping continues to face volatility in ${year}. From port congestion to fluctuating fuel costs, exporters must be more agile than ever. Hebei Prolink’s "Leading Index Model Enterprise" status is a testament to our digital-first approach. By leveraging advanced logistics tracking and automated customs documentation, we’ve managed to reduce average transit times by 15% compared to industry standards.`,
      date: `March 5, ${year}`,
      author: "Logistics Dept",
      category: "Industry",
      image: "https://picsum.photos/seed/news5/800/600",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: 'Hebei Prolink Awarded "Leading Index Model Enterprise"',
      excerpt:
        "China Customs recognizes our digital office advantages and consistent export excellence for the third consecutive year.",
      content:
        "For the third year running, Hebei Prolink has been honored by China Customs as a Leading Index Model Enterprise. This prestigious recognition is awarded to companies that demonstrate exceptional consistency in export quality and digital infrastructure. Our investment in cloud-based management systems has allowed us to maintain seamless operations even during global disruptions, setting a benchmark for the industry.",
      date: `February 28, ${year}`,
      author: "Corporate Affairs",
      category: "Company",
      image: "https://picsum.photos/seed/news3/800/600",
      readTime: "3 min read",
    },
    {
      id: 5,
      title: `Winter Collection ${year}: Premium Beanies and Scarves`,
      excerpt:
        "A first look at our upcoming winter collection featuring high-density knits and innovative thermal lining technologies.",
      content: `Our ${year} Winter Collection is our most ambitious yet. Featuring high-density merino wool blends and our proprietary "Pro-Heat" thermal lining, these beanies and scarves are designed for extreme conditions without sacrificing urban style. We’ve also introduced a range of recycled cashmere options, further expanding our sustainable product offerings for the colder months.`,
      date: `February 15, ${year}`,
      author: "Sales Dept",
      category: "Product",
      image: "https://picsum.photos/seed/news4/800/600",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "The Future of Digital Manufacturing in China",
      excerpt:
        "How automation and AI are transforming traditional textile factories into smart manufacturing hubs.",
      content:
        'The "Made in China" label is evolving. At Hebei Prolink, we are at the forefront of the digital manufacturing revolution. By integrating AI-driven quality control and automated cutting systems, we’ve significantly reduced waste and increased precision. This shift not only improves our bottom line but also allows for greater customization and faster turnaround times for our global clients.',
      date: `February 5, ${year}`,
      author: "Operations",
      category: "Industry",
      image: "https://picsum.photos/seed/news6/800/600",
      readTime: "7 min read",
    },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory
    return matchesSearch && matchesCategory
  })

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl px-6 py-20"
        >
          <button
            onClick={() => setSelectedArticle(null)}
            className="hover:text-primary-blue group mb-12 flex items-center gap-2 text-slate-500 transition-colors"
          >
            <ChevronLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to News
          </button>

          <div className="mb-12 aspect-video w-full overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mb-8 flex items-center gap-6 text-sm font-bold tracking-widest text-slate-400 uppercase">
            <span className="bg-primary-blue px-4 py-1.5 text-[10px] text-white">
              {selectedArticle.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary-blue" />
              {selectedArticle.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary-blue" />
              {selectedArticle.readTime}
            </div>
          </div>

          <h1 className="mb-10 text-4xl leading-tight font-bold tracking-tight text-slate-900 md:text-6xl">
            {selectedArticle.title}
          </h1>

          <div className="mb-12 flex items-center gap-4 border-b border-slate-100 pb-12">
            <div className="text-primary-blue flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-bold">
              {selectedArticle.author[0]}
            </div>
            <div>
              <p className="font-bold text-slate-900">
                {selectedArticle.author}
              </p>
              <p className="text-xs tracking-widest text-slate-400 uppercase">
                Article Author
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 leading-relaxed text-slate-600">
            <p className="border-primary-blue border-l-4 pl-8 text-xl leading-relaxed font-medium text-slate-900 italic">
              {selectedArticle.excerpt}
            </p>
            <p>{selectedArticle.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Curabitur pretium
              tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis
              et commodo pharetra, est eros bibendum elit, nec luctus magna
              felis sollicitudin mauris. Integer in mauris eu nibh euismod
              gravida.
            </p>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-slate-100 pt-12">
            <div className="flex gap-4">
              <button className="hover:bg-primary-blue flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all hover:text-white">
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button className="hover:bg-primary-blue flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all hover:text-white">
                <ArrowRight size={18} />
              </button>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-primary-blue border-primary-blue/10 hover:bg-primary-blue/5 rounded-full border px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:underline"
            >
              Back to top
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-light-grey min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-white py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="text-primary-blue mb-6 block text-xs font-bold tracking-[0.3em] uppercase">
              Stay Informed
            </span>
            <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tight text-slate-900 md:text-7xl">
              Latest <span className="text-primary-blue">Updates</span> <br />&
              Insights
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-500">
              Discover the latest news from Hebei Prolink, industry trends, and
              our global trading milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="sticky top-20 z-30 border-b bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search
              className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              className="focus:border-primary-blue w-full rounded-full border border-slate-100 bg-slate-50 py-3 pr-4 pl-12 text-sm transition-all focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
            {(["All", "Industry", "Product", "Company"] as Category[]).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2.5 text-xs font-bold tracking-widest whitespace-nowrap uppercase transition-all ${
                    activeCategory === cat
                      ? "bg-primary-blue text-white shadow-lg"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-1 rounded-full border border-slate-100 bg-slate-50 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-full p-2 transition-all ${viewMode === "grid" ? "text-primary-blue bg-white shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-full p-2 transition-all ${viewMode === "list" ? "text-primary-blue bg-white shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredArticles.map((article, i) => (
                  <div key={article.id}>
                    <FadeIn delay={i * 0.05}>
                      <div
                        className="group flex h-full cursor-pointer flex-col overflow-hidden border border-slate-100 bg-white transition-all hover:shadow-xl"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-0 left-0">
                            <span className="bg-primary-blue px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-grow flex-col p-8">
                          <div className="mb-6 flex items-center gap-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                            <div className="flex items-center gap-2">
                              <Calendar
                                size={14}
                                className="text-primary-blue"
                              />
                              {article.date}
                            </div>
                          </div>

                          <h3 className="group-hover:text-primary-blue mb-4 text-2xl leading-tight font-bold tracking-tight text-slate-900 transition-colors">
                            {article.title}
                          </h3>

                          <p className="mb-8 line-clamp-3 flex-grow text-sm leading-relaxed text-slate-500">
                            {article.excerpt}
                          </p>

                          <button className="text-primary-blue group/btn border-primary-blue/20 hover:bg-primary-blue inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-bold transition-all hover:text-white">
                            Read More
                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {filteredArticles.map((article, i) => (
                  <div key={article.id}>
                    <FadeIn delay={i * 0.05}>
                      <div
                        className="group flex h-full cursor-pointer flex-col overflow-hidden border border-slate-100 bg-white transition-all hover:shadow-xl md:flex-row"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="relative aspect-video w-full shrink-0 overflow-hidden md:aspect-auto md:w-80 lg:w-96">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-0 left-0">
                            <span className="bg-primary-blue px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-grow flex-col justify-center p-10">
                          <div className="mb-4 flex items-center gap-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                            <div className="flex items-center gap-2">
                              <Calendar
                                size={14}
                                className="text-primary-blue"
                              />
                              {article.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-primary-blue" />
                              {article.author}
                            </div>
                          </div>

                          <h3 className="group-hover:text-primary-blue mb-4 text-2xl leading-tight font-bold tracking-tight text-slate-900 transition-colors md:text-3xl">
                            {article.title}
                          </h3>

                          <p className="mb-6 line-clamp-2 text-base leading-relaxed text-slate-500">
                            {article.excerpt}
                          </p>

                          <button className="text-primary-blue group/btn border-primary-blue/20 hover:bg-primary-blue inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-bold transition-all hover:text-white">
                            Read Full Article
                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <div className="py-32 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-300">
                <Search size={32} />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                No articles found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("All")
                }}
                className="text-primary-blue mt-8 text-xs font-bold tracking-widest uppercase hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          <div className="mt-20 text-center">
            <button className="hover:border-primary-blue hover:text-primary-blue border border-slate-200 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-white py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-slate-900">
          <span className="text-primary-blue mb-6 block text-[10px] font-bold tracking-widest uppercase">
            Join our community
          </span>
          <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl">
            Never Miss an Update
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-500">
            Subscribe to our newsletter to receive the latest industry news and
            product updates directly in your inbox.
          </p>
          <form
            className="mx-auto flex max-w-2xl flex-col gap-4 md:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="bg-light-grey focus:border-primary-blue flex-grow border border-slate-200 px-8 py-4 text-base transition-all placeholder:text-slate-400 focus:outline-none"
            />
            <button className="bg-primary-blue hover:bg-primary-red px-10 py-4 text-base font-bold whitespace-nowrap text-white transition-all">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
