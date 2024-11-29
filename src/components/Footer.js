export default function Footer() {
  return (
    <div className="flex justify-between py-8 border border-t-1 text-sm">
      <span>&copy;{`${new Date().getFullYear()} All rights reserved`}</span>
      <p className="space-x-4">
        <a
          href="https://www.linkedin.com/company/deli-creations-team"
          target="_blank"
        >
          LinkedIn
        </a>
        <span>/</span> <span>Instagram</span>
      </p>
    </div>
  );
}
