import { useState } from "react";
import styled from "styled-components";
import Price from "./Price";

const monthlyData = [
    {
        price: 8,
        pageView: 20000,
    },
    {
        price: 12,
        pageView: 50000,
    },
    {
        price: 16,
        pageView: 100000,
    },
    {
        price: 24,
        pageView: 150000,
    },
    {
        price: 36,
        pageView: 500000,
    },
];

const yearlyData = [
    {
        price: 6,
        pageView: 20000,
    },
    {
        price: 9,
        pageView: 50000,
    },
    {
        price: 12,
        pageView: 100000,
    },
    {
        price: 18,
        pageView: 150000,
    },
    {
        price: 27,
        pageView: 500000,
    },
];

const Card = () => {
    const [slider, setSlider] = useState(2);
    const [yearly, setYearly] = useState(false);

    const pricingData = yearly ? yearlyData : monthlyData;

    const sliderChangeHandler = (e) => setSlider(e.target.value);
    const periodChangeHandler = (e) => setYearly((prev) => !prev);

    function nFormatter(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num;
    }

    return (
        <Container>
            <PricingWrapper>
                <Pricing>
                    <PageViews>
                        {nFormatter(pricingData[slider].pageView)} PAGEVIEWS
                    </PageViews>

                    <PriceXL>
                        <Price pricingData={pricingData[slider]} />
                    </PriceXL>
                </Pricing>

                <RangeInput
                    type="range"
                    min={0}
                    max={4}
                    value={slider}
                    onChange={sliderChangeHandler}
                />

                <PriceMobile>
                    <Price pricingData={pricingData[slider]} />
                </PriceMobile>
            </PricingWrapper>
            <Billing yearly={yearly}>
                <p>Monthly billing</p>
                <label htmlFor="period">
                    <input
                        type="checkbox"
                        id="period"
                        onChange={periodChangeHandler}
                    />
                </label>
                <p>Yearly billing</p>
                <span>
                    -25% <span>discount</span>
                </span>
            </Billing>

            <BottomContainer>
                <Features>
                    <li>
                        <img src="/images/icon-check.svg" alt="check" />
                        <span>Unlimited Websites</span>
                    </li>
                    <li>
                        <img src="/images/icon-check.svg" alt="check" />
                        <span>100% data ownership</span>
                    </li>
                    <li>
                        <img src="/images/icon-check.svg" alt="check" />
                        <span>Email reports</span>
                    </li>
                </Features>

                <button>Start my trial</button>
            </BottomContainer>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    background: white;
    min-height: 10rem;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 2rem 10px;
`;

const PricingWrapper = styled.div`
    padding: 0 2rem;
`;

const Pricing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (min-width: 768px) {
        justify-content: space-between;
    }
`;

const PageViews = styled.p`
    color: hsl(225, 20%, 60%);
    font-weight: 600;
    letter-spacing: 1px;
`;

const RangeInput = styled.input`
    margin: 2rem 0;
    width: 100%;
    -webkit-appearance: none;
    border-radius: 5px;
    height: 10px;
    background: ${({ value }) => `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value * 25}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`};

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: hsl(174, 86%, 45%);
        background-image: url(https://digitshack.com/codepen/mentor5/icon-slider.svg);
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0px 7px 10px 4px rgba(16, 213, 194, 0.2);

        &:hover {
            background-color: hsl(174, 77%, 80%);
        }
    }
`;

const PriceXL = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
`;
const PriceMobile = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const Billing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    white-space: nowrap;
    color: hsl(225, 20%, 60%);
    margin-top: 1rem;
    margin-bottom: 1rem;

    label {
        position: relative;
        border-radius: 1rem;
        width: 44px;
        height: 22px;
        cursor: pointer;
        background: ${({ yearly }) =>
            yearly ? "hsl(174, 86%, 45%)" : "hsl(225, 20%, 60%)"};

        &::after {
            content: "";
            position: absolute;
            aspect-ratio: 1;
            background: white;
            border-radius: 50%;
            top: 2px;
            bottom: 2px;
            transition: 0.25s;
            left: 3px;
            transform: ${({ yearly }) => (yearly ? "translateX(20px)" : "0")};

            /* right: ${({ yearly }) => (yearly ? "3px" : "auto")};
            left: ${({ yearly }) => (!yearly ? "3px" : "auto")}; */
        }

        input {
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
    }

    span {
        background: hsl(14, 92%, 95%);
        color: hsl(15, 100%, 70%);
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 4px;

        span {
            display: none;
            @media screen and (min-width: 768px) {
                display: inline;
            }
        }
    }
`;

const BottomContainer = styled.div`
    margin-top: 4rem;
    padding: 2rem;
    padding-bottom: 0;
    border-top: 1px solid hsl(224, 65%, 95%);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    button {
        border: none;
        outline: none;
        color: hsl(226, 100%, 87%);
        background: hsl(227, 35%, 25%);
        padding: 1rem 2rem;
        border-radius: 2rem;
        cursor: pointer;
        font-family: inherit;
        margin-top: 2rem;

        @media screen and (min-width: 768px) {
            margin: 0;
        }
    }
`;

const Features = styled.div`
    list-style: none;

    li {
        text-align: center;
        margin-top: 4px;
        color: hsl(225, 20%, 60%);

        @media screen and (min-width: 768px) {
            margin: 0;
            text-align: left;
        }

        img {
            margin-right: 8px;
        }
    }
`;
