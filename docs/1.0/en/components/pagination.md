---
layout: ~/layouts/docs.astro
title: Pagination
description: Pagination
group: components
toc: true
---

## Default pagination

Pagination

{{< example >}}
<nav aria-label="Pagination">
    <ul class="pagination">
       <li class="item">
            <a href="#" class="link">1</a>
       </li>
       <li class="item">
            <a href="#" class="link">2</a>
       </li>
       <li class="item">
            <a href="#" class="link">3</a>
       </li>
    </ul>
</nav>
{{< /example >}}

## Disabled and active states

{{< example >}}
<nav aria-label="Page navigation">
    <ul class="pagination">
       <li class="item disabled">
            <a href="#" class="link">1</a>
       </li>
       <li class="item">
            <a href="#" class="link">2</a>
       </li>
       <li class="item">
            <a href="#" class="link active">3</a>
       </li>
       <li class="item">
            <a href="#" class="link">4</a>
       </li>
       <li class="item">
            <a href="#" class="link">5</a>
       </li>
    </ul>
</nav>
{{< /example >}}
