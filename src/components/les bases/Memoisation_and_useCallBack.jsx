import React, { memo, useCallback, useState } from 'react';
import Title from '../Title';
import BackToHome from '../BackToHome';
import Input from '../decouverte/TP_liste_produit/forms/Input';

const InfoMemo = memo(function Info ({onClick}) {
  console.log('info', 'render');
  return (
    <div className="alert alert-info" onClick={onClick}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque harum est
      animi magni illum similique!
    </div>
  );
});

const Memoisation_and_useCallBack = () => {
  const [name, setName] = useState('');
  
const handleClick = useCallback(() => {
  console.log('hello');
}, [])


  console.log('mémo', 'render');
  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        Mémoisation et useCallback
      </Title>
      <BackToHome />
      <div className="container my-2 vstack gap-2">
        <div>
          <Input label={'Prénom'} onChange={setName} value={name} />
          <div>{name.toUpperCase()}</div>
        </div>
        <InfoMemo onClick={handleClick}/>
      </div>
    </>
  );
};

export default Memoisation_and_useCallBack;
