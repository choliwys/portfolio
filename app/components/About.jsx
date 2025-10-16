export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div>
        <h3 className="text-xl font-semibold mb-2">Resumen</h3>
        <p className="text-gray-600">
          Estudiante de Ingeniería de Software en la UPC con interés en desarrollo de soluciones empresariales y gestión de bases de datos. Tengo fundamentos sólidos en POO, modelamiento de datos y diseño de aplicaciones web. Busco una oportunidad para aplicar y ampliar mis competencias en TI.
        </p>
        <ul className="mt-4 space-y-2">
          <li><strong>Email:</strong> cartureto@gmail.com</li>
          <li><strong>Teléfono:</strong> 933 960 189</li>
          <li><strong>Ubicación:</strong> Surco, Lima</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Educación</h4>
        <p className="text-gray-600">UPC — Bachiller en Ingeniería de Software (21/03/2022 - Presente)</p>
        <ul className="mt-3 list-disc pl-5 text-gray-600">
          <li>Diseño de base de datos</li>
          <li>Aplicaciones Web</li>
          <li>Redes y comunicaciones</li>
          <li>Agile Frameworks</li>
        </ul>
      </div>
    </div>
  );
}
