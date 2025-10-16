export default function Footer(){
  return (
    <footer className="py-6 bg-slate-100 mt-12">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Carlos Arturo Adrianzén — Disponibilidad para prácticas · cartureto@gmail.com
      </div>
    </footer>
  );
}
