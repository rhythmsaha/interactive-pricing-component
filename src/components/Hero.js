import styled from "styled-components";

const Hero = () => {
    return (
        <HeroBg>
            <HeroSection>
                <h1>Simple, traffic-based pricing</h1>
                <p>SIgn up for our 30-day trial. No credit card required.</p>
            </HeroSection>
        </HeroBg>
    );
};

export default Hero;

const HeroBg = styled.div`
    background-image: url("/images/bg-pattern.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom-left-radius: 8rem;
    padding: 6vh 0 15vh 0;
`;

const HeroSection = styled.div`
    background: url("/images/pattern-circles.svg");
    background-repeat: no-repeat;
    background-position: center;
    padding: 4rem 1rem;
    text-align: center;

    h1 {
        color: hsl(227, 35%, 25%);
        font-size: 1.2rem;

        @media screen and (min-width: 768px) {
            font-size: 2rem;
        }
    }
    p {
        color: hsl(225, 20%, 60%);
        margin-top: 4px;
        padding: 0 4rem;
        font-size: 15px;
    }
`;
