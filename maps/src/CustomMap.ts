export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLDivElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker() {

    }
}