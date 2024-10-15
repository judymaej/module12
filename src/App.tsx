import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav /> {/* Navigation component */}
      <Routes>
        {/* Default route to redirect users to /candidate-search if they visit the root URL */}
        <Route path="/" element={<Navigate to="/candidate-search" />} />
        {/* Route for the Candidate Search page */}
        <Route path="/candidate-search" element={<CandidateSearch />} />
        {/* Route for the Saved Candidates page */}
        <Route path="/saved-candidates" element={<SavedCandidates />} />
      </Routes>
    </Router>
  );
}

export default App;

