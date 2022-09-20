import 'bootstrap/dist/css/bootstrap.min.css';
import'./assets/main.css';

function Blog() { 
    return(
        <div className='blog-section'>
            <div className='container'>
                <h1 className='text-white text-center ptx-x'>Blog</h1>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12 p-xs'>
                        <div className='card shadow'>
                            <div className='card-body'>
                                <h1 className='text-center text-xs'>Belajar React</h1>
                                <p className='fs-x'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <div className='button-x'>
                                    <button className='btn btn-primary btn-sm shadow'>Pelajari Selengkapnya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 p-xs'>
                        <div className='card shadow'>
                            <div className='card-body'>
                                <h1 className='text-center text-xs'>Ngobrol Tentang React</h1>
                                <p className='fs-x'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <div className='button-x'>
                                    <button className='btn btn-primary btn-sm shadow'>Pelajari Selengkapnya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 p-xs'>
                        <div className='card shadow'>
                            <div className='card-body'>
                                <h1 className='text-center text-xs'>Ngoding Bareng React Js</h1>
                                <p className='fs-x'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <div className='button-x'>
                                    <button className='btn btn-primary btn-sm shadow'>Pelajari Selengkapnya</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;