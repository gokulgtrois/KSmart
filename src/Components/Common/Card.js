import React from 'react';
import styled from 'styled-components';
const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
// const CardTitle = styled.h2`
//   font-size: 1.2rem;
//   color: #333;
//   margin-bottom: 10px;
// `;
// const CardContent = styled.p`
//   font-size: 1rem;
//   color: #666;
// `;
const Card = ({ childern }) => {
    return (
        <CardWrapper>
            {childern}
        </CardWrapper>
    );
};
export default Card;