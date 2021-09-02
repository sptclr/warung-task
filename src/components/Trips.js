import React, {useState, useEffect} from 'react';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import axios from 'axios';


function Trips() {
    const [result, setResult] = useState([]);
    const [hasLoading, setHasLoading] = useState(true);

    const TRIPS_QUERY=`
      query AllTripsQuery {
        trips {
          id
          data {
            title
            thumbnail {
              file_name
              id
              url
            }
          }
        }
      } 
    `
  useEffect( () =>{

    axios({
      url    : `${process.env.URL}`,
      method : 'post',
      headers: {  Authorization: `Bearer ${process.env.TOKEN}` },
      data   : { query: TRIPS_QUERY }
    }).then((result) => {
      const trips = result.data.data.trips;
      if(Array.isArray(trips) && trips.length > 0 ){
        setResult(trips)
        setHasLoading(false)
      } else {
        setHasLoading(true);
      }
    });
  }, [hasLoading, TRIPS_QUERY]);


  if(hasLoading) return <p className="has-text-centered my-6 is-size-3">Loading...</p>

  return (
    <section className="trip container">
      <h2 className="title is-capitalized line-50 is-inline-block">
        Get Inspired for your next trip
      </h2>
      <div className="columns is-flex-wrap-wrap is-justify-content-center is-align-items-center">
        {/* {
          result.map( (val, idx) => {
            console.log(val.data.thumbnail.url);
            return (
              <div className={`column relative p-1 ${idx <= 2 ? "is-half" : "is-one-third"}`}>
                <StaticImage src={val.data.thumbnail.url} alt={val.data.thumbnail.file_name} />
                <p className="title is-size-1 absolute bottom-left has-text-white is-capitalized">
                  {val.data.title}
                </p>
              </div>
            )
          })
        } */}
        <div className="column relative is-half p-1">
          <StaticImage src="https://cdn.apito.io/media/wpg_freelance_service_nbnju/HYV1XJ6Z1H_trip_mountfuji_image.png" alt="Logo Odigo" />
          <p className="title is-size-1 absolute bottom-left has-text-white is-capitalized">
            tokyo
          </p>
        </div>
        <div className="column relative is-half p-1">
          <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
          <p className="title is-size-1 absolute bottom-left has-text-white is-capitalized">
            tokyo
          </p>
        </div>
        <div className="column relative is-one-third p-1">
          <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
          <p className="title is-size-1 absolute bottom-left has-text-white is-capitalized">
            tokyo
          </p>
        </div>
        <div className="column relative is-one-third p-1">
          <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
          <p className="title is-size-1 absolute bottom-left has-text-white is-capitalized">
            tokyo
          </p>
        </div>
        <div className="column relative is-one-third p-1">
          <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
          <p className="title is-size-1 absolute bottom-left has-text-white is-capitalized">
            tokyo
          </p>
        </div>
      </div>
    </section>
  )
}

export default Trips
