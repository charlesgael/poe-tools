import { } from 'pinia'
import type { UserModule } from '~/types'
// import { useCredentialsStore } from '~/stores/credentialStore'

const checks = {
  // 'login:on': () => useCredentialsStore().isConnected(),
  // 'login:off': () => !fn('login:on'),
}

function fn(target: string) {
  const method = (checks as any)[target]
  if (typeof method === 'function') {
    const res = method()
    return res
  }

  return false
}

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      console.log('Navigation', to)
      if (Array.isArray(to.meta.check))
        next(to.meta.check.find(it => !fn(it.condition))?.fail || undefined)
      else
        next()
    })
  }
}
