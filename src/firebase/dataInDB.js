import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDocs, query, updateDoc, where, } from 'firebase/firestore';
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
    await updateDoc(citaEsp, { dataCitas: arrayRemove(citaDel) })
    await updateDoc(citaEsp, { dataCitas: arrayUnion(citaAdd) })

};

export const deleteTableAsync = async (id) => {
    const colleccionTraer = collection(getDataFire, 'AgendarCitas');
    const q = query(colleccionTraer, where('idCitas', '==', id));
    const data = await getDocs(q);
    let idC;
    data.forEach(async (docu) => {
        idC = docu.id;
    });
    await deleteDoc(doc(getDataFire, 'AgendarCitas', idC))
}