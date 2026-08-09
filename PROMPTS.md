# PROMPTS.md — ABTalks Redesign

## Project Overview

ABTalks is a 60-day coding challenge platform designed for Indian CSE students. The redesign focuses on helping students build coding consistency, practical skills, GitHub activity, LinkedIn presence, and portfolio-ready projects.

The interface was designed mobile-first for a 390px viewport.

## Required Routes

/
 /dashboard
 /day/12

## AI-Assisted Development

AI was used throughout the project as a development and design assistant for:

- Product ideation
- UX planning
- UI design
- React component development
- Responsive styling
- Mock data
- Routing
- Debugging
- Deployment
- Documentation

The development process followed:

Prompt ? Build ? Review ? Debug ? Improve ? Deploy

## Landing Page Prompt

> Redesign ABTalks as a modern mobile-first platform for a 60-day coding challenge for Indian CSE students. The landing page should clearly explain the challenge, build trust, motivate students, and encourage them to start.

## Dashboard Prompt

> Create a student dashboard showing current streak, today's task, challenge day, overall completion, achievements, recent activity, and progress. Keep the most important action visible first.

## Challenge Day Prompt

> Design /day/12 as a complete daily challenge experience. Show the task, objective, requirements, checklist, GitHub repository, GitHub commit, LinkedIn post, live deployment URL, and submission status.

## CSE Student Task Prompt

> Create realistic 60-day tasks for a third-year CSE student covering DSA, Web Development, DBMS, SQL, Operating Systems, Computer Networks, AI/ML, Git/GitHub, projects, resume preparation, and interview preparation.

The challenge follows:

LEARN ? BUILD ? SOLVE ? DOCUMENT ? PROVE

## Edge Case Prompt

> Handle real-world student states including first day with no streak, missed days, empty profiles, incomplete submissions, and students who have not started today's task.

## Streak Recovery

A thoughtful feature was added for students who miss a day.

Instead of making the student feel that the challenge has failed, the experience encourages them to continue:

"You missed a day — but your challenge isn't over."

The goal is to reduce student drop-off and encourage consistency.

## Mobile-First Prompt

> Optimize the complete experience for a 390px mobile viewport. Use readable typography, thumb-friendly interactions, compact cards, clear hierarchy, simple navigation, and minimal friction.

## Component Prompt

> Break the interface into reusable React components for navigation, progress, streaks, task cards, achievements, submissions, and other repeated UI elements.

## Mock Data Prompt

> Use realistic mock JSON data for student profiles, challenge progress, daily tasks, achievements, and submission states. Authentication and production database are out of scope.

## Routing Prompt

> Implement React Router and make sure the required routes /, /dashboard, and /day/12 work correctly.

## Deployment Prompt

> Prepare the React/Vite project for production deployment on Vercel. Verify the package configuration, Vite entry point, build command, output directory, and production routes.

Build command:

npm run build

Output directory:

dist

## Vercel Build Error

During the first deployment, Vercel returned:

Error: Failed to resolve /src/main.jsx from /vercel/path0/index.html

The build ended with:

Command "npm run build" exited with 1

### Debugging Prompt

> Analyze this Vercel build error and identify the exact cause. Do not guess. Explain which file is missing or incorrectly referenced and provide the exact fix for a Vite React project.

The issue was identified as a missing or incorrectly referenced Vite entry file.

The project structure was checked and corrected so that:

src/main.jsx

was available and correctly referenced from index.html.

## GitHub Debugging

Git was initialized using:

git init

Files were added and committed using:

git add .
git commit -m "ABTalks redesign"

The main branch was configured using:

git branch -M main

### Git Remote Error

During the GitHub push, the following error occurred:

remote: Repository not found.
fatal: repository not found

### Debugging Prompt

> Analyze this Git push error and explain why the repository cannot be found. Check the remote URL and provide the exact commands needed to fix it.

The Git remote URL was checked using:

git remote -v

The incorrect remote was removed and the correct GitHub repository URL was configured.

The final remote was:

https://github.com/AJ9900/Redesign-ABTalks.git

The project was then pushed successfully using:

git push -u origin main

## PowerShell Debugging

During Git setup, the PowerShell prompt itself was accidentally entered as a command.

Example:

PS C:\ALL_Coding_Folders\ABTalk>

This caused PowerShell Get-Process errors.

The issue was resolved by entering only the actual Git commands and not the PowerShell prompt.

## Iterative Debugging

The project was not generated and submitted without review.

The workflow was:

1. Build
2. Check output
3. Identify error
4. Provide error/log to AI
5. Analyze root cause
6. Apply fix
7. Commit changes
8. Push to GitHub
9. Redeploy
10. Verify again

## Technologies Used

- React
- Vite
- CSS / Tailwind CSS
- React Router
- Lucide React
- Framer Motion
- JSON mock data
- Git
- GitHub
- Vercel

## Human Review

AI suggestions were reviewed and iterated based on:

- Mobile usability
- Visual hierarchy
- Product requirements
- Route correctness
- Build errors
- Deployment errors
- GitHub configuration
- Edge cases
- Submission flow

## Final Route Map

/
 /dashboard
 /day/12

## Project Links

GitHub:
https://github.com/AJ9900/Redesign-ABTalks

Live Deployment:
YOUR_VERCEL_URL

## Development Philosophy

The project followed an iterative AI-assisted workflow:

Prompt ? Build ? Review ? Debug ? Improve ? Deploy

AI was used as a development partner for design, implementation, debugging, deployment, and documentation while product and UX decisions were reviewed during development.
