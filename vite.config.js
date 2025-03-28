import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename="officem.exe"'
    }
  },
  publicDir: 'public'
})
