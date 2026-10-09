// WhatsApp Cloud API Integration Endpoint Stub
import { defineEventHandler, readBody, createError } from 'h3';

interface WhatsAppInquiryBody {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<WhatsAppInquiryBody>(event);

  // Validate required inputs
  if (!body.name || !body.phone || !body.email || !body.interest) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing mandatory inquiry fields: name, phone, email, and interest are required.'
    });
  }

  // Environment variable placeholders for WhatsApp Cloud API
  const WHATSAPP_API_TOKEN = process.env.WHATSAPP_CLOUD_API_TOKEN || '';
  const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || '';
  const ADMIN_RECIPIENT_PHONE = process.env.WHATSAPP_ADMIN_PHONE || '919737972097';

  // Construct structured notification payload
  const formattedMessage = `New Inbound Inquiry - Incredible Groups\n` +
    `• Name: ${body.name}\n` +
    `• Phone: ${body.phone}\n` +
    `• Email: ${body.email}\n` +
    `• Interest: ${body.interest}\n` +
    `• Message: ${body.message || 'No additional note provided'}\n` +
    `• Time: ${new Date().toISOString()}`;

  // Log stub inquiry for audit
  console.log('[Incredible Groups Server] Inquiry Received:', {
    timestamp: new Date().toISOString(),
    name: body.name,
    phone: body.phone,
    email: body.email,
    interest: body.interest
  });

  // If live Cloud API credentials are configured, dispatch payload
  if (WHATSAPP_API_TOKEN && WHATSAPP_PHONE_NUMBER_ID) {
    try {
      const response = await fetch(`https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: ADMIN_RECIPIENT_PHONE,
          type: 'text',
          text: {
            preview_url: false,
            body: formattedMessage
          }
        })
      });

      const data = await response.json();
      return {
        success: true,
        message: 'Inquiry transmitted to WhatsApp Cloud API successfully',
        data
      };
    } catch (error: any) {
      console.error('[WhatsApp Cloud API Error]:', error);
      return {
        success: false,
        message: 'Dispatched to fallback log',
        error: error.message
      };
    }
  }

  // Stub response when running in mock / staging environment
  return {
    success: true,
    message: 'Inquiry registered. Live WhatsApp Cloud API token pending configuration.',
    inquirySummary: {
      name: body.name,
      interest: body.interest,
      phone: body.phone
    }
  };
});
