# Loubna Darlbeida — Wedding Photography Website

A web project designed to showcase wedding photography services and help clients discover the photographer's work and get in touch.

## Overview

Loubna Darlbeida is a photography portfolio website built for a photographer who specializes in capturing weddings and special moments. The project aims to present her work through an elegant visual experience and provide visitors with a convenient way to request a booking.

## Features

* **Home page:** A visual introduction to the photography brand.
* **About section:** A space to introduce the photographer.
* **Photography portfolio:** A gallery showcasing wedding photography.
* **Booking interface:** A form for entering contact details and preferred booking date and time.
* **Animations:** Scroll-based visual effects using AOS.
* **Responsive styling:** CSS-based layout and visual styling.

*Note: The booking form and database integration still need to be tested and completed before the website can be considered production-ready.*

## Tech Stack

* **Next.js 15** — React framework for the web application.
* **React 19** — User interface development.
* **TypeScript** — Typed JavaScript for application development.
* **CSS** — Styling and page layout.
* **AOS** — Scroll animations.
* **Prisma** — Database schema and ORM.
* **PostgreSQL** — Database provider configured in the Prisma schema.

## Project Structure

```text
loubna-darlbeida/
├── public/                  # Images and static assets
├── prisma/
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── users/       # User API routes
│   │   ├── page.tsx         # Main website page
│   │   ├── layout.tsx       # Root application layout
│   │   └── globals.css      # Global styles
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

* Node.js and npm
* A PostgreSQL database if you want to use the database features

### Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd loubna-darlbeida
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables in a local `.env` file. For database functionality, set `DATABASE_URL` to your PostgreSQL connection string.

   Do not commit `.env` or publish database credentials.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

## Database

The project includes a Prisma schema configured for PostgreSQL. The current schema defines a `User` model with an ID, name, and unique email address.

Database setup and migrations may be required before the API can be used. The booking form should also be connected to a suitable backend before it can save booking requests.

## Current Status

The project is under development. The main portfolio interface and booking form are present, while booking submission, database integration, validation, and production readiness require further verification.

## Future Improvements

* Connect the booking form to a backend.
* Store and manage booking requests securely.
* Add form validation and clear success/error messages.
* Improve accessibility and mobile responsiveness.
* Add real photography, contact details, and social media links with the owner's approval.
* Test the application and prepare it for deployment.

## Learning Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [React Documentation](https://react.dev/learn)
* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [Prisma Documentation](https://www.prisma.io/docs)

## Credits

Created as a web development project for a wedding photography portfolio.

Please add the appropriate author and collaborator credits before publishing the repository.
