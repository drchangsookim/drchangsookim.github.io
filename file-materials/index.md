---
layout: page
title: “File Materials”
permalink: /file-materials/
---


# File Materials

Below are all the courses for which materials are available. Click one to see its files:

<ul>
  {% for semester_name in semesters %}
    <li>
      <h2>
        <a href="/file-materials/{{ semester_name | slugify }}/">
          {{ semester_name }}
        </a>
      </h2>
      {% comment %}
        Now pull out that semester’s lectures array by indexing
      {% endcomment %}
      {% assign lectures = site.data.file_materials[semester_name] %}
      <ul>
        {% for lec in lectures %}
          <li>
            <a href="{{ lec.url }}">{{ lec.name }}</a>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
