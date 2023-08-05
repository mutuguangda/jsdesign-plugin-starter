import { exec } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import type { Plugin } from 'vite'
import { build } from 'vite'

export default function (): Plugin[] {
  return [
    {
      name: 'vite-plugin-jsdesign',
      apply: 'serve',
      configureServer(server) {
        const buildOptions = server.config.inlineConfig
        build(buildOptions).then(() => {
          writeFileSync('dist/package.json', readFileSync('package.json'), 'utf8')
          exec('npx tsc src/code.ts --outDir dist')
        })
      },
    },
  ]
}
