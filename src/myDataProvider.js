import { fetchUtils } from "react-admin";
import restServerProvider from 'ra-data-json-server';

export const servicesHost = 'https://apibot.mastervision.su:5000/api/';
export const servicesHostImage = 'https://apibot.mastervision.su:5000';
//http://127.0.0.1:8000/api
// https://api.iomp.ru/public/api

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const token = sessionStorage.getItem('token');
	options.headers.set('Authorization', `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};

const dataProvider = restServerProvider(servicesHost, httpClient);

const myDataProfider = {
	...dataProvider,
	create: (resource, params) => {
		let formData = new FormData();

		for (let key in params.data) {
			if (key === "image" || key === "imageDemo") {
				formData.append(key, params.data[key].rawFile);
			} else if (key === "programm") {
				formData.append(`programm`, JSON.stringify(params.data[key]));
			} else if (key === "images") {
				params.data[key].map((image, index) => {
					formData.append(`image-${index}`, image.rawFile);
				})
			} else {
				if (params.data[key] === null) {
					formData.append(key, "");
				} else {
					formData.append(key, params.data[key]);
				}
			}
		}

		return httpClient(`${servicesHost}/${resource}`, {
			method: 'POST',
			body: formData,
		}).then(({ json }) => {
			if (json.error) {
				sessionStorage.removeItem("token");

				return false;
			}
			return {
				data: { ...params.data, id: json.id }
			};
		});
	},
	update: (resource, params) => {
		let formData = new FormData();

		for (let key in params.data) {
			if (key === "image" || key === "imageDemo") {
				if (params.data[key].rawFile) {
					formData.append(key, params.data[key].rawFile);
				}
			} else if (key === "programm") {
				formData.append(`programm`, JSON.stringify(params.data[key]));
			} else if (key === "images") {
				params.data[key].map((image, index) => {
					if (image.rawFile) {
						formData.append(`image-${index}`, image.rawFile);
					} else {
						var rExp = new RegExp(servicesHostImage, "g");

						formData.append(`images`, image.replace(rExp, ''));
					}
				})
			} else {
				if (params.data[key] === null) {
					formData.append(key, "");
				} else {
					formData.append(key, params.data[key]);
				}
			}
		}

		formData.append("_method", "PUT");

		return httpClient(`${servicesHost}/${resource}/${params.data.id}`, {
			method: 'POST',
			body: formData,
		}).then(({ json }) => ({ data: { ...params.data, id: json.id } }));
	},
	getOne: (resource, params) => {
		return httpClient(`${servicesHost}/${resource}/${params.id}`).then(({ json }) => ({ data: json }));
	}
};

export default myDataProfider;