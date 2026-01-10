import './Syllabus.css'

const Syllabus = () => {
    const courseInfo = {
        title: 'Investment Analysis & Portfolio Management',
        code: 'FIN-301',
        credits: 4,
        duration: '16 Weeks',
        instructor: 'Prof. Financial Expert',
    }

    const objectives = [
        'Understand the fundamentals of financial markets and investment vehicles',
        'Apply quantitative methods to analyze investment opportunities',
        'Develop skills in portfolio construction and risk management',
        'Evaluate corporate financial statements and valuation metrics',
        'Understand modern portfolio theory and asset allocation strategies',
        'Analyze real-world investment case studies and scenarios',
    ]

    const modules = [
        {
            week: '1-2',
            title: 'Introduction to Financial Markets',
            topics: [
                'Overview of financial markets and institutions',
                'Types of securities: Stocks, Bonds, Derivatives',
                'Market participants and trading mechanisms',
                'Regulatory framework and market efficiency',
            ],
            assignment: 'Market Analysis Report',
        },
        {
            week: '3-4',
            title: 'Time Value of Money & Valuation',
            topics: [
                'Present value and future value concepts',
                'Discounted cash flow analysis',
                'Bond valuation and yield calculations',
                'Stock valuation models (DDM, P/E, DCF)',
            ],
            assignment: 'Valuation Exercise Set',
        },
        {
            week: '5-6',
            title: 'Investment Analysis',
            topics: [
                'Fundamental analysis techniques',
                'Financial statement analysis',
                'Ratio analysis and benchmarking',
                'Technical analysis basics',
            ],
            assignment: 'Company Analysis Project',
        },
        {
            week: '7-8',
            title: 'Risk and Return',
            topics: [
                'Measuring investment returns',
                'Understanding risk metrics (variance, std dev, beta)',
                'Risk-adjusted performance measures',
                'Capital Asset Pricing Model (CAPM)',
            ],
            assignment: 'Risk Assessment Report',
        },
        {
            week: '9-10',
            title: 'Portfolio Theory',
            topics: [
                'Modern Portfolio Theory (MPT)',
                'Efficient frontier and optimal portfolios',
                'Diversification benefits',
                'Asset allocation strategies',
            ],
            assignment: 'Portfolio Construction Project',
        },
        {
            week: '11-12',
            title: 'Fixed Income Securities',
            topics: [
                'Bond markets and instruments',
                'Duration and convexity',
                'Interest rate risk management',
                'Credit risk analysis',
            ],
            assignment: 'Bond Portfolio Analysis',
        },
        {
            week: '13-14',
            title: 'Derivatives & Alternative Investments',
            topics: [
                'Options and futures basics',
                'Hedging strategies',
                'Alternative investments overview',
                'Real estate and private equity',
            ],
            assignment: 'Derivatives Case Study',
        },
        {
            week: '15-16',
            title: 'Investment Management & Ethics',
            topics: [
                'Professional investment management',
                'Performance evaluation and attribution',
                'Behavioral finance concepts',
                'Ethics in investment management',
            ],
            assignment: 'Final Project Presentation',
        },
    ]

    const grading = [
        { component: 'Assignments & Exercises', weight: '30%' },
        { component: 'Midterm Examination', weight: '20%' },
        { component: 'Portfolio Project', weight: '25%' },
        { component: 'Final Examination', weight: '20%' },
        { component: 'Class Participation', weight: '5%' },
    ]

    const resources = [
        { type: 'Textbook', name: 'Investments by Bodie, Kane, and Marcus (12th Ed.)' },
        { type: 'Reference', name: 'Security Analysis by Graham and Dodd' },
        { type: 'Software', name: 'Microsoft Excel, Bloomberg Terminal' },
        { type: 'Online', name: 'Yahoo Finance, SEBI Website, Investopedia' },
    ]

    return (
        <main className="page syllabus-page">
            <div className="container">
                <div className="section-title">
                    <span className="badge">Curriculum</span>
                    <h2>Course Syllabus</h2>
                    <p>
                        Complete course outline, learning objectives, and schedule for
                        the Investment Analysis & Portfolio Management course.
                    </p>
                </div>

                {/* Course Info Card */}
                <div className="course-info glass-card">
                    <div className="course-header">
                        <div>
                            <h3>{courseInfo.title}</h3>
                            <p className="course-code">{courseInfo.code}</p>
                        </div>
                        <div className="course-meta">
                            <span className="meta-item">
                                <span>📚</span> {courseInfo.credits} Credits
                            </span>
                            <span className="meta-item">
                                <span>⏱️</span> {courseInfo.duration}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Learning Objectives */}
                <section className="syllabus-section">
                    <h3 className="section-heading">
                        <span className="heading-icon">🎯</span>
                        Learning Objectives
                    </h3>
                    <div className="objectives-grid">
                        {objectives.map((objective, index) => (
                            <div key={index} className="objective-item glass-card">
                                <span className="objective-number">{index + 1}</span>
                                <p>{objective}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Course Modules */}
                <section className="syllabus-section">
                    <h3 className="section-heading">
                        <span className="heading-icon">📖</span>
                        Course Modules
                    </h3>
                    <div className="modules-list">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className="module-card glass-card"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="module-header">
                                    <span className="module-week">Week {module.week}</span>
                                    <h4>{module.title}</h4>
                                </div>
                                <div className="module-content">
                                    <div className="module-topics">
                                        <h5>Topics Covered:</h5>
                                        <ul>
                                            {module.topics.map((topic, topicIndex) => (
                                                <li key={topicIndex}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="module-assignment">
                                        <span className="assignment-label">📝 Assignment:</span>
                                        <span className="assignment-name">{module.assignment}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Grading & Resources Row */}
                <div className="syllabus-row">
                    {/* Grading */}
                    <section className="syllabus-section">
                        <h3 className="section-heading">
                            <span className="heading-icon">📊</span>
                            Grading Breakdown
                        </h3>
                        <div className="grading-card glass-card">
                            {grading.map((item, index) => (
                                <div key={index} className="grading-item">
                                    <span className="grading-component">{item.component}</span>
                                    <div className="grading-bar-wrap">
                                        <div
                                            className="grading-bar"
                                            style={{ width: item.weight }}
                                        ></div>
                                    </div>
                                    <span className="grading-weight">{item.weight}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Resources */}
                    <section className="syllabus-section">
                        <h3 className="section-heading">
                            <span className="heading-icon">📚</span>
                            Course Resources
                        </h3>
                        <div className="resources-card glass-card">
                            {resources.map((resource, index) => (
                                <div key={index} className="resource-item">
                                    <span className="resource-type">{resource.type}</span>
                                    <span className="resource-name">{resource.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Syllabus
