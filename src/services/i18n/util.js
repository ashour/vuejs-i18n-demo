import { loadAsset, removeAsset } from '../util'

export function switchDocumentLocale(locale, dir, opt = {}) {
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

function parseOptions(format) {
    const options = {}

    format.split(';').forEach((part) => {
        const [key, val] = part.split(':')
        options[key.trim()] = val.trim()
    })

    return options
}

export function formatDate(value, format, locale) {
    try {
        return new Intl.DateTimeFormat(locale, parseOptions(format)).format(value)
    } catch (err) {
        /* eslint-disable no-console */
        console.error(err)
    }

    return value
}

export function formatPrice(value, format, locale) {
    try {
        return new Intl.NumberFormat(locale, parseOptions(format)).format(value)
    } catch (err) {
        /* eslint-disable no-console */
        console.error(err)
    }

    return value
}
