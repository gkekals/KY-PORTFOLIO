import React from 'react'
import { FaGithub } from "react-icons/fa"
import { SiNotion } from "react-icons/si"
import { useTheme } from '../../context/ThemeContext'
import "./styles/Footer.scss"

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className={`footer ${theme === 'dark' ? 'dark' : ''}`}>
      <div className='foot-inner'>
        <div className="left">
          <div className="logo">LOGO</div>
          <div className="copyright">
            © 2025 DECODE:Lab. All rights reserved.
          </div>
        </div>
        <div className="right">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://notion.so/" target="_blank" rel="noopener noreferrer" aria-label="Notion">
            <SiNotion size={28} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
