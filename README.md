# Aaradhya Shekdar Portfolio

This is the source code for my personal developer portfolio, built to present my background, internships, projects, hackathons, technical skills, and contact information in a clean and modern format.

Live site: https://aaradhyashekdar.vercel.app

## Overview

The portfolio is designed to highlight real project work and practical experience in machine learning, full-stack development, quality assurance, and AI-assisted applications. It includes dedicated sections for:

- About
- Skills
- Experience
- Hackathons
- Projects
- Reviews and recommendations
- Contact
- Resume access via Google Drive

## Features

- Responsive portfolio built with Next.js App Router
- Clean single-page experience with section-based navigation
- Dedicated project detail pages using dynamic routes
- Resume route that redirects to an external Google Drive link
- Feedback and recommendation system
- Contact form support
- Animated UI with Framer Motion
- Production-ready deployment on Vercel

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Node.js

## Project Structure

```text
app/
  api/
    contact/
    resume/
    reviews/
  projects/[slug]/
  resume/
  globals.css
  layout.tsx
  page.tsx

components/
  ContactForm.tsx
  Hero.tsx
  Navbar.tsx
  ProjectCard.tsx
  ReviewCard.tsx

data/
  reviews.json

lib/
  projects.ts
  reviews.ts
```

## Local Development

1. Clone the repository

```bash
git clone https://github.com/Aaradhya1998/THEPortfolio.git
cd THEPortfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open the app in your browser

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Current Portfolio Content

The current version of the portfolio includes:

- Internship experience at Cosmolix Private Limited, QSkill, Thiranex, and InAmigos Foundation
- Projects such as CivicSolve, AutoStream Agent, UIDAI Campaign Predictor, University Complaint Management System, and Gemini Chatbot Assistant
- Hackathon participation including Smart India Hackathon 2025, UIDAI Government Data Hackathon, Idea 2.0 – Union Bank Hackathon, and a University Hackathon
- Resume access through an external Google Drive folder link

## Deployment

This portfolio is deployed on Vercel.

Production URL:
https://aaradhyashekdar.vercel.app

## Contact

- Email: aaradhya.shek@gmail.com
- GitHub: https://github.com/Aaradhya1998
- LinkedIn: https://www.linkedin.com/in/aaradhya-shekdar-724844383/

## Notes

- The blog section has been removed from the current portfolio version.
- Resume access is handled through an external link instead of a local PDF asset.
- The content is customized for Aaradhya Shekdar's current academic profile, internships, and project work.
