# Aula 46

### Exercicio 1
~~~sql
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

console.log( getActorById("001") )
~~~

**a.**
Ao usarmos o raw a resposta da função vai ser a query e informações do banco. Na função 
acima essa resposta foi tratada para retornar somente a query.

**b.**
~~~sql
const findActorByName = async(name:string)=>{
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${name}" 
    `)
    return result[0]
}
~~~

**c.**
~~~sql
const countByGender = async(gender:string)=>{
    const result = await connection.raw(`
       SELECT COUNT(*) FROM Actor
       WHERE gender = "${gender}"

    -- SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"

    `)
    return result[0]

    -- const count = result[0][0].count;
    -- return count;
}
~~~

********************************************************************************************