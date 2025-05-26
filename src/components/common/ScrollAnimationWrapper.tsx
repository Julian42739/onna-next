'use client'

import React, { ReactNode, HTMLAttributes } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface ScrollAnimationWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'zoom-in'
  delay?: number
  threshold?: number
  className?: string
}

const ScrollAnimationWrapper = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className,
  ...props
}: ScrollAnimationWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    delay 
  })

  const getAnimationStyles = (): string => {
    const baseStyles = 'transition-all duration-700 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseStyles} opacity-0 translate-y-10`
        case 'fade-right':
          return `${baseStyles} opacity-0 -translate-x-10`
        case 'fade-left':
          return `${baseStyles} opacity-0 translate-x-10`
        case 'zoom-in':
          return `${baseStyles} opacity-0 scale-95`
        default:
          return `${baseStyles} opacity-0`
      }
    }
    
    return `${baseStyles} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(getAnimationStyles(), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default ScrollAnimationWrapper 