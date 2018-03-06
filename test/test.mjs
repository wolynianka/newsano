import test from 'tape';
import path from 'path';
import displayArticleList from './../src/use-cases/display-article-list/display-article-list';
import { articleFactory } from './../src/domain/article';

const articlesPath = path.resolve('app', 'public', 'articles');
const indexFileName = 'index.html';

test('Articles correctness', async t => {
  const displArtListUseCase = displayArticleList(
    articlesPath,
    indexFileName,
    articleFactory
  );
  const articles = await displArtListUseCase();
  
  t.plan(articles.length * 6);

  for (let article of articles) {
    console.info(`Checking article: ${article.slug}`);
    t.ok(typeof article.slug === 'string', 'has slug');
    t.ok(typeof article.title === 'string', 'has title');
    t.ok(typeof article.content === 'string', 'has content');
    t.ok(typeof article.contentSource === 'string', 'has contentSource');
    t.ok(typeof article.mainImage === 'string', 'has mainImage');
    t.ok(typeof article.mainImageSource === 'string', 'has mainImageSource');
    console.info('--------------------');
  }
});
