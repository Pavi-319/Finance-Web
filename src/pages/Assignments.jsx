import { useState, useEffect } from 'react'
import './Assignments.css'

const Assignments = () => {
    // Get base URL for proper path resolution in production
    const baseUrl = import.meta.env.BASE_URL || '/'

    // Pre-loaded files from the user's directory
    const defaultFiles = [
        {
            id: 1,
            name: 'Analysis of Investment Avenues - Assignment 1',
            filename: 'ANALYSIS OF INVESTMENT AVENUES-ASSIGNMENT 1.docx',
            type: 'docx',
            size: '55.5 KB',
            category: 'Assignment',
            date: '2026-01-10',
            downloadUrl: `${baseUrl}files/ANALYSIS%20OF%20INVESTMENT%20AVENUES-ASSIGNMENT%201.docx`,
        },
        {
            id: 2,
            name: 'Investment Assignment 2',
            filename: 'INVESTMENT ASSIGNMENT 2.docx',
            type: 'docx',
            size: '18.9 KB',
            category: 'Assignment',
            date: '2026-01-10',
            downloadUrl: `${baseUrl}files/INVESTMENT%20ASSIGNMENT%202.docx`,
        },
        {
            id: 3,
            name: 'Investment Guru - Cathie Wood',
            filename: 'INVESTMENT GURU-CATHIEE WOOD.pptx',
            type: 'pptx',
            size: '1.2 MB',
            category: 'Presentation',
            date: '2026-01-10',
            downloadUrl: `${baseUrl}files/INVESTMENT%20GURU-CATHIEE%20WOOD.pptx`,
        },
    ]

    const [files, setFiles] = useState([])
    const [filter, setFilter] = useState('all')
    const [uploadedFiles, setUploadedFiles] = useState([])

    useEffect(() => {
        // Load saved files from localStorage
        const savedFiles = localStorage.getItem('financeFiles')
        if (savedFiles) {
            setUploadedFiles(JSON.parse(savedFiles))
        }
    }, [])

    useEffect(() => {
        // Combine default files with uploaded files
        const allFiles = [...defaultFiles, ...uploadedFiles]

        if (filter === 'all') {
            setFiles(allFiles)
        } else {
            setFiles(allFiles.filter(file => file.category.toLowerCase() === filter))
        }
    }, [filter, uploadedFiles])

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0]
        if (!uploadedFile) return

        const newFile = {
            id: Date.now(),
            name: uploadedFile.name,
            type: uploadedFile.name.split('.').pop(),
            size: formatFileSize(uploadedFile.size),
            category: 'Uploaded',
            date: new Date().toISOString().split('T')[0],
            blob: uploadedFile,
        }

        const updatedFiles = [...uploadedFiles, newFile]
        setUploadedFiles(updatedFiles)

        // Save to localStorage (without blob for persistence)
        const filesForStorage = updatedFiles.map(f => ({
            ...f,
            blob: undefined,
        }))
        localStorage.setItem('financeFiles', JSON.stringify(filesForStorage))

        event.target.value = ''
    }

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
    }

    const handleDownload = (file) => {
        if (file.blob) {
            // For uploaded files with blob
            const url = URL.createObjectURL(file.blob)
            const a = document.createElement('a')
            a.href = url
            a.download = file.name
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
        } else if (file.downloadUrl) {
            // For pre-loaded files from public folder
            const a = document.createElement('a')
            a.href = file.downloadUrl
            a.download = file.name
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        }
    }

    const handleOpen = (file) => {
        if (file.blob) {
            // For uploaded files with blob
            const url = URL.createObjectURL(file.blob)
            window.open(url, '_blank')
        } else if (file.downloadUrl) {
            // For pre-loaded files from public folder
            window.open(file.downloadUrl, '_blank')
        }
    }

    const handleDelete = (fileId) => {
        const updatedFiles = uploadedFiles.filter(f => f.id !== fileId)
        setUploadedFiles(updatedFiles)
        localStorage.setItem('financeFiles', JSON.stringify(updatedFiles))
    }

    const getFileIcon = (type) => {
        const icons = {
            pdf: '📄',
            docx: '📝',
            doc: '📝',
            pptx: '📊',
            ppt: '📊',
            xlsx: '📈',
            xls: '📈',
            default: '📁',
        }
        return icons[type?.toLowerCase()] || icons.default
    }

    const categories = [
        { id: 'all', label: 'All Files', icon: '📁' },
        { id: 'assignment', label: 'Assignments', icon: '📝' },
        { id: 'presentation', label: 'Presentations', icon: '📊' },
        { id: 'uploaded', label: 'My Uploads', icon: '📤' },
    ]

    return (
        <main className="page assignments-page">
            <div className="container">
                <div className="section-title">
                    <span className="badge">Materials</span>
                    <h2>Assignments & Files</h2>
                    <p>
                        Access course assignments, presentations, and study materials.
                        Upload your own files for easy access.
                    </p>
                </div>

                {/* Upload Section */}
                <div className="upload-section glass-card">
                    <div className="upload-content">
                        <div className="upload-icon">📤</div>
                        <div className="upload-text">
                            <h3>Upload Files</h3>
                            <p>Drag and drop or click to upload your assignments</p>
                        </div>
                    </div>
                    <div className="file-input-wrapper">
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                        />
                        <button className="btn btn-primary">
                            Choose File
                        </button>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`filter-tab ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => setFilter(cat.id)}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Files Grid */}
                <div className="files-grid">
                    {files.length === 0 ? (
                        <div className="no-files glass-card">
                            <span className="no-files-icon">📂</span>
                            <h3>No files found</h3>
                            <p>Upload files or change the filter to see files.</p>
                        </div>
                    ) : (
                        files.map((file, index) => (
                            <div
                                key={file.id}
                                className="file-card glass-card"
                                style={{ animationDelay: `${index * 0.05}s`, cursor: 'pointer' }}
                                onClick={() => handleOpen(file)}
                            >
                                <div className="file-icon">{getFileIcon(file.type)}</div>
                                <div className="file-info">
                                    <h4 className="file-name" title={file.name}>{file.name}</h4>
                                    <div className="file-meta">
                                        <span className="file-size">{file.size}</span>
                                        <span className="file-separator">•</span>
                                        <span className="file-type">{file.type?.toUpperCase()}</span>
                                    </div>
                                    <span className={`file-category ${file.category.toLowerCase()}`}>
                                        {file.category}
                                    </span>
                                </div>
                                <div className="file-actions" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        className="btn-action download"
                                        onClick={() => handleDownload(file)}
                                        title="Download"
                                    >
                                        ⬇️
                                    </button>
                                    {file.category === 'Uploaded' && (
                                        <button
                                            className="btn-action delete"
                                            onClick={() => handleDelete(file.id)}
                                            title="Delete"
                                        >
                                            🗑️
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Stats */}
                <div className="files-stats">
                    <div className="stat-chip">
                        <span>📁</span>
                        <span>{files.length} files</span>
                    </div>
                    <div className="stat-chip">
                        <span>📤</span>
                        <span>{uploadedFiles.length} uploaded</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Assignments
