(() => {
    'use strict'
    const clipboard = new ClipboardJS('.btn-clipboard', {
        target: trigger => trigger.closest('.code-snippet').querySelector('.highlight')
    })

    clipboard.on('success', event => {

    })

    clipboard.on('error', event => {

    })
})()
