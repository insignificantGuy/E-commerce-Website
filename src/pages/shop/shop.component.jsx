import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { firestore, convertCollectionSnapshopToMap } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';
import { updateCollection } from '../../redux/shop/shop.actions.js';

class ShopPage extends React.Component {
	unsubscribeFromSnapShot = null;

	componentDidMount(){
		const {updateCollections} = this.props;
		const collectionRef = firestore.collection('collections');
		
		collectionRef.onSnapshot(async snapshot=>{
			const collectionMap = convertCollectionSnapshopToMap(snapshot);
			updateCollections(collectionMap); 
		})
	}

	render(){
		const {match} = this.props;
		return(
			<div className='shop-page'>
				<Route exact path = {`${match.path}`} component={CollectionsOverview}/>
				<Route path = {`${match.path}/:collectionId`} component={CollectionPage}/>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollection(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);