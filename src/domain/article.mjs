import jsdom  from 'jsdom';
const { JSDOM } = jsdom;
import path from 'path';


export function articleFactory(articleId, xmlContent) {
  return {
    slug: articleId,
    title: getTagContent('title', xmlContent),
    content: getTagContent('content', xmlContent),
    contentSource: getTagContent('content-source', xmlContent),
    mainImage: path.join(articleId, getTagContent('main-image', xmlContent)),
    mainImageSource: getTagContent('main-image-source', xmlContent),
  };
};

export function getTagContent(tagName, content) {
  const dom = new JSDOM(content)
  const tag = dom.window.document.querySelector(tagName);

  return tag ? tag.innerHTML : null;
};
