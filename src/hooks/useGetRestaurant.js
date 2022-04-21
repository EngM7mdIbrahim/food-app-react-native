import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default (id) =>{
    const [restaurant, setRestaurant] = useState(null);
    const getRestaurant = async (id) =>{
        try{
            const response = await yelp.get(`/${id}`);
            response.data.photos =  response.data.photos.map(value => {
                return {
                  url: value
                }
              });
            console.log(response.data.photos);
            setRestaurant(response.data);
        }catch(e){
            console.log(e.message);
        }
        
    }
    useEffect(()=>{
        getRestaurant(id);
    },[])
    return [restaurant,getRestaurant];
};