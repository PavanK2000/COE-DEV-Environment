function loadFooter() {
  document.getElementById("footer").innerHTML = `
    <footer class="footer-section footer" style="background-image: url(images/backgrounds/footertaj.png);">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <!-- logo -->
                    <img class="img-fluid" src="images/hdfcbanklogo.svg" alt="logo" style="max-width:190px;">
                    <br />
                    <h5 style="color:white;">The <span style="color:greenyellow;">COE</span> Website is an internal product of HDFC Bank. Access and usage are restricted to authorized users only.</h5>

                </div>
                <!-- footer menu -->
                <div class="col-md-4">
                    <div class="footer-widget">
                        <h3 style="color:white;"><span style="color:greenyellow;">Q</span>uick <span style="color:greenyellow;">L</span>inks</h3>
                        <ul class="links">
                            <li><a href="" style="color:white;">Mitra</a></li>
                            <li><a href="" style="color:white;">Model Documentation Validator</a></li>
                            <li><a href="" style="color:white;">Help Desk</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <h2 style="color:greenyellow; opacity:40%;">Coming Soon....</h2>
                    <h4 style="color:greenyellow; opacity:40%;">Drift Checker <i class="ti-gift" style="color:magenta;"></i></h4>
                </div>
            </div>
            <p style="color:red;">&copy;All Rights Reserved&copy; - HDFC BANK.</p>
        </div>
    </footer>
  `;
}