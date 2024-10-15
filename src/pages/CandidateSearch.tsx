import { useState, useEffect } from "react";
import { searchGithubUser } from "../api/API";

// Predefined list of GitHub usernames
// Predefined list of GitHub usernames
const randomUsernames = [
  "thekitze",         // Tobias K. Gruber, React advocate
  "addyosmani",       // Addy Osmani, Google Chrome team
  "littledan",        // Dan Abramov, co-creator of Redux
  "benesch",          // Matt Benesch, open source contributor
  "joshwcomeau",      // Josh W. Comeau, React educator
  "iamchrislewis",    // Chris Lewis, web developer and educator
  "arunoda",          // Arunoda Susiripala, Next.js expert
  "davidkpiano",      // David K. Piano, creator of Redux Form
  "t4t5",             // Tim Sweeney, web developer
  "sindresorhus",     // Sindre Sorhus, prolific open source contributor
  "goharsh",          // Harsh Gohil, JavaScript developer
  "kristen",          // Kristen McGowan, frontend engineer
  "matthewlehner",    // Matthew Lehner, open source advocate
  "benjaminhoffman",  // Benjamin Hoffman, software engineer
  "stephaniedurham",  // Stephanie Durham, software engineer
  "ryanflorence",     // Ryan Florence, co-creator of React Router
  "kevinsawicki",     // Kevin Sawicki, software engineer
  "jakearchibald",    // Jake Archibald, Google Chrome engineer
  "aerotwist",        // Paul Irish, web developer
  "swyx",             // Shawn Wang, developer advocate
  "reactjs",          // ReactJS official account
  "kylemathews",      // Kyle Mathews, creator of Gatsby
  "sasha",            // Sasha Greif, web developer and educator
  "webdevjake",       // Jake, developer educator
  "anildash",         // Anil Dash, entrepreneur and developer
  "nikgraf"           // Nik Graf, creator of React Static
];




// Function to get a random username from the list
const getRandomUsername = (usernames: string[]) => {
  const randomIndex = Math.floor(Math.random() * usernames.length);
  return usernames[randomIndex];
};

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch candidate data based on a randomly selected username
  const fetchCandidate = async (username: string) => {
    setLoading(true);
    setError(null); // Clear previous errors before starting a new request
    try {
      const data = await searchGithubUser(username);
      if (data) {
        setCandidate(data);
      } else {
        setError("No data found for this candidate.");
      }
    } catch (err) {
      setError("Error fetching candidate data.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a random candidate when the component first mounts
  useEffect(() => {
    const initialUsername = getRandomUsername(randomUsernames);
    fetchCandidate(initialUsername);
  }, []);

  // Save the candidate to localStorage
  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
      localStorage.setItem("savedCandidates", JSON.stringify([...savedCandidates, candidate]));

      // Fetch a new random candidate after saving
      const nextUsername = getRandomUsername(randomUsernames);
      fetchCandidate(nextUsername);
    }
  };

  // Skip to the next candidate
  const skipCandidate = () => {
    const nextUsername = getRandomUsername(randomUsernames);
    fetchCandidate(nextUsername);
  };

  // If data is loading, show a loading message
  if (loading) return <p>Loading...</p>;

  // If an error occurs, show an error message
  if (error) return <p>{error}</p>;

  // Render the candidate's information if available, otherwise show a message
  return candidate ? (
    <div>
      <img src={candidate.avatar_url} alt={`${candidate.name || "User"}'s avatar`} />
      <h2>{candidate.name || "Name not available"}</h2>
      <p>Username: {candidate.login || "Username not available"}</p>
      <p>Location: {candidate.location || "Location not available"}</p>
      <p>Email: {candidate.email || "Email not available"}</p>
      <p>Company: {candidate.company || "Company not available"}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>

      <button onClick={saveCandidate}>+ Save</button>
      <button onClick={skipCandidate}>- Skip</button>
    </div>
  ) : (
    <p>No candidate available.</p>
  );
};

export default CandidateSearch;




