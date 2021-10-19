import './firstPage.css';

function FirstPage() {
    return (
        <div className="FirstPage">
            <header>
                <div class="brand-logo">
                    <a href="#"><img src="https://image.flaticon.com/icons/png/512/13/13384.png" alt="Brand Logo" /></a>
                </div>


                <nav>
                    <ul class="navigation">
                        <li><a href="#"><i class="fas fa-house-damage"></i> Menu 1</a></li>
                        <li><a href="#"><i class="far fa-image"></i> Menu 2</a></li>
                        <li><a href="#"><i class="fab fa-blogger-b"></i> Menu 3</a></li>
                        <li><a href="#"><i class="fas fa-question"></i> Menu 4</a></li>
                        <li><a href="#"><i class="fas fa-phone-alt"></i> Menu 5</a></li>
                        <li><a href="#"><i class="fas fa-phone-alt"></i> Menu 6</a></li>
                        <li><a href="#"><img class="profile-img" src="http://assets.stickpng.com/thumbs/58afdadd829958a978a4a694.png" alt="Profile Picture" /></a></li>
                        <li><a href="#"><i class="fas fa-phone-alt"></i> Profile User</a></li>
                        <label for="toggle-btn" class="hide-menu-btn"><i class="fas fa-times"></i></label>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default FirstPage;