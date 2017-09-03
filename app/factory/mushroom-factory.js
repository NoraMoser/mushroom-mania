'use strict';

console.log("is this working?");

app.factory("MushroomDirectory", function($q, $http){
    let getMushrooms = () => {
        console.log("getMushrooms", getMushrooms);
        return $q ((resolve, reject)=>{
            $http.get('https://mushroom-mania-a35e8.firebaseio.com/mushrooms.json')           
             .then((itemObject) =>{
                
                let itemCollection = itemObject.data;
                console.log("itemCollection", itemCollection);
                resolve(itemCollection);
                // console.log("mushroomsInArray", mushroomsInArray);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    console.log(getMushrooms);
    return {getMushrooms};
});