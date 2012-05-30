---
layout: slide
dataX: "9000"
dataY: "-1000"
id: "crazy-rendering-system"
---

## Crazy rendering system ? (1/2)

Documents rendered based on extensions :

- index.html.md => Markdown to HTML => index.html
- mypage.html.md.eco => ECO to Markdown to HTML => mypage.html
- app.js.coffee => CoffeeScript to Javascript => app.js

Example from this presentation's *default.html.eco*
<pre><code>
&lt;title&gt;<%= @document.title %> | <%= @site.name %>&lt;/title&gt;
</code></pre>