// import React, { useState } from "react";

// export const AddCategory = ({ onNewCategory }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       onNewCategory(inputValue.trim());
//       setInputValue("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Ingrese una categoría"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//     </form>
//   );
// };
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories( categories => [ inputValue, ...categories ]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
