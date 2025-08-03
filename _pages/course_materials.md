---
layout: page
title: "Course Materials"
permalink: /course-materials/
---

# Course Materials

Below are all the semesters for which materials are available. Click to expand each one:

{% comment %}
  Turn our data‐hash into a list of keys (strings)
{% endcomment %}
{% assign semesters = site.data.course_materials | keys %}

{% for sem in semesters %}
<details>
  <summary><strong>{{ sem }}</strong></summary>

  {% assign lectures = site.data.course_materials[sem] %}
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
