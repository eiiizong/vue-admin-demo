const projectName = import.meta.env.VITE_GLOB_APP_TITLE

const warn = (message: string) => {
  console.warn(`[${projectName} warn]:${message}`)
}

const error = (message: string) => {
  throw new Error(`[${projectName} error]:${message}`)
}

export { warn, error }
