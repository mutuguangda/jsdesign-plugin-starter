import { exec } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import type { InlineConfig, Plugin } from 'vite'
import { build as viteBuild } from 'vite'

export default function (): Plugin[] {
  return [
    {
      name: 'vite-plugin-jsdesign',
      apply: 'serve',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const buildOptions = server.config.inlineConfig
          buildOptions.plugins ??= []
          buildOptions.plugins.push(
            {
              name: ':reload',
              handleHotUpdate({ file, server }) {
                if (/\.vue|\.ts/.test(file) && file.includes('src/code.ts'))
                  server.restart()

                return []
              },
            },
          )
          build(buildOptions)
        })
      },
    },
  ]
}

function build(buildOptions: InlineConfig) {
  viteBuild(buildOptions).then(() => {
    exec('npx tsc --watch src/code.ts --outDir dist')
    const { name, id, version: api } = JSON.parse(readFileSync('package.json', 'utf8'))
    writeFileSync('dist/manifest.json', JSON.stringify({ name, id, api, main: 'code.js', ui: 'ui.html' }), 'utf8')
  })
}
