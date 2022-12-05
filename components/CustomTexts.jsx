'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ tittle, textStyles }) =>
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles} `}
  >
    {Array.from(tittle).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
      {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>

export const TitleText = ({ tittle, textStyles }) => <h2>Title Text</h2>
