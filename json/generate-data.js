const path = require('path');
const fs = require('fs');
const faker = require('faker');

const database = {};

database['posts'] = new Array(100).fill(null).map((_, id) => ({
  id,
  title: faker.lorem.words(),
  date: faker.date.past(),
  summary: faker.lorem.sentence(),
  content: faker.lorem.paragraphs()
}));

database['articles'] = database['posts'].map(post => ({
  id: post.id,
  title: post.title,
  date: post.date,
  summary: post.summary
}));

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(database));
