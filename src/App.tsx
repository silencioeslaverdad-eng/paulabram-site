import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import WorkWithMe from './pages/WorkWithMe'
import MyStory from './pages/MyStory'
import Moonrise from './pages/Moonrise'
import Reset from './pages/Reset'
import Links from './pages/Links'
import { BlogIndex, BlogPost } from './v3/Blog'
import { PrivacyPage, TermsPage, DisclaimerPage } from './pages/Legal'
import NotFound from './pages/NotFound'
import { ScrollToTop } from './components/Seo'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route path="/story" element={<MyStory />} />
        {/* standalone landing page (no site chrome) for the Moonrise Reset campaign */}
        <Route path="/moonrise" element={<Moonrise />} />
        {/* 7-Day Fascia Reset sales/waitlist page (standalone, no site chrome) */}
        <Route path="/reset" element={<Reset />} />
        {/* card-carousel profile page (standalone, no site chrome) */}
        <Route path="/links" element={<Links />} />
        {/* blog — brought home from Blogspot, full v3 design */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* legal pages render bare (no site chrome) by design */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
