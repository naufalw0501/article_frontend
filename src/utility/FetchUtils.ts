import Cookies from "js-cookie";

class FetchUtils {
    static async fetchAuth(address: string | URL, option?: RequestInit): Promise<{ message: string, status: number, data: any }> {
        const token = Cookies.get('access_token');

        if (option == null) {
            option = { headers: { Authorization: `Bearer ${token}` } };
        } else {
            option.headers = { ...option.headers, Authorization: `Bearer ${token}` };
        }
        option.headers = {...option.headers, "Content-Type": "application/json"}

        const result = await fetch(address, option);
        let data = await result.json();
        data.status = result.status;
        return data;
    }

    static async fetchFile(address: string | URL, option?: RequestInit): Promise<Response> {
        const token = Cookies.get('access_token');

        if (option == null) {
            option = { headers: { Authorization: `Bearer ${token}` } };
        } else {
            option.headers = { ...option.headers, Authorization: `Bearer ${token}` };
        }
        option.headers = {...option.headers, "Content-Type": "application/json"}

        const result = await fetch(address, option);
        return result;
    }

    // thank stack overflow
    static convertModelToFormData(val: any, formData: FormData = new FormData(), namespace: string = '') {
        if ((typeof val !== 'undefined') && val !== null) {
            if (val instanceof Date) {
                formData.append(namespace, val.toISOString());
            } else if (val instanceof Array) {
                for (let i = 0; i < val.length; i++) {
                    this.convertModelToFormData(val[i], formData, namespace + '[' + i + ']');
                }
            } else if (typeof val === 'object' && !(val instanceof File)) {
                for (let propertyName in val) {
                    if (val.hasOwnProperty(propertyName)) {
                        this.convertModelToFormData(val[propertyName], formData, namespace ? `${namespace}[${propertyName}]` : propertyName);
                    }
                }
            } else if (val instanceof File) {
                formData.append(namespace, val);
            } else {
                formData.append(namespace, val.toString());
            }
        }
        return formData;
    }
}

export default FetchUtils