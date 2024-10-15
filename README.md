# Candidate Search Application

## Description

This is a candidate search application that calls the GitHub API to retrieve and display information about potential candidates. The application allows an employer to search, view, and save candidate profiles. It has been developed using TypeScript for the front end, with an existing API to fetch candidate data from GitHub.

The GitHub API is used to fetch candidate details such as name, username, location, avatar, email, GitHub profile URL, and company. Employers can save or skip candidates and view a list of saved candidates on another page.

## User Story

As an employer, I want a candidate search application so that I can hire the best candidates.

## Acceptance Criteria

- **When** the candidate search page loads, **then** information for one candidate is displayed, including the candidate's name, username, location, avatar, email, `html_url`, and company.
- **When** the "+" button is clicked, **then** the candidate is saved to a list of potential candidates, and the next candidate's information is displayed.
- **When** the "-" button is clicked, **then** the next candidate's information is displayed without saving the current candidate.
- **When** no candidates are available for review, **then** an appropriate message is shown indicating no more candidates are available.
- **When** the potential candidates page loads, **then** the user sees a list of previously saved candidates with their details.
- **When** the page reloads, **then** the list of potential candidates persists and is available for viewing.
- **When** there are no potential candidates saved, **then** an appropriate message is displayed indicating no candidates have been accepted.
- **When** the "-" button is clicked, **then** the next candidate's information is displayed without saving the current candidate.

## Getting Started

### Prerequisites

To run the application locally, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- TypeScript
- GitHub Personal Access Token (for increasing API rate limit)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/candidate-search-app.git
   Navigate to the project directory:

   ```

   Copy Code

```


cd candidate-search-app

```

Install the dependencies:

```
npm install

```

Create a .env file in the root directory and add your GitHub Personal Access Token:

```

GITHUB_TOKEN=your_github_token_here

```

Run the application:

```

npm start
Open your browser and go to http://localhost:3000.

```

## **Deployment**

The application is deployed to Render. To deploy your own version, follow these steps:

Create a Render account and link your GitHub repository.

Set up the environment variables in the Render dashboard (including GITHUB_TOKEN).
Deploy the application.

## **Support**

In this project, I utilized peer support in the Candidate.tsx file. Collaborating with peers helped improve the functionality and user experience of the candidate search feature.

Additionally I used learning assistant generating code for files in the pages section of the application.

## **Technologies Used**

- TypeScript
- React
- GitHub API
- Node.js

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please contact:

Name: Judymae Jolibois
GitHub: judymaej
