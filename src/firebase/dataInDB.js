import { addDoc, arrayRemove, arrayUnion, collection, doc, getDocs, query, updateDoc, where, } from 'firebase/firestore';
// import { dataCitas } from '../data/citas';
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

export const updateCitasAsync = async (citaAdd, citaDel, idC) => {
    const colleccionTraer = collection(getDataFire, 'AgendarCitas');
    const q = query(colleccionTraer, where('idCitas', '==', idC));
    const data = await getDocs(q);
    let id;
    data.forEach(async (docu) => {
        id = docu.id;
    });
    const citaEsp = doc(getDataFire, 'AgendarCitas', id);
    console.log(citaDel);
    await updateDoc(citaEsp, { dataCitas: arrayRemove(citaDel) })
    await setTimeout(() => {
        updateDoc(citaEsp, { dataCitas: arrayUnion(citaAdd) })
    }, 2000)
};