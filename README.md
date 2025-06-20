# Squirl Signs

Squirl Signs is an AI-powered web application that translates American Sign Language (ASL) in real-time, making communication more accessible and inclusive for everyone. Built with React, Vite, and Tailwind CSS, the platform features a modern UI, robust contact and registration forms, and a serverless email API powered by Resend and Vercel.

## Features

- **Real-Time ASL Translation**: Uses advanced AI to translate ASL for seamless communication.
- **Modern Responsive UI**: Built with React, Vite, and Tailwind CSS for fast, accessible, and beautiful design.
- **Contact & Register Forms**: Secure forms that send emails via a Vercel serverless function and Resend API.
- **Team & About Pages**: Meet the team and learn about the mission, values, and story behind Squirl Signs.
- **SPA Routing**: Client-side routing with React Router, including proper SPA fallback for Vercel deployment.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- [Vercel CLI](https://vercel.com/docs/cli) (for local API testing)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/squirl-signs.git
   cd squirl-signs
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your Resend API key and any other secrets:
     ```env
     RESEND_API_KEY=your_resend_api_key_here
     EMAIL_TO=your_destination_email@example.com
     EMAIL_FROM=your_verified_resend_email@example.com
     ```

### Running Locally

#### Frontend (Vite)
```sh
npm run dev
```

#### API (Vercel Serverless Functions)
```sh
npx vercel dev
```
- This will run both the frontend and API endpoints locally.
- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── api/                # Vercel serverless functions (e.g., send-email.js)
├── public/             # Static assets (images, video, favicon, etc.)
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components (Home, About, Contact, Register, Services)
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind CSS
├── vercel.json         # Vercel SPA rewrite config
├── vite.config.ts      # Vite config
├── tailwind.config.js  # Tailwind config
└── ...
```

## Deployment

This project is optimized for [Vercel](https://vercel.com/):
- Push to your GitHub repo and import into Vercel.
- Environment variables must be set in the Vercel dashboard.
- SPA fallback is handled via `vercel.json`.

## API Endpoints

### `/api/send-email`
- Handles POST requests from contact and register forms.
- Uses Resend API to send emails securely.
- Expects JSON body with `name`, `email`, `subject`, and `message` fields.

## Customization
- Update team members, images, and social links in `src/pages/About.tsx`.
- Change branding, colors, and logo in `src/components` and `public/`.

## License

MIT

---

**Squirl Signs** — Breaking Communication Barriers with AI-Powered ASL Translation
