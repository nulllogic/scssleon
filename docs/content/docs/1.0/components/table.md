---
layout: docs
title: Tables
description: Tables
group: components
toc: true
---


## Overview

Due to the widespread use of `<table>` elements across third-party widgets like calendars and date pickers, xiigrid's tables are **opt-in**. Add the base class `.table` to any `<table>`, then extend with our optional modifier classes or custom styles. All table styles are not inherited in xiigrid, meaning any nested tables can be styled independent from the parent.

Using the most basic table markup, here's how `.table`-based tables look in xiigrid.

{{< table class="table" simplified="false" >}}
