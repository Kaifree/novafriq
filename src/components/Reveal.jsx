import useInViewport from '../hooks/useInViewport'

export default function Reveal({ as: Tag = 'div', index = 0, step = 0.08, className = '', children, ...rest }) {
  const { ref, inView } = useInViewport()

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' in-view' : ''}${className ? ` ${className}` : ''}`}
      style={{ animationDelay: `${index * step}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
