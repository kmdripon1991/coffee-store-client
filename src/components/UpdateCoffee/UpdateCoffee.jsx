import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  //   console.log(updateCoffee);
  const {
    _id,
    coffee,
    quantity,
    supplier,
    taste,
    category,
    details,
    photoUrl,
  } = updateCoffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const coffee = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const updatedCoffeeInfo = {
      coffee,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    // console.log(updatedCoffeeInfo)
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedCoffeeInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Saved!", "", "success");
          });
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 ">
      <div className="p-6 rounded w-full">
        <h1 className="text-2xl font-bold mb-4">Update Coffee</h1>
        <form onSubmit={handleUpdateCoffee}>
          <div className="flex gap-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name"
                name="coffeeName"
                defaultValue={coffee}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
              defaultValue={photoUrl}
              className="input input-bordered w-full"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none mt-8"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
