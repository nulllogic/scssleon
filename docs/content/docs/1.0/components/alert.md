---
layout: docs
title: Alerts
description: Alerts
group: components
toc: true
---

## Alerts

<div class="alert success dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4l-4.8 4.8-2.3-2.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z"></path></svg>
        </span>
    </div>
    <div class="content-wrapper">
        <p class="title">Your order is ready to ship.</p>
        <div class="content">
            <p>This order is ready to ship on March 7, 2017 at 3:12pm EDT.</p>
        </div>
    </div>
    <div class="dismiss-wrapper">
        <button class="btn btn-close" aria-label="Dismiss notification" type="button">
            <svg viewBox="0 0 20 20" class="icon" focusable="false" aria-hidden="true" fill="currentColor">
                <path fill="evenodd" d="M6.707 5.293a1 1 0 0 0-1.414 1.414l3.293 3.293-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414-1.414l-3.293-3.293 3.293-3.293a1 1 0 0 0-1.414-1.414l-3.293 3.293-3.293-3.293Z"></path>
            </svg>
        </button>
    </div>
</div>

<div class="alert alert-info alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i aria-hidden="true" class="fa fa-close"></i></button><strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.</div>
<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i aria-hidden="true" class="fa fa-close"></i></button><strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.</div>
<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i aria-hidden="true" class="fa fa-close"></i></button><strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.</div>

```html
<div class="alert success dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4l-4.8 4.8-2.3-2.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z"></path></svg>
        </span>
    </div>
    <div class="content-wrapper">
        <p class="title">Well done!</p>
        <div class="content">
            <p>test</p>
        </div>
    </div>
    <div class="dismiss-wrapper">
        <button class="btn btn-close" aria-label="Dismiss notification" type="button">
            <svg viewBox="0 0 20 20" class="icon" focusable="false" aria-hidden="true" fill="currentColor">
                <path fill="evenodd" d="M6.707 5.293a1 1 0 0 0-1.414 1.414l3.293 3.293-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414-1.414l-3.293-3.293 3.293-3.293a1 1 0 0 0-1.414-1.414l-3.293 3.293-3.293-3.293Z"></path>
            </svg>
        </button>
    </div>
</div>
```
