import FetchUtils from "../../utility/FetchUtils";
import { BASE_URL } from "../../Constant";
import { AddUserEntity, RoleEntity, UserEntity } from "../entity/userEntity";

class UserService {
    static async getUser(from_row?: number, limit?: number): Promise<{ message: string, status: number, data: UserEntity[] }> {
        let query = `${BASE_URL}/api/v1/users`
        if (from_row != null && limit != null) {
            query += `?from_row=${from_row}&limit=${limit}`
        }
        const resp = await FetchUtils.fetchAuth(query)

        if (resp.status != 200) { throw new Error(resp.message) }

        const data: UserEntity[] = []
        for (let i = 0; i < resp.data.length; i++) {
            data.push(new UserEntity({
                id: resp.data[i].id,
                role: resp.data[i].role,
                username: resp.data[i].username,
            }))
        }
        return { ...resp, data };
    }

    static async getRoles(from_row?: number, limit?: number): Promise<{ message: string, status: number, data: RoleEntity[] }> {
        let query = `${BASE_URL}/api/v1/roles`
        if (from_row != null && limit != null) {
            query += `?from_row=${from_row}&limit=${limit}`
        }
        const resp = await FetchUtils.fetchAuth(query)

        if (resp.status != 200) { throw new Error(resp.message) }

        const data: RoleEntity[] = []
        for (let i = 0; i < resp.data.length; i++) {
            data.push(new RoleEntity({
                id: resp.data[i].id,
                role: resp.data[i].role,
            }))
        }
        return { ...resp, data };
    }

    static async createUser(data: AddUserEntity) {
        const resp = await FetchUtils.fetchAuth(
            `${BASE_URL}/api/v1/users/add`,
            {
                method: 'POST',
                body: JSON.stringify({
                    id_role: data.id_role,
                    username: data.username,
                })
            }
        )
        if (resp.status != 200) { throw new Error(resp.message) }
        return resp;
    }

    static async updateUser(data: UserEntity, update: AddUserEntity) {
        const resp = await FetchUtils.fetchAuth(
            `${BASE_URL}/api/v1/users/update`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    id: data.id,
                    fields: { ...update }
                })
            }
        )
        if (resp.status != 200) { throw new Error(resp.message) }
        return resp;
    }

    static async deleteUser(data: UserEntity) {
        const resp = await FetchUtils.fetchAuth(
            `${BASE_URL}/api/v1/users/delete`,
            {
                method: 'DELETE',
                body: JSON.stringify({
                    id: data.id
                })
            }
        )
        if (resp.status != 200) { throw new Error(resp.message) }
        return resp;

    }
}
export { UserService }