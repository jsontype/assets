  <!-- Banner Section Start -->
    <section class="breadcrumb-section position-relative fix">
        <div class="container">
            <div
                class="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
                <h2 class="black"><?php if(isset($page_title)&&!empty($page_title)) { echo $page_title; } ?></h2>
                <ul class="d-flex align-items-center gap-3">
                    <li>
                        <a href="index.php">Home</a>
                    </li>
                    <li>/</li>
                    <li><?php if(isset($page_title)&&!empty($page_title)) { echo $page_title; } ?></li>
                </ul>
            </div>
        </div>
        <!-- Bread Ele -->
        <img src="assets/img/about/breadcrumnd-shap.png" alt="img" class="bread-ele">
    </section>
    <!-- Banner Section Start -->

