import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FilterContainer, FilterLabel, FilterCheckbox, FilterCheckboxLabel } from './CamperFilter.styled';

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
        vehicleType: 'all',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      <Form>
        <FilterContainer>
          <FilterLabel>Filter by functions:</FilterLabel>
          {functions.map(func => (
            <React.Fragment key={func.name}>
              <FilterCheckbox
                id={func.name}
                type="checkbox"
                checked={func.checked}
                onChange={() => onFilterChange(func.name)}
              />
              <label htmlFor={func.name}>{func.name}</label>
            </React.Fragment>
          ))}
          <label htmlFor="location"><p>Location</p></label>
          <Field type="text" id="location" name="location" placeholder="Enter location" />
          <FilterLabel>Vehicle Equipment:</FilterLabel>
          <div>
            <Field type="checkbox" id="airConditioner" name="vehicleEquipment.airConditioner" />
            <FilterCheckboxLabel htmlFor="airConditioner">Air Conditioner</FilterCheckboxLabel>
            <Field type="checkbox" id="bathroom" name="vehicleEquipment.bathroom" />
            <FilterCheckboxLabel htmlFor="bathroom">Bathroom</FilterCheckboxLabel>
            <Field type="checkbox" id="kitchen" name="vehicleEquipment.kitchen" />
            <FilterCheckboxLabel htmlFor="kitchen">Kitchen</FilterCheckboxLabel>
            <Field type="checkbox" id="beds" name="vehicleEquipment.beds" />
            <FilterCheckboxLabel htmlFor="beds">Beds</FilterCheckboxLabel>
            <Field type="checkbox" id="TV" name="vehicleEquipment.TV" />
            <FilterCheckboxLabel htmlFor="TV">TV</FilterCheckboxLabel>
            <Field type="checkbox" id="CD" name="vehicleEquipment.CD" />
            <FilterCheckboxLabel htmlFor="CD">CD</FilterCheckboxLabel>
            <Field type="checkbox" id="radio" name="vehicleEquipment.radio" />
            <FilterCheckboxLabel htmlFor="radio">Radio</FilterCheckboxLabel>
            <Field type="checkbox" id="shower" name="vehicleEquipment.shower" />
            <FilterCheckboxLabel htmlFor="shower">Shower</FilterCheckboxLabel>
            <Field type="checkbox" id="toilet" name="vehicleEquipment.toilet" />
            <FilterCheckboxLabel htmlFor="toilet">Toilet</FilterCheckboxLabel>
            <Field type="checkbox" id="freezer" name="vehicleEquipment.freezer" />
            <FilterCheckboxLabel htmlFor="freezer">Freezer</FilterCheckboxLabel>
            <Field type="checkbox" id="microwave" name="vehicleEquipment.microwave" />
            <FilterCheckboxLabel htmlFor="microwave">Microwave</FilterCheckboxLabel>
            <Field type="checkbox" id="gas" name="vehicleEquipment.gas" />
            <FilterCheckboxLabel htmlFor="gas">Gas</FilterCheckboxLabel>
            <Field type="checkbox" id="water" name="vehicleEquipment.water" />
            <FilterCheckboxLabel htmlFor="water">Water</FilterCheckboxLabel>
          </div>
          <FilterLabel>Vehicle Type:</FilterLabel>
          <div>
            <Field type="radio" id="all" name="vehicleType" value="all" />
            <label htmlFor="all">All</label>
            <Field type="radio" id="van" name="vehicleType" value="van" />
            <label htmlFor="van">Van</label>
            <Field type="radio" id="fullyIntegrated" name="vehicleType" value="fullyIntegrated" />
            <label htmlFor="fullyIntegrated">Fully Integrated</label>
            <Field type="radio" id="alcove" name="vehicleType" value="alcove" />
            <label htmlFor="alcove">Alcove</label>
          </div>
          <button type="submit">Submit</button>
        </FilterContainer>
      </Form>
    </Formik>
  );
};

export default CamperFilter;
