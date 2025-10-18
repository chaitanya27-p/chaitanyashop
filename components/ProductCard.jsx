import Link from 'next/link'

export default function ProductCard({ product }){
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={product.image || '/placeholder-og.png'} alt={product.title} className="w-full h-44 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600">₹{product.price}</p>
      <div className="mt-3">
        <Link href={`/products/${product.slug}`} className="text-blue-600">View</Link>
      </div>
    </div>
  )
}
