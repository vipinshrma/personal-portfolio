export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-8 py-6 border-t border-border max-w-7xl mx-auto">
      <p className="text-muted-foreground text-sm text-center">
        © {currentYear} Vipan Sharma
      </p>
    </footer>
  );
}