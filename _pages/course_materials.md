---
title: "Course Materials"
permalink: /course-materials/
---

# Course Materials

Below are all the semesters for which materials are available. Click to expand each one:

{% raw %}
{% for sem_pair in site.data.course_materials %}
  {% assign semester_name = sem_pair[0] %}
  {% assign lectures      = sem_pair[1] %}

  <details>
    <summary><strong>{{ semester_name }}</strong></summary>

    <ul>
      {% for lec in lectures %}
        <li>
          <strong>Lecture {{ lec.number }}: {{ lec.title }}</strong>
          <ul>
            {% for f in lec.files %}
              <li><a href="{{ f.url }}">{{ f.name }}</a></li>
            {% endfor %}
          </ul>
        </li>
      {% endfor %}
    </ul>
  </details>

{% endfor %}
{% endraw %}
