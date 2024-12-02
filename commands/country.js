const { country } = require('@toxicdevil/countrylookup');

module.exports = {
  command: 'country',
  info: 'Get country\'s information from its name.',
  private: false,
  func: async (sock, msg, text) => {
    if (!text) return await msg.reply({ text: '*Please enter a country name!*' });
    try {
      let info = country(text);
      return await msg.reply({
        image: { url: info.flag },
        caption: `_Country_ : *${info.name}*\n_Code_ : *${info.code}*\n_Capital_ : *${info.capital}*\n_Region_ : *${info.region}*\n_Currency_ : *${info.currency.name + ' ( ' + info.currency.code + ' ' + info.currency.symbol + ' )'}*\n_Language_ : *${info.language.name + ' ( ' + info.language.code.toUpperCase() + ' )'}*\n_Calling Code_ : *${info.calling_code}*`
      });
    } catch {
      return await msg.reply({ text: '*❌ I could not fetch information of this country!*' });
    }
  }
};
