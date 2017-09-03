'use strict';

console.log("is this working?");

app.factory("MushroomDirectory", function($q, $http){
    let getMushrooms = () => {
        console.log("getMushrooms", getMushrooms);
        let mushroomsInArray = [];
        return $q ((resolve, reject)=>{
            $http.get('https://mushroom-mania-a35e8.firebaseio.com/mushrooms.json')           
             .then((itemObject) =>{
                
                let itemCollection = itemObject.data;
                console.log("itemCollection", itemCollection);
                Object.keys(itemCollection).forEach((key) => {
                    mushroomsInArray.push(itemCollection[key]);
                });
                console.log ("mushroomsInArray", mushroomsInArray);
                resolve(mushroomsInArray);
                })
                // resolve(itemCollection);
                // console.log("mushroomsInArray", mushroomsInArray);
            
            .catch((error)=>{
                reject(error);
            });
        });
    };
    // console.log(getMushrooms);
    return {getMushrooms};
});