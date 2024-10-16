export let parties: {
  name: string;
  abbr: string;
  seats: number;
  color: string;
}[];

parties = [];

parties.push({
  name: 'Sozialdemokratische party Deutschlands',
  abbr: 'SPD',
  seats: 34,
  color: '#cc0000',
});

parties.push({
  name: 'Christlich Demokratische Union Deutschlands',
  abbr: 'CDU',
  seats: 52,
  color: '#0033ff',
});

parties.push({
  name: 'Bündnis 90/Die Grünen',
  abbr: 'Grüne',
  seats: 34,
  color: '#00cc00',
});

parties.push({
  name: 'Die Linke',
  abbr: 'Die Linke',
  seats: 22,
  color: '#9b00cc',
});

parties.push({
  name: 'Alternative für Deutschland',
  abbr: 'AfD',
  seats: 17,
  color: '#009ee0',
});
