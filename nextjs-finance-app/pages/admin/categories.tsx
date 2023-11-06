import React, { useEffect, useState } from 'react';
import { CategoryForm } from '../../components/CategoryForm';
import { CategoryTable } from '../../components/CategoryTable';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../api/category';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleCreate = async (category) => {
    const newCategory = await createCategory(category);
    setCategories([...categories, newCategory]);
  };

  const handleUpdate = async (updatedCategory) => {
    await updateCategory(updatedCategory);
    setCategories(categories.map(category => category.id === updatedCategory.id ? updatedCategory : category));
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Manage Categories</h1>
      <CategoryForm onCreate={handleCreate} onUpdate={handleUpdate} selectedCategory={selectedCategory} />
      <CategoryTable categories={categories} onSelect={handleSelect} onDelete={handleDelete} />
    </div>
  );
};

export default Categories;