import instance from './axios';

export const getRandomRecipesInfo = async () => {
  try {
    const res1 = await instance.get('/complexSearch', {
      params: {sort: 'random', number: 2},
    });

    // results array
    let dataRes1 = res1.data.results;

    // array of required IDs
    let ids = await dataRes1.map(item => {
      return item.id;
    });

    //get bulkInfo based on the required IDs
    const res2 = await instance.get('/informationBulk', {
      params: {
        ids: `${ids[0]},${ids[1]}`,
      },
    });
    return res2.data;
  } catch (err) {
    return err;
  }
};

export const searchResults = async searchTerm => {
  try {
    if (searchTerm === '') return [];
    else {
      const res = await instance.get('/complexSearch', {
        params: {query: searchTerm, number: 5},
      });
      return res.data;
    }
  } catch (err) {
    return err;
  }
};
