import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
function Jumbo(){
    return(
        <div className='jumbo'>
            <div className='container'>
               <div className='row'>
                 <div className='col-12 col-md-4 col-sm-12'>
                    <h3 className='text-welcome'>Selamat Datang</h3>
                    <h1 className='text-judul'>Developer React JS Indonesia</h1>
                    <p className='text-deskripsi'>Komunitas React Indonesia adalah sebuah komunitas yang di buat
                    untuk mewadahi para developer React Dari seluruh indonesia.
                    </p>
                    <button className='btn btn-custom btn-sm text-white'>Bergabung <i class="bi bi-arrow-right-short"></i></button>
                 </div>
               </div>
            </div>
        </div>
    );
}

export default Jumbo;

