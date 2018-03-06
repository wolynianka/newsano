import articleView from './../views/article';

export default displayArticle => async (ctx, next) => {
  const { params: { articleId } } = ctx;
  const article = await displayArticle(articleId);
  const view = articleView(article); 

  ctx.render(view);
};
