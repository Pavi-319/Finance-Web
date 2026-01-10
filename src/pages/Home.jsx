import './Home.css'

const Home = () => {
    const stats = [
        { value: '$2.5T', label: 'Market Cap', icon: '📈' },
        { value: '150+', label: 'Resources', icon: '📚' },
        { value: '50+', label: 'Assignments', icon: '📝' },
        { value: '24/7', label: 'Access', icon: '🌐' },
    ]

    const features = [
        {
            icon: '💹',
            title: 'Investment Analysis',
            description: 'Learn to analyze investment opportunities and build portfolios that maximize returns while managing risk.',
        },
        {
            icon: '📊',
            title: 'Financial Markets',
            description: 'Understand how global financial markets work, from stocks and bonds to derivatives and forex.',
        },
        {
            icon: '🏦',
            title: 'Banking & Finance',
            description: 'Explore the fundamentals of banking, monetary policy, and the role of financial institutions.',
        },
        {
            icon: '📱',
            title: 'FinTech Innovation',
            description: 'Discover how technology is revolutionizing finance through blockchain, AI, and digital payments.',
        },
    ]

    return (
        <main className="page home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="badge">Welcome to FinanceHub</span>
                        <h1>
                            Master the Art of
                            <span className="text-gradient"> Financial Excellence</span>
                        </h1>
                        <p className="hero-description">
                            Your comprehensive platform for finance education. Access resources,
                            complete assignments, and track your learning journey in the world
                            of investments and financial markets.
                        </p>
                        <div className="hero-actions">
                            <a href="/assignments" className="btn btn-primary">
                                📝 View Assignments
                            </a>
                            <a href="/syllabus" className="btn btn-secondary">
                                📚 Explore Syllabus
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-card animate-float">
                            <div className="card-header">
                                <span className="card-icon">💰</span>
                                <span className="card-badge">Live</span>
                            </div>
                            <div className="card-value">$45,289.00</div>
                            <div className="card-label">Portfolio Value</div>
                            <div className="card-chart">
                                <svg viewBox="0 0 100 30" className="chart-line">
                                    <polyline
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="2"
                                        points="0,25 10,20 20,22 30,15 40,18 50,10 60,12 70,8 80,5 90,8 100,3"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#f59e0b" />
                                            <stop offset="100%" stopColor="#10b981" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="card-change positive">
                                <span>↑ 12.5%</span>
                                <span>This Week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-card glass-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="stat-icon">{stat.icon}</span>
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-title">
                        <h2>What You'll Learn</h2>
                        <p>
                            Comprehensive finance education covering all aspects of modern
                            financial markets and investment strategies.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card glass-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card glass-card">
                        <div className="cta-content">
                            <h2>Ready to Start Learning?</h2>
                            <p>
                                Access all course materials, assignments, and resources to
                                accelerate your finance education journey.
                            </p>
                        </div>
                        <a href="/assignments" className="btn btn-primary">
                            Get Started →
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
