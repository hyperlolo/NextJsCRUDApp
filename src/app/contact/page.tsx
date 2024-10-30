export default function Contact() {
  return (
    <div className="bg-white p-6 max-w-full shadow-md flex flex-col">
      <div className="text-black text-xl font-medium pb-1">Contact</div>
      <div className="text-gray-500 mb-4">
        Feel free to reach out to me through any of the following methods:
      </div>
      <div className="text-gray-700">
        <ul className="list-disc list-inside mb-4">
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/karanjit-s-gill/"
              className="text-blue-500"
            >
              linkedin.com/in/karanjit-s-gill/
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/hyperlolo" className="text-blue-500">
              github.com/hyperlolo
            </a>
          </li>
        </ul>
        <p className="mb-4">
          I am always open to discussing new projects, creative ideas, or just
          having a friendly conversation. Feel free to drop a message and I will
          get back to you as soon as possible.
        </p>
        <p className="text-gray-500">Looking forward to hearing from you!</p>
      </div>
    </div>
  );
}
