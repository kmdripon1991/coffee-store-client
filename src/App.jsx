import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";

function App() {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <>
      <h1 className="text-amber-800 text-6xl text-center">Tasty Coffee</h1>
      <div className="grid grid-cols-3 space-y-3">
        {coffees.map((coffeeItem) => (
          <CoffeeCard key={coffeeItem._id} coffeeItem={coffeeItem} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
