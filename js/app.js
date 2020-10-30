import { Get_Films } from './Get_Films.js';
import { Get_Series } from './Get_Series.js';

document.getElementById("first-button").addEventListener("click", function () {
    Get_Films();
});

document.getElementById("second-button").addEventListener("click", function () {
    Get_Series();
});