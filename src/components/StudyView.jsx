import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Zap, Star } from 'lucide-react';

export default function StudyView({ point, onBack, onNext, onPrev }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '800px',
                margin: '0 auto',
                paddingBottom: 'max(1rem, var(--safe-area-inset-bottom))'
            }}
        >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
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
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        WebkitTapHighlightColor: 'transparent'
                    }}
                >
                    <ArrowLeft size={20} />
                    返回列表
                </button>
            </div>

            {/* Main Content Card */}
            <div className="card glass" style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
                position: 'relative',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch'
            }}>

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
                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        background: 'rgba(244, 114, 182, 0.1)',
                        color: 'var(--accent)',
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        border: '1px solid rgba(244, 114, 182, 0.2)'
                    }}>
                        {point.level} 文法
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #cbd5e1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800',
                        lineHeight: 1.2
                    }}>
                        {point.title}
                    </h1>
                    <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)' }}>
                        {point.meaning}
                    </p>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gap: 'clamp(1rem, 3vw, 2rem)', marginBottom: 'auto' }}>

                    {/* Formation Rule */}
                    <div style={{
                        background: 'rgba(15, 23, 42, 0.5)',
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        borderRadius: '1rem',
                        border: '1px solid var(--border)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>
                            <Zap size={18} />
                            <h3 style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>接续</h3>
                        </div>
                        <p style={{
                            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
                            fontFamily: 'monospace',
                            color: '#e2e8f0',
                            lineHeight: 1.6,
                            wordBreak: 'break-word'
                        }}>
                            {point.formation}
                        </p>
                    </div>

                    {/* Explanations */}
                    <div style={{ display: 'grid', gap: 'clamp(1rem, 3vw, 1.5rem)' }}>
                        <div>
                            <h3 style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>日文说明</h3>
                            <p style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)', lineHeight: 1.6 }}>{point.summary_jp}</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>中文说明</h3>
                            <p style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)', lineHeight: 1.6 }}>{point.summary_cn}</p>
                        </div>
                    </div>

                    {/* Example Sentence */}
                    <div style={{
                        marginTop: '1rem',
                        padding: 'clamp(1rem, 3vw, 1.5rem)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#fbbf24' }}>
                            <Star size={18} />
                            <h3 style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>例句</h3>
                        </div>
                        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                            {point.example.split('（')[0]}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: 1.6 }}>
                            {point.example.split('（')[1]?.replace('）', '')}
                        </p>
                    </div>

                </div>

                {/* Navigation Footer */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border)'
                }}>
                    <button
                        onClick={onPrev}
                        className="btn"
                        style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border)',
                            boxShadow: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: 'clamp(0.75rem, 2vw, 1rem)',
                            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                        }}
                    >
                        <ChevronLeft size={20} />
                        上一个
                    </button>
                    <button
                        onClick={onNext}
                        className="btn"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: 'clamp(0.75rem, 2vw, 1rem)',
                            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                        }}
                    >
                        下一个
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </motion.div>
    );
}
