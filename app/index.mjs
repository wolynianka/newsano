import Koa from 'koa';
import Router from 'koa-router';
import path from 'path';
import serve from 'koa-static';
import viewEngine from  './middlewares/view-engine';
import errorHandler from  './middlewares/error-handler';
import { articleFactory } from './../src/domain/article';
import displayArticleList from './../src/use-cases/display-article-list/display-article-list';
import displayArticleListController from './controllers/display-article-list';
import displayArticle from './../src/use-cases/display-article/display-article';
import displayArticleController from './controllers/display-article';


const articlesPath = path.resolve('app', 'public', 'articles');
const indexFileName = 'index.html';
const layoutPath = path.resolve('app', 'public', 'layout.html');


const router = new Router();

const displArtListUseCase = displayArticleList(articlesPath, indexFileName, articleFactory);
const displArtListCtrl = displayArticleListController(displArtListUseCase);
router.get('/', displArtListCtrl);

const displArtUseCase = displayArticle(articlesPath, indexFileName, articleFactory);
const displArtCtrl = displayArticleController(displArtUseCase);
router.get('/:articleId', displArtCtrl);

router.all('*', async (ctx, next) => {
  ctx.throw(404, 'Page not found.');
});

const app = new Koa();

app
  .use(errorHandler)
  .use(serve('app/public'))
  .use(viewEngine(layoutPath))
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
