import tauriPinia from 'tauri-pinia'
import { type UserModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = async ({ app }) => {
  const pinia = await tauriPinia()
  app.use(pinia)
}
