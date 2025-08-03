---
layout: page
title: "다운로드 테스트"
permalink: /course-materials/
---

# Course Materials

Below are all the courses for which materials are available. Click to expand each:

{% assign semesters = site.data.course_materials | keys %}

{% for sem in semesters %}
## {{ sem }}

{% assign lectures = site.data.course_materials[sem] %}
{% for lec in lectures %}
### Lecture {{ lec.number }}: {{ lec.title }}

{% for f in lec.files %}
[Download {{ f.name }}]({{ f.url }}){: .btn }
{% endfor %}

{% endfor %}
{% endfor %}