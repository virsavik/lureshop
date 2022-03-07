export const userApi = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(userList);
    }, 300);
  });
};

const userList = [
  {
    ID: 1,
    Username: 'JNQ17GXZ8AA',
    Fullname: 'Francis Head',
    Career: 'Diam Proin Industries',
    Email: 'a.arcu.sed@outlook.couk',
    ImageUrl: 'arcu.',
  },
  {
    ID: 2,
    Username: 'EGP07AWV2DU',
    Fullname: 'Indira Kline',
    Career: 'Tincidunt Vehicula Risus Consulting',
    Email: 'nullam@aol.com',
    ImageUrl: 'Sed',
  },
  {
    ID: 3,
    Username: 'DXR76KTP5CQ',
    Fullname: 'Alexander Ford',
    Career: 'Consectetuer Cursus Limited',
    Email: 'placerat@hotmail.edu',
    ImageUrl: 'Vivamus',
  },
  {
    ID: 4,
    Username: 'WOO91XUY6IE',
    Fullname: 'Bell Rivers',
    Career: 'Tellus Faucibus Leo Company',
    Email: 'sed.pede.nec@outlook.ca',
    ImageUrl: 'nec,',
  },
  {
    ID: 5,
    Username: 'QWU71OGZ5PB',
    Fullname: 'Shoshana Hayden',
    Career: 'Sit Amet Corporation',
    Email: 'ipsum.primis@icloud.couk',
    ImageUrl: 'scelerisque',
  },
];
