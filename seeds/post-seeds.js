const { Post } = require('../models');

const postdata = [
  {
    title: 'Four Popular Programming Languages For Artificial Intelligence.',
    body: 'xxx',
    user_id: 10
  },
  {
    title: 'US restricts trade with a dozen more Chinese technology firms',
    body: 'yyyy',
    user_id: 8
  },
  {
    title: 'You probably have better options than the candy bar-shaped monitor',
    body: 'zzz',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    body: ' ',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    body: ' ',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    body: ' ',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: ' ',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: ' ',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    body: ' ',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    body: ' ',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: ' ',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    body: ' ',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    body: ' ',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    body: ' ',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    body: ' ',
    user_id: 3
  },
  {
    title: 'Is your organization ready for the fourth industrial revolution?',
    body: 'ttt',
    user_id: 7
  },
  {
    title: 'Apple Enters Partnership To Design Its Own iPhone Modem In 2023.',
    body: 'ppp',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    body: ' ',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    body: ' ',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    body: ' ',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
