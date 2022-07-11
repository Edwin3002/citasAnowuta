import { addDoc, collection, getDocs, } from 'firebase/firestore';
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

export const addCitasAsync = (dataCitas)=>{
    addDoc(
        collection(getDataFire, 'AgendarCitas'),
        dataCitas
    )
}