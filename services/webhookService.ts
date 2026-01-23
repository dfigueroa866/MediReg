export interface RegistrationData {
  lead_id: string;
  created_at: string;
  source: string;
  status: string;
  fullName: string;
  clinicName: string;
  phone: string;
  email: string;
  role: string;
  budget: string;
  details: string;
}

const WEBHOOK_URL = 'https://n8n.apps-m8solutions.com/webhook/ded35b63-86a6-4518-bbfc-061e0eb82508'; // Proxied via Vite

export const sendRegistrationData = async (data: RegistrationData): Promise<void> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error sending data: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to send registration data:', error);
    throw error;
  }
};
