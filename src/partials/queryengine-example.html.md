---
layout: slide
dataX: "8000"
dataY: "-1000"
id: "queryengine-example"
---

## QueryEngine in DocPad example

Display posts title sorted by date (code in [eco](https://github.com/sstephenson/eco))

<pre><code>
<% for post in @database.findAll(layout: 'post').sortArray(date:-1) : %>
  <div class="title"><%= post.title %></div>
<% end %>
</code></pre>