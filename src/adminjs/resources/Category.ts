import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions ={
    navigation: 'Catalago',
    editProperties: ['name', 'position'],
    filterProperties:['name', 'position', 'createdAt, updateAt'],
    listProperties: ['id', 'name', 'position'],
    showProperties: ['id','name', 'position', 'createdAt, updateAt' ]
}

//propriedades