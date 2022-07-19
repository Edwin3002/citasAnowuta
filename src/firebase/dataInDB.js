import { addDoc, collection, doc, getDocs, query, updateDoc, where, } from 'firebase/firestore';
import { dataCitas } from '../data/citas';
import { getDataFire } from './ConfigFireBase';

export const paintCitasAsync = async () => {
    const getDataCitas = await getDocs(
        collection(getDataFire, 'AgendarCitas')
    )
    const citas = [];
    getDataCitas.forEach((cita) => {
        citas.push({
            ...cita.data(),
        });
    });
    return citas
}

export const addCitasAsync = (dataCitas) => {
    addDoc(
        collection(getDataFire, 'AgendarCitas'),
        dataCitas
    )
}

export const updateCitasAsync = async (cita, idC) => {
    console.log(cita);
    console.log(idC);
    const colleccionTraer = collection(getDataFire, 'AgendarCitas');
    console.log(colleccionTraer);
    const q = query(colleccionTraer, where('idCitas', '==', idC));
    const data = await getDocs(q);
    let id;
    data.forEach(async (docu) => {
        id = docu.id;
    });
    const citaEsp = doc(
        getDataFire, 'AgendarCitas', id);
        console.log(citaEsp);
    await updateDoc(citaEsp, {dataCitas})

};

// export const updateCareerAsync = (index, carrer) => {
//     return async (dispatch) => {
//       const colleccionTraer = collection(getMyData, 'universidades');
//       const q = query(colleccionTraer, where('idCarrera', '==', index));
//       const traerDatosQ = await getDocs(q);
//       let id;
//       traerDatosQ.forEach(async (docu) => {
//         id = docu.id;
//       });
//       const documenRef = doc(getMyData, 'universidades', id);
//       await updateDoc(documenRef, carrer)
//         .then((resp) => {
//           dispatch(UpdateCareerSync(carrer));
//           dispatch(paintCareerAsync());
//         })
//         .catch((err) => console.warn(err));
//     };
//   };