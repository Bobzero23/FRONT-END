export const color = [
  "white",
  "black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "price",
    options: [
      { value: "159-399", label: "$159 To 399" },
      { value: "399-999", label: "$399 To 999" },
      { value: "999-1999", label: "$999 To 1999" },
      { value: "1999-2999", label: "$1999 To 2999" },
      { value: "3999-4999", label: "$3999 To 4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
    ],
  },
  ,
  {
    id: "stock",
    name: "Stock",
    options: [
      { value: "in-stock", label: "On Stock" },
      { value: "out-of-stock", label: "Out of Stock" },
    ],
  },
];
