import * as util from 'util';
import * as fs from 'fs';
const readFileAsync = util.default.promisify(fs.default.readFile);


export default layoutPath => async (ctx, next) => {
  const layoutHtml = await readFileAsync(layoutPath, 'UTF-8');

  ctx.render = (html, status = 200) => {
    ctx.body = layoutHtml.replace('__CONTENT__', html);
  };

  await next();
};
