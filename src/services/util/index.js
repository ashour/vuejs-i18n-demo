export function loadAsset(fileName, fileType) {
    let fileref = null

    if (fileType === 'js') {
        fileref = document.createElement('script')
        fileref.setAttribute('type', 'text/javascript')
        fileref.setAttribute('src', fileName)
    } else if (fileType === 'css') {
        fileref = document.createElement('link')
        fileref.setAttribute('rel', 'stylesheet')
        fileref.setAttribute('type', 'text/css')
        fileref.setAttribute('href', fileName)
    }

    if (fileref) {
        document.getElementsByTagName('head')[0].appendChild(fileref)
    }
}

export function removeAsset(fileName, fileType) {
    let element = null
    let attribute = null

    switch (fileType) {
    case 'js':
        element = 'script'
        attribute = 'src'
        break

    case 'css':
        element = 'link'
        attribute = 'href'
        break

    default:
        element = 'none'
        attribute = 'none'
    }

    const suspects = document.getElementsByTagName(element)

    // we search backwards within nodelist for matching elements to remove
    for (let i = suspects.length; i >= 0; i -= 1) {
        if (suspects[i] &&
            suspects[i].getAttribute(attribute) !== null &&
            suspects[i].getAttribute(attribute).indexOf(fileName) !== -1) {
            suspects[i].parentNode.removeChild(suspects[i])
        }
    }
}
