import fs from 'fs'
import path from 'path'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const dataPath = path.join(process.cwd(), 'data', 'products.json')
  let products = []
  try{
    const raw = fs.readFileSync(dataPath, 'utf8')
    products = JSON.parse(raw)
  }catch(e){ products = [] }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  )
}
