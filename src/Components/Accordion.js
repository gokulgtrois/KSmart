import React, { useState } from 'react';
import { Head } from './Forms';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  border-top: 1px solid white;

  p {
    font-size: 2rem;
  }
`;

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        // <Card>
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <AccordionSection>
                <Container>
                    {Head.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <IoArrowDown /> : <IoArrowUp />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
        // </Card>
    );
};

export default Accordion;
