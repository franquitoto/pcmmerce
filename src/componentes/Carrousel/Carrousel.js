import React from 'react'
import bootstrap from 'bootstrap';



const Carrousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                    <img src='https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/banner.png?alt=media&token=45a4466b-e1e0-4c77-94a3-78c7d84c521c'
                         class="d-block w-100" alt="banner1"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/banner2.PNG?alt=media&token=e99efd3d-905d-41c4-913a-5b2602c2f531"
                         class="d-block w-100" alt="banner2"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/banner3.PNG?alt=media&token=e7ce3fcc-4b8d-4bca-8fb4-57d7314d2ea0"
                         class="d-block w-100" alt="banner3"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrousel;