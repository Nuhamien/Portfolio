function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-bold transition duration-300'

  const styles = {
    primary: 'bg-[#ff7a30] text-white hover:scale-105',
    secondary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300',
    dark: 'bg-zinc-900 text-white hover:bg-[#ff7a30]',
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button