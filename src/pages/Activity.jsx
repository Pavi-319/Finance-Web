import './Activity.css'

const Activity = () => {
    const activities = [
        {
            date: 'Week 1',
            title: 'Introduction to Financial Markets',
            type: 'Lecture',
            status: 'completed',
            description: 'Overview of global financial markets, their structure, and key participants.',
            tasks: ['Read Chapter 1', 'Complete Quiz 1', 'Discussion Forum Post'],
        },
        {
            date: 'Week 2',
            title: 'Time Value of Money',
            type: 'Workshop',
            status: 'completed',
            description: 'Understanding present value, future value, and discounting concepts.',
            tasks: ['Practice Problems Set 1', 'Excel Lab Exercise', 'Group Discussion'],
        },
        {
            date: 'Week 3',
            title: 'Investment Analysis Fundamentals',
            type: 'Lecture',
            status: 'completed',
            description: 'Introduction to fundamental and technical analysis methods.',
            tasks: ['Stock Analysis Assignment', 'Read Case Study', 'Peer Review'],
        },
        {
            date: 'Week 4',
            title: 'Portfolio Theory & Diversification',
            type: 'Seminar',
            status: 'in-progress',
            description: 'Modern Portfolio Theory, risk-return tradeoff, and asset allocation.',
            tasks: ['Portfolio Construction Project', 'Risk Assessment Report', 'Presentation Prep'],
        },
        {
            date: 'Week 5',
            title: 'Fixed Income Securities',
            type: 'Lecture',
            status: 'upcoming',
            description: 'Bond valuation, yield curves, and interest rate risk management.',
            tasks: ['Bond Valuation Exercise', 'Chapter 5 Reading', 'Online Quiz'],
        },
        {
            date: 'Week 6',
            title: 'Derivatives & Risk Management',
            type: 'Workshop',
            status: 'upcoming',
            description: 'Options, futures, and hedging strategies for risk management.',
            tasks: ['Options Pricing Lab', 'Hedging Case Study', 'Final Project Proposal'],
        },
    ]

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return <span className="status-badge completed">✓ Completed</span>
            case 'in-progress':
                return <span className="status-badge in-progress">⏳ In Progress</span>
            case 'upcoming':
                return <span className="status-badge upcoming">📅 Upcoming</span>
            default:
                return null
        }
    }

    const getTypeBadge = (type) => {
        const icons = {
            'Lecture': '🎓',
            'Workshop': '🔧',
            'Seminar': '💬',
        }
        return (
            <span className="type-badge">
                {icons[type]} {type}
            </span>
        )
    }

    return (
        <main className="page activity-page">
            <div className="container">
                <div className="section-title">
                    <span className="badge badge-success">Timeline</span>
                    <h2>Course Activity</h2>
                    <p>
                        Track your progress through the finance curriculum with weekly
                        activities, assignments, and learning milestones.
                    </p>
                </div>

                <div className="activity-stats">
                    <div className="stat-item glass-card">
                        <span className="stat-number text-emerald">3</span>
                        <span className="stat-text">Completed</span>
                    </div>
                    <div className="stat-item glass-card">
                        <span className="stat-number text-gold">1</span>
                        <span className="stat-text">In Progress</span>
                    </div>
                    <div className="stat-item glass-card">
                        <span className="stat-number">2</span>
                        <span className="stat-text">Upcoming</span>
                    </div>
                </div>

                <div className="timeline">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${activity.status}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-marker">
                                <span className="marker-dot"></span>
                                <span className="marker-line"></span>
                            </div>
                            <div className="timeline-content glass-card">
                                <div className="timeline-header">
                                    <div className="timeline-date">{activity.date}</div>
                                    <div className="timeline-badges">
                                        {getTypeBadge(activity.type)}
                                        {getStatusBadge(activity.status)}
                                    </div>
                                </div>
                                <h3>{activity.title}</h3>
                                <p>{activity.description}</p>
                                <div className="timeline-tasks">
                                    <h4>📋 Tasks:</h4>
                                    <ul>
                                        {activity.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex}>
                                                <span className={`task-check ${activity.status === 'completed' ? 'checked' : ''}`}>
                                                    {activity.status === 'completed' ? '✓' : '○'}
                                                </span>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Activity
