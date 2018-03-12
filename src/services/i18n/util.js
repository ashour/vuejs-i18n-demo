import { loadAsset, removeAsset } from '../util'

export function switchHtmlLocale(locale, dir, opt = {}) {
    const html = window.document.documentElement

    html.lang = locale
    html.dir = dir

    if (opt.withRTL) {
        if (dir === 'rtl') {
            opt.withRTL.forEach(stylesheetURL => loadAsset(stylesheetURL, 'css'))
        } else {
            opt.withRTL.forEach(stylesheetURL => removeAsset(stylesheetURL, 'css'))
        }
    }
}

export function formatDate(value, format, locale) {
    // we transform "foo:bar;baz:man" into { foo: bar, baz: man }
    const options = {}
    format.split(';').forEach((part) => {
        const [key, val] = part.split(':')
        options[key.trim()] = val.trim()
    })

    try {
        return new Intl.DateTimeFormat(locale, options).format(value)
    } catch (err) {
        /* eslint-disable no-console */
        console.error(err)
    }

    return value
}
