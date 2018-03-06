import util from 'util';
import fs from 'fs';
import path from 'path';

const readFileAsync = util.promisify(fs.readFile);


export default (articlesDir, indexFileName, articleFactory) => async (articleId) => {
  const articlePath = path.join(articlesDir, articleId, indexFileName);
  const content = await readFileAsync(articlePath, 'UTF-8');
  const article = articleFactory(articleId, content);

  return article;
};
