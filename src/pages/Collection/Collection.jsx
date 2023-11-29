import './Collection.css';
import NavbarCom from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';
import CollectionContent from '../../component/content/collection/collectionContent';

function CollectionPage() {
    return(
        <div>
            <NavbarCom/>
            <CollectionContent/>
            <Footer/>
        </div>
    )
}

export default CollectionPage