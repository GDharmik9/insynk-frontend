import React, { useState } from "react";
import "./ExpenseTracking.css";

export const Categories = [
  { isMain: true, order: 1, name: "Food" },
  { isMain: true, order: 2, name: "Transportation" },
  { isMain: true, order: 3, name: "Entertainment" },
  { isMain: true, order: 4, name: "Work" },
  { isMain: false, order: 5, name: "Traveling" },
];

function CategoryListPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryData, setCategoryData] = useState(Categories);

  const onCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const onAddCategoryName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryName.length > 0) {
      Categories.push({
        isMain: false,
        order: Categories.length + 1,
        name: categoryName,
      });
      setCategoryData([...Categories]);
      setCategoryName("");
    }
  };

  return (
    <section className="content-container">
      <ul className="content-list">
        {categoryData.map((category) => {
          return (
            <li className="content-lists" key={category.order}>
              <span className="expenseName">{category.name}</span>{" "}
              {category.isMain === false ? (
                <button className="removeCategory" type="submit">
                  X
                </button>
              ) : (
                ""
              )}
            </li>
          );
        })}{" "}
      </ul>
      <div>
        <form onSubmit={onAddCategoryName}>
          <input
            className="CategoryInput"
            value={categoryName}
            onChange={onCategoryNameChange}
          />
          <div className="addCategory-button">
            <button className="CategoryButton" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CategoryListPage;
