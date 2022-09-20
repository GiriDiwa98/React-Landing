import 'bootstrap/dist/css/bootstrap.min.css';
import'./assets/main.css';

function Footer(){
    return(
        <div className='footerBackground'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-4 col-sm-12'>
                    <p className='text-center f-xxxs'>&copy; 2020 - Giri Diwa Adam</p>
                    <p className='text-center f-xxs'>Kode sumber terbuka di <a href='https://github.com/GiriDiwa98'>Github</a></p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;