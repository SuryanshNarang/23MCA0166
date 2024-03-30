import React from 'react'
import { useEffect, useState } from 'react'
import "./Company.css";
const AMZ = () => {   
    const [posts, setPosts] = useState([]);
    var url = " http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000";
    var bearer_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk1MDE1LCJpYXQiOjE3MTE3OTQ3MTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM2MzZiNmVkLTdkMDAtNDdmOS05ZTUwLWM3MDc4MmMzMzRlZCIsInN1YiI6InN1cnlhbnNoLm5hcmFuZzIwMjNAdml0c3R1ZGVudC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiYzYzNmI2ZWQtN2QwMC00N2Y5LTllNTAtYzcwNzgyYzMzNGVkIiwiY2xpZW50U2VjcmV0IjoiT2NrZVdHcUJocldZbkJ3UCIsIm93bmVyTmFtZSI6IlN1cnlhbnNoIE5hcmFuZyIsIm93bmVyRW1haWwiOiJzdXJ5YW5zaC5uYXJhbmcyMDIzQHZpdHN0dWRlbnQuYWMuaW4iLCJyb2xsTm8iOiIyM01DQTAxNjYifQ.V-6XVJKLsqPeWrH8TWpwSXDHbt7hSFx9AkKZ5ZZB2ok'
    var bearer =  bearer_token;
    fetch(url, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer_token,
                'X-FP-API-KEY': 'Laptop', 
               
            }
        }).then(responseJson => {
            var items = JSON.parse(responseJson._bodyInit);
        }).catch((err)=>"An error occured");
       

    return (
        <div className='container'>

        </div>
    )
}

export default AMZ
