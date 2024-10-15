// TODO: Create an interface for the Candidate objects returned by the API
// Define the interface for Candidate objects
interface Candidate {
    id: number;              // Unique identifier for the candidate
    firstName: string;       // Candidate's first name
    lastName: string;        // Candidate's last name
    email: string;           // Candidate's email address
    phone: string;           // Candidate's phone number
    position: string;        // Position candidate is applying for
    experience: number;      // Years of experience
    skills: string[];        // Array of skills
    location: string;        // Candidate's location
    status: 'applied' | 'interview' | 'hired' | 'rejected'; // Candidate's current status
    createdAt: string;       // Date when the candidate was added
  }
  
  // Example of using the interface
  const exampleCandidate: Candidate = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    position: "Software Engineer",
    experience: 5,
    skills: ["JavaScript", "React", "Node.js"],
    location: "New York, NY",
    status: "interview",
    createdAt: "2024-10-14T12:00:00Z",
  };
  