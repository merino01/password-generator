import { useState } from "react"

interface Props {
  children: React.ReactNode
  title: string
}

const Accordion = ({ children, title }: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex items-center justify-between p-5 text-white bg-indigo-600 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span>
          {
            collapsed
              ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )
              : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              )
          }
        </span>
      </div>

      <div
        className={`overflow-hidden ${collapsed ? 'max-h-0' : 'transition-all duration-500 ease-in-out max-h-screen'}`}
      >
        <div className="p-5 bg-indigo-100">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
