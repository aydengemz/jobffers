export default function Home() {
  const jobOffers = [
    {
      company: "Netflix",
      url: "https://glstrck.com/aff_c?offer_id=973&aff_id=11848&source=landerred",
      salary: "$22 - $42/hr",
      type: "Streaming & Entertainment"
    },
    {
      company: "Disney",
      url: "https://glstrck.com/aff_c?offer_id=1365&aff_id=11848&source=landerred",
      salary: "$18 - $35/hr",
      type: "Entertainment & Media"
    },
    {
      company: "Amazon",
      url: "https://glstrck.com/aff_c?offer_id=971&aff_id=11848&source=landerred",
      salary: "$20 - $38/hr",
      type: "E-commerce & Technology"
    },
    {
      company: "Walmart",
      url: "https://glstrck.com/aff_c?offer_id=972&aff_id=11848&source=landerred",
      salary: "$16 - $32/hr",
      type: "Retail & Logistics"
    },
    {
      company: "Apple",
      url: "https://glstrck.com/aff_c?offer_id=1045&aff_id=11848&source=landerred",
      salary: "$24 - $45/hr",
      type: "Technology & Innovation"
    },
    {
      company: "Google",
      url: "https://glstrck.com/aff_c?offer_id=1373&aff_id=11848&source=landerred",
      salary: "$26 - $48/hr",
      type: "Technology & Research"
    },
    {
      company: "Spotify",
      url: "https://glstrck.com/aff_c?offer_id=1970&aff_id=11848&source=landerred",
      salary: "$21 - $40/hr",
      type: "Music & Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-8 md:p-12 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Available Job Opportunities
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Explore exciting career opportunities with leading companies
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6">
          {jobOffers.map((offer, index) => (
            <a
              key={index}
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 sm:p-6 rounded-xl border border-black/[.08] dark:border-white/[.145] hover:shadow-lg hover:scale-[1.02] transition-all duration-200 bg-white dark:bg-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{offer.company}</h2>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      {offer.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{offer.salary}</p>
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group">
                  Apply Now
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
