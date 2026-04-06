# Fadhlan Syahran Jungjungan - Developer Profile

A modern, animated developer portfolio website built with **Next.js 14**, **Tailwind CSS**, and crafted using **Kilo Code** with **Minimax M2.7**.

## Built With

| Category | Technology |
|----------|------------|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Assistance | [Kilo Code](https://kilo.ai) + [Minimax M2.7](https://minimax.io) |
| Deployment | Vercel / Dokploy |

## Features

- **Dark Theme** - Modern dark UI with electric blue and cyan accents
- **Smooth Animations** - Fade-in, floating, bouncing, and glow effects
- **Responsive Design** - Mobile and desktop optimized
- **Hero Section** - Profile photo with animated introduction
- **Tech Stack Grid** - Showcase of skills with icons
- **Project Gallery** - GitHub repositories with tech tags
- **GitHub Stats** - Profile statistics display
- **Contact Section** - Social links (GitHub, Instagram, LinkedIn)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the profile.

## Project Structure

```
web-profile/
├── src/
│   └── app/
│       ├── page.tsx      # Main profile page
│       ├── layout.tsx    # Root layout with fonts
│       └── globals.css   # Tailwind & custom styles
├── public/               # Static assets
├── package.json
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

### Update Personal Information

Edit `src/app/page.tsx` to update:

- **Profile data** - Name, title, bio at the top of the file
- **Skills** - Modify the `skills` array with your tech stack
- **Projects** - Update the `projects` array with your GitHub repos
- **Social links** - Update URLs in the contact section

### Update Profile Image

The profile image is fetched from GitHub avatar URL. To use a custom image:

1. Replace the GitHub avatar URL with your image path in `/public/`
2. Update the `Image` src attributes in `page.tsx`

### Styling

Customize colors and animations in `src/app/globals.css`:

- `--accent` - Primary blue color
- `--accent-secondary` - Cyan accent
- Animation keyframes for custom effects

## GitHub Integration

This profile automatically displays:

- Avatar from GitHub
- Public repositories
- Fork and star counts
- Links to all projects

Update the GitHub username in the code to display your own stats.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Dokploy

```bash
# Build the project
npm run build

# The output is in .next/ folder
```

## Credits

- **AI Development** - Built with [Kilo Code](https://kilo.ai) using [Minimax M2.7](https://minimax.io) model
- **Framework** - [Next.js by Vercel](https://nextjs.org)
- **Icons** - Emoji icons for skill badges

---

Made with ☕ and AI assistance
