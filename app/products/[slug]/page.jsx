import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function ProductPage({ params }){
  const slug = params.slug
  const dataPath = path.join(process.cwd(), 'data', 'products.json')
  const raw = fs.readFileSync(dataPath, 'utf8')
  const products = JSON.parse(raw)
  const product = products.find(p => p.slug === slug)
  if(!product) return <p>Product not found</p>

  const affiliateId = process.env.AFFILIATE_ID || ''
  const affiliateUrl = product.affiliate_url + (affiliateId ? `?aff=${affiliateId}` : '') + `&utm_source=site&utm_medium=affiliate&utm_campaign=${product.id}`

  return (
    <article>
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="mb-4 font-semibold">₹{product.price}</p>
      <a href={`/api/track-click?product=${product.id}&redirect=${encodeURIComponent(affiliateUrl)}`} target="_blank" rel="noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Buy on Merchant</a>
    </article>
  )
}
