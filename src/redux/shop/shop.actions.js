import ShopActionTypes from "./shop.types";
import {firestore,  convertCollectionSnapshopToMap} from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFaillure = errorMessage => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
		
		collectionRef.get().then(snapshot=>{
			const collectionMap = convertCollectionSnapshopToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
		})
        .catch(error=>{
            dispatch(fetchCollectionFaillure(error.message))
        });
    }
}
