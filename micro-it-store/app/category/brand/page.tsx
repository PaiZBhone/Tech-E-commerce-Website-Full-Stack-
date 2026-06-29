import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function CategoryBrandPage({ params }: { params: { brand: string } }) {
  // 1. Read the brand from the URL (e.g., 'apple' or 'samsung')
  const brandSlug = params.brand;

  // 2. Fetch the products from TiDB that match this brand name
  // We use findMany and filter by the related brand name
  const products = await prisma.product.findMany({
    where: {
      brand: {
        // We make it case-insensitive so 'apple' in the URL matches 'Apple' in the database
        name: {
          equals: brandSlug,
        }
      }
    },
    // We include the category and brand data just in case we need it
    include: {
      category: true,
      brand: true
    }
  });

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      {/* Basic Navigation Back to Home */}
      <div style={{ marginBottom: '30px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
          &larr; Back to Main Page
        </Link>
      </div>

      <h1 style={{ textTransform: 'capitalize', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        {brandSlug} Products
      </h1>

      {/* This is the Grid Layout matching your screenshot.
        It maps through the TiDB data and renders a card for each phone.
      */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '40px', 
        marginTop: '30px' 
      }}>
        {products.length === 0 ? (
          <p>No products found for this brand yet.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* Product Image */}
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                />
              </div>
              
              {/* Product Details */}
              <div style={{ marginTop: '15px', width: '100%', textAlign: 'left' }}>
                <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'normal' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '16px', margin: '0', color: '#333' }}>
                  {/* Format the number to look like 3,430,000 */}
                  {product.price.toLocaleString()} MMK
                </p>
              </div>

            </div>
          ))
        )}
      </div>
    </main>
  );
}