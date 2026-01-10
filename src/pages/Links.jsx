import './Links.css'

const Links = () => {
    const linkCategories = [
        {
            title: 'Market Data & Research',
            icon: '📊',
            links: [
                {
                    name: 'Yahoo Finance',
                    url: 'https://finance.yahoo.com',
                    description: 'Stock quotes, financial news, and portfolio management',
                    icon: '📈',
                },
                {
                    name: 'Bloomberg',
                    url: 'https://bloomberg.com',
                    description: 'Global business and financial news',
                    icon: '🌐',
                },
                {
                    name: 'MarketWatch',
                    url: 'https://marketwatch.com',
                    description: 'Stock market news and analysis',
                    icon: '📰',
                },
                {
                    name: 'Investing.com',
                    url: 'https://investing.com',
                    description: 'Financial markets, quotes, and charts',
                    icon: '💹',
                },
            ],
        },
        {
            title: 'Learning Resources',
            icon: '📚',
            links: [
                {
                    name: 'Investopedia',
                    url: 'https://investopedia.com',
                    description: 'Financial education and tutorials',
                    icon: '🎓',
                },
                {
                    name: 'Khan Academy Finance',
                    url: 'https://khanacademy.org/economics-finance-domain',
                    description: 'Free finance courses and lessons',
                    icon: '📖',
                },
                {
                    name: 'Coursera Finance',
                    url: 'https://coursera.org/browse/business/finance',
                    description: 'Professional finance courses',
                    icon: '🏆',
                },
                {
                    name: 'CFA Institute',
                    url: 'https://cfainstitute.org',
                    description: 'Professional certification resources',
                    icon: '📜',
                },
            ],
        },
        {
            title: 'Government & Regulatory',
            icon: '🏛️',
            links: [
                {
                    name: 'SEC (U.S.)',
                    url: 'https://sec.gov',
                    description: 'Securities and Exchange Commission filings',
                    icon: '🇺🇸',
                },
                {
                    name: 'Federal Reserve',
                    url: 'https://federalreserve.gov',
                    description: 'Monetary policy and economic data',
                    icon: '🏦',
                },
                {
                    name: 'SEBI (India)',
                    url: 'https://sebi.gov.in',
                    description: 'Securities and Exchange Board of India',
                    icon: '🇮🇳',
                },
                {
                    name: 'World Bank Data',
                    url: 'https://data.worldbank.org',
                    description: 'Global development indicators',
                    icon: '🌍',
                },
            ],
        },
        {
            title: 'Tools & Calculators',
            icon: '🧮',
            links: [
                {
                    name: 'Compound Interest Calculator',
                    url: 'https://investor.gov/financial-tools-calculators/calculators/compound-interest-calculator',
                    description: 'Calculate investment growth over time',
                    icon: '💰',
                },
                {
                    name: 'Portfolio Visualizer',
                    url: 'https://portfoliovisualizer.com',
                    description: 'Portfolio analysis and backtesting',
                    icon: '📉',
                },
                {
                    name: 'FinViz',
                    url: 'https://finviz.com',
                    description: 'Stock screener and visualization',
                    icon: '🔍',
                },
                {
                    name: 'TradingView',
                    url: 'https://tradingview.com',
                    description: 'Charting and technical analysis',
                    icon: '📊',
                },
            ],
        },
    ]

    return (
        <main className="page links-page">
            <div className="container">
                <div className="section-title">
                    <span className="badge">Resources</span>
                    <h2>Useful Links</h2>
                    <p>
                        Curated collection of essential finance resources, tools, and
                        learning materials to support your studies.
                    </p>
                </div>

                <div className="links-grid">
                    {linkCategories.map((category, catIndex) => (
                        <div
                            key={catIndex}
                            className="category-card glass-card"
                            style={{ animationDelay: `${catIndex * 0.1}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="category-links">
                                {category.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-item"
                                    >
                                        <span className="link-icon">{link.icon}</span>
                                        <div className="link-content">
                                            <span className="link-name">{link.name}</span>
                                            <span className="link-desc">{link.description}</span>
                                        </div>
                                        <span className="link-arrow">→</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Links
