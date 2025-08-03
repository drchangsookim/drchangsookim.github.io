---
layout: page
title: “XRD 기본 및 박막 측정법 이해”
permalink: /file-materials/xrd_basic/
---

# XRD 기본 및 박막 측정법 이해

{% assign lectures = site.data.downloads_test["XRD 기본 및 박막 측정법 이해"] %}
{% for lec in lectures %}
## Lecture {{ lec.number }}: {{ lec.title }}

<ul>
  {% for f in lec.files %}
  <li>
    <a href="{{ f.url }}" download>{{ f.name }}</a>
  </li>
  {% endfor %}
</ul>

{% endfor %}
