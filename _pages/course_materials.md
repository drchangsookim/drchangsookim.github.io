---
layout: page
title: "Course Materials"
permalink: /course-materials/
---

# Course Materials

Below are all the semesters for which materials are available. Click to expand each:

{% comment %}
  Grab just the semester names (strings) out of your data‐hash
{% endcomment %}
{% assign semesters = site.data.course_materials | keys %}

{% for sem in semesters %}
{% collapse name=sem icon="fas fa-chevron-down" %}
{% assign lectures = site.data.course_materials[sem] %}

<ul>
  {% for lec in lectures %}
    <li>
      **Lecture {{ lec.number }}: {{ lec.title }}**

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
{% endcollapse %}
{% endfor %}
