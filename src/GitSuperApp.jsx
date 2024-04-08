/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GitSuperApp = () => {

  const [categories, setCategories] = useState(['Black Clover'])

  const onAddCategory = (newCategory) => {

    if (categories.indexOf(newCategory) === -1) {
      setCategories([newCategory, ...categories]);
    }
  }

  return (
    <>

      <h1>GitExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) => (
          <GifGrid key={category}
            category={category} />
        ))
      }

    </>
  )
}
