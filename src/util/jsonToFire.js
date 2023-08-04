import mock from './mock.json' assert {type: 'json'}
import {db} from '../firebase/config.js'
import {collection, doc, writeBatch} from 'firebase/firestore'

const batch = writeBatch(db);
const piedras = collection(db, "piedras");

mock.forEach(p => {
    delete p.id;
    batch.set(doc(piedras), p);
});

batch.commit();
//Funciona pero no termina? Capaz que se me trabo la terminal y listo