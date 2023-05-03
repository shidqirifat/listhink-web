const FORM = ['name', 'project', 'description'];
const PHONE_NUMBER = '6289611547934';
const WHATS_APP_BASE_URL = 'https://api.whatsapp.com';

const validateEmptyForm = (form) => Object.values(form).some((input) => !input);

const generateTemplateMessage = (form, t) => {
  const message = `${t('template_message_intro')} \n\n${t('me')}: ${form.name}\n${
    form.project ? `${t('project_type')}: ${form.project}\n` : ''
  }${t('project_description')}: ${form.description}\n\n${t('template_message_outro')}`;

  const encodedMessage = encodeURIComponent(message);

  return encodedMessage;
};

const generateURLWhatsApp = (form, t) => {
  return `${WHATS_APP_BASE_URL}/send?phone=${PHONE_NUMBER}&text=${generateTemplateMessage(
    form,
    t
  )}`;
};

export { FORM, validateEmptyForm, generateURLWhatsApp };
