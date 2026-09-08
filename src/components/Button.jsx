import { ArrowRight } from './Icons.jsx'

/**
 * variant: primary | outline | ghost | white
 * size: sm (16px, default) | md (18px) | lg (20px)
 * icon: show the Figma arrow-right glyph
 */
export default function Button({ variant = 'primary', size = 'sm', icon = false, teal = false, href = '#', className = '', children, ...rest }) {
  const cls = ['btn', `btn--${variant}`, size !== 'sm' && `btn--${size}`, teal && 'btn--teal', className].filter(Boolean).join(' ')
  const Tag = rest.onClick && !href ? 'button' : 'a'
  return (
    <Tag className={cls} href={Tag === 'a' ? href : undefined} {...rest}>
      {icon && <ArrowRight className="btn__icon" />}
      <span>{children}</span>
    </Tag>
  )
}
