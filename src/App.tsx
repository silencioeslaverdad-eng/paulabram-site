import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import WorkWithMe from './pages/WorkWithMe'
import MyStory from './pages/MyStory'
import Moonrise from './pages/Moonrise'
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
        {/* legal pages render bare (no site chrome) by design */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
