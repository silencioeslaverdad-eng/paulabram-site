import { useEffect, type ReactNode } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WorkWithMe from './pages/WorkWithMe'
import Books from './pages/Books'
import Watch from './pages/Watch'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const site = (page: ReactNode) => <Layout>{page}</Layout>
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={site(<Home />)} />
        <Route path="/about" element={site(<About />)} />
        <Route path="/work-with-me" element={site(<WorkWithMe />)} />
        <Route path="/books" element={site(<Books />)} />
        <Route path="/watch" element={site(<Watch />)} />
        <Route path="/contact" element={site(<Contact />)} />
      </Routes>
    </HelmetProvider>
  )
}
