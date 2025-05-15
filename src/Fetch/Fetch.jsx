import axios from "axios";

export default async function fetch(searchWord, page) {
  const BASE_URL = `https://api.unsplash.com/search/photos`;

  const params = {
    client_id: "leMZfVPw1bVseujyEJB9Q7A76MtuvrSA1OXX8KmGjvs",
    per_page: 20,
    query: searchWord,
    page,
  };

  const headers = {
    "Accept-Version": "v1",
  };

  const data = await axios.get(BASE_URL, { params, headers });
  return data.data;
}

