---
layout: docs
title: Alerts
description: Alerts
group: components
toc: true
---

## Default alert

{{< example >}}
<div class="alert" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 20c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        </span>
    </div>
    <div class="content-wrapper">
        <p class="title">Your order is ready to ship.</p>
        <div class="content">
            <p>This order is ready to ship on March 7, 2017 at 3:12pm EDT.</p>
        </div>
    </div>
</div>
{{< /example >}}

## Dismissible alert

{{< example >}}
<div class="alert dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 20c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        </span>
    </div>
    <div class="content-wrapper">
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
{{< /example >}}

## Alerts variations

{{< example >}}
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

<div class="alert information dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 20c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
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

<div class="alert warning dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 20c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
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

<div class="alert critical dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M11.768.768a2.5 2.5 0 0 0-3.536 0l-7.464 7.464a2.5 2.5 0 0 0 0 3.536l7.464 7.464a2.5 2.5 0 0 0 3.536 0l7.464-7.464a2.5 2.5 0 0 0 0-3.536l-7.464-7.464zm-2.768 5.232a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
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
{{< /example >}}

## Alert with call-to-action buttons

{{< example >}}

<div class="alert warning dismissible" role="alert">
    <div class="icon-wrapper">
        <span class="icon">
            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 20c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        </span>
    </div>
    <div class="content-wrapper">
        <p class="title">Your order is ready to ship.</p>
        <div class="content">
            <p>This order is ready to ship on March 7, 2017 at 3:12pm EDT.</p>
        </div>
        <div class="actions">
            <button class="btn">Edit variant weights</button>
            <button class="btn btn-link">Learn more</button>
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

{{< /example >}}

### Variables

As part of xiigrid's evolving CSS variables approach, breadcrumbs now use local CSS variables on `.alert` for enhanced real-time customization. Values for the CSS variables are set via SCSS, so SCSS customization is still supported, too.

{{< scss-docs name="alert-css-vars" file="scss/components/_alert.scss" >}}
