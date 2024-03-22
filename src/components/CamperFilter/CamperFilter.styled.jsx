import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
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
  padding: 17px 18px;
  width: 115px;
  height: 95px;
  text-align: center;
  
  line-height: 1.5;
  margin-right: 10px;
`;

export const FilterRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const FilterRadioLabel = styled.label`
  display: inline-block;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 10px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(16, 24, 40, 0.1);
  }
`;

export const FilterRadioInput = styled.input`
  display: none;

  &:checked + ${FilterRadioLabel} {
    background-color: rgba(16, 24, 40, 0.2);
  }
`;
