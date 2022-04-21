import {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () =>{
    const [results, setResults]  = useState([]);
    const [errorMessage, setErrorMessage]  = useState("");

    const searchApi = async (searchTerm)=>{
  
        try{
          const {data} = await yelp.get('/search', {
            params: {
                term: searchTerm,
                location: "san jose ",
                limit: 20
            }
            
        });
        setResults(data.businesses);
        }catch (e){
          console.log(e)
          setErrorMessage(`Something went wrong! ${e.message}`);
        }

      }

      useEffect(()=>{
        searchApi('pasta');
      }, [ ]);

      return [results, errorMessage, searchApi]
}