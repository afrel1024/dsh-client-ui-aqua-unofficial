// Build against the installed DSH packages without a monorepo-specific preset.
import { build } from 'esbuild'
import { writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const external = ['@deepseek-ai/*', 'react', 'react/*']
const result = await build({
  entryPoints: [resolve(root, 'src/client/index.ts')], bundle: true, write: false,
  outfile: 'client.js', format: 'cjs', platform: 'browser', target: 'es2022',
  jsx: 'automatic', external, loader: { '.css': 'local-css' },
  tsconfigRaw: { compilerOptions: { jsx: 'react-jsx', target: 'ES2022', useDefineForClassFields: true } },
})
const js = result.outputFiles.find(file => file.path.endsWith('.js')).text
const css = result.outputFiles.find(file => file.path.endsWith('.css'))?.text ?? ''
const injection = `const styleId='dsh-client-ui-aqua-unofficial/standalone.css';if(!document.querySelector('style[data-plugin-css="'+styleId+'"]')){const tag=document.createElement('style');tag.dataset.plugin='dsh-client-ui-aqua-unofficial';tag.dataset.pluginCss=styleId;tag.textContent=${JSON.stringify(css)};document.head.appendChild(tag);}`
await writeFile(resolve(root, 'lib/client.js'), `window.__ModuleLoader__.load({id:'dsh-client-ui-aqua-unofficial',factory:(require)=>{const module={exports:{}};const exports=module.exports;${injection}\n${js}\nreturn module.exports;}});\n`)
await build({
  entryPoints: [resolve(root, 'src/index.ts')], outfile: resolve(root, 'lib/index.js'),
  bundle: true, format: 'esm', platform: 'node', target: 'es2022', external,
  tsconfigRaw: { compilerOptions: { target: 'ES2022' } },
})
console.log('Aqua host and client bundles rebuilt')
