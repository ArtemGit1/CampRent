import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px;

`;
export const CamperTypeDiv = styled.div`

`;

export const CamperFilterSubmitButton = styled.button`
  border-radius: 200px;
  max-width: 173px;
  height: 56px;
  border: none;
  margin-top: 20px;
  color: black;

  &:hover,
  &:focus{
    background-color: #E44848;
    color: white;
  }
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FilterCheckbox = styled.input`
  margin-right: 5px;
`;

export const FilterCheckboxLabel = styled.label`
  display: inline-block;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;

  width: 95px;
  height: 95px;
  text-align: center;
  margin: 4px;
  line-height: 1.5;
`;



export const CamperFilterEquipmentDiv = styled.div`
  max-width: 400px;
`;

