import React, { useState } from 'react';
import { TMenuItemDrink } from '../../../interfaces/menuItem';
import { setDrink, updateDrink } from '../../../services/api-service';

const AdminPage: React.FC = () => {
  const [drink, setDrinkState] = useState<TMenuItemDrink | null>(null);

  const handleCreateDrink = async (newDrink: TMenuItemDrink) => {
    const result = await setDrink(newDrink);
    if (result) {
      // handle success (e.g., show a success message, update a list of drinks, etc.)
    } else {
      // handle error (e.g., show an error message)
    }
  };

  const handleUpdateDrink = async (id: string, updatedDrink: Partial<TMenuItemDrink>) => {
    const result = await updateDrink(id, updatedDrink);
    if (result) {
      // handle success (e.g., show a success message, update the drink in a list of drinks, etc.)
    } else {
      // handle error (e.g., show an error message)
    }
  };

  // render your form for creating/updating drinks here, and call handleCreateDrink or handleUpdateDrink when the form is submitted
};

export default AdminPage;