import { createContext, useContext, useState } from 'react'

interface TabsContextState {
  activeIndex: number
  setActiveIndex: (activeIndex: number) => void
}

const contextDefaultValues: TabsContextState = {
  activeIndex: 0,
  setActiveIndex: () => {},
}

export const TabsContext = createContext<TabsContextState>(contextDefaultValues)

export const Tab: React.FC<{ id: number; children: React.ReactNode }> = ({ id, children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext)
  return (
    <div
      className={`tab-wrapper ${activeIndex === id ? 'active' : ''}`}
      onClick={() => setActiveIndex(id)}
    >
      {children}
    </div>
  )
}

export const Content: React.FC<{ id: number; children: React.ReactNode }> = ({ id, children }) => {
  const { activeIndex } = useContext(TabsContext)
  return <>{activeIndex === id && <div className="content-wrapper">{children}</div>}</>
}

export const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>{children}</TabsContext.Provider>
  )
}
