import './Home.css';
import NavbarCom from '../../component/navbar/navbar.jsx';
import HomeContent from '../../component/content/home/homeContent.jsx';
import Footer from '../../component/footer/footer.jsx';

function HomePage () {
    return(
        <div className='flex-column g-5'>
            <NavbarCom/>
            <HomeContent/>
            <Footer/>
        </div>    
    )
}

export default HomePage;