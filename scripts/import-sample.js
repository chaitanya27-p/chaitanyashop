// simple Node script to copy sample data into project (optional)
import fs from 'fs'
import path from 'path'

const src = path.join(process.cwd(), 'data', 'products.json')
console.log('Sample data at', src)
