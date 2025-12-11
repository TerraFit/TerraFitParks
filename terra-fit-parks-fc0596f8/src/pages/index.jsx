import Layout from "./Layout.jsx";
import Home from "./Home";
import Systems from "./Systems";
import Partnership from "./Partnership";
import InvestmentGuide from "./InvestmentGuide";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import Catalogue from "./Catalogue";
import WalkingObstacles from "./WalkingObstacles";
import ClimbingObstacles from "./ClimbingObstacles";
import HangingObstacles from "./HangingObstacles";
import RidingObstacles from "./RidingObstacles";
import OtherObstacles from "./OtherObstacles";
import Mattresses from "./Mattresses";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';  // CHANGED HERE

const PAGES = {
    Home: Home,
    Systems: Systems,
    Partnership: Partnership,
    InvestmentGuide: InvestmentGuide,
    About: About,
    Team: Team,
    Contact: Contact,
    Catalogue: Catalogue,
    WalkingObstacles: WalkingObstacles,
    ClimbingObstacles: ClimbingObstacles,
    HangingObstacles: HangingObstacles,
    RidingObstacles: RidingObstacles,
    OtherObstacles: OtherObstacles,
    Mattresses: Mattresses,
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Systems" element={<Systems />} />
                <Route path="/Partnership" element={<Partnership />} />
                <Route path="/InvestmentGuide" element={<InvestmentGuide />} />
                <Route path="/About" element={<About />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Catalogue" element={<Catalogue />} />
                <Route path="/WalkingObstacles" element={<WalkingObstacles />} />
                <Route path="/ClimbingObstacles" element={<ClimbingObstacles />} />
                <Route path="/HangingObstacles" element={<HangingObstacles />} />
                <Route path="/RidingObstacles" element={<RidingObstacles />} />
                <Route path="/OtherObstacles" element={<OtherObstacles />} />
                <Route path="/Mattresses" element={<Mattresses />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
