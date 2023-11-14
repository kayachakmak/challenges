import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, onOff, onOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={lights.every((light) => !light.isOn)}
        onClick={() => onOff()}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={lights.every((light) => light.isOn)}
        onClick={() => onOn()}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
