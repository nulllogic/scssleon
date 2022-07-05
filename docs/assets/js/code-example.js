(() => {
    'use strict'

    // Clipboard
    const clipboard = new ClipboardJS('.btn-clipboard', {
        target: trigger => trigger.closest('.code-snippet').querySelector('.highlight')
    })

    clipboard.on('success', event => {

    })

    clipboard.on('error', event => {

    })

    // Resizable

    const initDragHandle = (resizer, preview) => {

        document.onmousemove = (event) => {
            return eventDragHandler(event, resizer, preview);
        }

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    const eventDragHandler = (event, resizer, preview) => {
        preview.style.width = event.clientX + 'px';
    }

    // Wrap programmatically code blocks and add copy btn.
    document.querySelectorAll('.code-example')
        .forEach(element => {
            let preview = element.querySelector('.example-preview');
            if (preview) { // Ignore examples made be shortcode

                let resizer = element.querySelector('.example-preview .resizer');

                if (resizer) {
                    resizer.onmousedown = () => {
                        return initDragHandle(resizer, preview)
                    }
                }
            }
        })
})()
