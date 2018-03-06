export default async function errorHandler(ctx, next) {
  try { await next(); } catch (e) {
    console.log(e);
    ctx.status = 500;
    ctx.render('Something went wrong ;(', 500);
  }
};
