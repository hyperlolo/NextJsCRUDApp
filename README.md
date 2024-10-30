# Next.js CRUD App with PocketBase Backend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This project utilizes [PocketBase](https://pocketbase.io/) as the backend to manage data.

## About This Project

Welcome to the NextJs CRUD App! This application was designed to explore the capabilities of Next.js by building a full-featured CRUD (Create, Read, Update, Delete) application.

The app is built using modern web development technologies including:

- **React** and **Next.js** for the frontend framework.
- **Tailwind CSS** for styling.
- **PocketBase** as a lightweight backend database.

It leverages the power of server-side rendering and static site generation to deliver fast and efficient performance.

### Key Features

- **Creating new notes**: Add notes with a title and content.
- **Reading existing notes**: View notes saved in the PocketBase backend.
- **Updating notes**: Edit note details directly from the note card.
- **Deleting notes**: Remove notes that are no longer needed.

I hope you find this app useful and informative. If you have any questions or feedback, feel free to reach out to me!

## Getting Started

To run this application locally, follow these step-by-step instructions.

### Prerequisites

- Node.js and npm installed ([Download Node.js](https://nodejs.org/)).
- PocketBase executable (`pocketbase.exe`) available to serve the backend.
- Git for cloning the repository ([Download Git](https://git-scm.com/)).

### Step 1: Clone the Repository

Clone the GitHub repository to your local machine:

```bash
git clone https://github.com/hyperlolo/NextJsCRUDApp.git
```

Navigate into the project directory:

```bash
cd NextJsCRUDApp
```

### Step 2: Install Dependencies

Install all necessary dependencies for the Next.js project:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Run PocketBase Backend

Ensure you have the `pocketbase.exe` executable. To start the backend, run the following command in the root directory:

```bash
./pocketbase serve
```

PocketBase will serve the backend at `http://127.0.0.1:8090` by default. Ensure this service is running while developing and testing the Next.js application.

After starting PocketBase, open [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/) to create your admin account for the PocketBase database.

Next, create a new collection named "Notes" with the following fields:
- **title** (type: text)
- **content** (type: text)

Also, make sure to unlock all the API rules for this collection to allow full access from the frontend.

### Important Note
Make sure to add `pb_data` and `pb_migrations` to your `.gitignore` file to prevent committing sensitive data. These folders contain database records and migration files, which shouldn't be included in version control for security reasons unless it is for educational purposes, such as this repository.

### Step 4: Start the Development Server

With the PocketBase backend running, start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Step 5: Interacting with the Application

- **Create Note**: Use the form to create a new note.
- **Edit Note**: Click the "Edit" button on any note card to update the note.
- **Delete Note**: Click the "Delete" button to remove a note.

## Credits

Created by [hyperlolo](https://github.com/hyperlolo).
