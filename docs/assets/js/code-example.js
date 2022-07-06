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

    const initDragHandle = (event, resizer, preview, limit) => {
        let position = event.clientX;
        let margin = parseInt(preview.style.marginRight, 10);
        document.documentElement.classList.add('dragging')

        document.onmousemove = (event) => {
            return eventDragHandler(event, resizer, preview, position, margin, limit);
        }

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
            document.documentElement.classList.remove('dragging')
        }
    }

    const eventDragHandler = (event, resizer, preview, position, margin, limit) => {

        let offset = margin + position - event.clientX;

        if (offset > 0) {
            if (offset < limit) {
                preview.style.marginRight = offset + 'px';
            } else {
                preview.style.marginRight = limit + 'px';
            }
        } else {
            preview.style.marginRight = '0px';
        }
    }

    window.onload = () => {
        // Wrap programmatically code blocks and add copy btn.
        document.querySelectorAll('.code-example')
            .forEach(element => {
                let preview = element.querySelector('.example-preview');

                if (preview) { // Ignore examples made be shortcode

                    let resizer = element.querySelector('.example-preview .resizer .drag');

                    if (resizer) {
                        let container_limit = Math.round(preview.clientWidth / 1.5);
                        // console.log(preview.style, container_limit);
                        resizer.onmousedown = (event) => {
                            return initDragHandle(event, resizer, preview, container_limit)
                        }
                    }
                }
            })
    }

})()
