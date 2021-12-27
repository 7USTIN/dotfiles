module.exports = {
    name: 'nord-light',
    displayName: 'Nord (light)',
    theme: {
        background: {
            default: '#eceff4',
            success: '#a3be8c',
            notice: '#8fbcbb',
            warning: '#ebcb8b',
            danger: '#bf616a',
            surprise: '#b48ead',
            info: '#88c0d0'
        },
        foreground: {
            default: '#2e3440',
            info: '#5e81ac'
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(236, 239, 244, 0.8)'
                },
                foreground: {
                    default: '#d8dee9'
                }
            },
            dialog: {
                background: {
                    default: '#e5e9f0'
                },
                foreground: {
                    default: '#2e3440'
                }
            },
            sidebar: {
                background: {
                    default: '#eceff4',
                    success: '#a3be8c',
                    notice: '#81a1c1',
                    warning: '#ebcb8b',
                    danger: '#bf616a',
                    surprise: '#b48ead',
                    info: '#434c5e'
                },
                foreground: {
                    default: '#3b4252'
                },
                highlight: {
                    default: '#88c0d0'
                }
            },
            sidebarHeader: {
                background: {
                    default: '#d8dee9'
                },
                foreground: {
                    default: '#4c566a'
                }
            },
            paneHeader: {
                foreground: {
                    default: '#3b4252',
                    info: '#434c5e'
                },
                background: {
                    default: '#eceff4',
                    success: '#a3be8c',
                    notice: '#81a1c1',
                    warning: '#ebcb8b',
                    danger: '#bf616a',
                    surprise: '#b48ead',
                    info: '#eceff4'
                }
            },
            pane: {
                background: {
                    default: '#eceff4',
                    success: '{{ styles.sidebar.background.success }}',
                    notice: '{{ styles.sidebar.background.notice }}',
                    warning: '{{ styles.sidebar.background.warning }}',
                    danger: '{{ styles.sidebar.background.danger }}',
                    surprise: '{{ styles.sidebar.background.surprise }}',
                    info: '{{ styles.sidebar.background.info }}'
                },
                foreground: {
                    default: '#2e3440',
                    info: '#eceff4'
                },
                highlight: {
                    default: '#3b4252'
                }
            }
        }
    }
}