export default ({ title, mainImage, mainImageSource, content, contentSource }) => `
  <h2>${title}</h2>
  <div>
    <div class="item">
      <img src="/articles/${mainImage}">
      ${mainImageSource
        ? `<p class="footnote">source: ${mainImageSource}</p>`
        : ''}
    </div>
    ${content}
    ${(contentSource ? `<p class="source">Source: ${contentSource}</p>` : '')}
  </div>
`;
