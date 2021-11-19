import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <Hero />

            <Container>
                <Card />
            </Container>
        </>
    );
}

export default App;

const Container = styled.div`
    margin-top: -8rem;
    max-width: 576px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;
