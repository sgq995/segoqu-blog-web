const path = require('path');
const fs = require('fs');
const faker = require('faker');

const database = {};

const COMPONENTS_PROPS = {
  'p': ['#text'],
  'img': ['@alt', '@src'],
  'a': ['@href', '#text'],
}

const PROPS = {
  '#text': (tag) => tag === 'p' ? faker.lorem.paragraph() : faker.lorem.sentence(),
  '@alt': () => faker.commerce.productDescription(),
  '@src': () => faker.image.lorempicsum.imageUrl(),
  '@href': () => faker.internet.url()
}

const categories = ['Repository', 'Web Development', 'Performance', 'Challenge'];
const tags = ['DevOps', 'Javascript', 'C++', 'C', 'Go', 'Java'];

database['posts'] = new Array(100)
  .fill(null)
  .map((_, id) => ({
    'status': 'OK',
    'statusCode': 200,
    'data': {
      id,
      title: faker.lorem.words(),
      date: faker.date.past(),
      summary: faker.lorem.sentence(),
      category: faker.random.arrayElement(categories),
      tags: faker.random.arrayElements(tags),
      content: new Array(faker.datatype.number({ min: 3, max: 5 }))
        .fill(null)
        .map(_ => {
          const tag = faker.random.arrayElement(
            Object.keys(COMPONENTS_PROPS)
          );
          const props = faker.random.arrayElements(
            COMPONENTS_PROPS[tag],
            tag === 'a' ? 2 : undefined
          ).reduce((obj, prop) => ({
            ...obj,
            [prop]: PROPS[prop](tag)
          }), {});

          return {
            tag,
            props
          };
          // faker.lorem.paragraphs(10)
        })
    }
  }))
  .sort((a, b) => b.data.date - a.data.date);

// database['articles'] = database['posts'].map(post => ({
//   id: post.id,
//   title: post.title,
//   date: post.date,
//   summary: post.summary
// }));

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(database));
