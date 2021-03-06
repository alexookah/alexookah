// Find if user has set a preference and react to changes
(function initializeTheme() {
    syncBetweenTabs()
    listenToOSChanges()
    enableTheme(
        returnThemeBasedOnLocalStorage() ||
        returnThemeBasedOnOS() ||
        returnThemeBasedOnTime(),
        false)
}())

// Listen to preference changes. The event only fires in inactive tabs, so theme changes aren't applied twice.
function syncBetweenTabs() {
    window.addEventListener('storage', (e) => {
        const root = document.documentElement
        if (e.key === 'preference-theme') {
            if (e.newValue === 'white') enableTheme('white', true, false)
            else if (e.newValue === 'dark') enableTheme('dark', true, false) // The third argument makes sure the state isn't saved again.
        }
    })
}

// Add a listener in case OS-level preference changes.
function listenToOSChanges() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addListener((m) => {
        const root = document.documentElement
        if (m.matches !== true) {
            if (!root.classList.contains('theme-white')) {
                enableTheme('white', true)
            }
        }
        else {
            if (!root.classList.contains('theme-dark')) enableTheme('dark', true)
        }
    })
}

// If no preference was set, check what the OS pref is.
function returnThemeBasedOnOS() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    if (mediaQueryList.matches) return 'dark'
    else {
        mediaQueryList = window.matchMedia('(prefers-color-scheme: white)')
        if (mediaQueryList.matches) return 'white'
        else return undefined
    }
}

// For subsequent page loads
function returnThemeBasedOnLocalStorage() {
    const pref = localStorage.getItem('preference-theme')
    const lastChanged = localStorage.getItem('preference-theme-last-change')
    let now = new Date()
    now = now.getTime()
    const minutesPassed = (now - lastChanged) / (1000 * 60)

    if (
        minutesPassed < 120 &&
        pref === "white"
    ) return 'white'
    else if (
        minutesPassed < 120 &&
        pref === "dark"
    ) return 'dark'
    else return undefined
}

// Fallback for when OS preference isn't available
function returnThemeBasedOnTime() {
    let date = new Date
    const hour = date.getHours()
    if (hour > 20 || hour < 5) return 'dark'
    else return 'white'
}

// Switch to another theme
function enableTheme(newTheme = 'white', withTransition = false, save = true) {
    const root = document.body
    let otherTheme
    newTheme === 'white' ? otherTheme = 'dark' : otherTheme = 'white'
    let currentTheme
    (root.classList.contains('dark-vertion')) ? currentTheme = 'dark' : currentTheme = 'white'
    if (withTransition === true && newTheme !== currentTheme) animateThemeTransition()

    root.classList.add(newTheme + '-vertion')
    root.classList.remove(otherTheme + '-vertion')

    const isDarkTheme = newTheme === 'dark' ? true : false
    onChangeHandleThemeStyling(isDarkTheme)

    if (save) saveToLocalStorage('preference-theme', newTheme)
}

// Save the state for subsequent page loads
function saveToLocalStorage(key, value) {
    let now = new Date()
    now = now.getTime()
    localStorage.setItem(key, value)
    localStorage.setItem(key + "-last-change", now)
}

// Add class to smoothly transition between themes
function animateThemeTransition() {
    const root = document.documentElement
    root.classList.remove('theme-change-active')
    void root.offsetWidth // Trigger reflow to cancel the animation
    root.classList.add('theme-change-active')
}
(function removeAnimationClass() {
    const root = document.documentElement
    root.addEventListener(supportedAnimationEvent(), () => root.classList.remove('theme-change-active'), false)
}())

function supportedAnimationEvent() {
    const el = document.createElement("f")
    const animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations) {
        if (el.style[t] !== undefined) return animations[t]   // Return the name of the event fired by the browser to indicate a CSS animation has ended
    }
}

window.addEventListener('load', () => {
    if (darkSwitch) {
        darkSwitch.addEventListener('change', () => {
            darkSwitch.checked ? enableTheme('dark', true) : enableTheme('white', true);
        });
    }
});

function onChangeHandleThemeStyling(isDarkTheme) {
    document.getElementById('darkSwitch').checked = isDarkTheme

    document.getElementById('myLogo').data = "assets/images/" + (isDarkTheme ? "me_animated_white.svg" : "me_animated.svg")
    document.getElementById('myLogoFallback').src = "assets/images/" + (isDarkTheme ? "me_animated_white.svg" : "me_animated.svg")
}