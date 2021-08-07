import { useState, useEffect } from 'react';
import Card from '../components/card/card';
import Header from '../components/Header/header';
import moment from 'moment';

export default function PropertyList() {
  const [data, updateProperty] = useState([]);
  const title = 'Property Listings';

  useEffect(() => {
    // Fetching Data from Cache
    let cache = localStorage.getItem('cacheStorage');
    let data = JSON.parse(cache);

    fetch('https://api.simplyrets.com/properties', {
      method: 'get',
      headers: new Headers({
        Authorization: 'Basic ' + btoa('simplyrets:simplyrets'),
        'Content-Type': 'application/json',
      }),
    })
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (responseData) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        let newData = [],
          temp = [];
        responseData.forEach((d, i) => {
          newData.push({
            id: i,
            mlsId: d.mlsId,
            bedroom: d.property.bedrooms,
            baths: d.property.bathsFull + d.property.bathsHalf / 2,
            area: d.property.area,
            listPrice: (Math.round(d.listPrice * 100) / 100).toLocaleString(),
            address:
              d.address.unit +
              ' ' +
              d.address.crossStreet +
              ', ' +
              d.address.city +
              ', ' +
              d.address.state,
            listDate: moment(d.listDate).format('MM/DD/YYYY'),
            photo: d.photos[0],
            favorite: false,
          });
        });

        // Filter Cache Data from SimplyRETS API Data
        if (data !== null) {
          temp = newData.filter((el) => {
            return !data.some((f) => {
              return f['id'] === el['id'];
            });
          });
        }
        // Combine the cache and sort the data based on last favorited property
        let sortedElement = temp.concat(data).sort(function (a, b) {
          return a.id - b.id;
        });
        updateProperty(data !== null ? sortedElement : newData);
      });
  }, []);

  const handleClick = (element) => {
    let obj = data.map((a) => {
      let returnValue = { ...a };

      if (a.id === element.id) {
        returnValue.favorite = !returnValue.favorite;
      }
      return returnValue;
    });

    let favorites = obj.filter((data) => data.favorite);
    localStorage.setItem('cacheStorage', JSON.stringify(favorites));
    updateProperty(obj);
  };

  return (
    <>
      <Header title={title} />
      <div className="card-alignment">
        <Card updateEstate={data} parentCallback={handleClick} />
      </div>
    </>
  );
}
