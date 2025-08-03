---
layout: page
title: “File Materials”
permalink: /file-materials/
---


# File Materials

Below are all the courses for which materials are available. Click one to see its files:

{% assign courses = site.data.file_materials | keys %}

<ul>
  {% for course_name in courses %}
    <li>
      <a href="/downloads/{{ course_name | slugify }}/">
        {{ course_name }}
      </a>
    </li>
  {% endfor %}
</ul>
