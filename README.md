# Polaris - Institutional Variable Capital Company Portal

Polaris is a sophisticated, production-grade web platform representing a Mauritius-based Variable Capital Company (VCC). Designed with a premium, institutional trading aesthetic, the platform caters to high-net-worth individuals, family offices, and institutional distributors. 

The website avoids retail-trading tropes in favor of a mathematically disciplined, global wealth architecture aesthetic, emphasizing transparency, regulatory compliance, and quantitative rigor.

## Tech Stack
* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Inter (Sans-serif) & Playfair Display (Serif)
* **Language:** TypeScript

## Core Architecture
The platform consists of the following primary routes, all optimized for SEO and performance:
* `/` - The Hero landing page introducing the global capital architecture.
* `/about` - Corporate genesis, VCC advantage, and fiduciary alignment.
* `/solutions` - Breakdown of Investment Solutions, Fund Management, and Capital Advisory.
* `/investment-approach` - Quantitative methodologies, risk management, and algorithmic execution.
* `/governance` - Strict regulatory adherence, independent oversight, and AML/KYC protocols.
* `/investor-relations` - Secure access gateway for existing clients and data room requests.
* `/contact` - Institutional inquiry portal.
* `/legal`, `/privacy`, `/terms` - Comprehensive compliance disclosures.

## Step-by-Step Guide to Run Locally

To run the Polaris platform on your local machine, follow these steps:

### Prerequisites
* **Node.js** (v18.17 or newer)
* **npm** or **yarn** package manager
* **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:shahmeetk/polaris.git
   cd polaris
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash

   ```
   *The terminal will output the local address, typically `http://localhost:3000` or `http://localhost:3005` depending on port availability.*

4. **View the Application:**
   Open your browser and navigate to the provided local address to view the live development build.

### Production Build
To test the production build locally before deployment:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm run start
   ```

## Deployment
This Next.js application is fully optimized for zero-config deployment on [Vercel](https://vercel.com). Simply link your GitHub repository to your Vercel account, and Vercel will automatically build and deploy the `master` branch.

## License
&copy; {Current_Year} Polaris Variable Capital Company. All rights reserved. Proprietary source code.
