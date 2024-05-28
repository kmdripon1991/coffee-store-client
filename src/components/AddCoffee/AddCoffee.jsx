import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const coffee = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const newCoffee = {
      coffee,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
              Swal.fire({
              title: 'Success!',
              text: 'Coffee added Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
        }
        
      });
      form.reset();
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 ">
      <div className="p-6 rounded w-full">
        <h1 className="text-2xl font-bold mb-4">Add Coffee</h1>
        <form onSubmit={handleAddCoffee}>
          <div className="flex gap-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name"
                name="coffeeName"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo Url</span>
            </div>
            <input
              type="text"
              placeholder="Photo Url"
              name="photoUrl"
              className="input input-bordered w-full"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none mt-8"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
