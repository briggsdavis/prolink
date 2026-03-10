import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '../components/Animations';
import { ArrowRight, Calendar, User, Search, Filter, LayoutGrid, List, ChevronLeft, X, Clock } from 'lucide-react';

type Category = 'All' | 'Industry' | 'Product' | 'Company';
type ViewMode = 'grid' | 'list';

export const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const articles = [
    {
      id: 1,
      title: 'Hebei Prolink Expands to New European Markets',
      excerpt: 'Our latest expansion brings high-quality headwear to the Nordic region, focusing on sustainable materials and digital supply chain integration.',
      content: 'Hebei Prolink is proud to announce its strategic expansion into the Nordic markets, including Sweden, Norway, and Denmark. This move is part of our broader 2024 global strategy to establish a stronger presence in regions that value high-quality, sustainable manufacturing. Our digital supply chain integration allows us to provide real-time updates to our European partners, ensuring transparency and efficiency from factory floor to final delivery.',
      date: 'March 15, 2024',
      author: 'Marketing Team',
      category: 'Company',
      image: 'https://picsum.photos/seed/news1/800/600',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Sustainable Materials in Headwear: The 2024 Trend',
      excerpt: 'Exploring how recycled polyester and organic cotton are reshaping the global cap industry and our commitment to eco-friendly manufacturing.',
      content: 'The global headwear industry is undergoing a massive shift towards sustainability. At Hebei Prolink, we are leading this change by incorporating GRS-certified recycled polyester and organic cotton into our core collections. This article explores the technical challenges of maintaining premium quality while using eco-friendly materials and how our R&D team has overcome them to deliver products that are both stylish and responsible.',
      date: 'March 10, 2024',
      author: 'Product Design',
      category: 'Product',
      image: 'https://picsum.photos/seed/news2/800/600',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Global Trade Logistics: Navigating 2024 Challenges',
      excerpt: 'An in-depth look at the current state of international shipping and how digital office solutions are mitigating delays.',
      content: 'International shipping continues to face volatility in 2024. From port congestion to fluctuating fuel costs, exporters must be more agile than ever. Hebei Prolink’s "Leading Index Model Enterprise" status is a testament to our digital-first approach. By leveraging advanced logistics tracking and automated customs documentation, we’ve managed to reduce average transit times by 15% compared to industry standards.',
      date: 'March 5, 2024',
      author: 'Logistics Dept',
      category: 'Industry',
      image: 'https://picsum.photos/seed/news5/800/600',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Hebei Prolink Awarded "Leading Index Model Enterprise"',
      excerpt: 'China Customs recognizes our digital office advantages and consistent export excellence for the third consecutive year.',
      content: 'For the third year running, Hebei Prolink has been honored by China Customs as a Leading Index Model Enterprise. This prestigious recognition is awarded to companies that demonstrate exceptional consistency in export quality and digital infrastructure. Our investment in cloud-based management systems has allowed us to maintain seamless operations even during global disruptions, setting a benchmark for the industry.',
      date: 'February 28, 2024',
      author: 'Corporate Affairs',
      category: 'Company',
      image: 'https://picsum.photos/seed/news3/800/600',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'Winter Collection 2024: Premium Beanies and Scarves',
      excerpt: 'A first look at our upcoming winter collection featuring high-density knits and innovative thermal lining technologies.',
      content: 'Our 2024 Winter Collection is our most ambitious yet. Featuring high-density merino wool blends and our proprietary "Pro-Heat" thermal lining, these beanies and scarves are designed for extreme conditions without sacrificing urban style. We’ve also introduced a range of recycled cashmere options, further expanding our sustainable product offerings for the colder months.',
      date: 'February 15, 2024',
      author: 'Sales Dept',
      category: 'Product',
      image: 'https://picsum.photos/seed/news4/800/600',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'The Future of Digital Manufacturing in China',
      excerpt: 'How automation and AI are transforming traditional textile factories into smart manufacturing hubs.',
      content: 'The "Made in China" label is evolving. At Hebei Prolink, we are at the forefront of the digital manufacturing revolution. By integrating AI-driven quality control and automated cutting systems, we’ve significantly reduced waste and increased precision. This shift not only improves our bottom line but also allows for greater customization and faster turnaround times for our global clients.',
      date: 'February 5, 2024',
      author: 'Operations',
      category: 'Industry',
      image: 'https://picsum.photos/seed/news6/800/600',
      readTime: '7 min read'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle) {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 py-20"
        >
          <button 
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-slate-500 hover:text-primary-blue transition-colors mb-12 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to News
          </button>

          <div className="aspect-video w-full overflow-hidden mb-12">
            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
            <span className="bg-primary-blue text-white px-4 py-1.5 text-[10px]">{selectedArticle.category}</span>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary-blue" />
              {selectedArticle.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary-blue" />
              {selectedArticle.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
            {selectedArticle.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 pb-12 border-b border-slate-100">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary-blue font-bold">
              {selectedArticle.author[0]}
            </div>
            <div>
              <p className="text-slate-900 font-bold">{selectedArticle.author}</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Article Author</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
            <p className="text-xl text-slate-900 font-medium leading-relaxed italic border-l-4 border-primary-blue pl-8">
              {selectedArticle.excerpt}
            </p>
            <p>{selectedArticle.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
            </p>
          </div>

          <div className="mt-20 pt-12 border-t border-slate-100 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all rounded-full">
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all rounded-full">
                <ArrowRight size={18} />
              </button>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary-blue font-bold uppercase tracking-widest text-xs hover:underline px-6 py-2.5 rounded-full border border-primary-blue/10 hover:bg-primary-blue/5"
            >
              Back to top
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-light-grey">
      {/* Hero Section */}
      <section className="bg-white border-b py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Stay Informed</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Latest <span className="text-primary-blue">Updates</span> <br />& Insights
            </h1>
            <p className="text-slate-500 text-xl leading-relaxed max-w-2xl">
              Discover the latest news from Hebei Prolink, industry trends, and our global trading milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="bg-white border-b sticky top-20 z-30 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 focus:outline-none focus:border-primary-blue transition-all text-sm rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {(['All', 'Industry', 'Product', 'Company'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap rounded-full ${
                  activeCategory === cat 
                    ? 'bg-primary-blue text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-1 bg-slate-50 p-1 border border-slate-100 rounded-full">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-all rounded-full ${viewMode === 'grid' ? 'bg-white text-primary-blue shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 transition-all rounded-full ${viewMode === 'list' ? 'bg-white text-primary-blue shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredArticles.map((article, i) => (
                  <div key={article.id}>
                    <FadeIn delay={i * 0.05}>
                      <div 
                        className="group bg-white overflow-hidden hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-0 left-0">
                            <span className="bg-primary-blue text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                          <div className="flex items-center gap-6 text-slate-400 text-[10px] font-bold mb-6 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-primary-blue" />
                              {article.date}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-blue transition-colors leading-tight tracking-tight">
                            {article.title}
                          </h3>
                          
                          <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <button className="inline-flex items-center gap-2 text-primary-blue font-bold group/btn text-sm px-6 py-2.5 rounded-full border border-primary-blue/20 hover:bg-primary-blue hover:text-white transition-all">
                            Read More
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
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
                        className="group bg-white overflow-hidden hover:shadow-xl transition-all border border-slate-100 flex flex-col md:flex-row h-full cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="w-full md:w-80 lg:w-96 shrink-0 aspect-video md:aspect-auto overflow-hidden relative">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-0 left-0">
                            <span className="bg-primary-blue text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-10 flex flex-col flex-grow justify-center">
                          <div className="flex items-center gap-6 text-slate-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-primary-blue" />
                              {article.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-primary-blue" />
                              {article.author}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-blue transition-colors leading-tight tracking-tight">
                            {article.title}
                          </h3>
                          
                          <p className="text-slate-500 text-base leading-relaxed mb-6 line-clamp-2">
                            {article.excerpt}
                          </p>
                          
                          <button className="inline-flex items-center gap-2 text-primary-blue font-bold group/btn text-sm px-6 py-2.5 rounded-full border border-primary-blue/20 hover:bg-primary-blue hover:text-white transition-all">
                            Read Full Article
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
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
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-8 text-primary-blue font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          <div className="mt-20 text-center">
            <button className="px-10 py-4 border border-slate-200 font-bold hover:border-primary-blue hover:text-primary-blue transition-all text-sm uppercase tracking-widest">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-slate-900">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-[10px] mb-6 block">Join our community</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Never Miss an Update</h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive the latest industry news and product updates directly in your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-light-grey border border-slate-200 px-8 py-4 flex-grow focus:outline-none focus:border-primary-blue transition-all placeholder:text-slate-400 text-base"
            />
            <button className="bg-primary-blue text-white px-10 py-4 font-bold hover:bg-primary-red transition-all text-base whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
