import { User } from "@/types/User";
import { useEffect, useState } from "react";

import { api } from "@/utils/api";

export const Users = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    async function getUsers() {

        try {

            const response = await api.get('/users');

            setUsers(response.data);

        } catch (e) {
            console.log("Ocorreu algum erro!");
        }

        /* try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();

            setUsers(json);
        } catch (e) {
            console.log("Ocorreu algum erro!");
        } */

        setLoading(false);
    }

    useEffect(() => {
        getUsers();
        
        /* fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json);
            })
            .catch(() => {
                console.log("Ocorreu algum erro!")
            })
            .finally(() => {
                setLoading(false);
            }); */

    }, []);

    return(
        <div>
            <h1 className="text-xl text-center mb-2">Usuários</h1>
            {loading ? (
                "Carregando..."
            ) : (
                users.length > 0 ? (
                    <ul className="text-center">
                        {users.map(user => (
                            <li key={user.id}>
                                {user.name} - ({user.address.city})
                            </li>    
                        ))}
                    </ul>
                ) : (
                    "Não há usuários para exibir."
                )
            )}
        </div>
    );
}