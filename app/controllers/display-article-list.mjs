import articleOnList from './../views/article-on-list';

export default displayArticleList => async (ctx, next) => {
  const articles = await displayArticleList();
  const view = articles
    .map(articleOnList)
    .join('\n');

  ctx.render(view);
}
