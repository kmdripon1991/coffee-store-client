import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffeeItem, coffees, setCoffees }) => {
  const {
    _id,
    coffee,
    quantity,
    supplier,
    taste,
    category,
    details,
    photoUrl,
  } = coffeeItem;

  const handleDeleteCoffee = (id) => {
    // console.log(coffees, setCoffees);
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
              //   setCoffees(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(coffee=>coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{coffee}</h2>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
        <p>Category: {category}</p>
        <p>{details}</p>
        <div className="flex justify-between">
          <button className="btn btn-primary">View</button>
          <Link to={`update-coffee/${_id}`}>
            <button className="btn btn-warning">Edit</button>
          </Link>
          <button
            onClick={() => handleDeleteCoffee(_id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
