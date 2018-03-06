import util from 'util';
import fs from 'fs';
import path from 'path';

const readDirAsync = util.promisify(fs.readdir);
const readFileAsync = util.promisify(fs.readFile);


export default (articlesDir, indexFileName, articleFactory) => async () => {
  const articles = await readDirAsync(articlesDir);
  const models = [];

  for (let article of articles) {
    const indexFile = path.join(articlesDir, article, indexFileName);

    try {
      const articleDescriptor = await readFileAsync(indexFile, 'UTF-8');
      const model = articleFactory(article, articleDescriptor);
      models.push(model);
    } catch (e) {
      continue;
    }
  }

  return models;
};
