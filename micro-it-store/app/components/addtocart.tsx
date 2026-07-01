"use client";
import { useState } from "react";
import { useCartStore } from '@/lib/store';

export default function AddToCartButton({ product, colorsArray, storageArray }: any) {
  // Track the selections here in the client component
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    if (!selectedColor || !selectedStorage) {
      alert("Please select both Color and Storage!");
      return;
    }
    
    addItem({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: 1,
      color: selectedColor,
      storage: selectedStorage,
      image: product.imageUrl,
    });
    alert("Added to cart!");
  };

  return (
    <>
      <div className="product-configuration">
        <div className="cable-config">
          <span>Color</span>
          <div className="cable-choose">
            {colorsArray.map((color: string, index: number) => (
              <button 
                key={index}
                onClick={() => setSelectedColor(color)}
                style={{ border: selectedColor === color ? '2px solid red' : '' }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="cable-config2">
          <span>Storage Capacity</span>
          <div className="cable-choose2">
            {storageArray.map((storage: string, index: number) => (
              <button 
                key={index}
                onClick={() => setSelectedStorage(storage)}
                style={{ border: selectedStorage === storage ? '2px solid red' : '' }}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="product-price">
        <span>{product.price.toLocaleString()} MMK</span>
        <button className="cart-btn" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </>
  );
}