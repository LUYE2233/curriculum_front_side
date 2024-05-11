import { deCode, enCode } from '@/components/utils/EncodeUtils'
import { type User } from '../classes/User'

export function buildToken(user: User) {
  console.debug(user.userName)
  const userData: string = '{(' + user.userAccount + ') (' + Date.now().toString() + ')}'
  const cryptoStr: string = enCode(userData)
  const token: string = userData + '$' + cryptoStr
  console.debug('userdata:', userData, '\ntoken:', token)
  return token
}

export function parseToken(token: string) {
  const split: string[] = token.split('$')
  const deCrypto: string = deCode(split[1])
  console.debug('front: ', split[0], '\ndecode:', deCrypto)
  return deCrypto === split[0]
}
