import React, { useState } from 'react';

interface CategoryFormProps {
  onCategorySubmit: (category: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onCategorySubmit }) => {
  const [category, setCategory] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCategorySubmit(category);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category-input">Category:</label>
      <input
        id="category-input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;