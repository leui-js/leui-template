/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
import { checkLogin } from '@/plugins/api'

export const isUserLoggedIn = async () => {
  const mid = localStorage.getItem('mid') ?? await checkLogin()

  return Number(mid) > 0
}
