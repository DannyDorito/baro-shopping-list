# Baro Ki'Teer Item Checklist

This project is a [Next.js](https://nextjs.org) application designed to help Warframe players manage their shopping list for Baro Ki'Teer items. It provides an interactive inventory table with filtering, sorting, and pagination features.

## Features

- **Inventory Management**: Track items by type, ducats, credits, and more.
- **Filtering and Sorting**: Easily filter and sort items based on various criteria.
- **Pagination**: Navigate through large inventories efficiently.
- **Feedback Form**: Submit feedback directly from the app.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark Mode Support**: Seamlessly switch between light and dark themes.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (v16 or higher)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/baro-shopping-list.git
   cd baro-shopping-list
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `components/`: Reusable UI components like tables, dropdowns, and buttons.
- `data/`: Static data files for inventory items.
- `enums/`: Enumerations for item types.
- `interfaces/`: TypeScript interfaces for props and data structures.
- `lib/`: Utility functions and hooks.
- `pages/`: Application pages.
- `styles/`: Global and component-specific styles.
- `types/`: TypeScript types for shared data models.

## Deployment

The easiest way to deploy this app is via [Vercel](https://vercel.com):

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Follow the deployment instructions provided by Vercel.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org).
- UI components inspired by [shadcn/ui](https://ui.shadcn.com).
- Deployed on [Vercel](https://vercel.com).
