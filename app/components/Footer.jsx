// app/components/Footer.jsx
export default function Footer(){
  return (
    <footer className="py-8 mt-24 border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Carlos Arturo Adrianzén — Diseñado con pasión.</p>
        <p className="text-sm mt-2">Disponibilidad para prácticas · <a href="mailto:cartureto@gmail.com" className="hover:text-primary transition">cartureto@gmail.com</a></p>
      </div>
    </footer>
  );
}