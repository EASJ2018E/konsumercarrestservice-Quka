import axios, {AxiosResponse, AxiosError} from "../../node_modules/axios/index";

interface ICar {
    model: string;
    vendor: string;
    price: number;
}


function getHttp(): void {
    
    let data: ICar[];
    axios.get <ICar[]> ('http://rest-pele-easj-dk.azurewebsites.net/api/Cars')
    .then(function (response: AxiosResponse<ICar[]>): void {
        data = response.data;
        
        updateHtml(data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function updateHtml(data: ICar[]): void {
    let output = document.getElementById("output");

    data.forEach((car: ICar) => {
        let res = "<div class='car'>";

            res += "<h2>" + car.vendor + "</h2>";
            res += "<h3>" + car.model + "</h3>";
            res += "<span>" + car.price + "</span>";

        res += "</div>";
        
        output.innerHTML += res;
    });
}

document.getElementById("getHttpBtn").addEventListener("click", getHttp);

// http://rest-pele-easj-dk.azurewebsites.net/api/Cars