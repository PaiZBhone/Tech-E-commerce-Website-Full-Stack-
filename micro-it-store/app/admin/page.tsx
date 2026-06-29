import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminPage() {
  // 1. Fetch lookup data for our "combo boxes"
  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();

  // 2. Server Action to handle the form submission
  async function addProduct(formData: FormData) {
    "use server"; 

    // Extract strings
    const name = formData.get('name') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const colors = formData.get('colors') as string;
    const storage = formData.get('storage') as string;
    const description = formData.get('description') as string;

    // Convert numbers
    const price = parseFloat(formData.get('price') as string);
    const categoryId = parseInt(formData.get('categoryId') as string, 10);
    const brandId = parseInt(formData.get('brandId') as string, 10);

    // Write to TiDB
    await prisma.product.create({
      data: {
        name,
        price,
        imageUrl,
        colors,
        storage,
        description,
        categoryId,
        brandId,
      },
    });

    // Refresh to clear the form and show success
    redirect('/admin?success=true');
  }

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        &larr; Back to Store
      </Link>
      
      <h1 style={{ marginTop: '20px' }}>Admin Dashboard: Add Product</h1>
      
      <div style={{ maxWidth: '600px', marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <form action={addProduct} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div>
            <label style={{ fontWeight: 'bold' }}>Product Name</label>
            <input type="text" name="name" required style={{ width: '100%', padding: '8px' }} placeholder="e.g., iPhone 15 Pro" />
          </div>

          <div>
            <label style={{ fontWeight: 'bold' }}>Price (MMK)</label>
            <input type="number" name="price" required style={{ width: '100%', padding: '8px' }} placeholder="e.g., 3500000" />
          </div>

          {/* Dynamic Combo Box for Category */}
          <div>
            <label style={{ fontWeight: 'bold' }}>Category</label>
            <select name="categoryId" required style={{ width: '100%', padding: '8px' }}>
              <option value="">Select a Category...</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Dynamic Combo Box for Brand */}
          <div>
            <label style={{ fontWeight: 'bold' }}>Brand</label>
            <select name="brandId" required style={{ width: '100%', padding: '8px' }}>
              <option value="">Select a Brand...</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontWeight: 'bold' }}>Image URL (Temporary)</label>
            <input type="text" name="imageUrl" required style={{ width: '100%', padding: '8px' }} placeholder="/photo/product.png" />
          </div>

          <div>
            <label style={{ fontWeight: 'bold' }}>Colors (Comma separated)</label>
            <input type="text" name="colors" required style={{ width: '100%', padding: '8px' }} placeholder="Black, White, Blue" />
          </div>

          <div>
            <label style={{ fontWeight: 'bold' }}>Storage (Comma separated)</label>
            <input type="text" name="storage" required style={{ width: '100%', padding: '8px' }} placeholder="128GB, 256GB" />
          </div>

          <div>
            <label style={{ fontWeight: 'bold' }}>Description (Bullet points, separate by new lines)</label>
            <textarea name="description" rows={5} required style={{ width: '100%', padding: '8px' }} placeholder="6.7-inch display&#10;48MP Camera"></textarea>
          </div>

          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Save Product to Database
          </button>
        </form>
      </div>
    </main>
  );
}