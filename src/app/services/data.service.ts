import { IDetailedUserRole, ITestData, IUserRole } from '../types/data-types';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public owners = new Map<number, {id: number, name: string}>([
        [1, {id: 1, name: 'Tulajdonos 1'}],
        [2, {id: 2, name: 'Tulajdonos 2'}],
        [3, {id: 3, name: 'Tulajdonos 3'}]
    ])
    public groups = new Map<number, {id: number, name: string}>([
        [1, {id: 1, name: 'Csoport 1'}],
        [2, {id: 2, name: 'Csoport 2'}],
        [3, {id: 3, name: 'Csoport 3'}]
    ])

    private data: ITestData[] = [
        {
            "id": 1,
            "szeaz": "104221",
            "code": "104221",
            "name": "Békéscsaba 6651 mobil posta",
            "zipcode": "5600",
            "settlement": "Békéscsaba",
            "address": "Munkácsy út 6-8.",
            "active": true
        },
        {
            "id": 2,
            "szeaz": "104223",
            "code": "104223",
            "name": "Bácsalmás 6651 mobil posta",
            "zipcode": "6430",
            "settlement": "Bácsalmás",
            "address": "Hősök tere 11.",
            "active": true
        },
        {
            "id": 3,
            "szeaz": "104225",
            "code": "104225",
            "name": "Igal 6651 mobil posta",
            "zipcode": "7275",
            "settlement": "Igal",
            "address": "Szent István utca 118.",
            "active": true
        },
        {
            "id": 4,
            "szeaz": "104226",
            "code": "104226",
            "name": "Igal 6652 -6656 mobil posta",
            "zipcode": "7275",
            "settlement": "Igal",
            "address": "Szent István utca 118.",
            "active": false
        },
        {
            "id": 5,
            "szeaz": "104227",
            "code": "104227",
            "name": "Igal 6653 mobil posta",
            "zipcode": "7275",
            "settlement": "Igal",
            "address": "Szent István utca 118.",
            "active": true
        },
        {
            "id": 6,
            "szeaz": "104228",
            "code": "104228",
            "name": "Nagykanizsa 6651 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": true
        },
        {
            "id": 7,
            "szeaz": "104229",
            "code": "104229",
            "name": "Nagykanizsa 6652 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": false
        },
        {
            "id": 8,
            "szeaz": "104230",
            "code": "104230",
            "name": "Nagykanizsa 6653 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": true
        },
        {
            "id": 9,
            "szeaz": "104231",
            "code": "104231",
            "name": "Nagykanizsa 6654 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": false
        },
        {
            "id": 10,
            "szeaz": "104232",
            "code": "104232",
            "name": "Kapuvár 1 6651 mobil posta",
            "zipcode": "9330",
            "settlement": "Kapuvár",
            "address": "Kossuth Lajos utca 42.",
            "active": false
        },
        {
            "id": 11,
            "szeaz": "104233",
            "code": "104233",
            "name": "Celldömölk 6651 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": true
        },
        {
            "id": 12,
            "szeaz": "104234",
            "code": "104234",
            "name": "Celldömölk 6652 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": false
        },
        {
            "id": 13,
            "szeaz": "104235",
            "code": "104235",
            "name": "Celldömölk 6654 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": true
        },
        {
            "id": 14,
            "szeaz": "104236",
            "code": "104236",
            "name": "Celldömölk 6656 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": true
        },
        {
            "id": 15,
            "szeaz": "104237",
            "code": "104237",
            "name": "Devecser 6651-6657 mobil posta",
            "zipcode": "8460",
            "settlement": "Devecser",
            "address": "Miskei út 10.",
            "active": false
        },
        {
            "id": 16,
            "szeaz": "104238",
            "code": "104238",
            "name": "Devecser 6652-6655 mobil posta",
            "zipcode": "8460",
            "settlement": "Devecser",
            "address": "Miskei út 10.",
            "active": false
        },
        {
            "id": 17,
            "szeaz": "104239",
            "code": "104239",
            "name": "Devecser 6653 mobil posta",
            "zipcode": "8460",
            "settlement": "Devecser",
            "address": "Miskei út 10.",
            "active": true
        },
        {
            "id": 18,
            "szeaz": "104241",
            "code": "104241",
            "name": "Szigetvár 6651 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": false
        },
        {
            "id": 19,
            "szeaz": "104242",
            "code": "104242",
            "name": "Szigetvár 6653 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": false
        },
        {
            "id": 20,
            "szeaz": "104243",
            "code": "104243",
            "name": "Szigetvár 6654-6662 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": false
        },
        {
            "id": 21,
            "szeaz": "104244",
            "code": "104244",
            "name": "Szigetvár 6655-6656 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": true
        },
        {
            "id": 22,
            "szeaz": "104245",
            "code": "104245",
            "name": "Szigetvár 6657 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": false
        },
        {
            "id": 23,
            "szeaz": "104246",
            "code": "104246",
            "name": "Szigetvár 6658 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": false
        },
        {
            "id": 24,
            "szeaz": "104247",
            "code": "104247",
            "name": "Vajszló 6652-56 mobil posta",
            "zipcode": "7838",
            "settlement": "Vajszló",
            "address": "Jókai utca 5.",
            "active": true
        },
        {
            "id": 25,
            "szeaz": "104248",
            "code": "104248",
            "name": "Vajszló 6651 6655 mobil posta",
            "zipcode": "7838",
            "settlement": "Vajszló",
            "address": "Jókai utca 5.",
            "active": true
        },
        {
            "id": 26,
            "szeaz": "104250",
            "code": "104250",
            "name": "Vajszló 6654 6653 mobil posta",
            "zipcode": "7838",
            "settlement": "Vajszló",
            "address": "Jókai utca 5.",
            "active": false
        },
        {
            "id": 27,
            "szeaz": "104251",
            "code": "104251",
            "name": "Sellye 6652 mobil posta",
            "zipcode": "7960",
            "settlement": "Sellye",
            "address": "Mátyás király utca 66.",
            "active": false
        },
        {
            "id": 28,
            "szeaz": "104252",
            "code": "104252",
            "name": "Sellye 6653 6654 mobil posta",
            "zipcode": "7960",
            "settlement": "Sellye",
            "address": "Mátyás király utca 66.",
            "active": true
        },
        {
            "id": 29,
            "szeaz": "104253",
            "code": "104253",
            "name": "Siklós 6651 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": true
        },
        {
            "id": 30,
            "szeaz": "104254",
            "code": "104254",
            "name": "Siklós 6652 6657 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": true
        },
        {
            "id": 31,
            "szeaz": "104255",
            "code": "104255",
            "name": "Siklós 6653 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": true
        },
        {
            "id": 32,
            "szeaz": "104256",
            "code": "104256",
            "name": "Siklós 6654 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": true
        },
        {
            "id": 33,
            "szeaz": "104257",
            "code": "104257",
            "name": "Siklós 6655 6656 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": false
        },
        {
            "id": 34,
            "szeaz": "104258",
            "code": "104258",
            "name": "Szentlőrinc 6652 mobil posta",
            "zipcode": "7940",
            "settlement": "Szentlőrinc",
            "address": "Munkácsy Mihály utca 10.",
            "active": false
        },
        {
            "id": 35,
            "szeaz": "104259",
            "code": "104259",
            "name": "Szentlőrinc 6653 mobil posta",
            "zipcode": "7940",
            "settlement": "Szentlőrinc",
            "address": "Munkácsy Mihály utca 10.",
            "active": true
        },
        {
            "id": 36,
            "szeaz": "104260",
            "code": "104260",
            "name": "Szentlőrinc 6654 mobil posta",
            "zipcode": "7940",
            "settlement": "Szentlőrinc",
            "address": "Munkácsy Mihály utca 10.",
            "active": false
        },
        {
            "id": 37,
            "szeaz": "104261",
            "code": "104261",
            "name": "Szentlőrinc 6655 mobil posta",
            "zipcode": "7940",
            "settlement": "Szentlőrinc",
            "address": "Munkácsy Mihály utca 10.",
            "active": true
        },
        {
            "id": 38,
            "szeaz": "104262",
            "code": "104262",
            "name": "Bóly 6651 mobil posta",
            "zipcode": "7754",
            "settlement": "Bóly",
            "address": "Ady Endre utca 7.",
            "active": true
        },
        {
            "id": 39,
            "szeaz": "104263",
            "code": "104263",
            "name": "Mágocs 6651 6652 mobil posta",
            "zipcode": "7342",
            "settlement": "Mágocs",
            "address": "József Attila utca 54.",
            "active": false
        },
        {
            "id": 40,
            "szeaz": "104264",
            "code": "104264",
            "name": "Dombóvár 6651-6653 mobil posta",
            "zipcode": "7200",
            "settlement": "Dombóvár",
            "address": "Szabadság utca 25.",
            "active": true
        },
        {
            "id": 41,
            "szeaz": "104265",
            "code": "104265",
            "name": "Pécs 6651 mobil posta",
            "zipcode": "7623",
            "settlement": "Pécs",
            "address": "Indóház tér 6.",
            "active": true
        },
        {
            "id": 42,
            "szeaz": "104266",
            "code": "104266",
            "name": "Sásd 6651 mobil posta",
            "zipcode": "7370",
            "settlement": "Sásd",
            "address": "Szent Imre út 16.",
            "active": false
        },
        {
            "id": 43,
            "szeaz": "104267",
            "code": "104267",
            "name": "Sásd 6652 6653 mobil posta",
            "zipcode": "7370",
            "settlement": "Sásd",
            "address": "Szent Imre út 16.",
            "active": true
        },
        {
            "id": 44,
            "szeaz": "104268",
            "code": "104268",
            "name": "Gyönk 6651 6652 mobil posta",
            "zipcode": "7064",
            "settlement": "Gyönk",
            "address": "Táncsics Mihály utca 400",
            "active": true
        },
        {
            "id": 45,
            "szeaz": "104269",
            "code": "104269",
            "name": "Gyönk 6653-6655 mobil posta",
            "zipcode": "7064",
            "settlement": "Gyönk",
            "address": "Táncsics Mihály utca 400",
            "active": false
        },
        {
            "id": 46,
            "szeaz": "104270",
            "code": "104270",
            "name": "Gyönk 6654 mobil posta",
            "zipcode": "7064",
            "settlement": "Gyönk",
            "address": "Táncsics Mihály utca 400",
            "active": true
        },
        {
            "id": 47,
            "szeaz": "104272",
            "code": "104272",
            "name": "Bonyhád 6651 mobil posta",
            "zipcode": "7150",
            "settlement": "Bonyhád",
            "address": "Szabadság tér 17.",
            "active": true
        },
        {
            "id": 48,
            "szeaz": "104273",
            "code": "104273",
            "name": "Kaposvár1 6651 6652 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 49,
            "szeaz": "104274",
            "code": "104274",
            "name": "Kaposvár1 6653 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 50,
            "szeaz": "104275",
            "code": "104275",
            "name": "Balatonföldvár 6651 6652 mobil posta",
            "zipcode": "8623",
            "settlement": "Balatonföldvár",
            "address": "Széchenyi Imre utca 1,",
            "active": true
        },
        {
            "id": 51,
            "szeaz": "104276",
            "code": "104276",
            "name": "Csurgó 6651 mobil posta",
            "zipcode": "8840",
            "settlement": "Csurgó",
            "address": "Petőfi tér 29.",
            "active": false
        },
        {
            "id": 52,
            "szeaz": "104277",
            "code": "104277",
            "name": "Csurgó 6652 mobil posta",
            "zipcode": "8840",
            "settlement": "Csurgó",
            "address": "Petőfi tér 29.",
            "active": false
        },
        {
            "id": 53,
            "szeaz": "104278",
            "code": "104278",
            "name": "Kadarkút 6651 mobil posta",
            "zipcode": "7530",
            "settlement": "Kadarkút",
            "address": "Petőfi Sándor utca 21.",
            "active": true
        },
        {
            "id": 54,
            "szeaz": "104280",
            "code": "104280",
            "name": "Zalaegerszeg 6651-6660 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": true
        },
        {
            "id": 55,
            "szeaz": "104281",
            "code": "104281",
            "name": "Zalaegerszeg 6653 6654 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": true
        },
        {
            "id": 56,
            "szeaz": "104282",
            "code": "104282",
            "name": "Lenti 6651-6653 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": true
        },
        {
            "id": 57,
            "szeaz": "104283",
            "code": "104283",
            "name": "Lenti 6652 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": true
        },
        {
            "id": 58,
            "szeaz": "104284",
            "code": "104284",
            "name": "Lenti 6654 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": false
        },
        {
            "id": 59,
            "szeaz": "104285",
            "code": "104285",
            "name": "Zalaszentgrót 6651 mobil posta",
            "zipcode": "8790",
            "settlement": "Zalaszentgrót",
            "address": "Dózsa György utca 2.",
            "active": false
        },
        {
            "id": 60,
            "szeaz": "104286",
            "code": "104286",
            "name": "Ajka 1 6651 mobil posta",
            "zipcode": "8400",
            "settlement": "Ajka",
            "address": "Szabadság tér 7.",
            "active": false
        },
        {
            "id": 61,
            "szeaz": "104287",
            "code": "104287",
            "name": "Kapuvár 1 6652 mobil posta",
            "zipcode": "9330",
            "settlement": "Kapuvár",
            "address": "Kossuth Lajos utca 42.",
            "active": true
        },
        {
            "id": 62,
            "szeaz": "104288",
            "code": "104288",
            "name": "Körmend 6651 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 63,
            "szeaz": "104289",
            "code": "104289",
            "name": "Körmend 6652 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 64,
            "szeaz": "104290",
            "code": "104290",
            "name": "Körmend 6653 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 65,
            "szeaz": "104291",
            "code": "104291",
            "name": "Körmend 6654 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 66,
            "szeaz": "104292",
            "code": "104292",
            "name": "Kőszeg 1 6651 mobil posta",
            "zipcode": "9730",
            "settlement": "Kőszeg",
            "address": "Várkör (nincs) 65.",
            "active": true
        },
        {
            "id": 67,
            "szeaz": "104293",
            "code": "104293",
            "name": "Őriszentpéter 6651 mobil posta",
            "zipcode": "9941",
            "settlement": "Őriszentpéter",
            "address": "Városszer utca 106.",
            "active": false
        },
        {
            "id": 68,
            "szeaz": "104294",
            "code": "104294",
            "name": "Pápa 1 6651 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": true
        },
        {
            "id": 69,
            "szeaz": "104296",
            "code": "104296",
            "name": "Sárvár 1 6655 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": true
        },
        {
            "id": 70,
            "szeaz": "104297",
            "code": "104297",
            "name": "Sárvár 1 6653 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": false
        },
        {
            "id": 71,
            "szeaz": "104299",
            "code": "104299",
            "name": "Szombathely 2 6651 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": false
        },
        {
            "id": 72,
            "szeaz": "104300",
            "code": "104300",
            "name": "Tapolca 1 6651 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": true
        },
        {
            "id": 73,
            "szeaz": "104301",
            "code": "104301",
            "name": "Tapolca 1 6652 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": true
        },
        {
            "id": 74,
            "szeaz": "104302",
            "code": "104302",
            "name": "Tapolca 1 6653 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": true
        },
        {
            "id": 75,
            "szeaz": "104306",
            "code": "104306",
            "name": "Zirc 6651 mobil posta",
            "zipcode": "8420",
            "settlement": "Zirc",
            "address": "Damjanich utca 3.",
            "active": false
        },
        {
            "id": 76,
            "szeaz": "104307",
            "code": "104307",
            "name": "Zirc 6653 mobil posta",
            "zipcode": "8420",
            "settlement": "Zirc",
            "address": "Damjanich utca 3.",
            "active": true
        },
        {
            "id": 77,
            "szeaz": "104309",
            "code": "104309",
            "name": "Balassagyarmat 6651 mobil posta",
            "zipcode": "2660",
            "settlement": "Balassagyarmat",
            "address": "Rákóczi Fejedelem út 24.",
            "active": false
        },
        {
            "id": 78,
            "szeaz": "104310",
            "code": "104310",
            "name": "Bódvaszilas 6651 mobil posta",
            "zipcode": "3763",
            "settlement": "Bódvaszilas",
            "address": "Kossuth út 15.",
            "active": true
        },
        {
            "id": 79,
            "szeaz": "104311",
            "code": "104311",
            "name": "Edelény 6651 mobil posta",
            "zipcode": "3780",
            "settlement": "Edelény",
            "address": "TóthÁrpád út 7.",
            "active": true
        },
        {
            "id": 80,
            "szeaz": "104312",
            "code": "104312",
            "name": "Balassagyarmat 6652 mobil posta",
            "zipcode": "2660",
            "settlement": "Balassagyarmat",
            "address": "Rákóczi Fejedelem út 24.",
            "active": true
        },
        {
            "id": 81,
            "szeaz": "104313",
            "code": "104313",
            "name": "Balassagyarmat 6653 mobil posta",
            "zipcode": "2660",
            "settlement": "Balassagyarmat",
            "address": "Rákóczi Fejedelem út 24.",
            "active": true
        },
        {
            "id": 82,
            "szeaz": "104314",
            "code": "104314",
            "name": "Balassagyarmat 6654 mobil posta",
            "zipcode": "2660",
            "settlement": "Balassagyarmat",
            "address": "Rákóczi Fejedelem út 24.",
            "active": true
        },
        {
            "id": 83,
            "szeaz": "104315",
            "code": "104315",
            "name": "Bódvaszilas 6652 mobil posta",
            "zipcode": "3763",
            "settlement": "Bódvaszilas",
            "address": "Kossuth út 15.",
            "active": true
        },
        {
            "id": 84,
            "szeaz": "104317",
            "code": "104317",
            "name": "Edelény 6652, 6653 mobil posta",
            "zipcode": "3780",
            "settlement": "Edelény",
            "address": "TóthÁrpád út 7.",
            "active": false
        },
        {
            "id": 85,
            "szeaz": "104319",
            "code": "104319",
            "name": "Encs 6651 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": true
        },
        {
            "id": 86,
            "szeaz": "104320",
            "code": "104320",
            "name": "Encs 6652 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": true
        },
        {
            "id": 87,
            "szeaz": "104321",
            "code": "104321",
            "name": "Encs 6653 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 88,
            "szeaz": "104322",
            "code": "104322",
            "name": "Encs 6654 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 89,
            "szeaz": "104323",
            "code": "104323",
            "name": "Encs 6655 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": true
        },
        {
            "id": 90,
            "szeaz": "104324",
            "code": "104324",
            "name": "Encs 6657 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 91,
            "szeaz": "104325",
            "code": "104325",
            "name": "Encs 6659 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 92,
            "szeaz": "104326",
            "code": "104326",
            "name": "Encs 6658 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 93,
            "szeaz": "104327",
            "code": "104327",
            "name": "Gönc 6651 mobil posta",
            "zipcode": "3895",
            "settlement": "Gönc",
            "address": "Kossuth út 15.",
            "active": true
        },
        {
            "id": 94,
            "szeaz": "104328",
            "code": "104328",
            "name": "Pétervására 6651 mobil posta",
            "zipcode": "3250",
            "settlement": "Pétervására",
            "address": "Kossuth út 43.",
            "active": false
        },
        {
            "id": 95,
            "szeaz": "104330",
            "code": "104330",
            "name": "Pálháza 6651 mobil posta",
            "zipcode": "3994",
            "settlement": "Pálháza",
            "address": "Dózsa György út 30.",
            "active": false
        },
        {
            "id": 96,
            "szeaz": "104331",
            "code": "104331",
            "name": "Pálháza 6652 mobil posta",
            "zipcode": "3994",
            "settlement": "Pálháza",
            "address": "Dózsa György út 30.",
            "active": false
        },
        {
            "id": 97,
            "szeaz": "104332",
            "code": "104332",
            "name": "Ragály 6651, 6653 mobil posta",
            "zipcode": "3724",
            "settlement": "Ragály",
            "address": "Dózsa György út 2/A",
            "active": true
        },
        {
            "id": 98,
            "szeaz": "104333",
            "code": "104333",
            "name": "Ragály 6652, 6654 mobil posta",
            "zipcode": "3724",
            "settlement": "Ragály",
            "address": "Dózsa György út 2/A",
            "active": false
        },
        {
            "id": 99,
            "szeaz": "104335",
            "code": "104335",
            "name": "Ricse 6651, 6652 mobil posta",
            "zipcode": "3974",
            "settlement": "Ricse",
            "address": "Kossuth út 2.",
            "active": false
        },
        {
            "id": 100,
            "szeaz": "104337",
            "code": "104337",
            "name": "Sátoraljaújhely 6651 mobil posta",
            "zipcode": "3980",
            "settlement": "Sátoraljaújhely",
            "address": "Kazinczy út 10.",
            "active": true
        },
        {
            "id": 101,
            "szeaz": "104338",
            "code": "104338",
            "name": "Sátoraljaújhely 6652 mobil posta",
            "zipcode": "3980",
            "settlement": "Sátoraljaújhely",
            "address": "Kazinczy út 10.",
            "active": false
        },
        {
            "id": 102,
            "szeaz": "104340",
            "code": "104340",
            "name": "Szendrő 6651, 6652 mobil posta",
            "zipcode": "3752",
            "settlement": "Szendrő",
            "address": "Hősök tere 7.",
            "active": false
        },
        {
            "id": 103,
            "szeaz": "104341",
            "code": "104341",
            "name": "Szendrő 6653 mobil posta",
            "zipcode": "3752",
            "settlement": "Szendrő",
            "address": "Hősök tere 7.",
            "active": true
        },
        {
            "id": 104,
            "szeaz": "104342",
            "code": "104342",
            "name": "Szikszó 6651,6652 mobil posta",
            "zipcode": "3800",
            "settlement": "Szikszó",
            "address": "Bolt út 15.",
            "active": true
        },
        {
            "id": 105,
            "szeaz": "104343",
            "code": "104343",
            "name": "Szikszó 6653 mobil posta",
            "zipcode": "3800",
            "settlement": "Szikszó",
            "address": "Bolt út 15.",
            "active": true
        },
        {
            "id": 106,
            "szeaz": "104344",
            "code": "104344",
            "name": "Szikszó 6654 mobil posta",
            "zipcode": "3800",
            "settlement": "Szikszó",
            "address": "Bolt út 15.",
            "active": false
        },
        {
            "id": 107,
            "szeaz": "104345",
            "code": "104345",
            "name": "Tolcsva 6651 mobil posta",
            "zipcode": "3934",
            "settlement": "Tolcsva",
            "address": "Szabadság tér 22.",
            "active": false
        },
        {
            "id": 108,
            "szeaz": "104349",
            "code": "104349",
            "name": "Kapuvár 1 6654 mobil posta",
            "zipcode": "9330",
            "settlement": "Kapuvár",
            "address": "Kossuth Lajos utca 42.",
            "active": false
        },
        {
            "id": 109,
            "szeaz": "104350",
            "code": "104350",
            "name": "Sárvár 1 6651- 6657 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": false
        },
        {
            "id": 110,
            "szeaz": "104351",
            "code": "104351",
            "name": "Szombathely 2 6652 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": false
        },
        {
            "id": 111,
            "szeaz": "104352",
            "code": "104352",
            "name": "Szombathely 2 6653 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": true
        },
        {
            "id": 112,
            "szeaz": "104353",
            "code": "104353",
            "name": "Szombathely 2 6654 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": false
        },
        {
            "id": 113,
            "szeaz": "104354",
            "code": "104354",
            "name": "Tapolca 1 6657 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": true
        },
        {
            "id": 114,
            "szeaz": "104355",
            "code": "104355",
            "name": "Várpalota 1 6651 mobil posta",
            "zipcode": "8100",
            "settlement": "Várpalota",
            "address": "Szent István utca 5.",
            "active": true
        },
        {
            "id": 115,
            "szeaz": "104356",
            "code": "104356",
            "name": "Vasvár 6651 mobil posta",
            "zipcode": "9800",
            "settlement": "Vasvár",
            "address": "Járdányi utca 4.",
            "active": false
        },
        {
            "id": 116,
            "szeaz": "104357",
            "code": "104357",
            "name": "Vasvár 6652 mobil posta",
            "zipcode": "9800",
            "settlement": "Vasvár",
            "address": "Járdányi utca 4.",
            "active": true
        },
        {
            "id": 117,
            "szeaz": "104358",
            "code": "104358",
            "name": "Vasvár 6653 mobil posta",
            "zipcode": "9800",
            "settlement": "Vasvár",
            "address": "Járdányi utca 4.",
            "active": false
        },
        {
            "id": 118,
            "szeaz": "104359",
            "code": "104359",
            "name": "Vasvár 6654 mobil posta",
            "zipcode": "9800",
            "settlement": "Vasvár",
            "address": "Járdányi utca 4.",
            "active": true
        },
        {
            "id": 119,
            "szeaz": "104774",
            "code": "104774",
            "name": "Sümeg 6651 mobil posta",
            "zipcode": "8330",
            "settlement": "Sümeg",
            "address": "Kossuth Lajos utca 1.",
            "active": false
        },
        {
            "id": 120,
            "szeaz": "104786",
            "code": "104786",
            "name": "Sümeg 6652 6653 mobil posta",
            "zipcode": "8330",
            "settlement": "Sümeg",
            "address": "Kossuth Lajos utca 1.",
            "active": true
        },
        {
            "id": 121,
            "szeaz": "104788",
            "code": "104788",
            "name": "Szentlőrinc 6656 mobil posta",
            "zipcode": "7940",
            "settlement": "Szentlőrinc",
            "address": "Munkácsy Mihály utca 10.",
            "active": false
        },
        {
            "id": 122,
            "szeaz": "104789",
            "code": "104789",
            "name": "Sellye 6651-6656 mobil posta",
            "zipcode": "7960",
            "settlement": "Sellye",
            "address": "Mátyás király utca 66.",
            "active": true
        },
        {
            "id": 123,
            "szeaz": "104790",
            "code": "104790",
            "name": "Villány 6651 mobil posta",
            "zipcode": "7773",
            "settlement": "Villány",
            "address": "Baross Gábor utca 35.",
            "active": false
        },
        {
            "id": 124,
            "szeaz": "104791",
            "code": "104791",
            "name": "Villány 6652 mobil posta",
            "zipcode": "7773",
            "settlement": "Villány",
            "address": "Baross Gábor utca 35.",
            "active": true
        },
        {
            "id": 125,
            "szeaz": "104792",
            "code": "104792",
            "name": "Villány 6653 mobil posta",
            "zipcode": "7773",
            "settlement": "Villány",
            "address": "Baross Gábor utca 35.",
            "active": false
        },
        {
            "id": 126,
            "szeaz": "104793",
            "code": "104793",
            "name": "Villány 6654 mobil posta",
            "zipcode": "7773",
            "settlement": "Villány",
            "address": "Baross Gábor utca 35.",
            "active": true
        },
        {
            "id": 127,
            "szeaz": "104794",
            "code": "104794",
            "name": "Pécsvárad 6652 mobil posta",
            "zipcode": "7720",
            "settlement": "Pécsvárad",
            "address": "Vasút utca 4.",
            "active": false
        },
        {
            "id": 128,
            "szeaz": "104796",
            "code": "104796",
            "name": "Barcs 6651 mobil posta",
            "zipcode": "7570",
            "settlement": "Barcs",
            "address": "Köztársaság utca 2/a.",
            "active": false
        },
        {
            "id": 129,
            "szeaz": "104797",
            "code": "104797",
            "name": "Marcali 6652 mobil posta",
            "zipcode": "8700",
            "settlement": "Marcali",
            "address": "Rákóczi utca 16.",
            "active": true
        },
        {
            "id": 130,
            "szeaz": "104798",
            "code": "104798",
            "name": "Kaposvár1 6654-6655 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 131,
            "szeaz": "104799",
            "code": "104799",
            "name": "Lenti 6656 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": true
        },
        {
            "id": 132,
            "szeaz": "104800",
            "code": "104800",
            "name": "Körmend 6657 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": false
        },
        {
            "id": 133,
            "szeaz": "104802",
            "code": "104802",
            "name": "Sárvár 1 6658 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": false
        },
        {
            "id": 134,
            "szeaz": "104804",
            "code": "104804",
            "name": "Komárom 6651 mobil posta",
            "zipcode": "2900",
            "settlement": "Komárom",
            "address": "Czibor Zoltán utca 3",
            "active": false
        },
        {
            "id": 135,
            "szeaz": "104805",
            "code": "104805",
            "name": "Solt 6651 mobil posta",
            "zipcode": "6320",
            "settlement": "Solt",
            "address": "Posta utca 6.",
            "active": false
        },
        {
            "id": 136,
            "szeaz": "104806",
            "code": "104806",
            "name": "Bugac 6651 mobil posta",
            "zipcode": "6114",
            "settlement": "Bugac",
            "address": "Petőfi utca 2.",
            "active": true
        },
        {
            "id": 137,
            "szeaz": "104808",
            "code": "104808",
            "name": "Kaposvár1 6656 Mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 138,
            "szeaz": "104809",
            "code": "104809",
            "name": "Tab 6653 mobil posta",
            "zipcode": "8660",
            "settlement": "Tab",
            "address": "Kossuth Lajos utca 61.",
            "active": false
        },
        {
            "id": 139,
            "szeaz": "104811",
            "code": "104811",
            "name": "Barcs 6652 mobil posta",
            "zipcode": "7570",
            "settlement": "Barcs",
            "address": "Köztársaság utca 2/a.",
            "active": true
        },
        {
            "id": 140,
            "szeaz": "104812",
            "code": "104812",
            "name": "Komádi 6651 mobil posta",
            "zipcode": "4138",
            "settlement": "Komádi",
            "address": "Fő utca 37.",
            "active": true
        },
        {
            "id": 141,
            "szeaz": "104813",
            "code": "104813",
            "name": "Putnok 6651 mobil posta",
            "zipcode": "3630",
            "settlement": "Putnok",
            "address": "Mátyás király tér 13.",
            "active": false
        },
        {
            "id": 142,
            "szeaz": "104814",
            "code": "104814",
            "name": "Szolnok 6651 mobil posta",
            "zipcode": "5000",
            "settlement": "Szolnok",
            "address": "\"MÁV pu. \"",
            "active": true
        },
        {
            "id": 143,
            "szeaz": "104816",
            "code": "104816",
            "name": "Tiszaújváros 6651 mobil posta",
            "zipcode": "3580",
            "settlement": "Tiszaújváros",
            "address": "Bethlen Gábor út 9.",
            "active": true
        },
        {
            "id": 144,
            "szeaz": "104818",
            "code": "104818",
            "name": "Csorna 6651 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": true
        },
        {
            "id": 145,
            "szeaz": "104819",
            "code": "104819",
            "name": "Csorna 6652 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": true
        },
        {
            "id": 146,
            "szeaz": "104820",
            "code": "104820",
            "name": "Győr Kp 6651 mobil posta",
            "zipcode": "9021",
            "settlement": "Győr",
            "address": "Révai Miklós utca 1.",
            "active": false
        },
        {
            "id": 147,
            "szeaz": "104821",
            "code": "104821",
            "name": "Sopron 1 6651 mobil posta",
            "zipcode": "9400",
            "settlement": "Sopron",
            "address": "Széchenyi tér 7-10.",
            "active": false
        },
        {
            "id": 148,
            "szeaz": "104822",
            "code": "104822",
            "name": "Celldömölk 6658 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": true
        },
        {
            "id": 149,
            "szeaz": "104823",
            "code": "104823",
            "name": "Celldömölk 6659 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": true
        },
        {
            "id": 150,
            "szeaz": "104824",
            "code": "104824",
            "name": "Kőszeg 1 6652 mobil posta",
            "zipcode": "9730",
            "settlement": "Kőszeg",
            "address": "Várkör (nincs) 65.",
            "active": false
        },
        {
            "id": 151,
            "szeaz": "104825",
            "code": "104825",
            "name": "Kőszeg 1 6653 mobil posta",
            "zipcode": "9730",
            "settlement": "Kőszeg",
            "address": "Várkör (nincs) 65.",
            "active": true
        },
        {
            "id": 152,
            "szeaz": "104826",
            "code": "104826",
            "name": "Zalaegerszeg 6655-6661 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": false
        },
        {
            "id": 153,
            "szeaz": "104827",
            "code": "104827",
            "name": "Zalaegerszeg 6656 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": false
        },
        {
            "id": 154,
            "szeaz": "104828",
            "code": "104828",
            "name": "Sümeg 6654 mobil posta",
            "zipcode": "8330",
            "settlement": "Sümeg",
            "address": "Kossuth Lajos utca 1.",
            "active": true
        },
        {
            "id": 155,
            "szeaz": "104829",
            "code": "104829",
            "name": "Nagykanizsa 6655 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": true
        },
        {
            "id": 156,
            "szeaz": "104830",
            "code": "104830",
            "name": "Zalalövő 6651 mobil posta",
            "zipcode": "8999",
            "settlement": "Zalalövő",
            "address": "Kossuth Lajos utca 5.",
            "active": false
        },
        {
            "id": 157,
            "szeaz": "104831",
            "code": "104831",
            "name": "Sárvár 1 6659 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": true
        },
        {
            "id": 158,
            "szeaz": "104832",
            "code": "104832",
            "name": "Sárvár 1 6660 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": false
        },
        {
            "id": 159,
            "szeaz": "104833",
            "code": "104833",
            "name": "Őriszentpéter 6652 mobil posta",
            "zipcode": "9941",
            "settlement": "Őriszentpéter",
            "address": "Városszer utca 106.",
            "active": false
        },
        {
            "id": 160,
            "szeaz": "104834",
            "code": "104834",
            "name": "Szentgotthárd 6651 mobil posta",
            "zipcode": "9970",
            "settlement": "Szentgotthárd",
            "address": "Széll Kálmán tér 12.",
            "active": false
        },
        {
            "id": 161,
            "szeaz": "104835",
            "code": "104835",
            "name": "Szombathely 2 6656 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": false
        },
        {
            "id": 162,
            "szeaz": "104836",
            "code": "104836",
            "name": "Tapolca 1 6654 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": false
        },
        {
            "id": 163,
            "szeaz": "104838",
            "code": "104838",
            "name": "Kisbér 6652 mobil posta",
            "zipcode": "2870",
            "settlement": "Kisbér",
            "address": "Széchenyi utca 4.",
            "active": true
        },
        {
            "id": 164,
            "szeaz": "104839",
            "code": "104839",
            "name": "Balatonfüred 2 6653 mobil posta",
            "zipcode": "8230",
            "settlement": "Balatonfüred",
            "address": "Ady Endre utca 1.",
            "active": false
        },
        {
            "id": 165,
            "szeaz": "104840",
            "code": "104840",
            "name": "Balatonfüred 2 6654 mobil posta",
            "zipcode": "8230",
            "settlement": "Balatonfüred",
            "address": "Ady Endre utca 1.",
            "active": true
        },
        {
            "id": 166,
            "szeaz": "104841",
            "code": "104841",
            "name": "Pápa 1 6654 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": false
        },
        {
            "id": 167,
            "szeaz": "104843",
            "code": "104843",
            "name": "Aszód 6651 mobil posta",
            "zipcode": "2170",
            "settlement": "Aszód",
            "address": "Kossuth Lajos utca 37.",
            "active": false
        },
        {
            "id": 168,
            "szeaz": "104844",
            "code": "104844",
            "name": "Devecser 6658 mobil posta",
            "zipcode": "8460",
            "settlement": "Devecser",
            "address": "Miskei út 10.",
            "active": false
        },
        {
            "id": 169,
            "szeaz": "104845",
            "code": "104845",
            "name": "Szob 6651 mobil posta",
            "zipcode": "2628",
            "settlement": "Szob",
            "address": "Árpád út 4.",
            "active": true
        },
        {
            "id": 170,
            "szeaz": "104846",
            "code": "104846",
            "name": "Szob 6652 mobil posta",
            "zipcode": "2628",
            "settlement": "Szob",
            "address": "Árpád út 4.",
            "active": false
        },
        {
            "id": 171,
            "szeaz": "104847",
            "code": "104847",
            "name": "Tapolca 1 6656 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": false
        },
        {
            "id": 172,
            "szeaz": "104849",
            "code": "104849",
            "name": "Füzesabony 6651 mobil posta",
            "zipcode": "3390",
            "settlement": "Füzesabony",
            "address": "Rákóczi út 56.",
            "active": false
        },
        {
            "id": 173,
            "szeaz": "104850",
            "code": "104850",
            "name": "Gyöngyös 6651 mobil posta",
            "zipcode": "3200",
            "settlement": "Gyöngyös",
            "address": "Páter Kis Szaléz út 9-11.",
            "active": false
        },
        {
            "id": 174,
            "szeaz": "104851",
            "code": "104851",
            "name": "Jánoshalma 6651 mobil posta",
            "zipcode": "6440",
            "settlement": "Jánoshalma",
            "address": "Arany János utca 1.",
            "active": true
        },
        {
            "id": 175,
            "szeaz": "104852",
            "code": "104852",
            "name": "Miskolc 1. 6652-6653 mobil posta",
            "zipcode": "3525",
            "settlement": "Miskolc",
            "address": "Kazinczy út 16.",
            "active": true
        },
        {
            "id": 176,
            "szeaz": "104853",
            "code": "104853",
            "name": "Putnok 6652 mobil posta",
            "zipcode": "3630",
            "settlement": "Putnok",
            "address": "Mátyás király tér 13.",
            "active": false
        },
        {
            "id": 177,
            "szeaz": "104854",
            "code": "104854",
            "name": "Szeghalom 6651 mobil posta",
            "zipcode": "5520",
            "settlement": "Szeghalom",
            "address": "Nagy Miklós utca 2/1.",
            "active": false
        },
        {
            "id": 178,
            "szeaz": "104855",
            "code": "104855",
            "name": "Székesfehérvár 6651 mobil posta",
            "zipcode": "8000",
            "settlement": "Székesfehérvár",
            "address": "Kaszap István utca 3.",
            "active": true
        },
        {
            "id": 179,
            "szeaz": "104856",
            "code": "104856",
            "name": "Szerencs 6651 mobil posta",
            "zipcode": "3900",
            "settlement": "Szerencs",
            "address": "Rákóczi út 62-66.",
            "active": false
        },
        {
            "id": 180,
            "szeaz": "104857",
            "code": "104857",
            "name": "Székesfehérvár 6652 mobil posta",
            "zipcode": "8000",
            "settlement": "Székesfehérvár",
            "address": "Kaszap István utca 3.",
            "active": false
        },
        {
            "id": 181,
            "szeaz": "104858",
            "code": "104858",
            "name": "Kisbér 6651 mobil posta",
            "zipcode": "2870",
            "settlement": "Kisbér",
            "address": "Széchenyi utca 4.",
            "active": true
        },
        {
            "id": 182,
            "szeaz": "104859",
            "code": "104859",
            "name": "Tatabánya 6651 mobil posta",
            "zipcode": "2800",
            "settlement": "Tatabánya",
            "address": "Fő tér 30.",
            "active": false
        },
        {
            "id": 183,
            "szeaz": "104860",
            "code": "104860",
            "name": "Tatabánya 6652 mobil posta",
            "zipcode": "2800",
            "settlement": "Tatabánya",
            "address": "Fő tér 30.",
            "active": true
        },
        {
            "id": 184,
            "szeaz": "104861",
            "code": "104861",
            "name": "Tatabánya 6653 mobil posta",
            "zipcode": "2800",
            "settlement": "Tatabánya",
            "address": "Fő tér 30.",
            "active": true
        },
        {
            "id": 185,
            "szeaz": "104862",
            "code": "104862",
            "name": "Ráckeve 6651 mobil posta",
            "zipcode": "2300",
            "settlement": "Ráckeve",
            "address": "Kossuth Lajos utca 24.",
            "active": false
        },
        {
            "id": 186,
            "szeaz": "104863",
            "code": "104863",
            "name": "Kiskunmajsa 6651 mobil posta",
            "zipcode": "6120",
            "settlement": "Kiskunmajsa",
            "address": "Félegyházi út 2/b",
            "active": true
        },
        {
            "id": 187,
            "szeaz": "104864",
            "code": "104864",
            "name": "Sarkad 6651 mobil posta",
            "zipcode": "5720",
            "settlement": "Sarkad",
            "address": "Árpád fejedelem tér 3.",
            "active": false
        },
        {
            "id": 188,
            "szeaz": "104865",
            "code": "104865",
            "name": "Siklós 6658 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": false
        },
        {
            "id": 189,
            "szeaz": "104867",
            "code": "104867",
            "name": "Bóly 6652 mobil posta",
            "zipcode": "7754",
            "settlement": "Bóly",
            "address": "Ady Endre utca 7.",
            "active": true
        },
        {
            "id": 190,
            "szeaz": "104868",
            "code": "104868",
            "name": "Lenti 6659 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": true
        },
        {
            "id": 191,
            "szeaz": "104869",
            "code": "104869",
            "name": "Lenti 6657 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": false
        },
        {
            "id": 192,
            "szeaz": "104870",
            "code": "104870",
            "name": "Nagykanizsa 6656 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": false
        },
        {
            "id": 193,
            "szeaz": "104871",
            "code": "104871",
            "name": "Zalaegerszeg 6657 6658 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": true
        },
        {
            "id": 194,
            "szeaz": "104872",
            "code": "104872",
            "name": "Zalaegerszeg 6659 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": false
        },
        {
            "id": 195,
            "szeaz": "104873",
            "code": "104873",
            "name": "Csorna 6653 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": false
        },
        {
            "id": 196,
            "szeaz": "104874",
            "code": "104874",
            "name": "Sopron 1 6652 mobil posta",
            "zipcode": "9400",
            "settlement": "Sopron",
            "address": "Széchenyi tér 7-10.",
            "active": false
        },
        {
            "id": 197,
            "szeaz": "104875",
            "code": "104875",
            "name": "Körmend 6659 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 198,
            "szeaz": "104876",
            "code": "104876",
            "name": "Őriszentpéter 6653 mobil posta",
            "zipcode": "9941",
            "settlement": "Őriszentpéter",
            "address": "Városszer utca 106.",
            "active": true
        },
        {
            "id": 199,
            "szeaz": "104877",
            "code": "104877",
            "name": "Őriszentpéter 6654 mobil posta",
            "zipcode": "9941",
            "settlement": "Őriszentpéter",
            "address": "Városszer utca 106.",
            "active": true
        },
        {
            "id": 200,
            "szeaz": "104878",
            "code": "104878",
            "name": "Sárvár 1 6661 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": true
        },
        {
            "id": 201,
            "szeaz": "104879",
            "code": "104879",
            "name": "Balatonfüred 2 6655 mobil posta",
            "zipcode": "8230",
            "settlement": "Balatonfüred",
            "address": "Ady Endre utca 1.",
            "active": true
        },
        {
            "id": 202,
            "szeaz": "104880",
            "code": "104880",
            "name": "Devecser 6659 mobil posta",
            "zipcode": "8460",
            "settlement": "Devecser",
            "address": "Miskei út 10.",
            "active": false
        },
        {
            "id": 203,
            "szeaz": "104881",
            "code": "104881",
            "name": "Devecser 6660 mobil posta",
            "zipcode": "8460",
            "settlement": "Devecser",
            "address": "Miskei út 10.",
            "active": true
        },
        {
            "id": 204,
            "szeaz": "104883",
            "code": "104883",
            "name": "Pápa 1 6655 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": true
        },
        {
            "id": 205,
            "szeaz": "104884",
            "code": "104884",
            "name": "Sümeg 6655 mobil posta",
            "zipcode": "8330",
            "settlement": "Sümeg",
            "address": "Kossuth Lajos utca 1.",
            "active": false
        },
        {
            "id": 206,
            "szeaz": "104885",
            "code": "104885",
            "name": "Csorna 6654 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": true
        },
        {
            "id": 207,
            "szeaz": "104886",
            "code": "104886",
            "name": "Kapuvár 1 6657 mobil posta",
            "zipcode": "9330",
            "settlement": "Kapuvár",
            "address": "Kossuth Lajos utca 42.",
            "active": true
        },
        {
            "id": 208,
            "szeaz": "104887",
            "code": "104887",
            "name": "Kapuvár 1 6658 mobil posta",
            "zipcode": "9330",
            "settlement": "Kapuvár",
            "address": "Kossuth Lajos utca 42.",
            "active": false
        },
        {
            "id": 209,
            "szeaz": "104888",
            "code": "104888",
            "name": "Kapuvár 1 6659 mobil posta",
            "zipcode": "9330",
            "settlement": "Kapuvár",
            "address": "Kossuth Lajos utca 42.",
            "active": true
        },
        {
            "id": 210,
            "szeaz": "104889",
            "code": "104889",
            "name": "Mosonmagyaróvár 1 6651 mobil posta",
            "zipcode": "9200",
            "settlement": "Mosonmagyaróvár",
            "address": "Erkel Ferenc utca 3.",
            "active": true
        },
        {
            "id": 211,
            "szeaz": "104890",
            "code": "104890",
            "name": "Győr Kp 6652 mobil posta",
            "zipcode": "9021",
            "settlement": "Győr",
            "address": "Révai Miklós utca 1.",
            "active": false
        },
        {
            "id": 212,
            "szeaz": "104891",
            "code": "104891",
            "name": "Körmend 6660 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 213,
            "szeaz": "104892",
            "code": "104892",
            "name": "Szentgotthárd 6652 mobil posta",
            "zipcode": "9970",
            "settlement": "Szentgotthárd",
            "address": "Széll Kálmán tér 12.",
            "active": false
        },
        {
            "id": 214,
            "szeaz": "104893",
            "code": "104893",
            "name": "Szombathely 2 6657 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": true
        },
        {
            "id": 215,
            "szeaz": "104894",
            "code": "104894",
            "name": "Szombathely 2 6655 mobil posta",
            "zipcode": "9700",
            "settlement": "Szombathely",
            "address": "Vasút utca 5.",
            "active": false
        },
        {
            "id": 216,
            "szeaz": "104895",
            "code": "104895",
            "name": "Balatonfüred 2 6656 mobil posta",
            "zipcode": "8230",
            "settlement": "Balatonfüred",
            "address": "Ady Endre utca 1.",
            "active": true
        },
        {
            "id": 217,
            "szeaz": "104896",
            "code": "104896",
            "name": "Pápa 1 6656 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": false
        },
        {
            "id": 218,
            "szeaz": "104897",
            "code": "104897",
            "name": "Zalalövő 6652 mobil posta",
            "zipcode": "8999",
            "settlement": "Zalalövő",
            "address": "Kossuth Lajos utca 5.",
            "active": false
        },
        {
            "id": 219,
            "szeaz": "104898",
            "code": "104898",
            "name": "Zalalövő 6653 mobil posta",
            "zipcode": "8999",
            "settlement": "Zalalövő",
            "address": "Kossuth Lajos utca 5.",
            "active": false
        },
        {
            "id": 220,
            "szeaz": "104899",
            "code": "104899",
            "name": "Zirc 6652 mobil posta",
            "zipcode": "8420",
            "settlement": "Zirc",
            "address": "Damjanich utca 3.",
            "active": true
        },
        {
            "id": 221,
            "szeaz": "104901",
            "code": "104901",
            "name": "Zirc 6655 mobil posta",
            "zipcode": "8420",
            "settlement": "Zirc",
            "address": "Damjanich utca 3.",
            "active": true
        },
        {
            "id": 222,
            "szeaz": "104903",
            "code": "104903",
            "name": "Tamási 6651 mobil posta",
            "zipcode": "7090",
            "settlement": "Tamási",
            "address": "Kossuth tér 17.",
            "active": true
        },
        {
            "id": 223,
            "szeaz": "104905",
            "code": "104905",
            "name": "Marcali 6654 mobil posta",
            "zipcode": "8700",
            "settlement": "Marcali",
            "address": "Rákóczi utca 16.",
            "active": false
        },
        {
            "id": 224,
            "szeaz": "104906",
            "code": "104906",
            "name": "Balatonföldvár 6653-6655 mobil posta",
            "zipcode": "8623",
            "settlement": "Balatonföldvár",
            "address": "Széchenyi Imre utca 1,",
            "active": false
        },
        {
            "id": 225,
            "szeaz": "104907",
            "code": "104907",
            "name": "Kaposvár1 6658 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": false
        },
        {
            "id": 226,
            "szeaz": "104908",
            "code": "104908",
            "name": "Kaposvár1 6659 6666 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 227,
            "szeaz": "104910",
            "code": "104910",
            "name": "Szigetvár 6652 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": true
        },
        {
            "id": 228,
            "szeaz": "104911",
            "code": "104911",
            "name": "Szigetvár 6660 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": true
        },
        {
            "id": 229,
            "szeaz": "104912",
            "code": "104912",
            "name": "Szigetvár 6661 mobil posta",
            "zipcode": "7900",
            "settlement": "Szigetvár",
            "address": "József Attila utca 27-31.",
            "active": true
        },
        {
            "id": 230,
            "szeaz": "104913",
            "code": "104913",
            "name": "Zirc 6656 mobil posta",
            "zipcode": "8420",
            "settlement": "Zirc",
            "address": "Damjanich utca 3.",
            "active": true
        },
        {
            "id": 231,
            "szeaz": "104915",
            "code": "104915",
            "name": "Tab 6652 mobil posta",
            "zipcode": "8660",
            "settlement": "Tab",
            "address": "Kossuth Lajos utca 61.",
            "active": true
        },
        {
            "id": 232,
            "szeaz": "104916",
            "code": "104916",
            "name": "Mezőkovácsháza 6651 mobil posta",
            "zipcode": "5800",
            "settlement": "Mezőkovácsháza",
            "address": "Árpád utca 170.",
            "active": true
        },
        {
            "id": 233,
            "szeaz": "104917",
            "code": "104917",
            "name": "Baja 6651 mobil posta",
            "zipcode": "6500",
            "settlement": "Baja",
            "address": "Oroszlán utca 5.",
            "active": false
        },
        {
            "id": 234,
            "szeaz": "104918",
            "code": "104918",
            "name": "Pásztó 6651-6652 mobil posta",
            "zipcode": "3060",
            "settlement": "Pásztó",
            "address": "Fő út 54/3.",
            "active": true
        },
        {
            "id": 235,
            "szeaz": "104919",
            "code": "104919",
            "name": "Pásztó 6653 mobil posta",
            "zipcode": "3060",
            "settlement": "Pásztó",
            "address": "Fő út 54/3.",
            "active": false
        },
        {
            "id": 236,
            "szeaz": "104920",
            "code": "104920",
            "name": "Pásztó 6654-6655 mobil posta",
            "zipcode": "3060",
            "settlement": "Pásztó",
            "address": "Fő út 54/3.",
            "active": true
        },
        {
            "id": 237,
            "szeaz": "104921",
            "code": "104921",
            "name": "Siklós 6659 mobil posta",
            "zipcode": "7800",
            "settlement": "Siklós",
            "address": "Flórián tér 1.",
            "active": false
        },
        {
            "id": 238,
            "szeaz": "104922",
            "code": "104922",
            "name": "Pécs 6652-6653 mobil posta",
            "zipcode": "7623",
            "settlement": "Pécs",
            "address": "Indóház tér 6.",
            "active": true
        },
        {
            "id": 239,
            "szeaz": "104923",
            "code": "104923",
            "name": "Bóly 6653 mobil posta",
            "zipcode": "7754",
            "settlement": "Bóly",
            "address": "Ady Endre utca 7.",
            "active": true
        },
        {
            "id": 240,
            "szeaz": "104924",
            "code": "104924",
            "name": "Sásd 6655 mobil posta",
            "zipcode": "7370",
            "settlement": "Sásd",
            "address": "Szent Imre út 16.",
            "active": true
        },
        {
            "id": 241,
            "szeaz": "104925",
            "code": "104925",
            "name": "Pécsvárad 6651 mobil posta",
            "zipcode": "7720",
            "settlement": "Pécsvárad",
            "address": "Vasút utca 4.",
            "active": true
        },
        {
            "id": 242,
            "szeaz": "104926",
            "code": "104926",
            "name": "Pécsvárad 6653 mobil posta",
            "zipcode": "7720",
            "settlement": "Pécsvárad",
            "address": "Vasút utca 4.",
            "active": false
        },
        {
            "id": 243,
            "szeaz": "104927",
            "code": "104927",
            "name": "Pécsvárad 6654 mobil posta",
            "zipcode": "7720",
            "settlement": "Pécsvárad",
            "address": "Vasút utca 4.",
            "active": false
        },
        {
            "id": 244,
            "szeaz": "104928",
            "code": "104928",
            "name": "Pécsvárad 6656 mobil posta",
            "zipcode": "7720",
            "settlement": "Pécsvárad",
            "address": "Vasút utca 4.",
            "active": false
        },
        {
            "id": 245,
            "szeaz": "104929",
            "code": "104929",
            "name": "Pécsvárad 6657 mobil posta",
            "zipcode": "7720",
            "settlement": "Pécsvárad",
            "address": "Vasút utca 4.",
            "active": true
        },
        {
            "id": 246,
            "szeaz": "104930",
            "code": "104930",
            "name": "Komárom 6652 mobil posta",
            "zipcode": "2900",
            "settlement": "Komárom",
            "address": "Czibor Zoltán utca 3",
            "active": true
        },
        {
            "id": 247,
            "szeaz": "104932",
            "code": "104932",
            "name": "Igal 6655 mobil posta",
            "zipcode": "7275",
            "settlement": "Igal",
            "address": "Szent István utca 118.",
            "active": false
        },
        {
            "id": 248,
            "szeaz": "104933",
            "code": "104933",
            "name": "Nagyatád 6651- 6653 mobil posta",
            "zipcode": "7500",
            "settlement": "Nagyatád",
            "address": "Baross Gábor utca 3.",
            "active": false
        },
        {
            "id": 249,
            "szeaz": "104934",
            "code": "104934",
            "name": "Nagyatád 6652 mobil posta",
            "zipcode": "7500",
            "settlement": "Nagyatád",
            "address": "Baross Gábor utca 3.",
            "active": true
        },
        {
            "id": 250,
            "szeaz": "104935",
            "code": "104935",
            "name": "Kadarkút 6652 mobil posta",
            "zipcode": "7530",
            "settlement": "Kadarkút",
            "address": "Petőfi Sándor utca 21.",
            "active": true
        },
        {
            "id": 251,
            "szeaz": "104936",
            "code": "104936",
            "name": "Fonyód 1 6651- 6655 mobil posta",
            "zipcode": "8640",
            "settlement": "Fonyód",
            "address": "Ady Endre utca 3.",
            "active": false
        },
        {
            "id": 252,
            "szeaz": "104937",
            "code": "104937",
            "name": "Fonyód 1 6652 mobil posta",
            "zipcode": "8640",
            "settlement": "Fonyód",
            "address": "Ady Endre utca 3.",
            "active": false
        },
        {
            "id": 253,
            "szeaz": "104938",
            "code": "104938",
            "name": "Fonyód 1 6653-6654 mobil posta",
            "zipcode": "8640",
            "settlement": "Fonyód",
            "address": "Ady Endre utca 3.",
            "active": false
        },
        {
            "id": 254,
            "szeaz": "104939",
            "code": "104939",
            "name": "Biharkeresztes 6651 mobil posta",
            "zipcode": "4110",
            "settlement": "Biharkeresztes",
            "address": "Kossuth utca 8.",
            "active": true
        },
        {
            "id": 255,
            "szeaz": "104940",
            "code": "104940",
            "name": "Kaposvár1 6657-6664 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 256,
            "szeaz": "104941",
            "code": "104941",
            "name": "Barcs 6653  mobil posta",
            "zipcode": "7570",
            "settlement": "Barcs",
            "address": "Köztársaság utca 2/a.",
            "active": true
        },
        {
            "id": 257,
            "szeaz": "104942",
            "code": "104942",
            "name": "Makó 6651 mobil posta",
            "zipcode": "6900",
            "settlement": "Makó",
            "address": "Posta utca 7.",
            "active": true
        },
        {
            "id": 258,
            "szeaz": "104943",
            "code": "104943",
            "name": "Kisvárda 6651 mobil posta",
            "zipcode": "4600",
            "settlement": "Kisvárda",
            "address": "Somogyi Rezső utca 4.",
            "active": true
        },
        {
            "id": 259,
            "szeaz": "104944",
            "code": "104944",
            "name": "Lenti 6660 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": false
        },
        {
            "id": 260,
            "szeaz": "104945",
            "code": "104945",
            "name": "Fehérgyarmat 6652 mobil posta",
            "zipcode": "4900",
            "settlement": "Fehérgyarmat",
            "address": "Tömöttvár utca 6-8.",
            "active": true
        },
        {
            "id": 261,
            "szeaz": "104946",
            "code": "104946",
            "name": "Lenti 6661 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": false
        },
        {
            "id": 262,
            "szeaz": "104947",
            "code": "104947",
            "name": "Nagykanizsa 6657 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": false
        },
        {
            "id": 263,
            "szeaz": "104948",
            "code": "104948",
            "name": "Fehérgyarmat 6653 mobil posta",
            "zipcode": "4900",
            "settlement": "Fehérgyarmat",
            "address": "Tömöttvár utca 6-8.",
            "active": false
        },
        {
            "id": 264,
            "szeaz": "104949",
            "code": "104949",
            "name": "Nagykanizsa 6658 mobil posta",
            "zipcode": "8800",
            "settlement": "Nagykanizsa",
            "address": "Ady Endre utca 10.",
            "active": true
        },
        {
            "id": 265,
            "szeaz": "104950",
            "code": "104950",
            "name": "Zalaszentgrót 6652 mobil posta",
            "zipcode": "8790",
            "settlement": "Zalaszentgrót",
            "address": "Dózsa György utca 2.",
            "active": true
        },
        {
            "id": 266,
            "szeaz": "104951",
            "code": "104951",
            "name": "Mátészalka 6651 mobil posta",
            "zipcode": "4700",
            "settlement": "Mátészalka",
            "address": "Kálvin tér 9.",
            "active": true
        },
        {
            "id": 267,
            "szeaz": "104952",
            "code": "104952",
            "name": "Keszthely 6651 mobil posta",
            "zipcode": "8360",
            "settlement": "Keszthely",
            "address": "Kossuth Lajos utca 48.",
            "active": true
        },
        {
            "id": 268,
            "szeaz": "104953",
            "code": "104953",
            "name": "Keszthely 6653-6654 mobil posta",
            "zipcode": "8360",
            "settlement": "Keszthely",
            "address": "Kossuth Lajos utca 48.",
            "active": false
        },
        {
            "id": 269,
            "szeaz": "104954",
            "code": "104954",
            "name": "Csorna 6655 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": false
        },
        {
            "id": 270,
            "szeaz": "104955",
            "code": "104955",
            "name": "Csorna 6656 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": false
        },
        {
            "id": 271,
            "szeaz": "104956",
            "code": "104956",
            "name": "Miskolc 1. 6651 mobil posta",
            "zipcode": "3525",
            "settlement": "Miskolc",
            "address": "Kazinczy út 16.",
            "active": true
        },
        {
            "id": 272,
            "szeaz": "104957",
            "code": "104957",
            "name": "Csorna 6657 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": true
        },
        {
            "id": 273,
            "szeaz": "104958",
            "code": "104958",
            "name": "Győr Kp 6653 mobil posta",
            "zipcode": "9021",
            "settlement": "Győr",
            "address": "Révai Miklós utca 1.",
            "active": false
        },
        {
            "id": 274,
            "szeaz": "104959",
            "code": "104959",
            "name": "Körmend 6661 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": false
        },
        {
            "id": 275,
            "szeaz": "104960",
            "code": "104960",
            "name": "Sátoraljaújhely 6655 mobil posta",
            "zipcode": "3980",
            "settlement": "Sátoraljaújhely",
            "address": "Kazinczy út 10.",
            "active": true
        },
        {
            "id": 276,
            "szeaz": "104961",
            "code": "104961",
            "name": "Körmend 6662 mobil posta",
            "zipcode": "9900",
            "settlement": "Körmend",
            "address": "Dr Batthyány S. László utca 2.",
            "active": true
        },
        {
            "id": 277,
            "szeaz": "104962",
            "code": "104962",
            "name": "Vasvár 6658 mobil posta",
            "zipcode": "9800",
            "settlement": "Vasvár",
            "address": "Járdányi utca 4.",
            "active": false
        },
        {
            "id": 278,
            "szeaz": "104963",
            "code": "104963",
            "name": "Pápa 1 6653 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": false
        },
        {
            "id": 279,
            "szeaz": "104964",
            "code": "104964",
            "name": "Salgótarján 6651 mobil posta",
            "zipcode": "3100",
            "settlement": "Salgótarján",
            "address": "Fő tér 3.",
            "active": true
        },
        {
            "id": 280,
            "szeaz": "104965",
            "code": "104965",
            "name": "Tab 6654 mobil posta",
            "zipcode": "8660",
            "settlement": "Tab",
            "address": "Kossuth Lajos utca 61.",
            "active": true
        },
        {
            "id": 281,
            "szeaz": "104966",
            "code": "104966",
            "name": "Dombóvár 6652 mobil posta",
            "zipcode": "7200",
            "settlement": "Dombóvár",
            "address": "Szabadság utca 25.",
            "active": false
        },
        {
            "id": 282,
            "szeaz": "104967",
            "code": "104967",
            "name": "Dombóvár 6654 mobil posta",
            "zipcode": "7200",
            "settlement": "Dombóvár",
            "address": "Szabadság utca 25.",
            "active": true
        },
        {
            "id": 283,
            "szeaz": "104968",
            "code": "104968",
            "name": "Kaposvár1 6661 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 284,
            "szeaz": "104969",
            "code": "104969",
            "name": "Kaposvár1 6662-6663 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": true
        },
        {
            "id": 285,
            "szeaz": "104970",
            "code": "104970",
            "name": "Marcali 6655 mobil posta",
            "zipcode": "8700",
            "settlement": "Marcali",
            "address": "Rákóczi utca 16.",
            "active": false
        },
        {
            "id": 286,
            "szeaz": "104972",
            "code": "104972",
            "name": "Csurgó 6653 mobil posta",
            "zipcode": "8840",
            "settlement": "Csurgó",
            "address": "Petőfi tér 29.",
            "active": true
        },
        {
            "id": 287,
            "szeaz": "104973",
            "code": "104973",
            "name": "Bonyhád 6652 mobil posta",
            "zipcode": "7150",
            "settlement": "Bonyhád",
            "address": "Szabadság tér 17.",
            "active": false
        },
        {
            "id": 288,
            "szeaz": "104974",
            "code": "104974",
            "name": "Bonyhád 6653 mobil posta",
            "zipcode": "7150",
            "settlement": "Bonyhád",
            "address": "Szabadság tér 17.",
            "active": false
        },
        {
            "id": 289,
            "szeaz": "104975",
            "code": "104975",
            "name": "Bonyhád 6654 mobil posta",
            "zipcode": "7150",
            "settlement": "Bonyhád",
            "address": "Szabadság tér 17.",
            "active": true
        },
        {
            "id": 290,
            "szeaz": "104976",
            "code": "104976",
            "name": "Bonyhád 6655 mobil posta",
            "zipcode": "7150",
            "settlement": "Bonyhád",
            "address": "Szabadság tér 17.",
            "active": true
        },
        {
            "id": 291,
            "szeaz": "104977",
            "code": "104977",
            "name": "Tamási 6652-6653 mobil posta",
            "zipcode": "7090",
            "settlement": "Tamási",
            "address": "Kossuth tér 17.",
            "active": false
        },
        {
            "id": 292,
            "szeaz": "104978",
            "code": "104978",
            "name": "Szentes 6651 mobil posta",
            "zipcode": "6600",
            "settlement": "Szentes",
            "address": "Kossuth utca 3.",
            "active": false
        },
        {
            "id": 293,
            "szeaz": "104979",
            "code": "104979",
            "name": "Makó 6652, 6654 mobil posta",
            "zipcode": "6900",
            "settlement": "Makó",
            "address": "Posta utca 7.",
            "active": true
        },
        {
            "id": 294,
            "szeaz": "104980",
            "code": "104980",
            "name": "Kalocsa 6651 mobil posta",
            "zipcode": "6300",
            "settlement": "Kalocsa",
            "address": "Szent István király út 44.",
            "active": false
        },
        {
            "id": 295,
            "szeaz": "104981",
            "code": "104981",
            "name": "Encs 6677 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 296,
            "szeaz": "104982",
            "code": "104982",
            "name": "Mezőkövesd 6651-6654 mobil posta",
            "zipcode": "3400",
            "settlement": "Mezőkövesd",
            "address": "Alkotmány utca 1.",
            "active": true
        },
        {
            "id": 297,
            "szeaz": "104983",
            "code": "104983",
            "name": "Mezőkövesd 6652 mobil posta",
            "zipcode": "3400",
            "settlement": "Mezőkövesd",
            "address": "Alkotmány utca 1.",
            "active": false
        },
        {
            "id": 298,
            "szeaz": "104984",
            "code": "104984",
            "name": "Mezőkövesd 6653 mobil posta",
            "zipcode": "3400",
            "settlement": "Mezőkövesd",
            "address": "Alkotmány utca 1.",
            "active": true
        },
        {
            "id": 299,
            "szeaz": "104985",
            "code": "104985",
            "name": "Ózd 6651 mobil posta",
            "zipcode": "3600",
            "settlement": "Ózd",
            "address": "Munkás utca 14.",
            "active": false
        },
        {
            "id": 300,
            "szeaz": "104986",
            "code": "104986",
            "name": "Tiszaújváros 6652 mobil posta",
            "zipcode": "3580",
            "settlement": "Tiszaújváros",
            "address": "Bethlen Gábor út 9.",
            "active": true
        },
        {
            "id": 301,
            "szeaz": "104987",
            "code": "104987",
            "name": "Sárospatak 6651 mobil posta",
            "zipcode": "3950",
            "settlement": "Sárospatak",
            "address": "Rákóczi út 47.",
            "active": false
        },
        {
            "id": 302,
            "szeaz": "104988",
            "code": "104988",
            "name": "Szerencs 6652 mobil posta",
            "zipcode": "3900",
            "settlement": "Szerencs",
            "address": "Rákóczi út 62-66.",
            "active": true
        },
        {
            "id": 303,
            "szeaz": "104989",
            "code": "104989",
            "name": "Bélapátfalva 6651 mobil posta",
            "zipcode": "3346",
            "settlement": "Bélapátfalva",
            "address": "IV. Béla út 37-39.",
            "active": true
        },
        {
            "id": 304,
            "szeaz": "104990",
            "code": "104990",
            "name": "Eger 6651 mobil posta",
            "zipcode": "3300",
            "settlement": "Eger",
            "address": "Széchenyi út 22.",
            "active": false
        },
        {
            "id": 305,
            "szeaz": "104993",
            "code": "104993",
            "name": "Balassagyarmat 6658 mobil posta",
            "zipcode": "2660",
            "settlement": "Balassagyarmat",
            "address": "Rákóczi Fejedelem út 24.",
            "active": false
        },
        {
            "id": 306,
            "szeaz": "104994",
            "code": "104994",
            "name": "Szécsény 6651 mobil posta",
            "zipcode": "3170",
            "settlement": "Szécsény",
            "address": "Dugonics út 1.",
            "active": false
        },
        {
            "id": 307,
            "szeaz": "104996",
            "code": "104996",
            "name": "Tiszaföldvár 6651 mobil posta",
            "zipcode": "5430",
            "settlement": "Tiszaföldvár",
            "address": "Kossuth Lajos út 167.",
            "active": true
        },
        {
            "id": 308,
            "szeaz": "104997",
            "code": "104997",
            "name": "Vásárosnamény 6651, 6652 mobil posta",
            "zipcode": "4800",
            "settlement": "Vásárosnamény",
            "address": "Szabadság tér 35.",
            "active": false
        },
        {
            "id": 309,
            "szeaz": "104998",
            "code": "104998",
            "name": "Vásárosnamény 6653 mobil posta",
            "zipcode": "4800",
            "settlement": "Vásárosnamény",
            "address": "Szabadság tér 35.",
            "active": false
        },
        {
            "id": 310,
            "szeaz": "104999",
            "code": "104999",
            "name": "Rakamaz 6651 mobil posta",
            "zipcode": "4465",
            "settlement": "Rakamaz",
            "address": "Szent István út 11.",
            "active": true
        },
        {
            "id": 311,
            "szeaz": "105000",
            "code": "105000",
            "name": "Nyírbátor 6651 mobil posta",
            "zipcode": "4300",
            "settlement": "Nyírbátor",
            "address": "Szabadság tér 3.",
            "active": true
        },
        {
            "id": 312,
            "szeaz": "105001",
            "code": "105001",
            "name": "Fehérgyarmat 6651 mobil posta",
            "zipcode": "4900",
            "settlement": "Fehérgyarmat",
            "address": "Tömöttvár utca 6-8.",
            "active": true
        },
        {
            "id": 313,
            "szeaz": "105002",
            "code": "105002",
            "name": "Fehérgyarmat 6655 mobil posta",
            "zipcode": "4900",
            "settlement": "Fehérgyarmat",
            "address": "Tömöttvár utca 6-8.",
            "active": true
        },
        {
            "id": 314,
            "szeaz": "105003",
            "code": "105003",
            "name": "Fehérgyarmat 6654 mobil posta",
            "zipcode": "4900",
            "settlement": "Fehérgyarmat",
            "address": "Tömöttvár utca 6-8.",
            "active": false
        },
        {
            "id": 315,
            "szeaz": "105004",
            "code": "105004",
            "name": "Fehérgyarmat 6657 mobil posta",
            "zipcode": "4900",
            "settlement": "Fehérgyarmat",
            "address": "Tömöttvár utca 6-8.",
            "active": true
        },
        {
            "id": 316,
            "szeaz": "105005",
            "code": "105005",
            "name": "Csenger 6651, 6655 mobil posta",
            "zipcode": "4765",
            "settlement": "Csenger",
            "address": "Béke utca 10.",
            "active": false
        },
        {
            "id": 317,
            "szeaz": "105007",
            "code": "105007",
            "name": "Csenger 6652, 6656 mobil posta",
            "zipcode": "4765",
            "settlement": "Csenger",
            "address": "Béke utca 10.",
            "active": true
        },
        {
            "id": 318,
            "szeaz": "105008",
            "code": "105008",
            "name": "Csenger 6653, 6654 mobil posta",
            "zipcode": "4765",
            "settlement": "Csenger",
            "address": "Béke utca 10.",
            "active": false
        },
        {
            "id": 319,
            "szeaz": "105009",
            "code": "105009",
            "name": "Nyíregyháza 1 6651 mobil posta",
            "zipcode": "4400",
            "settlement": "Nyíregyháza",
            "address": "Bethlen Gábor utca 4.",
            "active": false
        },
        {
            "id": 320,
            "szeaz": "105010",
            "code": "105010",
            "name": "Zalalövő 6654 mobil posta",
            "zipcode": "8999",
            "settlement": "Zalalövő",
            "address": "Kossuth Lajos utca 5.",
            "active": true
        },
        {
            "id": 321,
            "szeaz": "105011",
            "code": "105011",
            "name": "Lenti 6662 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": true
        },
        {
            "id": 322,
            "szeaz": "105012",
            "code": "105012",
            "name": "Csorna 6658 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": true
        },
        {
            "id": 323,
            "szeaz": "105013",
            "code": "105013",
            "name": "Csorna 6659 mobil posta",
            "zipcode": "9300",
            "settlement": "Csorna",
            "address": "Erzsébet királyné út 31.",
            "active": false
        },
        {
            "id": 324,
            "szeaz": "105014",
            "code": "105014",
            "name": "Győr Kp 6654 mobil posta",
            "zipcode": "9021",
            "settlement": "Győr",
            "address": "Révai Miklós utca 1.",
            "active": false
        },
        {
            "id": 325,
            "szeaz": "105016",
            "code": "105016",
            "name": "Sárvár 1 6662 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": false
        },
        {
            "id": 326,
            "szeaz": "105017",
            "code": "105017",
            "name": "Sárvár 1 6663 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": true
        },
        {
            "id": 327,
            "szeaz": "105018",
            "code": "105018",
            "name": "Pápa 1 6658 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": false
        },
        {
            "id": 328,
            "szeaz": "105027",
            "code": "105027",
            "name": "Kaposvár1 6660 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": false
        },
        {
            "id": 329,
            "szeaz": "105028",
            "code": "105028",
            "name": "Tab 6656 mobil posta",
            "zipcode": "8660",
            "settlement": "Tab",
            "address": "Kossuth Lajos utca 61.",
            "active": true
        },
        {
            "id": 330,
            "szeaz": "105031",
            "code": "105031",
            "name": "Kalocsa 6652 mobil posta",
            "zipcode": "6300",
            "settlement": "Kalocsa",
            "address": "Szent István király út 44.",
            "active": true
        },
        {
            "id": 331,
            "szeaz": "105039",
            "code": "105039",
            "name": "Tiszaföldvár 6652 mobil posta",
            "zipcode": "5430",
            "settlement": "Tiszaföldvár",
            "address": "Kossuth Lajos út 167.",
            "active": false
        },
        {
            "id": 332,
            "szeaz": "105052",
            "code": "105052",
            "name": "Ajka 1 6653 mobil posta",
            "zipcode": "8400",
            "settlement": "Ajka",
            "address": "Szabadság tér 7.",
            "active": false
        },
        {
            "id": 333,
            "szeaz": "105056",
            "code": "105056",
            "name": "Dombóvár 6655 mobil posta",
            "zipcode": "7200",
            "settlement": "Dombóvár",
            "address": "Szabadság utca 25.",
            "active": false
        },
        {
            "id": 334,
            "szeaz": "105060",
            "code": "105060",
            "name": "Makó 6655 mobil posta",
            "zipcode": "6900",
            "settlement": "Makó",
            "address": "Posta utca 7.",
            "active": true
        },
        {
            "id": 335,
            "szeaz": "105110",
            "code": "105110",
            "name": "Celldömölk 6653 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": true
        },
        {
            "id": 336,
            "szeaz": "105113",
            "code": "105113",
            "name": "Celldömölk 6657 mobil posta",
            "zipcode": "9500",
            "settlement": "Celldömölk",
            "address": "Szabadság tér 2.",
            "active": false
        },
        {
            "id": 337,
            "szeaz": "105114",
            "code": "105114",
            "name": "Lenti 6655 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": true
        },
        {
            "id": 338,
            "szeaz": "105115",
            "code": "105115",
            "name": "Tapolca 1 6655 mobil posta",
            "zipcode": "8300",
            "settlement": "Tapolca",
            "address": "Deák Ferenc utca 19.",
            "active": false
        },
        {
            "id": 339,
            "szeaz": "105116",
            "code": "105116",
            "name": "Pápa 1 6657 mobil posta",
            "zipcode": "8500",
            "settlement": "Pápa",
            "address": "Kossuth Lajos utca 27.",
            "active": true
        },
        {
            "id": 340,
            "szeaz": "105117",
            "code": "105117",
            "name": "Zalaegerszeg 6652 mobil posta",
            "zipcode": "8900",
            "settlement": "Zalaegerszeg",
            "address": "Kaszaházi utca 3.",
            "active": true
        },
        {
            "id": 341,
            "szeaz": "105118",
            "code": "105118",
            "name": "Igal 6654 mobil posta",
            "zipcode": "7275",
            "settlement": "Igal",
            "address": "Szent István utca 118.",
            "active": true
        },
        {
            "id": 342,
            "szeaz": "105154",
            "code": "105154",
            "name": "Pétervására 6656 mobil posta",
            "zipcode": "3250",
            "settlement": "Pétervására",
            "address": "Kossuth út 43.",
            "active": true
        },
        {
            "id": 343,
            "szeaz": "105236",
            "code": "105236",
            "name": "Kaposvár 1 6665 Mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": false
        },
        {
            "id": 344,
            "szeaz": "105301",
            "code": "105301",
            "name": "Vasvár 6656 mobil posta",
            "zipcode": "9800",
            "settlement": "Vasvár",
            "address": "Járdányi utca 4.",
            "active": true
        },
        {
            "id": 345,
            "szeaz": "105612",
            "code": "105612",
            "name": "Lenti 6664 mobil posta",
            "zipcode": "8960",
            "settlement": "Lenti",
            "address": "Zrinyi utca 1.",
            "active": false
        },
        {
            "id": 346,
            "szeaz": "105861",
            "code": "105861",
            "name": "Encs 6678 mobil posta",
            "zipcode": "3860",
            "settlement": "Encs",
            "address": "Petőfi út 51.",
            "active": false
        },
        {
            "id": 347,
            "szeaz": "106416",
            "code": "106416",
            "name": "Sárvár 1 6654 mobil posta",
            "zipcode": "9600",
            "settlement": "Sárvár",
            "address": "Várkerület (nincs) 32.",
            "active": false
        },
        {
            "id": 348,
            "szeaz": "106432",
            "code": "106432",
            "name": "Kőszeg 1 6654 mobilposta",
            "zipcode": "9730",
            "settlement": "Kőszeg",
            "address": "Várkör (nincs) 65.",
            "active": true
        },
        {
            "id": 349,
            "szeaz": "106523",
            "code": "106523",
            "name": "Biharkeresztes 6652 mobil posta",
            "zipcode": "4110",
            "settlement": "Biharkeresztes",
            "address": "Kossuth utca 8.",
            "active": false
        },
        {
            "id": 350,
            "szeaz": "106709",
            "code": "106709",
            "name": "Kaposvár 1 6667 mobil posta",
            "zipcode": "7400",
            "settlement": "Kaposvár",
            "address": "Bajcsy-Zsilinszky utca 15.",
            "active": false
        },
        {
            "id": 351,
            "szeaz": "106714",
            "code": "106714",
            "name": "Komló 1 6651-52 mobilposta",
            "zipcode": null,
            "settlement": null,
            "address": null,
            "active": false
        },
        {
            "id": 352,
            "szeaz": "106949",
            "code": "106949",
            "name": "Marcali 6651 mobilposta",
            "zipcode": null,
            "settlement": null,
            "address": null,
            "active": false
        },
        {
            "id": 353,
            "szeaz": "106950",
            "code": "106950",
            "name": "Marcali 6653 mobilposta",
            "zipcode": null,
            "settlement": null,
            "address": null,
            "active": true
        },
        {
            "id": 354,
            "szeaz": "106951",
            "code": "106951",
            "name": "Marcali 6656 mobilposta",
            "zipcode": null,
            "settlement": null,
            "address": null,
            "active": true
        }
    ]

    private userRoles: IDetailedUserRole[] = [
        {id: 1, code: 'OECM_SZEREP_1', name: 'OECM szerep 1', status: true, inheritable: true, dataownerid: 1, dataowner:this.owners.get(1), kioszthato: false, groupid: 2, group: this.groups.get(1), typeid: 1}
    ]
    

    public geAlltData(): ITestData[] {
        return this.data
    }

    public fetchAllData(): Promise<ITestData[]> {
        const data = this.data
        return new Promise(resolve => {
            setTimeout(() => resolve(data), 1000)
        })
    }

    public getRow(id: number): ITestData | null {
        return this.data.find(x => x.id == id) ?? null
    }

    public add(data: ITestData): void {
        data.id = this.data[this.data.length - 1].id
        this.data.push(data)
    }

    public edit(id: number, data: ITestData): void {
        this.data = this.data.map(row => row.id == id ? data : row)
    }

    public delete(id: number): void {
        this.data = this.data.filter(x => x.id != id)
    }

    public fetchRoles(): Promise<IDetailedUserRole[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.userRoles), 1500)
        })
    }

    public addRole(data: IUserRole): void {
        this.userRoles.push({...data, dataowner: this.owners.get(data.dataownerid), group: this.groups.get(data.groupid)})
    }

    public deleteUserRole(id: number): void {
        this.userRoles = this.userRoles.filter(ur => ur.id != id)
    }
}
