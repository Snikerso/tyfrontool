import React, { useContext, useEffect, useState } from 'react';
import BaseCardsList from 'modules/adult/bases/components/organisms/BaseCardsList';
import { BaseContext } from 'contexts/BaseContext';

import * as BasesPageCompound from 'modules/adult/bases/components/organisms/BasesPageCompound';
import { AuthContext } from 'contexts/AuthContext';

const BasesPage = () => {
  const { basesState } = useContext(BaseContext);
  const { authState } = useContext(AuthContext);
  const [bases, setBases] = useState(basesState);

  useEffect(() => {
    setBases(basesState);
  }, [basesState]);
  if (authState.isAuth === true) {
    return (
      <>
        <BasesPageCompound.Wizzard
          authState={authState}
          basesState={basesState}
          setBases={setBases}
        >
          <BasesPageCompound.Slajd>
            <BaseCardsList bases={bases} baseType={'MYBASES'} />
          </BasesPageCompound.Slajd>
          <BasesPageCompound.Slajd>
            {/* Tutaj stworzyć nowy rodzaj listy ktora bedzie dla wordowych oraz w listach homes */}
            <BaseCardsList bases={bases} />
          </BasesPageCompound.Slajd>
          <BasesPageCompound.Slajd>
            <BaseCardsList bases={bases} />
          </BasesPageCompound.Slajd>
          <BasesPageCompound.Slajd>
            <BaseCardsList bases={bases} baseType={'OBSERVEDBASES'} />
          </BasesPageCompound.Slajd>
        </BasesPageCompound.Wizzard>
      </>
    );
  } else {
    return (
      <>
        <BasesPageCompound.Wizzard
          authState={authState}
          basesState={basesState}
          setBases={setBases}
        >
          <BasesPageCompound.Slajd>
            <BaseCardsList bases={bases} baseType={'MYBASES'} />
          </BasesPageCompound.Slajd>
          <BasesPageCompound.Slajd>
            {/* Tutaj stworzyć nowy rodzaj listy ktora bedzie dla wordowych oraz w listach homes */}
            <BaseCardsList bases={bases} />
          </BasesPageCompound.Slajd>
        </BasesPageCompound.Wizzard>
      </>
    );
  }
};

export default BasesPage;
