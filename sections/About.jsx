'use client'

import { motion } from 'framer-motion'
import { TypingText } from '../components'
import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className={'gradient-02 z-0'} />
        <motion.div
            variants={staggerContainer}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
            <TypingText tittle='| About Ion' textStyles='text-center' />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className={'mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='font-extrabold text-white'>Intelligent Of Narutal</span> aut
                consequuntur debitis totam eos cum odit ipsam. Possimus veniam, <span className='font-extrabold text-white'>Ruth Aja</span> non ullam
                quisquam dolores labore voluptas quis eligendi? Quaerat, animi quo alias dignissimos{' '}
                <span className='font-extrabold text-white'>Ion Aja</span> nisi hic cum ad! Consectetur labore dolore nostrum nesciunt maxime totam
                quas nulla qui <span className='font-extrabold text-white'>Project ion</span> eum ratione veritatis rem, expedita omnis accusantium
                doloremque.
            </motion.p>
            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src='./arrow-down.svg'
                alt='arrow down'
                className={'w-[18px] h-[24px] object-contain mt-[28px] '}></motion.img>
        </motion.div>
    </section>
)

export default About
