function loadHeaderIndex() {
  document.getElementById("headerindex").innerHTML = `
    <section class="fixed-top navigation">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">

                <!-- Logo -->
                <a class="navbar-brand" href="index.html">
                    <img src="images/COE_Portal_logo.png" alt="logo" style="max-width:180px; border-radius:10px;">
                </a>

                <!-- Mobile Toggle -->
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar -->
                <div class="collapse navbar-collapse text-center" id="navbar">
                    <ul class="navbar-nav ml-auto">

                        <!-- Home -->
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">
                                <i class="ti-home"></i> Home
                            </a>
                        </li>

                        <!-- Inventory Management (Dropdown) -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#">
                                Inventory Management
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Mitra</a></li>
                                <li><a class="dropdown-item" href="#">Model Inventory Sep-2025</a></li>
                                <li><a class="dropdown-item" href="#">Model Inventory Dec-2025</a></li>
                            </ul>
                        </li>

                        <!-- AI/ML Policies (Dropdown) -->
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

                        <!-- Awards -->
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
  `;
}