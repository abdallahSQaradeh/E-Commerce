import React, {Component} from 'react'
import shopData from "./shop.data"
import CollectionPreview from "../../components/preview-collections/preview-collection.component"
class shopPage extends Component {

    state={
        collections:shopData
    }

    render() {
        const {collections} = this.state;
        return (<div>
            {
                collections.map(({id, ...otherCollectionProps})=>
                    {
                        return <CollectionPreview key={id} {...otherCollectionProps}/>
                    })
            }
            </div>);
    }
}
export default shopPage;