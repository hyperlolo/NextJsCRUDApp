export default function About() {
  return (
    <div className="bg-white p-6 max-w-full shadow-md flex flex-col">
      <div className="text-black text-xl font-medium pb-1">NextJs CRUD APP</div>
      <div className="text-gray-500 mb-4">By Hyperlolo</div>
      <div className="text-gray-700">
        <p className="mb-4">
          Welcome to the NextJs CRUD App! This application was designed to
          learn the capabilities of Next.js by building a full-featured
          CRUD (Create, Read, Update, Delete) application.
        </p>
        <p className="mb-4">
          The app is built using modern web development technologies including
          React, Next.js, and Tailwind CSS. It leverages the power of
          server-side rendering and static site generation to deliver fast and
          efficient performance.
        </p>
        <p className="mb-4">Key features of this app include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Creating new notes</li>
          <li>Reading existing notes</li>
          <li>Updating notes</li>
          <li>Deleting notes</li>
        </ul>
        <p className="mb-4">
          I hope you find this app useful and informative. If you have any
          questions or feedback, feel free to reach out to me!
        </p>
        <p className="text-gray-500">Happy coding!</p>
      </div>
    </div>
  );
}
