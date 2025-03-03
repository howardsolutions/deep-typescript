/// <reference types="@types/google.maps" />

// import { User } from './User';
// import { Company } from './Company';

new google.maps.Map(document.getElementById('map') as HTMLDivElement, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});