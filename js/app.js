import { Get_Film_01, Get_Film_02, Get_Film_03 } from './Get_Films.js';

document.getElementById("first-button").addEventListener("click", function () {
    Get_Film_01();
    Get_Film_02();
    Get_Film_03();
});