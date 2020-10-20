import { Get_Film_01, Get_Film_02, Get_Film_03 } from './Get_Films.js';
import { Get_Serie_01, Get_Serie_02, Get_Serie_03 } from './Get_Series.js';
import { Search_Button } from './Search_Button.js';


document.getElementById("first-button").addEventListener("click", function () {
    Get_Film_01();
    Get_Film_02();
    Get_Film_03();
});

document.getElementById("second-button").addEventListener("click", function () {
    Get_Serie_01();
    Get_Serie_02();
    Get_Serie_03();
});

document.getElementById("search_button").addEventListener("click", function () {
    Search_Button();
});