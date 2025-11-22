import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Star, Zap } from 'lucide-react';

export default function StudyView({ point, onBack, onNext, onPrev }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto' }}
        >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        marginRight: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '1rem'
                    }}
                >
                    <ArrowLeft size={20} />
                    Back to List
                </button>
            </div>

            {/* Main Content Card */}
            <div className="card glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>

                {/* Decorative Background Element */}
                <div style={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(244,114,182,0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />

                {/* Title Section */}
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        background: 'rgba(244, 114, 182, 0.1)',
                        color: 'var(--accent)',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        border: '1px solid rgba(244, 114, 182, 0.2)'
                    }}>
                        {point.level} Grammar
                    </span>
                    <h1 style={{
                        fontSize: '3.5rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #cbd5e1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800'
                    }}>
                        {point.title}
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                        {point.meaning}
                    </p>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gap: '2rem', marginBottom: 'auto' }}>

                    {/* Formation Rule */}
                    <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>
                            <Zap size={18} />
                            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Formation (接续)</h3>
                        </div>
                        <p style={{ fontSize: '1.125rem', fontFamily: 'monospace', color: '#e2e8f0' }}>
                            {point.formation}
                        </p>
                    </div>

                    {/* Explanations */}
                    <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Japanese Explanation</h3>
                            <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>{point.summary_jp}</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Chinese Explanation</h3>
                            <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>{point.summary_cn}</p>
                        </div>
                    </div>

                    {/* Example Sentence */}
                    <div style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#fbbf24' }}>
                            <Star size={18} />
                            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Example</h3>
                        </div>
                        <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{point.example.split('（')[0]}</p>
                        <p style={{ color: 'var(--text-secondary)' }}>{point.example.split('（')[1]?.replace('）', '')}</p>
                    </div>

                </div>

                {/* Navigation Footer */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                    <button
                        onClick={onPrev}
                        className="btn"
                        style={{
                            flex: 1,
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border)',
                            boxShadow: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <ChevronLeft size={20} />
                        Previous
                    </button>
                    <button
                        onClick={onNext}
                        className="btn"
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Next
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </motion.div>
    );
}
