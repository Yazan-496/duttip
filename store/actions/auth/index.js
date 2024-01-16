import API from "helpers/API";
import store from "store";

export const startAuthLoading = () => ({
  type: "AUTH_START_LOADING",
});

export const stopAuthLoading = () => ({
  type: "AUTH_STOP_LOADING",
});
export const addImageSrc = (data) => ({
  type: "Add_Image_Src",
  payload: data,
});

export const _login = async (data, callBack, callBackErr) => {
  await API.request(
    "post",
    "auth/login",
    {
      email: data.email,
      password: data.password,
    },
    callBack,
    callBackErr
  );
};

export const _getCountries = async (callBack, callBackErr) => {
  await API.request(
    "get",
    "countries/get_countries",
    null,
    callBack,
    callBackErr
  );
};

export const _getCities = async (id, callBack, callBackErr) => {
  store.dispatch({ type: "AUTH_START_LOADING" });
  await API.request(
    "get",
    `countries/cities_of_country/${id}`,
    null,
    callBack,
    callBackErr
  );
  store.dispatch({ type: "AUTH_STOP_LOADING" });
};

export const _register = async (data, callBack, callBackErr) => {
  store.dispatch({ type: "AUTH_START_LOADING" });
  console.log(data, "data");
  await API.request(
    "post",
    "auth/signup",
    {
      name: data?.basicData?.fullName,
      country: data?.country,
      mobile_phone: data?.basicData?.phone,
      email: data?.basicData?.email,
      password: data?.basicData?.password,
      came_from: 0,
      member_type: 1, // supplier: 1, shipper: 4, buyer: 2
      currency: data?.currency,
      interested_keywords: null,
      company: data?.company,
      suggests: null,
      city: data?.city,
      shiptags: null,
    },
    callBack,
    callBackErr
  );
  store.dispatch({ type: "AUTH_STOP_LOADING" });
};
export const _getRolesAsync = async () => {
  const roles = await API.request("get", "auth/roles");
  // // console.log(roles)
  const result = roles.map((role) => {
    return {
      label: role.name,
      value: role.id,
    };
  });
  // // console.log(result, "result")
  return result;
};

export const _editUser = async (data, callBack, callBackErr) => {
  await API.request(
    "post",
    "auth/user/edit",
    {
      ...data,
      role_id: data.role.value,
      photo: data.photo,
    },
    callBack,
    callBackErr
  );
};
export const _deleteUser = async (id, callBack, callBackErr) => {
  await API.request(
    "get",
    `auth/user/delete/${id}`,
    null,
    callBack,
    callBackErr
  );
};
export const _deleteUsers = async (ids, callBack, callBackErr) => {
  await API.request(
    "post",
    `auth/user/delete/users`,
    {
      ids,
    },
    callBack,
    callBackErr
  );
};
