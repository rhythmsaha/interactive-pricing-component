import styled from "styled-components";

const Price = ({ pricingData }) => {
    return (
        <Pricing>
            ${pricingData.price.toFixed(2)}
            <span>/month</span>
        </Pricing>
    );
};

export default Price;

const Pricing = styled.h1`
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 5px;
    color: hsl(227, 35%, 25%);
    span {
        font-size: 16px;
        font-weight: 600;
        color: hsl(225, 20%, 60%);
    }
`;
