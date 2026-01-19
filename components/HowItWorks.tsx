
import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Completa el formulario',
    description: 'Ingresa tus datos básicos y selecciona el tipo de especialista que necesitas.',
    icon: 'edit_document'
  },
  {
    id: '02',
    title: 'Confirmamos tu cita',
    description: 'Recibirás una confirmación inmediata y un recordatorio antes de tu visita.',
    icon: 'event_available'
  },
  {
    id: '03',
    title: 'Asiste a tu consulta',
    description: 'Preséntate en la clínica seleccionada y recibe la atención que mereces.',
    icon: 'medical_services'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white border-y border-border-color py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">¿Cómo funciona?</h2>
          <p className="mt-4 text-lg text-text-secondary">Tres simples pasos para cuidar de tu salud.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center p-8 rounded-2xl bg-bg-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">
                <span className="text-primary/40 mr-1">{step.id}.</span> {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
