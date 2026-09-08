import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

/** Fade-up on scroll. `delay` staggers siblings; `as` picks the element. */
export default function Reveal({ as = 'div', children, delay = 0, y = 28, className, once = true, amount = 0.15, ...rest }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
