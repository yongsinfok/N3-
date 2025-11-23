import React, { useState, useEffect } from 'react';
import { grammarPoints } from './grammarData';
import GrammarList from './components/GrammarList';
import StudyView from './components/StudyView';
import { BookOpen, Search } from 'lucide-react';

function App() {
    const [currentPoint, setCurrentPoint] = useState(null);
    const [filter, setFilter] = useState('');

    // iOS bounce/overscroll is handled by CSS overscroll-behavior


    const filteredPoints = grammarPoints.filter(p =>
        p.title.toLowerCase().includes(filter.toLowerCase()) ||
        p.meaning.toLowerCase().includes(filter.toLowerCase())
    );

    const handleNext = () => {
        if (!currentPoint) return;
        const idx = grammarPoints.findIndex(p => p.id === currentPoint.id);
        if (idx < grammarPoints.length - 1) {
            setCurrentPoint(grammarPoints[idx + 1]);
        }
    };

    const handlePrev = () => {
        if (!currentPoint) return;
        const idx = grammarPoints.findIndex(p => p.id === currentPoint.id);
        if (idx > 0) {
            setCurrentPoint(grammarPoints[idx - 1]);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: 'max(2rem, calc(2rem + var(--safe-area-inset-top)))',
            paddingBottom: 'max(2rem, calc(2rem + var(--safe-area-inset-bottom)))'
        }}>
            <div className="container">
                {!currentPoint ? (
                    <>
                        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '64px',
                                height: '64px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
                                marginBottom: '1.5rem',
                                boxShadow: '0 10px 25px rgba(244, 114, 182, 0.4)'
                            }}>
                                <BookOpen size={32} color="white" />
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                                marginBottom: '0.5rem',
                                background: 'linear-gradient(to right, #fff, #cbd5e1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                N3 Grammar Master
                            </h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                                日本語能力試験 N3 文法复习
                            </p>
                        </header>

                        <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', pointerEvents: 'none' }} />
                            <input
                                type="text"
                                placeholder="搜索文法..."
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '1rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    WebkitAppearance: 'none'
                                }}
                            />
                        </div>

                        <GrammarList points={filteredPoints} onSelect={setCurrentPoint} />
                    </>
                ) : (
                    <StudyView
                        point={currentPoint}
                        onBack={() => setCurrentPoint(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
