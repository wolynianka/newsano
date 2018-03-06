export default ({ slug, mainImage, title }) => `
  <div class="item">
    <a href="/${slug}">
    <img src="/articles/${mainImage}" class="img-thumb"/><br/>
      ${title}
    </a>
  </div>
`;
