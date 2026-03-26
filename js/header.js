function loadHeader() {
  document.getElementById("header").innerHTML = `
    <header class="navigation">
      
    <section class="fixed-top navigation" style="background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">

                
                <a class="navbar-brand" href="index.html">
                    <img src="images/COE_Portal_logo.png" alt="logo" style="max-width:180px; border-radius:10px;">
                </a>

                
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                
                <div class="collapse navbar-collapse text-center" id="navbar">
                    <ul class="navbar-nav ml-auto">

                        
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">
                                <i class="ti-home"></i> Home
                            </a>
                        </li>

                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#">
                                Inventory Management
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Mitra</a></li>
                                <li><a class="dropdown-item" href="#">Model Inventory Sep-2025</a></li>
                                <li><a class="dropdown-item" href="#">Model Inventory Dec-2025</a></li>
                                <li><a class="dropdown-item" href="#">Sample Use Cases Questionaire</a></li>
                            </ul>
                        </li>

                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#">
                                AI/ML Policies
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Documentation Library</a></li>
                                <li><a class="dropdown-item" href="#">Validation Checker Tool</a></li>
                                <li><a class="dropdown-item" href="#monitoringreport">Monitoring Report</a></li>
                                <li><a class="dropdown-item" href="#">Policies</a></li>
                            </ul>
                        </li>

                        
                        <li class="nav-item">
                            <a class="nav-link" href="#awardstoggle">Awards</a>
                        </li>

                    </ul>

                    <!-- Help Desk Button -->
                    <a href="#" class="btn btn-primary ml-lg-3 primary-shadow">Help Desk</a>
                </div>
            </nav>
        </div>
    </section>
    </header>
  `;
}