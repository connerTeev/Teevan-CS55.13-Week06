import app from './firebase-app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';

const db = getFirestore(app);

// A function that returns names and ids from json file and sorts by name
export async function getSortedFruitsList() {
  const snapshot = await getDocs(collection(db, 'fruits'));
  const jsonObj = snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));

  //sort json by name property
  jsonObj.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  //use map() to extract id and name to be made into a new json object
  return jsonObj.map((item) => {
    return {
      id: item.id.toString(),
      name: item.name,
    };
  });
}

//function to return ids for all json objects
export async function getFruitIds() {
  const snapshot = await getDocs(collection(db, 'fruits'));
  const jsonObj = snapshot.docs.map((document) => ({
    id: document.id,
  }));

  //use map() to extract id and name to be made into a new json object
  return jsonObj.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

//function to return each of he properties for one single object with a match id prop value
export async function getFruitData(idRequested) {
  const docRef = doc(db, 'fruits', idRequested);
  const d = await getDoc(docRef);

  let objReturned;
  if (!d.exists) {
    objReturned = {};
  } else {
    objReturned = d.data();
  }

  return objReturned;
}
