import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

export async function GET(req){
  const url = new URL(req.url)
  const product = url.searchParams.get('product') || 'unknown'
  const redirect = url.searchParams.get('redirect') || '/'

  // Hash IP for privacy
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('remote_addr') || '0.0.0.0'
  const salt = process.env.CLICK_SALT || 'default_salt'
  const hash = crypto.createHash('sha256').update(ip + salt).digest('hex')

  const logLine = JSON.stringify({ product, ip_hash: hash, ua: req.headers.get('user-agent') || '', ts: new Date().toISOString() })
  const logPath = path.join(process.cwd(), 'click_logs.txt')
  fs.appendFileSync(logPath, logLine + '\n')

  return Response.redirect(redirect, 302)
}
