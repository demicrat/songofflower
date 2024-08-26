'use client';
import { useEffect, useState } from 'react';
import styles from '@/components/componentstyles/TypewriterDemi.module.css'; // Import CSS module

const words = [
  { text: 'Harker JCL.', color: 'text-green-400' },
  { text: 'Latin Community.', color: 'text-fuchsia-500' },
  { text: 'Passionate Learners.', color: 'text-teal-400' },
  { text: 'Academic Excellence.', color: 'text-blue-500' }
];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [color, setColor] = useState(words[0].color);
  
  useEffect(() => {
    const handleTyping = () => {
      const word = words[index].text;
      setColor(words[index].color);
      
      if (!deleting) {
        setDisplayedText((prev) => word.substring(0, prev.length + 1));
        if (displayedText === word) {
          setTimeout(() => setDeleting(true), 4000);
        }
      } else {
        setDisplayedText((prev) => word.substring(0, prev.length - 1));
        if (displayedText === '') {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingSpeed = deleting ? 100 : 200;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, deleting, index]);

  return <span className={`inline-block font-bold ${color} ${styles.blink}`}>{displayedText}<span className={styles.cursor}>|</span></span>;
}
