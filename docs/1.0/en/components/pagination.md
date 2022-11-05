---
layout: @layouts/docs
title: Pagination
description: Pagination
group: components
toc: true
---

## Default pagination

Pagination

{{< example >}}
<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="arrow"><a href="" class="btn btn-default">«</a></li>
        <li><a href="" class="btn btn-default">1</a></li>
        <li><a href="" class="btn btn-default">2</a></li>
        <li><a href="" class="btn btn-default">3</a></li>
        <li><a href="" class="btn btn-default">4</a></li>
        <li class="unavailable"><a href="" class="btn btn-default disabled">…</a></li>
        <li><a href="" class="btn btn-default">12</a></li>
        <li><a href="" class="btn btn-default">13</a></li>
        <li class="arrow"><a href="" class="btn btn-default">»</a></li>
    </ul>
</nav>
{{< /example >}}

## Disabled and active states

{{< example >}}
<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="unavailable"><a href="" class="btn btn-default">Previous</a></li>
        <li class="current"><a href="" class="btn btn-default">1</a></li>
        <li><a href="" class="btn btn-default">2</a></li>
        <li><a href="" class="btn btn-default">3</a></li>
        <li><a href="" class="btn btn-default">4</a></li>
        <li class="unavailable"><a href="" class="btn btn-disabled">…</a></li>
        <li><a href="" class="btn btn-default">12</a></li>
        <li><a href="" class="btn btn-default">13</a></li>
        <li><a href="" class="btn btn-default">Next</a></li>
    </ul>
</nav>
{{< /example >}}
