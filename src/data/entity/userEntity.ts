class UserEntity {
    id?: number;
    username?: string;
    role?: string;

    constructor(object: UserEntity) {
        this.id = object.id;
        this.username = object.username;
        this.role = object.role;
    }
}

class AddUserEntity {
    id?: number;
    id_role?: number;
    username?: string;
    role?: string;

    constructor(object: AddUserEntity) {
        this.id = object.id;
        this.id_role = object.id_role;
        this.username = object.username;
        this.role = object.role;
    }
}

class RoleEntity {
    id: number;
    role: string;

    constructor(object: RoleEntity) {
        this.id = object.id
        this.role = object.role
    }
}

export { UserEntity, RoleEntity, AddUserEntity };