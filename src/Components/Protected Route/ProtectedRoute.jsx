import React from 'react';
import { DataContext } from '../../Context/dataContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => { 
   const { respostas, resultado } = React.useContext(DataContext);

   if(respostas.p1 && respostas.p2 && respostas.p3 && respostas.p4 && respostas.p5 && respostas.p6 && respostas.p7 && respostas.p8 && resultado){
      return children;
   }
   else{
     return <Navigate to="/" />
   }
}

export default ProtectedRoute