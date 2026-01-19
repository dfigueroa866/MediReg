
import React from 'react';

const testimonials = [
  {
    id: '1',
    name: 'María González',
    role: 'Paciente Verificado',
    content: 'Excelente servicio, pude agendar mi cita con el cardiólogo en menos de 5 minutos. La atención fue de primera.',
    image: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    role: 'Paciente Verificado',
    content: 'La plataforma es muy intuitiva. Me encanta que te envíen recordatorios para no olvidar la cita. Muy recomendado.',
    image: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Dra. Ana López',
    role: 'Especialista',
    content: 'Como médico, valoro mucho la organización que ofrece Clínica Vital. Mis pacientes llegan siempre a tiempo.',
    image: 'https://picsum.photos/id/102/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12 text-text-main">Lo que dicen nuestros pacientes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-border-color flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-6 leading-relaxed">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-text-main">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
