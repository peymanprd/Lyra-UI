interface Config {
  useTailwind?: boolean
  direction?: 'rtl' | 'ltr'
}

const config = ref<Config>({
  useTailwind: true,
  direction: 'ltr',
})

export function useConfig() {
  const setConfig = (newConfig: Config) => {
    config.value = { ...config.value, ...newConfig }

    if (config.value.direction) {
      document.documentElement.setAttribute('dir', config.value.direction)
    }

    if (config.value.useTailwind) {
      import('@/assets/css/tailwind.css')
    } else {
      import('@/assets/css/base.css')
    }

    if (config.value.direction === 'rtl') {
      import('@/assets/css/rtl.css')
    } else {
      import('@/assets/css/ltr.css')
    }
  }

  return { config, setConfig }
}
