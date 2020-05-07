/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export function onInitialClientRender() {
  const el = document.querySelector('a#bookmarklet')
  if (el) {
    let bookmarklet = "var s= document.createElement('script'); s.setAttribute('src', '"+window.location.href+"bookmarklet.js'); s.setAttribute('crossorigin', 'anonymous'); document.body.appendChild(s);"
    bookmarklet = '(function(){'+ bookmarklet +'})();'
    el.setAttribute("href", "javascript:" + encodeURIComponent(bookmarklet));
  }
}
