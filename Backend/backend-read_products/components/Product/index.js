import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }
  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ProductCard>
      <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
        Edit the product
      </button>
      <button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete the product
      </button>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          fish={data}
          editMode={isEditMode}
        />
      )}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      <ul>
        {data.reviews.map((review) => (
          <>
            <li key={review._id}>{review.title}</li>
            <p>{review.text}</p>
            <p>{review.rating}</p>
          </>
        ))}
      </ul>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
