---
title: "다운로드 테스트"
permalink: /downloads_test/
redirect_from:
  - /downloads_test
---

# Course Materials

{% assign courses = site.data.downloads_test | keys %}


{% for course_pair in site.data.downloads_test %}
  {% assign course_name = course_pair[0] %}
  {% assign lectures      = course_pair[1] %}
  <h2>{{ course_name }}</h2>
  <ul>
    {% for lec in lectures %}
      <li>
        <a href="{{ lec.url }}">{{ lec.name }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}