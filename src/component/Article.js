import 'bootstrap/dist/css/bootstrap.min.css';
import'./assets/main.css';
import img1 from './assets/img/img1.png';
function Article() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 col-sm-12 justify-content-center'>
                    <center><img src={img1} className='App-logo' alt='react'/></center>
                </div>
                <div className='col-12 col-md-5 col-sm-12'>
                    <h1 className='text-utama'>Komunitas React Js</h1>
                    <p className='text-kedua'>Komunitas React JS adalah sebuah komunitas yang di bentuk untuk
                        mewadahi para web developer terutama yang menggunakan bantuan framework 
                        React Itu Sendiri.

                        Kami Menyambut para pengembang react baik yang pemula sampai dengan yang sudah mahir
                        sekalipun
                    </p>
                    <button className='btn btn-primary btn-md shadow'>Bergabung</button>
                    <div className='social-button'>
                        <a href='#'><i class="bi bi-instagram"></i></a>
                        <a href='#'><i class="bi bi-facebook"></i></a>
                        <a href='#'><i class="bi bi-twitter"></i></a>
                        <a href='#'><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Article;