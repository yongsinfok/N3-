import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function GrammarList({ points, onSelect }) {
    return (
        <motion.div
            className="grammar-list"
            variants={container}
            initial="hidden"
            animate="show"
            style={{ display: 'grid', gap: '1rem', paddingBottom: '2rem' }}
        >
            {points.map((point) => (
                <motion.div
                    key={point.id}
                    variants={item}
                    className="card glass"
                    onClick={() => onSelect(point)}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                            {point.level}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{point.title}</h3>
                        <div style={{ fontSize: '0.875rem', color: 'var(--accent)', marginTop: '0.25rem' }}>
                            {point.meaning}
                        </div>
                    </div>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)'
                    }}>
                        <ChevronRight size={20} />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
