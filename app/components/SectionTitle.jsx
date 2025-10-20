// app/components/SectionTitle.jsx
export default function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground tracking-tight">
      {children}
    </h2>
  );
}