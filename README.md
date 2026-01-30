# BDB Car Tools Website

A modern, responsive web application for BDB Car Tools, providing detailed information about automotive equipment, shop solutions, and company resources. Built with React, TypeScript, Vite, and Material UI.

## Features
- **Product Showcase:** Explore professional automotive equipment (Wheel Balancers, Wheel Aligners, Lift Systems, Tire Changers) with detailed descriptions and pricing.
- **Shop Type Solutions:** Find tailored solutions for General Repair, Tire Dealers, Car Dealerships, and Heavy Duty shops.
- **Interactive Hero & Carousels:** Engaging hero section and video carousel for product demos and tutorials.
- **FAQ & Resources:** Frequently asked questions and video resources for customer support.
- **Contact & Support:** Contact form with EmailJS integration, direct contact info, and WhatsApp support.
- **Responsive Design:** Fully responsive and mobile-friendly layout.
- **Modern UI:** Polished Material UI components, animated sidebar menu, and visually appealing sections.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd auto-web
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server
Start the Vite development server:
```bash
npm run dev
```
- The site will be available at [http://localhost:5173](http://localhost:5173) by default.
- Hot reloading is enabled for rapid development.

### Building for Production
To build the optimized production bundle:
```bash
npm run build
```
- Output will be in the `dist/` folder.

### Previewing the Production Build
To locally preview the production build:
```bash
npm run preview
```

## Project Structure
```
/auto-web
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and logos
│   ├── components/        # Reusable React components (Header, Footer, Sidebar, etc.)
│   ├── data/              # Product data
│   ├── pages/             # Page components (About, Contact, Shop types, etc.)
│   ├── App.tsx            # Main app entry
│   └── main.tsx           # React root
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## Environment Variables (for EmailJS)
To enable the contact form, set up [EmailJS](https://www.emailjs.com/) and add your credentials in `src/pages/Contact.tsx`:
- `YOUR_PUBLIC_KEY_HERE`
- `YOUR_SERVICE_ID_HERE`
- `YOUR_TEMPLATE_ID_HERE`

## Customization
- Update product data in `src/data/products.ts`.
- Change company info, contact details, and social links in `InfoSidebar.tsx` and `Footer.tsx`.
- Replace images in `src/assets/` as needed.

## License
This project is for demonstration and internal use by BDB Car Tools. Contact the author for licensing details.

---

For questions or support, contact info@bdbcartools.com or use the contact form on the website.
