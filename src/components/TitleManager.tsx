interface ITitleManagerProps {
  title: string
  children?: React.ReactNode
}

export const TitleManager = ({ title, children }: ITitleManagerProps) => {
  return (
    <div className="mb-6 flex flex-row justify-between items-center">
      <span className="bg-[linear-gradient(180deg,_#F0C417_0%,_#fff_120%)] bg-clip-text top-product-title text-_32 font-bold">{title}</span>
      {children}
    </div>
  )
}
