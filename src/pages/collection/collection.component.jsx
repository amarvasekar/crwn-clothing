import React from 'react'
import { connect } from 'react-redux'

import CollectionsItems from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({ Collection }) => {
  const { title, items } = Collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionsItems key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  Collection: selectCollection(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage)
