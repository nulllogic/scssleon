---
layout: docs
title: Pagination
description: Pagination
group: components
toc: true
---

## Default pagination

Pagination

<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="arrow"><a href="">«</a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li class="unavailable"><a href="">…</a></li>
        <li><a href="">12</a></li>
        <li><a href="">13</a></li>
        <li class="arrow"><a href="">»</a></li>
    </ul>
</nav>

```html
<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li><a href="">«</a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li class="unavailable"><a href="">…</a></li>
        <li><a href="">12</a></li>
        <li><a href="">13</a></li>
        <li><a href="">»</a></li>
    </ul>
</nav>
```

## Disabled and active states

<nav aria-label="Page navigation example">
    <ul class="pagination">
       <li class="unavailable"><a href="">Previous</a></li>
       <li class="current"><a href="">1</a></li>
       <li><a href="">2</a></li>
       <li><a href="">3</a></li>
       <li><a href="">4</a></li>
       <li class="unavailable"><a href="">…</a></li>
       <li><a href="">12</a></li>
       <li><a href="">13</a></li>
       <li><a href="">Next</a></li>
    </ul>
</nav>

```html
<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="unavailable"><a href="">Previous</a></li>
        <li class="current"><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li class="unavailable"><a href="">…</a></li>
        <li><a href="">12</a></li>
        <li><a href="">13</a></li>
        <li><a href="">Next</a></li>
    </ul>
</nav>
```
