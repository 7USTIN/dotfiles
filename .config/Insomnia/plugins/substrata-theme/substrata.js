module.exports = {
    name: 'substrata',
    displayName: 'Substrata',
    theme: {
        background: {
            default: '#1c1c1c',
            success: '#92c47e',
            notice: '#a0b9d8',
            warning: '#d2b45f',
            danger: '#fe9f7c',
            surprise: '#c6aed7',
            info: '#7dc2c7'
        },
        foreground: {
            default: '#b5b4c9',
            info: '#a0b9d8'
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(28, 28, 28, 0.8)'
                },
                foreground: {
                    default: '#b5b4c9'
                }
            },
            dialog: {
                background: {
                    default: '#1c1c1c'
                },
                foreground: {
                    default: '#b5b4c9'
                }
            },
            sidebar: {
                background: {
                    default: '#1c1c1c',
                    success: '#92c47e',
                    notice: '#81a1c1',
                    warning: '#d2b45f',
                    danger: '#fe9f7c',
                    surprise: '#c6aed7',
                    info: '#b5b4c9'
                },
                foreground: {
                    default: '#b5b4c9'
                },
                highlight: {
                    default: '#7dc2c7'
                }
            },
            sidebarHeader: {
                background: {
                    default: '#4c566a'
                },
                foreground: {
                    default: '#b5b4c9'
                }
            },
            paneHeader: {
                foreground: {
                    default: '#b5b4c9'
                },
                background: {
                    default: '#1c1c1c',
                    success: '#92c47e',
                    notice: '#81a1c1',
                    warning: '#d2b45f',
                    danger: '#fe9f7c',
                    surprise: '#c6aed7',
                    info: '#b5b4c9'
                }
            },
            pane: {
                background: {
                    default: '#1c1c1c',
                    success: '{{ styles.sidebar.background.success }}',
                    notice: '{{ styles.sidebar.background.notice }}',
                    warning: '{{ styles.sidebar.background.warning }}',
                    danger: '{{ styles.sidebar.background.danger }}',
                    surprise: '{{ styles.sidebar.background.surprise }}',
                    info: '{{ styles.sidebar.background.info }}'
                },
                foreground: {
                    default: '#b5b4c9'
                },
                highlight: {
                    default: '#b5b4c9'
                }
            }
        }
    }
}
