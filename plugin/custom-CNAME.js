/**
 * Created by xinyu zhang on 5/24/16.
 * <zhangshea@gmail.com>
 */

module.exports = {
  db: null,
  init: _db => {
    this.db = _db;
  },
  render: (template, options) => {
    let cname = options.blog.plugin ? options.blog.plugin.cname || '' : '';
    let context = {};

    if (template == 'settings') {
      // settings page
      context.settings =
        `<div class="input-group">
          <h5>Custom CNAME</h5>
          <p><input type="text" name="plugin.cname" placeholder="http://custom.custom" value="${cname}"> </p>
        </div>`;
    }

    if (cname)
      context.postBottom = context.pageBottom =
        `<div id="disqus_thread" style="margin-top: 50px"></div>
        <script>
          (function() { var d = document, s = d.createElement('script'); s.src = '//${disqus}.disqus.com/embed.js'; s.setAttribute('data-timestamp', +new Date()); (d.head || d.body).appendChild(s); })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
      `;

    return context;
  }
};
