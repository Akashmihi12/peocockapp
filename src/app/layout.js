import './global.css'; // Import Tailwind's global CSS

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
