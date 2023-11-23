import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({ onSubmit, editMode, fish }) {
  return (
    <StyledForm onSubmit={onSubmit} editMode={editMode} fish={fish}>
      <StyledHeading>
        {editMode ? "Edit the product" : "Add a new Fish"}
      </StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input defaultValue={fish?.name} type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          defaultValue={fish?.description}
          type="text"
          id="description"
          name="description"
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          defaultValue={fish?.price}
          type="number"
          id="price"
          name="price"
          min="0"
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
