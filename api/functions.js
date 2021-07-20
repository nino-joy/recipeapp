import instance from './axios';

const randomRecipe = async () => {
  try {
    const res = await instance.get('/random');
    return res.data;
  } catch (err) {
    return err;
  }
};

export default randomRecipe;
