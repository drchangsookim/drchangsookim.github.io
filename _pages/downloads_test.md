---
title: "다운로드 테스트"
permalink: /downloads_test/
redirect_from:
  - /downloads_test
---

# Course Materials

{% assign courses = site.data.downloads_test | keys %}

<ul>
  {% for course_name in courses %}
    <li>
      <a href="/downloads_test/{{ course_name | slugify }}/">
        {{ course_name }}
      </a>
    </li>
  {% endfor %}
</ul>