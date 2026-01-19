
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-bg-light bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Value Proposition */}
          <div className="lg:col-span-7 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Gestión Médica Digital
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Agenda tu Cita Médica con <span className="text-primary">Especialistas</span> de Confianza
            </h1>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl leading-relaxed">
              Optimiza tu tiempo y gestiona tu salud de manera eficiente. Conecta con los mejores profesionales, recibe recordatorios automáticos y mantén tu historial seguro en un solo lugar.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h3 className="font-bold text-text-main mb-1">Datos Seguros</h3>
                  <p className="text-sm text-text-secondary">Encriptación de nivel bancario para tu historial.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="font-bold text-text-main mb-1">Disponibilidad 24/7</h3>
                  <p className="text-sm text-text-secondary">Agenda en cualquier momento, desde donde estés.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border-color">
              <p className="text-sm font-medium text-text-secondary mb-4">Confían en nosotros:</p>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://picsum.photos/id/1/100/30" alt="Logo 1" className="h-6 object-contain" />
                <img src="https://picsum.photos/id/10/100/30" alt="Logo 2" className="h-6 object-contain" />
                <img src="https://picsum.photos/id/20/100/30" alt="Logo 3" className="h-6 object-contain" />
              </div>
            </div>
          </div>

          {/* Right: Quick Appointment Form */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-white shadow-2xl shadow-blue-500/10 border border-border-color overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-border-color flex items-center justify-between">
                <h2 className="text-lg font-bold text-text-main">Reserva tu espacio</h2>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">En línea</span>
              </div>
              <form className="p-6 md:p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1.5">Nombre completo</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                    <input type="text" className="w-full rounded-lg border-gray-300 pl-10 focus:ring-primary focus:border-primary text-sm py-2.5" placeholder="Ej. Juan Pérez" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1.5">Clínica</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">apartment</span>
                      <input type="text" className="w-full rounded-lg border-gray-300 pl-10 focus:ring-primary focus:border-primary text-sm py-2.5" placeholder="Ej. Central" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1.5">Teléfono</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">phone</span>
                      <input type="tel" className="w-full rounded-lg border-gray-300 pl-10 focus:ring-primary focus:border-primary text-sm py-2.5" placeholder="+52 55..." />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1.5">Rol</label>
                    <select className="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-sm py-2.5">
                      <option>Paciente</option>
                      <option>Especialista</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1.5">Presupuesto</label>
                    <select className="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-sm py-2.5">
                      <option>Consulta General</option>
                      <option>Especialidad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-1.5">Detalles adicionales</label>
                  <textarea rows={3} className="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-sm" placeholder="Describe brevemente el motivo de tu consulta..."></textarea>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-[0.98] group">
                  Agendar Cita
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                </button>
                
                <p className="text-[11px] text-center text-text-secondary">
                  Al hacer clic en "Agendar Cita", aceptas nuestros <a href="#" className="underline">Términos</a> y <a href="#" className="underline">Política de Privacidad</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
