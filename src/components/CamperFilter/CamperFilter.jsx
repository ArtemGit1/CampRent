import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FilterContainer, FilterLabel, FilterCheckboxLabel, CamperTypeDiv, CamperFilterSubmitButton, CamperFilterEquipmentDiv  } from './CamperFilter.styled';
import styled from 'styled-components';

const InvisibleCheckbox = styled(Field)`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

const StyledFilterCheckboxLabel = styled(FilterCheckboxLabel)`
  border-color: rgba(16, 24, 40, 0.2);
  &:hover {
    background-color: rgba(16, 24, 40, 0.1);
  }
  input[type='checkbox']:checked + & {
    border-color: #E44848;
  }
`;

const CamperFilter = ({ functions, onFilterChange }) => {
  return (
    <Formik
      initialValues={{
        location: '',
        vehicleEquipment: {
          airConditioner: false,
          bathroom: false,
          kitchen: false,
          beds: false,
          TV: false,
          CD: false,
          radio: false,
          shower: false,
          toilet: false,
          freezer: false,
          microwave: false,
          gas: false,
          water: false,
        },
        vehicleType: {
          van: false,
          fullyIntegrated: false,
          alcove: false,
        },
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Form style={{maxWidth: '360px'}}>
        <FilterContainer>
          <FilterLabel>Filter by functions:</FilterLabel>
          {functions.map(func => (
            <React.Fragment key={func.name}>
              <InvisibleCheckbox
                type="checkbox"
                id={func.name}
                name={func.name}
                checked={func.checked}
                onChange={() => onFilterChange(func.name)}
              />
              <StyledFilterCheckboxLabel htmlFor={func.name}>{func.name}</StyledFilterCheckboxLabel>
            </React.Fragment>
          ))}
          <label htmlFor="location"><p>Location</p></label>
          <Field type="text" id="location" name="location" placeholder="Enter location" />
          <FilterLabel>Vehicle Equipment:</FilterLabel>
          <CamperFilterEquipmentDiv>
            <InvisibleCheckbox type="checkbox" id="airConditioner" name="vehicleEquipment.airConditioner" />
            <StyledFilterCheckboxLabel htmlFor="airConditioner">AC</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="bathroom" name="vehicleEquipment.bathroom" />
            <StyledFilterCheckboxLabel htmlFor="bathroom">Bathroom</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="kitchen" name="vehicleEquipment.kitchen" />
            <StyledFilterCheckboxLabel htmlFor="kitchen">Kitchen</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="beds" name="vehicleEquipment.beds" />
            <StyledFilterCheckboxLabel htmlFor="beds">Beds</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="TV" name="vehicleEquipment.TV" />
            <StyledFilterCheckboxLabel htmlFor="TV">TV</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="CD" name="vehicleEquipment.CD" />
            <StyledFilterCheckboxLabel htmlFor="CD">CD</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="radio" name="vehicleEquipment.radio" />
            <StyledFilterCheckboxLabel htmlFor="radio">Radio</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="shower" name="vehicleEquipment.shower" />
            <StyledFilterCheckboxLabel htmlFor="shower">Shower</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="toilet" name="vehicleEquipment.toilet" />
            <StyledFilterCheckboxLabel htmlFor="toilet">Toilet</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="freezer" name="vehicleEquipment.freezer" />
            <StyledFilterCheckboxLabel htmlFor="freezer">Freezer</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="microwave" name="vehicleEquipment.microwave" />
            <StyledFilterCheckboxLabel htmlFor="microwave">Microwave</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="gas" name="vehicleEquipment.gas" />
            <StyledFilterCheckboxLabel htmlFor="gas">Gas</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="water" name="vehicleEquipment.water" />
            <StyledFilterCheckboxLabel htmlFor="water">Water</StyledFilterCheckboxLabel>
          </CamperFilterEquipmentDiv>
          <FilterLabel>Vehicle Type:</FilterLabel>
          <CamperTypeDiv>
            <InvisibleCheckbox type="checkbox" id="van" name="vehicleType.van" />
            <StyledFilterCheckboxLabel htmlFor="van">Van</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="fullyIntegrated" name="vehicleType.fullyIntegrated" />
            <StyledFilterCheckboxLabel htmlFor="fullyIntegrated">Fully Integrated</StyledFilterCheckboxLabel>
            <InvisibleCheckbox type="checkbox" id="alcove" name="vehicleType.alcove" />
            <StyledFilterCheckboxLabel htmlFor="alcove">Alcove</StyledFilterCheckboxLabel>
          </CamperTypeDiv>
          <CamperFilterSubmitButton type="submit">Submit</CamperFilterSubmitButton>
        </FilterContainer>
      </Form>
    </Formik>
  );
};

export default CamperFilter;
