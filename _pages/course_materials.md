---
layout: page
title: "Course Materials"
permalink: /course-materials/
---

# Course Materials

Below are all the semesters with materials. Click to expand each one:

{% comment %}
  1) Extract just the keys (semester names) as an array of strings
{% endcomment %}
{% assign semester_names = site.data.course_materials | keys %}

{% for semester in semester_names %}
<details>
  <summary><strong>{{ semester }}</strong></summary>

  {% comment %}
    2) Look up the lectures array by that string key
  {% endcomment %}
  {% assign lectures = site.data.course_materials[semester] %}

  <ul>
    {% for lec in lectures %}
      <li>
        <strong>Lecture {{ lec.number }}: {{ lec.title }}</strong>
        <ul>
          {% for f in lec.files %}
            <li>
              <a href="{{ f.url }}">{{ f.name }}</a>
            </li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}
  </ul>
</details>

{% endfor %}
