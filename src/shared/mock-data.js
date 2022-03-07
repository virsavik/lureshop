export const userAsync = () => {
  // eslint-disable-next-line no-undef
  return new Promise(resolve => setTimeout(() => resolve(userData), 1000));
};

export const getAllProductsAsync = () => {
  // eslint-disable-next-line no-undef
  return new Promise(resolve => setTimeout(() => resolve(productDatas), 500));
};

export const userData = {
  Fullname: 'Geralt of Rivia',
  BirthDay: '01/01/2000',
  BirthPlace: 'Skellige',
  Career: 'Witcher',
  Email: 'geralt@rivia.com',
  ImageUrl:
    'https://upload.motgame.vn/wp-content/uploads/2019/02/Kujimatowa/the-witcher-cameo-7.jpg',
};

export const userAdditionalData = {
  Height: '1.75',
  Weight: '75',
  Hair: 'white',
  Eyes: 'cat',
  ImageUrl:
    'https://upload.motgame.vn/wp-content/uploads/2019/02/Kujimatowa/the-witcher-cameo-7.jpg',
};

export const productDatas = [
  {
    id: 1,
    name: 'Mepps LongCast Gold #3/12g',
    subtitle: "It's a long cast gold",
    price: '33.00',
    description: 'Lorem ipsum dolor amesithis is a long description',
    image:
      'https://www.lureshop.eu/pub/media/catalog/product/cache/b8d672e2dccc5833e42803eb06f329a1/l/o/longcast_gold_1.jpg',
  },
  {
    id: 2,
    name: 'Mepps LongCast Silver #2/8g',
    subtitle: "It's a long cast silver",
    price: '23.00',
    description: 'This is a Mepps LongCast Silver #2/8g to test the description length',
    image:
      'https://www.lureshop.eu/pub/media/catalog/product/cache/b8d672e2dccc5833e42803eb06f329a1/l/o/longcast_silver.jpg',
  },
  {
    id: 3,
    name: 'SG Ball Jigg Heads - Tournament Series 10g/Hook#6/0',
    subtitle: "It's a Ball Jigg Heads",
    price: '13.00',
    description:
      'This is a SG Ball Jigg Heads - Tournament Series 10g/Hook#6/0 to test the description length',
    image:
      'https://www.lureshop.eu/pub/media/catalog/product/cache/b8d672e2dccc5833e42803eb06f329a1/6/1/61935_ball_jig_heads.jpg',
  },
  {
    id: 4,
    name: 'Rublex Veltic ANV #3/5g',
    subtitle: "It's a Veltic ANV",
    price: '100',
    description: 'This is a Rublex Veltic ANV #3/5g to test the description length',
    image:
      'https://www.lureshop.eu/pub/media/catalog/product/cache/b8d672e2dccc5833e42803eb06f329a1/r/u/rublex_veltic_3_anv.jpg',
  },
  {
    id: 5,
    name: 'Mepps Aglia TW Streamer Silver #2/4.7g',
    subtitle: "It's a Aglia TW Streamer Silver",
    price: '100',
    description: 'This is a Mepps Aglia TW Streamer Silver #2/4.7g to test the description length',
    image:
      'https://www.lureshop.eu/pub/media/catalog/product/cache/b8d672e2dccc5833e42803eb06f329a1/a/g/aglia_tw_streamer_s.jpg',
  },
];
