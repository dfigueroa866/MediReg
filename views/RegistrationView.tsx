
import React, { useState } from 'react';
import { sendRegistrationData, RegistrationData } from '../services/webhookService';

const RegistrationView: React.FC = () => {
  const getInitialState = (): RegistrationData => ({
    lead_id: '',
    created_at: '',
    source: '',
    status: '',
    fullName: '',
    clinicName: '',
    phone: '',
    email: '',
    role: 'Médico General',
    budget: '',
    details: ''
  });

  const [formData, setFormData] = useState<RegistrationData>(getInitialState());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare data with hidden fields
      const dataToSend: RegistrationData = {
        ...formData,
        lead_id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        source: 'registration page',
        status: 'pending'
      };

      await sendRegistrationData(dataToSend);
      setSubmitStatus('success');
      // Optional: Reset form
      setFormData(getInitialState());
      alert('Registro enviado con éxito!');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      alert('Hubo un error al enviar el registro. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-8 relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-slate-100 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/20 blur-[100px] rounded-full"></div>
        <img
          src="https://picsum.photos/id/122/1920/1080"
          alt="Clinic Background"
          className="w-full h-full object-cover opacity-20 filter blur-sm grayscale"
        />
      </div>

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-border-color">
        {/* Sidebar Info */}
        <div className="md:w-[35%] bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-blue-700/95 z-10"></div>
          <img
            src="https://picsum.photos/id/160/400/800"
            alt="Side"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />

          <div className="relative z-20">
            <h2 className="text-3xl font-bold mb-4">Bienvenido</h2>
            <p className="text-blue-100 leading-relaxed text-sm">
              Únase a la red líder de profesionales de la salud. Gestione sus citas y pacientes en un solo lugar de forma segura y eficiente.
            </p>
          </div>

          <div className="relative z-20 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-200">check_circle</span>
              </div>
              <span className="text-sm font-medium">Gestión Simplificada</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-200">security</span>
              </div>
              <span className="text-sm font-medium">Datos Encriptados</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-200">sync</span>
              </div>
              <span className="text-sm font-medium">Sincronización Real</span>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-text-main mb-2">Registro de Clínica</h1>
            <p className="text-text-secondary text-sm">Complete el formulario para coordinar su visita y comenzar.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Nombre Completo</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors">person</span>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-xl border-slate-200 bg-slate-50 pl-10 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Dr. Juan Pérez"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Nombre de la Clínica</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors">apartment</span>
                  <input
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="w-full rounded-xl border-slate-200 bg-slate-50 pl-10 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Clínica Central"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Teléfono</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors">call</span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border-slate-200 bg-slate-50 pl-10 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+52 55..."
                    required
                  />
                </div>
              </div>

              {/* Added Email Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors">mail</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-slate-200 bg-slate-50 pl-10 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="dr@ejemplo.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Rol Profesional</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-primary transition-colors">badge</span>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border-slate-200 bg-slate-50 pl-10 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                  >
                    <option>Médico General</option>
                    <option>Especialista</option>
                    <option>Administrador</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-3">Presupuesto Mensual Estimado</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleBudgetSelect('< $1k')}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${formData.budget === '< $1k' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-primary hover:text-primary'}`}
                >
                  &lt; $1k
                </button>
                <button
                  type="button"
                  onClick={() => handleBudgetSelect('$1k - $5k')}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${formData.budget === '$1k - $5k' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-primary hover:text-primary'}`}
                >
                  $1k - $5k
                </button>
                <button
                  type="button"
                  onClick={() => handleBudgetSelect('$5k+')}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${formData.budget === '$5k+' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-primary hover:text-primary'}`}
                >
                  $5k+
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Detalles Adicionales</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                placeholder="Especifique sus necesidades o consultas..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary-hover active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Registro'}
                <span className="material-symbols-outlined">send</span>
              </button>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-green-500">lock</span>
                  <span>Datos sincronizados automáticamente</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-blue-500">table_chart</span>
                  <span>Integración con n8n</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationView;

