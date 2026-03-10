import { motion, animate } from "motion/react"
import React, { useState, useEffect } from "react"

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function CountUp({
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = animate(0, to, {
      duration: duration,
      onUpdate: (value) => setCount(Math.floor(value)),
      ease: "easeOut",
    })
    return () => controls.stop()
  }, [to, duration])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
