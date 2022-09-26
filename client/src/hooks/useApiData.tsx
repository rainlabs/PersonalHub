import React, { FC, useEffect, useState } from 'react';
import { fetchAPI } from '../lib/api';

export const useApiData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getArticles = async () => {
          const apiData = await fetchAPI("/articles", { populate: "*" })
          console.log('fetch api articles')
          setData(apiData.data);
        };

        getArticles();
    }, []);

    return data
}