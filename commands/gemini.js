const { RsnChat } = require('rsnchat');
let ai = new RsnChat('rsnai_Hw2hT2g5EXGwqz3baAmivalf');

module.exports = {
  command: 'gemini',
  info: 'Gemini is a multimodal AI (LLM) developed by Google.',
  private: false,
  func: async (sock, msg, text) => {
    return await ai.gemini(text || 'Hello').then(async (response) => {
      await msg.reply({ text: response?.message?.trim() });
    });
  }
};
