
export const Metadata: any = {
  EN: {
    baseURL: 'https://publicspaces.net',
    title: 'PublicSpaces',
    subtitle: 'internet for the common good',
    about: function(baseURL: string) {
      return (
        `<p>PublicSpaces reclaims the internet as a force for the common good and advocates a new internet that strengthens the public domain. <a href="${baseURL}/manifesto" target="_blank" rel="noopener noreferrer">Read our manifesto</a> to see the values we want to see at the core of our digital lives.</p>`
      )
    },
    more: 'more about PublicSpaces'
  },
  NL: {
    baseURL: 'https://publicspaces.net',
    title: 'PublicSpaces',
    subtitle: 'internet in het publieke belang',
    about: function(baseURL: string) {
      return (
        `<p>PublicSpaces staat voor het publieke belang op het internet en ondersteunt nieuwe internet-technologie die het publieke domein versterkt. <a href="${baseURL}/manifesto" target="_blank" rel="noopener noreferrer">Lees ons manifest</a> om te zien welke waarden aan de basis moeten staan van onze digitale levens.</p>`
      )
    },
    more: 'meer over PublicSpaces'
  }
}
