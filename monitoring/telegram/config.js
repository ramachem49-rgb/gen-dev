require('dotenv').config();

module.exports = {
  telegram: {
    token:        process.env.TELEGRAM_BOT_TOKEN,
    chatId:       process.env.TELEGRAM_CHAT_ID,
    adminChatIds: (process.env.TELEGRAM_ADMIN_CHAT_IDS || '').split(',').filter(Boolean),
    botName:      'Genz Dev Security Bot',
    botUsername:  process.env.TELEGRAM_BOT_USERNAME || 'GenzDevBot',
  },
  security: {
    rateLimit: { enabled: true, maxRequestsPerMinute: 30, blockDuration: 600000 },
  },
};
