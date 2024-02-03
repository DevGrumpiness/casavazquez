import React, { useState } from 'react';
import { TMenuItemDrink } from '../../../interfaces/menuItem';
import { setDrink, updateDrink } from '../../../services/api-service';

const AdminPage: React.FC = () => {
  const [drink, setDrinkState] = useState<TMenuItemDrink | null>(null);

  const handleCreateDrink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await setDrink(drink);
    if (result) {
      // handle success (e.g., show a success message, update a list of drinks, etc.)
    } else {
      // handle error (e.g., show an error message)
    }
  };

  const handleUpdateDrink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await updateDrink(drink.id, drink);
    if (result) {
      // handle success (e.g., show a success message, update the drink in a list of drinks, etc.)
    } else {
      // handle error (e.g., show an error message)
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDrinkState(prevDrink => ({ ...prevDrink, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleCreateDrink}>
        <input type="text" name="name" value={drink?.name || ''} onChange={handleInputChange} placeholder="Drink name" required />
        <input type="number" name="price" value={drink?.price || ''} onChange={handleInputChange} placeholder="Drink price" required />
        <button type="submit">Create Drink</button>
      </form>

      <form onSubmit={handleUpdateDrink}>
        <input type="text" name="name" value={drink?.name || ''} onChange={handleInputChange} placeholder="Drink name" required />
        <input type="number" name="price" value={drink?.price || ''} onChange={handleInputChange} placeholder="Drink price" required />
        <button type="submit">Update Drink</button>
      </form>
    </div>
  );
};

export default AdminPage;