import "./service.css"
const service = () => {
    return ( 
        <>
        <body>
    <nav class="navbar navbar-expand-lg navbar-light ">
      
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            
            <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
             
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="home.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Add Book</a></li>
                            <li><a class="dropdown-item" href="#">Remove Book</a></li>
                            <li><a class="dropdown-item" href="#">Update Book</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Contact</a>
                    </li>
                </ul>
               
            </div>
            
        </div>
       
    </nav>
    <br></br>
    <div class="container-fluid">
        <div class="row">
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="/Images/add_book.jpeg" width="auto" height="250px"></img>                
                    <div class="card-body">
                        <h5 class="card-title">Add Book</h5>
                        <a href="#" class="btn btn-primary">Add</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AvilXfiUxEloFQC7jH20VyGTq85SFYTzhI0-m__ru39dvbAIa0P5hpxby55IHyH2Asc&usqp=CAU" width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">Borrow Book</h5>
                        <a href="#" class="btn btn-primary">Borrow</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AvilXfiUxEloFQC7jH20VyGTq85SFYTzhI0-m__ru39dvbAIa0P5hpxby55IHyH2Asc&usqp=CAU" width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">Update Book</h5>
                        <a href="#" class="btn btn-primary">Update</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="public\images\deletebook.jpg"width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">Delete Book</h5>
                        <a href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <footer class="bg-light text-center text-lg-start">
         
          <div class="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright:
            <a class="text-dark" href="#">MDBootstrap.com</a>
          </div>
         
        </footer>
      </div>
</body>
        </>
     );
}

export default service;