import axios, {AxiosResponse, AxiosError} from "../../node_modules/axios/index";

interface ICar {
    model: string;
    vendor: string;
    price: number;
}

axios.get('http://rest-pele-easj-dk.azurewebsites.net/api/Cars')
.then(function (response) {
    let data = console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});   


// http://rest-pele-easj-dk.azurewebsites.net/api/Cars