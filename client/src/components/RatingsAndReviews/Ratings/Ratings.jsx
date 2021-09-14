import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RatingStar from './RatingStar';
import ChartRating from './ChartRating';
import Characteristics from './Characteristics'
import {API_KEY} from '../../../config/config';

const Wrapper = styled.div`
  padding-right: 40px;
`

export default function Ratings({id}) {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`, {headers: {'content-type': 'application/json', 'authorization': API_KEY}})
      .then(res => setMeta(res.data))
      .catch(err => console.log(err));
  }, [id])

  function getRecommended(meta) {
    let t = Number(meta.recommended.true);
    let f = Number(meta.recommended.false);
    return Math.round(((t / (t + f)) * 100));
  }

  if (meta && Object.keys(meta.ratings).length !== 0) {
    return (
      <Wrapper>
        <RatingStar ratings={meta.ratings}/>
        <br></br>
        <div><strong>{getRecommended(meta)}%</strong> of reviews recommend this product</div>
        <br></br>
        <ChartRating ratings={meta.ratings}/>
        <Characteristics characteristics={meta.characteristics}/>
      </Wrapper>
    );
  }
  return <h1>No Ratings Yet</h1>
}