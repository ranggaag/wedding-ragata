import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const WishesContext = createContext()

export function WishesProvider({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <WishesContext.Provider value={{ isSubmitting, setIsSubmitting }}>
      {children}
    </WishesContext.Provider>
  )

};

WishesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWishes() {
  return useContext(WishesContext)
};