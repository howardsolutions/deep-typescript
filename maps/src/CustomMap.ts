import { User } from './User';
import { Company } from './Company';

// Instructions to EVERY other class on HOW they can be an argument to "addMarker"
export interface Mappable {
    location: {
        lat: number,
        lng: number,
    };
    markerContent(): string;
}

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

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })

    }

    // addCompnayMarker(company: Company) {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     });
    // }
}