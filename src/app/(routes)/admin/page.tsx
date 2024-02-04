"use client"

import React, { useState, useEffect } from 'react';
import { TMenuItemDrink, DrinkSubType } from '../../../interfaces/menuItem';
import { fetchFromSupabaseBucket } from '../../../services/api-service';

const AdminPage: React.FC = () => {
  const [drinks, setDrinks] = useState<TMenuItemDrink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<TMenuItemDrink | null>(null);

  useEffect(() => {
    const loadDrinks = async () => {
      const drinkUrls = await fetchFromSupabaseBucket('drinks');
      const drinkPromises = drinkUrls.map(url => fetch(url).then(response => response.json()));
      const drinksData = await Promise.all(drinkPromises);
      setDrinks(drinksData);
    };

    loadDrinks();
  }, []);

  const handleSelectDrink = (drink: TMenuItemDrink) => {
    setSelectedDrink(drink);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedDrink(prevDrink => ({ ...prevDrink, [name]: value }));
  };
  
  const handleUpdateDrink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedDrink) {
      alert('No drink selected');
      return;
    }

    const response = await fetch(`/api/drinks/${selectedDrink.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedDrink),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedDrink = await response.json();
    setDrinks(prevDrinks => prevDrinks.map(drink => drink.id === updatedDrink.id ? updatedDrink : drink));
  };

  const handleCreateDrink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedDrink),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newDrink = await response.json();
    setDrinks(prevDrinks => [...prevDrinks, newDrink]);
    setSelectedDrink(null);
  };

  return (
    <div>
      {selectedDrink && (
        <form onSubmit={handleUpdateDrink}>
          <input type="text" name="name" value={selectedDrink.name} onChange={handleInputChange} placeholder="Name" required />
          <input type="text" name="shortDescription" value={selectedDrink.shortDescription} onChange={handleInputChange} placeholder="Short Description" required />
          <textarea name="longDescription" value={selectedDrink.longDescription} onChange={handleInputChange} placeholder="Long Description" required />
          <input type="number" name="price" value={selectedDrink.price} onChange={handleInputChange} placeholder="Price" required />
          <input type="text" name="imageName" value={selectedDrink.imageName || ''} onChange={handleInputChange} placeholder="Image Name" />
          <input type="checkbox" name="available" checked={selectedDrink.available} onChange={handleInputChange} />
          <select name="subtype" value={selectedDrink.subtype || ''} onChange={handleInputChange}>
            <option value="">Select a subtype</option>
            <option value="softdrink">Soft Drink</option>
            <option value="beer">Beer</option>
            <option value="cocktail">Cocktail</option>
            <option value="hot">Hot</option>
          </select>
          <button type="submit">Update Drink</button>
        </form>
      )}

      <ul>
        {drinks.map(drink => (
          <li key={drink.id} onClick={() => handleSelectDrink(drink)}>{drink.name}</li>
        ))}
      </ul>

      {selectedDrink && (
        <form onSubmit={handleUpdateDrink}>
          <input type="text" name="name" value={selectedDrink.name} onChange={handleInputChange} required />
      {/* Add inputs for the other properties of a drink */}
          <button type="submit">Update Drink</button>
        </form>
      )}
    </div>
  );
};

export default AdminPage;