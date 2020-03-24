import axios from 'axios'


export const fetchShow = () => {
     return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=archer&embed=episodes"
      )
      .then(res => {
        return res
      });
  };