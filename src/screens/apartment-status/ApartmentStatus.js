import React from 'react';
import {apartmentStatusViewStyles} from './styles/apartmentStatusViewStyles';
import {useApartmentStatusViewModel} from './models/apartmentStatusViewModel';
import {apartmentStatusViewController} from './controllers/apartmentStatusViewController';
import ApartmentStatusView from './views/ApartmentStatusView';

const ApartmentStatus = () => {
  const styles = apartmentStatusViewStyles;
  const model = useApartmentStatusViewModel();
  const controller = apartmentStatusViewController(model);

  return (
    <ApartmentStatusView
      styles={styles}
      model={model}
      controller={controller}
    />
  );
};

export default ApartmentStatus;
